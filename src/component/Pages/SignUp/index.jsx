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
          .required("Please enter your username")
          .min(8, "Please enter at least 8 characters"),
        email: Yup.string()
          .required("Please enter your email address")
          // eslint-disable-next-line no-useless-escape
          .matches(
            /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Email address is not valid"
          ),
        password: Yup.string()
          .required("Please enter your password")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            "Please enter at least 7 characters and 1 uppercase "
          ),
        confirmPassword: Yup.string()
          .required("Please re-enter your password")
          .oneOf(
            [Yup.ref("password"), null],
            "Re-entered password does not match"
          ),
      })}
      onSubmit={() => {
        navigate("/");
      }}
    >
      {(formik) => (
        <div className="bg-black ">
          <div className="xl:flex xl:justify-center xl:items-center md:flex md:justify-center md:items-center">
            <div className="h-[125px] md:w-[420px] w-[341px] text-white flex px-4 xl:px-0 md:px-0  xl:w-[1224px] xl:h-[240px] mt-[53px] mb-[35px] md:mt-[90px] ">
              <div className="flex items-center xl:justify-center md:px-4 ">
                <h1 className="text-[36px] font-extrabold xl:text-5xl ">
                  SIGN UP FOR A WORKOUT
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-black mt-[50px] xl:mt-0">
            <div className="flex items-center justify-center px-4 md:flex md:justify-center md:items-center">
              <div className="md:px-4 xl:w-[1224px] md:w-[420px] xl:h-[660px] text-black flex items-center h-[565px] w-full">
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
