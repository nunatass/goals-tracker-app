import styled from "styled-components/native";
import { BlurView } from "expo-blur";

export const Overlay = styled(BlurView)`
  background: rgba(255, 255, 255, 0.1);
  flex: 1;
  height: 100%;
  alight-items: stretch;
  justify-content: center;
  padding: 0 24px;
`;

export const ModalContainer = styled.View`
  background: #071018;
  padding: 24px;
  border-radius: 12px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.View`
  width: 100%;
  background: #20282d;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-bottom: 44px;
  margin-top: 24px;
`;

export const ModalInput = styled.TextInput`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  color: #fff;
  font-family: "Poppins-400";
`;

export const FieldContainer = styled.View`
  width: 100%;
  min-height: 50px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding-right: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 12px;
  margin-bottom: 8px;
`;

export const FielDescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Separator = styled.View`
  width: 85%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  align-self: flex-end;
`;
