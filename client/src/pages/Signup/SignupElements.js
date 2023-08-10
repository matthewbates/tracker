import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  background: #f1f2f2;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  font-family: "Raleway";
  width: 90%;
  max-width: 500px;
  background: white;
`;

export const FormItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 2px;
`;

export const FormTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
`;

export const FormBtn = styled.button`
  padding: 1em;
  width: 50%;
  margin: auto;
  cursor: pointer;
  font-size: 1em;
  background: transparent;
`;
