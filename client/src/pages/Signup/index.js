import { Link } from "react-router-dom";

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
  return (
    <FormContainer>
      <Form>
        <FormItems>
          <FormTitle>Create an Account</FormTitle>
          {signup.map(({ id, type, name, title }) => (
            <>
              <FormLabel key={id} title={title} />
              <FormInput key={id} type={type} />
            </>
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
