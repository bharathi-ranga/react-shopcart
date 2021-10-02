import { useState } from "react";
import { FaStar } from "react-icons/fa";
const Stars = () => {
  let starsA = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  // const [hoverValue, setHoverValue] = useState(undefined);

  const clickHandler = (val) => {
    setCurrentValue(val);
  };
  return (
    <div>
      {starsA.map((s, index) => {
        return (
          <FaStar
            key={index}
            onClick={() => clickHandler(index + 1)}
            color={currentValue > index ? "orange" : "grey"}
          />
        );
      })}
    </div>
  );
};
export default Stars;
