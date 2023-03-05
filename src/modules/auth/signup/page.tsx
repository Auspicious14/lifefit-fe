import { Form, Formik, FormikProps } from "formik";
import React from "react";
import * as Yup from "yup";
import { ApTextInput } from "../../../components";

const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Name is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  atp: Yup.string().required("ATP is required"),
});

export const SignUpPage = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          atp: "",
          username: "",
        }}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<any>) => (
          <Form className=" Form card px-4 ">
            <ApTextInput
              className="w-full p-4 mb-2 bg-stone-50 border-none"
              label="First Name"
              name="firstName"
              type="text"
              placeHolder="First Name"
            />
            <ApTextInput
              className="w-full p-4 mb-2 bg-stone-50 border-none"
              label="Last Name"
              name="lastName"
              type="text"
              placeHolder="Last Name"
            />
            <ApTextInput
              className="w-full p-4 mb-2 bg-stone-50 border-none"
              label="Username"
              name="username"
              type="text"
              placeHolder="Username"
            />
            <button
              type="submit"
              className="text-center w-full font-semibold bg-cyan-600 border rounded-md text-base p-2 py-3 text-white  my-2 "
            >
              sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
