import { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import {
  FormContainer,
  Form,
  FormItems,
  FormTitle,
  FormBtn,
} from "./SignupElements";

import FormInput from "../../components/FormInput";
import FormLabel from "../../components/FormLabel";
import { signup } from "../../utils/data";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post();
      if (response) {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormItems>
          <FormTitle>Create an Account</FormTitle>
          {signup.map(({ id, type, name, title }) => (
            <Fragment key={id}>
              <FormLabel title={title} />
              <FormInput type={type} />
            </Fragment>
          ))}
          <FormBtn>Create Account</FormBtn>
          <div
            style={{
              margin: "auto",
              marginTop: "2em",
            }}
          >
            Already have an account? <Link to="/account">Log in</Link>
          </div>
        </FormItems>
      </Form>
    </FormContainer>
  );
}
