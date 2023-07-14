import React from "react";
import "./DayBlock.css";

interface Props {
  contribution: number;
}

const DayBlock: React.FC<Props> = ({ contribution }) => {
  let color = "#EDEDED";

  if (contribution < 10 && contribution > 0) {
    color = "#ACD5F2";
  } else if (contribution < 20 && contribution > 9) {
    color = '#7FA8C9'
  } else if (contribution < 30 && contribution > 19) {
    color = '#527BA0'
  } else if (contribution > 29)(
    color = '#254E77'
  )
  return <div className="day" style={{backgroundColor: color}}/>;
};

export default DayBlock;
