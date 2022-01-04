// Styled Components
import * as Queue from "./Queues.styles";

// React Icons
import { BsMusicNoteBeamed, BsTrash } from "react-icons/bs";

const data = [
  {
    id: 0,
    video_id: "jdX81402",
    channel_id: "ajw48aj",
    title: "Thockiest Keyboard Under 80 usd",
    queued_by: "apocalypso098",
    room_id: "ajoi891092fjaw",
  },
  {
    id: 1,
    video_id: "jdX81402",
    channel_id: "ajw48aj",
    title: "NEW kind of Terminal Emulator on Linux, MacOS, Windows",
    queued_by: "Aj123",
    room_id: "ajoi891092fjaw",
  },
  {
    id: 2,
    video_id: "jdX81402",
    channel_id: "ajw48aj",
    title: "This is why we suffer in silence",
    queued_by: "UnknownUser",
    room_id: "ajoi891092fjaw",
  },
  {
    id: 3,
    video_id: "jdX81402",
    channel_id: "ajw48aj",
    title: "Gamers Caught Cheating",
    queued_by: "JaniceCute",
    room_id: "ajoi891092fjaw",
  },
  {
    id: 4,
    video_id: "jdX81402",
    channel_id: "ajw48aj",
    title: "Fresh & Fit tried to DELETE our channel....",
    queued_by: "1111user",
    room_id: "ajoi891092fjaw",
  },
];

const QueueItem = ({ id, video_id, channel_id, title, queued_by, room_id }) => {
  return (
    <Queue.Item isPlaying={id == 0 ? true : false}>
      {id === 0 ? (
        <div className="id">
          <BsMusicNoteBeamed style={{ fontSize: "1.125rem" }} />
        </div>
      ) : (
        <div className="id">{id > 10 ? id + 1 : "0" + (id + 1)}</div>
      )}
      <div className="title">{title}</div>
      <div className="queuedby">{queued_by}</div>
      <div className="controls">
        <button>
          <BsTrash />
        </button>
        <button>Next Up</button>
      </div>
    </Queue.Item>
  );
};

const QueueList = ({ queues }) => {
  console.log(queues);
  return (
    <Queue.List>
      <Queue.Item header>
        {/* Header */}
        <div className="id">#</div>
        <div className="title">TITLE</div>
        <div className="queuedby">QUEUED BY</div>
        <div className="controls" style={{ textAlign: "right" }}>
          CONTROLS
        </div>
      </Queue.Item>
      {queues &&
        queues.map((info, index) => (
          <QueueItem key={info.uuid} id={index} {...info} />
        ))}
    </Queue.List>
  );
};

export default QueueList;
