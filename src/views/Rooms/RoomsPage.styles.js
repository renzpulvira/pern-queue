import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  border-radius: 8px;
  background: #fff;
  color: #333;
  margin-top: 3em;
  padding: 25px;

  h1 {
    font-family: "Inter";
    font-size: 1.625rem;
  }
`;

export const ChatItem = styled.div`
  border: 1px solid #888;
  border-radius: 8px;
  padding: 15px;

  h3 {
    font-family: "Inter";
    font-size: 1.5rem;
    letter-spacing: 0.03rem;
    font-weight: 700;
  }

  p {
    line-height: 1.5;
    font-family: "Inter";
  }
`;
