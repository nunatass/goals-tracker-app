import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Text } from "../Text";
import ColorPicker from "../ColorPicker/index";
import { Feather } from "@expo/vector-icons";
import Button from "../Button";
import { ScrollView } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";
import { Overlay } from "./styles";
import { DtPicker } from "../DatePicker";

type DatePickerModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onSelectedChange: (date: string) => void;
  dateMode?: "time" | "datepicker" | "calendar" | "monthYear";
};

export default function DatePickerModal({
  isVisible,
  onClose,
  onSelectedChange,
  dateMode = "calendar",
}: DatePickerModalProps) {
  return (
    <Modal transparent visible={isVisible} animationType="fade">
      <Overlay intensity={10}>
        <DtPicker
          isVisible={isVisible}
          onSelectedChange={(date) => {
            onSelectedChange(date);
            onClose();
          }}
          mode={dateMode}
        />
      </Overlay>
    </Modal>
  );
}
