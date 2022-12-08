import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import TextField from "../../InputField/TextField";

function SignUp() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("vui lòng nhập tên của bạn")
          .min(8, "vui lòng  nhập ít nhất 8 kí tự"),
        email: Yup.string()
          .required("vui lòng nhập email")
          // eslint-disable-next-line no-useless-escape
          .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "email không chính xác"),
        password: Yup.string()
          .required("vui lòng nhập mật khẩu")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            "nhập it nhất 7 kí tự và 1 chữ viết hoa "
          ),
        confirmPassword: Yup.string()
          .required("vui lòng nhập lại mật khẩu")
          .oneOf(
            [Yup.ref("password"), null],
            "mật khẩu nhập lại không trùng khớp"
          ),
      })}
      onSubmit={() => {
        navigate("/");
      }}
    >
      {(formik) => (
        <div className="bg-black ">
          <div className=" text-white flex justify-center items-center px-4 w-[341] h-[170px] md:px-0">
            <div className="w-[1224px] h-[240px] flex items-center md:mt-[100px] ">
              <h1 className="font-extrabold md:text-[56px] text-[36px] w-[230px] md:w-full">
                SIGN UP FOR A WORKOUT{" "}
              </h1>
            </div>
          </div>
          <div className="bg-black mt-[50px]">
            <div className="flex items-center justify-center px-4">
              <div className="md:w-[1224px] md:h-[752px] text-black flex items-center h-[565px] w-full md:mt-[80px]">
                <Form className="w-full">
                  <TextField
                    name="name"
                    lable="Use name*"
                    placeholder="Your name"
                    type="text"
                  />

                  <TextField
                    name="email"
                    lable="Email*"
                    placeholder="Your email address"
                    type="text"
                  />

                  <TextField
                    name="password"
                    lable="Password*"
                    placeholder="Your password"
                    type="password"
                  />

                  <TextField
                    name="confirmPassword"
                    lable="Confirm password*"
                    placeholder="Your confirm Password"
                    type="password"
                  />
                  <button type="submit" className="btn mt-5">
                    SUBMIT
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default SignUp;
