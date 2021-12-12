import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 490px;
  margin: 0 auto;
  border-radius: 8px;
  background: #fff;
  color: #333;
  margin-top: 3em;
  padding: 25px;
  font-family: "Inter";
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  h1 {
    font-family: "Inter";
    font-size: 1.625rem;
    margin-bottom: 5px;
  }

  span {
    color: #888;
    font-size: 1rem;
    display: block;
    margin-bottom: 15px;
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

export const RoomsList = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Inter";

  li {
    border: 1px solid #999;
    border-radius: 8px;
    margin-bottom: 8px;
    padding: 8px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      border: 1px solid #333;
      color: #000;
    }

    h3 {
      font-size: 1.25rem;
      color: #333;
      letter-spacing: 0.03rem;
      margin-top: 0;
      margin-bottom: 8px;
    }

    p {
      font-size: 1.125rem;
      color: #555;
      line-height: 1.5;
      letter-spacing: 0.03rem;
      margin: 0;
    }
  }
`;
