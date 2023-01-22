import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowBackIcon = (props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m15 19-7-7 7-7"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowBackIcon;
