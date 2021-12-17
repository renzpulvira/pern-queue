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
    /* flex: 0 200px; */
    min-width: 290px;
    height: auto;
    border: 1px solid #ddd;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .info {
    flex: auto;
    position: relative;

    h3 {
      margin: 0 0 8px 0;
    }

    p {
      margin: 0 0 15px 0;

      min-height: 6.25rem;
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
  padding: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:first-child) {
    background: #0a8f42;
    flex: 0 50%;
  }
`;
