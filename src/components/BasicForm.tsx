import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { sendMessage } from "../websocket/websocket";

interface FormValues {
  name: string;
  surname: string;
  income: number | "";
  outcome: number | "";
}

// Styled Components
const FormWrapper = styled.div`
  padding: 2rem;
  background: white;
  max-width: 400px;
  margin: 2rem auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FieldWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-weight: bold;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.2rem;
`;

const SubmitButton = styled.button`
  background: #0077ff;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  income: Yup.number()
    .typeError("Income must be a number")
    .required("Income is required"),
  outcome: Yup.number()
    .typeError("Outcome must be a number")
    .required("Outcome is required"),
});

export const BasicForm: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    surname: "",
    income: "",
    outcome: "",
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          sendMessage(JSON.stringify(values));
          actions.resetForm();
        }}
      >
        {() => (
          <Form>
            <FieldWrapper>
              <StyledLabel htmlFor="name" data-testid="field-name">
                Name
              </StyledLabel>
              <StyledField id="name" name="name" placeholder="Enter name" />
              <ErrorMessage name="name" component={ErrorText} />
            </FieldWrapper>

            <FieldWrapper>
              <StyledLabel htmlFor="surname">Surname</StyledLabel>
              <StyledField
                id="surname"
                name="surname"
                placeholder="Enter surname"
                data-testid="field-surname"
              />
              <ErrorMessage name="surname" component={ErrorText} />
            </FieldWrapper>

            <FieldWrapper>
              <StyledLabel htmlFor="income">Income</StyledLabel>
              <StyledField
                id="income"
                name="income"
                type="number"
                placeholder="Enter income"
                data-testid="field-income"
              />
              <ErrorMessage name="income" component={ErrorText} />
            </FieldWrapper>

            <FieldWrapper>
              <StyledLabel htmlFor="outcome">Outcome</StyledLabel>
              <StyledField
                id="outcome"
                name="outcome"
                type="number"
                placeholder="Enter outcome"
                data-testid="field-outcome"
              />
              <ErrorMessage name="outcome" component={ErrorText} />
            </FieldWrapper>

            <SubmitButton type="submit" data-testid="submit-button">
              Send
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
