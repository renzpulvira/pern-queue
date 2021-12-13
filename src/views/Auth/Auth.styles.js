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
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5em;
  }

  label {
    display: grid;
    margin-bottom: 2em;

    &:not(:last-child) {
      margin-bottom: 2em;
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

    ul {
      padding: 0;
      margin: 5px 0 0 0;
      list-style: none;
      color: #777;
    }
  }
`;
