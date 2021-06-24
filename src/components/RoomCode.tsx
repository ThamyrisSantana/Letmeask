import copyImg from "../assets/images/copy.svg";

import "../styles/roomCode.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipborad() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipborad}>
      <div>
        <img src={copyImg} alt="Copy Room Code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
