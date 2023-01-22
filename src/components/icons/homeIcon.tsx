import React from "react";
import Svg, { G, Path } from "react-native-svg";

type IconProps = {
  color?: string;
  size?: number;
  opacity?: number;
  active?: boolean;
};

export function HomeIcon({ color, size, opacity, active = false }: IconProps) {
  return (
    <Svg width={size} height={size} fill="none">
      <G opacity={opacity ? opacity : 1}>
        <Path
          d="m12 3-7 7v10a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V10l-7-7Z"
          fill={active ? color : "none"}
        />
        <Path
          d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"
          stroke={color ? color : "black"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}
