import styled from "styled-components";

export const Navbar = styled.nav`
  margin-top: 50px;
  background: #fff;
  padding: 20px 15px;
  border-radius: 8px;
  display: flex;
  font-family: "Inter", sans-serif;
  margin-bottom: 2em;

  justify-content: space-between;

  .time {
    font-weight: 700;
    svg {
      font-size: 19px;
      position: relative;
      bottom: -3px;
    }
  }

  align-items: center;
  ul {
    display: inline-block;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
    }

    li:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

export const NavLink = styled.li`
  display: inline-block;

  a {
    text-decoration: none;
    color: #333;
    padding: 5px;
    border-radius: 8px;
    background: ${(props) => (props.isActive ? "#ddd" : "#fff")};
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`;
