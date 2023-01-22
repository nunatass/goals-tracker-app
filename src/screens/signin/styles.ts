import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: #071018;
  padding-horizontal: 24px;
`;

export const LoginBtnContainer = styled.View`
  width: 100%;
  margin-top: 160px;
`;

export const GoogleLoginBtn = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const styles = StyleSheet.create({
  appleLoginButton: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
});
