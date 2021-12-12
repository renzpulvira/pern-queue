import React, { useEffect } from "react";
import WebFont from "webfontloader";

// SC
import { Wrapper } from "./RoomsPage.styles";
import { RoomsList } from "./RoomsPage.styles";
import * as GS from "../../Global.styles";

const dummyData = [
  {
    name: "Anime Music Lovers",
    descrip: "This is only for Anime music lovers.",
  },
  { name: "ASMR Keyboard Sounds", descrip: "Enjoy ASMR Videos sounds" },
];

const RoomsItem = ({ id, name, descrip }) => {
  return (
    <li id={id}>
      <h3>{name}</h3>
      <p>{descrip}</p>
    </li>
  );
};

function RoomsPage() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "Roboto"],
      },
    });
  }, []);

  return (
    <Wrapper>
      <h1>Rooms</h1>
      <span>Click to Join.</span>
      <RoomsList>
        {dummyData.map((item, index) => (
          <RoomsItem
            key={item.name}
            name={item.name}
            descrip={item.descrip}
            id={index}
          />
        ))}
      </RoomsList>
      <GS.Button>+ Create New Room</GS.Button>
    </Wrapper>
  );
}

export default RoomsPage;
