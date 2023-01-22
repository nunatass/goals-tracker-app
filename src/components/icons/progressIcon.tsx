import Svg, { G, Path, SvgXml } from "react-native-svg";

type IconProps = {
  color?: string;
  size?: number;
  opacity?: number;
};
export function ProgressIcon({ color, size, opacity }: IconProps) {
  return (
    <Svg
      width={size ? size : "24"}
      height={size ? size : "24"}
      viewBox="0 0 25 24"
      fill="none"
    >
      <G opacity={opacity ? opacity : 1}>
        <Path
          d="M12.5969 3.78047C12.8447 3.76016 13.0953 3.75 13.3485 3.75C18.3438 3.75 22.3965 7.78125 22.3965 12.75C22.3965 17.7188 18.3438 21.75 13.3485 21.75C11.4317 21.7499 9.56438 21.1446 8.01557 20.0213C6.46677 18.8979 5.31644 17.3145 4.73029 15.4992"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          stroke={color ? color : "black"}
          strokeOpacity={opacity ? opacity : 1}
        />
        <Path
          d="M12.5947 2.25C7.18095 2.25 2.79267 6.615 2.79267 12C2.79062 13.3731 3.08117 14.7311 3.64517 15.9844L12.5947 12V2.25Z"
          stroke={color ? color : "black"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}
