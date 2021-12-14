import { useState } from "react";
import { Wrapper, Controls, Thumb, Volume, Range } from "./Player.styles";
import {
  BsFillPauseCircleFill,
  BsFillPlayCircleFill,
  BsFillSkipEndFill,
  BsFillVolumeUpFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

const Player = () => {
  const [isPaused, setIsPaused] = useState(true);

  const handlePlayingState = () => {
    setIsPaused((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Thumb>
        <div className="box"></div>
      </Thumb>
      <Controls>
        <div className="buttons">
          {isPaused ? (
            <BsFillPlayCircleFill onClick={handlePlayingState} />
          ) : (
            <BsFillPauseCircleFill onClick={handlePlayingState} />
          )}
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
