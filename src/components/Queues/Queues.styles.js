import styled from "styled-components";

export const List = styled.ul`
  padding: 0 0 1em 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  position: relative;
  padding: 20px 0;
  background: ${(props) => (props.isPlaying == true ? "#f5f5f5" : "#fff")};
  align-items: center;
  font-size: 14px;
  letter-spacing: 0.03em;
  line-height: 1.5;
  font-weight: ${(props) => (props.header ? "900" : "500")};
  color: #555;

  &:before {
    opacity: ${(props) => (props.isPlaying == true ? 1 : 0)};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background: red;
  }

  &.playing:before {
    opacity: 0;
  }

  .id {
    flex: 0 10%;
    text-align: center;
  }

  .title {
    flex: 0 45%;
    color: #333 !important;
    font-weight: 700;
  }

  .queuedby {
    flex: 0 20%;
    font-style: italic;
  }

  .controls {
    flex: auto;
    text-align: right;
    padding-right: 40px;
  }

  .controls button {
    border: 0;
    background: 0;
    text-transform: uppercase;
    font-family: "Inter";
    color: #555;
    cursor: pointer;

    &:not(:last-child) {
      font-size: 18px;
      position: relative;
      bottom: -4px;
    }

    &:hover {
      color: #222;
    }
  }
`;
