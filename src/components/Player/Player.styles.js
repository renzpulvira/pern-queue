import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ddd;
  margin-top: 3em;
  grid-column-gap: 30px;
`;

export const Thumb = styled.div`
  flex: 0 20%;
  position: relative;
  height: 100px;
  display: grid;
  place-items: center;

  .box {
    height: 80px;
    width: 90%;
    border-radius: 5px;
    box-shadow: 0px 2px 3px #333;
  }
`;

export const Range = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  background: #333;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #999;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #fff;
    border: 1px solid #999;
    cursor: pointer;
  }
`;

export const Controls = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex: 0 60%;
  flex-direction: column;
  align-items: center;

  .buttons {
    display: flex;
    flex: 0 10%;
    margin-bottom: 10px;

    svg {
      font-size: 25px;
      cursor: pointer;
    }

    svg:not(:last-child) {
      margin-right: 8px;
    }
  }

  .timelapse {
    flex: auto;
    position: relative;
    width: 100%;
    max-width: 100%;
  }

  /* &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-radius: 15px;
    }

    span {
      position: absolute;
      height: 12px;
      width: 12px;
      background: #888;
      border-radius: 50%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    } */
`;

export const Volume = styled.div`
  display: flex;
  flex: 0 20%;
  padding-right: 15px;
  align-items: center;

  svg {
    font-size: 25px;
    margin-right: 8px;
  }

  .range {
    position: relative;
    width: 100%;
    max-width: 100%;
  }
`;
