import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("vui lòng nhập name")
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
    }),
    onSubmit: (values) => {
      navigate("/");
    },
  });

  return (
    <div className="bg-black">
      <div className=" text-white flex justify-center items-center px-4 w-[341] h-[170px] xl:px-0">
        <div className="w-[1224px] h-[240px] flex items-center 2xl:mt-[100px] ">
          <h1 className="font-extrabold xl:text-[56px] text-[36px] w-[230px] xl:w-full">
            SIGN UP FOR A WORKOUT{" "}
          </h1>
        </div>
      </div>
      <div className="bg-black">
        <div className="flex items-center justify-center px-4">
          <div className="xl:w-[1224px] xl:h-[752px] text-white flex items-center h-[565px] w-full xl:mt-[80px]">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col text-black flex-1"
            >
              {/* <pre>{JSON.stringify(formik.errors)}</pre> */}
              <label className="text-white">Name*</label>
              <input
                placeholder="Your name"
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="xl:py-3 xl:pl-3 py-[12px] pl-2 pr-14 xl:w-[503px]  bg-[rgba(245,248,251,.6);] text-black text-base font-sans "
              />

              <p className="text-red-600 min-h-[24px]">{formik.errors.name}</p>

              <label className="text-white mt-4">Password*</label>
              <input
                type="text"
                placeholder="Your last name"
                name="password"
                id="password"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                className="xl:py-3 xl:pl-3 py-[12px] pl-2 pr-14 xl:w-[503px] bg-[rgba(245,248,251,.6);] text-base font-sans "
              />
              <p className="text-red-600 min-h-[24px]">
                {formik.errors.password}
              </p>

              <label className="text-white mt-4">Confirm password*</label>
              <input
                type="text"
                placeholder="Enter your message"
                name="confirmPassword"
                id="confirmPassword"
                value={formik.values.massage}
                onChange={formik.handleChange}
                className="xl:py-3 xl:pl-3 py-[12px] pl-2 pr-14 xl:w-[503px] bg-[rgba(245,248,251,.6);] text-base font-sans"
              />
              <p className="text-red-600 min-h-[24px]">
                {formik.errors.confirmPassword}
              </p>

              <label className=" text-white mt-4">Email address *</label>
              <input
                type="email"
                placeholder="Your email address"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="xl:py-3 xl:pl-3 py-[12px] pl-2 pr-14 xl:w-[503px] bg-[rgba(245,248,251,.6);] text-base font-sans"
              />

              <p className="text-red-600 min-h-[24px]">{formik.errors.email}</p>

              <button
                type="submit"
                className="bg-[#FF1010] px-[50px] py-[15px] w-[150px] hover:bg-slate-800 transition-all duration-500 mt-7"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
