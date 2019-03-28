import React from "react";
import { FieldProps } from "formik";
import { Input, FormFeedback } from "reactstrap";

export const InputField = ({
  field,
  form: { errors, touched },
  ...props
}: FieldProps) => {
  const errorsMessage = touched[field.name] && errors[field.name];
  return (
    <>
      <Input {...field} {...props} invalid={!!errorsMessage} />
      {errorsMessage && <FormFeedback>{errorsMessage}</FormFeedback>}
    </>
  );
};
