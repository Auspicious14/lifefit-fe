import { Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { ApTextInput } from "../../components";
import { ApSelectInput } from "../../components/input/SelectInput";
import { usePlaceState } from "./context";
import { ICategory, ICondition, IFilter } from "./model";

const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Name is required"),
  email: Yup.string().required("email is required").email(),
  password: Yup.string().required("password is required").min(6),
});

export const PlacePage = () => {
  const { handleGetPlaces } = usePlaceState();
  const [category, setCategory] = useState<any>();
  const [conditions, setConditions] = useState<{
    label: string;
    value: string;
  }>({ value: "", label: "" });
  const [filter, setFilter] = useState<{ label: string; value: string }>({
    value: "",
    label: "",
  });

  const handleSubmit = (values: any) => {
    handleGetPlaces(values.category, values.filter, values.conditions);
  };
  return (
    <div>
      <Formik
        initialValues={{
          category: "",
          filter: "",
          conditions: "",
        }}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<any>) => (
          <Form className=" Form card px-4 ">
            <ApSelectInput
              label="category"
              options={ICategory.map((cat, i) => ({
                label: cat.label,
                value: cat.name,
              }))}
              name={"category"}
            />
            <ApSelectInput
              label="filter"
              options={IFilter.map((f, i) => ({
                label: f.label,
                value: f.name,
              }))}
              name={"category"}
            />
            <ApSelectInput
              label="condition"
              options={ICondition.map((con, i) => ({
                label: con.label,
                value: con.name,
              }))}
              name={"category"}
            />

            <button type="submit" className="bg-sky-400 text-white rounded-md">
              Get Place
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
