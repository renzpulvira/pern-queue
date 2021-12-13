import { Wrapper, Controls, Thumb, Volume, Range } from "./Player.styles";
import {
  BsFillPauseCircleFill,
  BsFillPlayCircleFill,
  BsFillSkipEndFill,
  BsFillVolumeUpFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

const Player = () => {
  return (
    <Wrapper>
      <Thumb>
        <div className="box"></div>
      </Thumb>
      <Controls>
        <div className="buttons">
          <BsFillPauseCircleFill />
          <BsFillSkipEndFill />
        </div>
        <div className="timelapse">
          {/* <span></span> */}
          <Range type="range" min="1" max="100" />
        </div>
      </Controls>
      <Volume>
        <BsFillVolumeUpFill />
        {/* <span></span> */}
        <Range type="range" min="1" max="100" />
      </Volume>
    </Wrapper>
  );
};

export default Player;
