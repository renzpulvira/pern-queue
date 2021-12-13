import styled from "styled-components";
import { Wrapper as GcWrapper, Button as GcButton } from "../../Global.styles";

export const Wrapper = styled(GcWrapper)`
  background: #ddd;
`;

export const Input = styled.form`
  display: flex;
  color: red;
  background: #fff;
  padding: 20px;

  input {
    flex: 0 90%;
    margin-right: 8px;
    border-radius: 5px;
    border: 1px solid #978f8f;
    outline: 0;
    padding: 8px;
    font-size: 18px;
  }
`;

export const Button = styled(GcButton)`
  flex: 0 10%;
  display: flex;
  grid-column-gap: 8px;
  padding: 8px;
`;
