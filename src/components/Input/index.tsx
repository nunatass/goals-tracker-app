import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TextInputProps } from "react-native";
import { StyledInput, ClearButton } from "./styles";

export const Input = (props: TextInputProps) => {
  const [inputText, setInputText] = useState("");

  const handleClearPress = () => {
    setInputText("");
  };

  return (
    <>
      <StyledInput
        {...props}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      {inputText.length > 0 && (
        <ClearButton onPress={handleClearPress}>
          <Feather name="x" size={16} color="white" />
        </ClearButton>
      )}
    </>
  );
};
