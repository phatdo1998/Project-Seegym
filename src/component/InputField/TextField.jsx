import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ lable, ...props }) => {
  const [field] = useField(props);

  return (
    <div className="flex flex-col w-full text-white">
      <label className="font-sans" htmlFor={field.name}>
        {lable}
      </label>
      <input
        key="name"
        className="w-full md:w-[503px]  py-[12px] pl-4 pr-14 text-black"
        {...field}
        {...props}
      />
      <div className="text-red-500 h-[25px] my-2">
        <ErrorMessage name={field.name} className="text-white" />
      </div>
    </div>
  );
};

export default TextField;
