import styled from "styled-components";
import { ButtonStyles } from "../../Global.styles";

export const Results = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  padding: 20px;
`;

export const Item = styled.li`
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  grid-column-gap: 15px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  .thumb {
    flex: 0 200px;
    height: 120px;
    border: 1px solid #ddd;
  }

  .info {
    flex: auto;
    position: relative;

    h3 {
      margin: 0 0 8px 0;
    }

    p {
      margin: 0 0 15px 0;
    }

    &__button-group {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
`;

export const InfoButton = styled.a`
  ${ButtonStyles}
  margin-right: 8px;
  text-align: center;
  text-decoration: none;

  &:not(:first-child) {
    background: #0a8f42;
    flex: 0 50%;
  }
`;
