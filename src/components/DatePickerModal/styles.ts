import { BlurView } from "expo-blur";
import styled from "styled-components/native";

export const Overlay = styled(BlurView)`
  background: rgba(255, 255, 255, 0.1);
  flex: 1;
  alight-items: stretch;
  justify-content: center;
  padding: 0 24px;
`;
