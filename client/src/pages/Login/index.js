import { Link } from "react-router-dom";

import {
  FormContainer,
  Form,
  FormItems,
  FormTitle,
  FormBtn,
} from "./LoginElements";

import FormInput from "../../components/FormInput";
import FormLabel from "../../components/FormLabel";
import { login } from "../../utils/data";

export default function Login() {
  return (
    <FormContainer>
      <Form>
        <FormItems>
          <FormTitle>Log In</FormTitle>
          {login.map(({ id, type, name, title }) => (
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
            New user? <Link to="/signup">Create an account</Link>
          </div>
        </FormItems>
      </Form>
    </FormContainer>
  );
}
