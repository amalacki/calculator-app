import { Textfit } from "react-textfit";
import "./Screen";

const Screen = ({value}) => {
  return (
    <div className="screen">
      <Textfit mode="single" max={36}>
        {value}
      </Textfit>
    </div>
  );
}

export default Screen;