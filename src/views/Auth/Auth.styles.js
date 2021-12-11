import styled from "styled-components";

export const AuthForm = styled.form`
  position: absolute;
  left: 50%;
  top: 30%;
  width: 100%;
  max-width: 350px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 8px;
  padding: 1.5em 25px;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }

  label {
    display: grid;
    margin-bottom: 15px;

    &[for="role"] {
      padding-top: 15px;
    }

    h6 {
      display: block;
      margin-bottom: 8px;
      font-size: 1.25rem;
      font-weight: 700;
    }

    input {
      display: block;
      border-radius: 8px;
      padding: 8px 5px;
      border: 1px solid #888;
      font-size: 1.125rem;

      &::focus {
        border: 1px solid #444;
      }
    }

    select {
      padding: 8px 5px;
      border-radius: 8px;
      font-size: 1.125rem;
    }
  }

  input[type="submit"] {
    width: 100%;
    padding: 8px;
    font-weight: 700;
    font-family: "Arial";
    font-size: 1.125rem;
    background: #0eaf52;
    border-radius: 8px;
    border: 1px solid #888;
    color: #fff;

    margin-top: 2em;
    cursor: pointer;
  }
`;
