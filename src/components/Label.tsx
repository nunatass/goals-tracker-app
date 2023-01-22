import { TouchableOpacity } from "react-native";
import { Text } from "./Text";

export default function Label({ color, title }: Label) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: `${color}55`,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginRight: 12,
        marginTop: 6,
        marginBottom: 4,
      }}
    >
      <Text color={color}>{title}</Text>
    </TouchableOpacity>
  );
}
