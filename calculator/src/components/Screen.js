import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({value}) => {
  return (
    <div className="screen">
      <Textfit mode="single" max={36}>
        {value}
      </Textfit>
    </div>
  );
}