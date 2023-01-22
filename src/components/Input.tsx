import React, { useState } from "react";

import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

const StyledInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  color: #fff;
  font-size: 18px;
  font-family: "Poppins-400";
  font-weight: 400;
`;

const ClearButton = styled.TouchableOpacity`
  background: #ccc;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const Input = (props: TextInputProps) => {
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

export default Input;
