import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  FielDescriptionContainer,
  FieldContainer,
  ModalContainer,
  ModalHeader,
  ModalInput,
  Overlay,
  Separator,
  Wrapper,
} from "./styles";
import { Text } from "../Text";
import ColorPicker from "../ColorPicker/index";
import { Feather } from "@expo/vector-icons";
import Button from "../Button";
import { ScrollView } from "react-native-gesture-handler";

type AddLabelModalProps = {
  isVisible?: boolean;
  onClose: () => void;
  onAddLabel: (label: Label) => void;
};

export default function AddLabelModal({
  isVisible,
  onClose,
  onAddLabel,
}: AddLabelModalProps) {
  const colors = [
    "#4792FF",
    "#F87171",
    "#FBBF24",
    "#34D399",
    "#60A5FA",
    "#EF4444",
    "#F59E0B",
  ];
  const [label, setLabel] = useState<Label>({ title: "", color: colors[0] });

  useEffect(() => {
    if (!isVisible) {
      setLabel({ title: "", color: colors[0] });
    }
  }, [isVisible]);

  return (
    <Modal transparent visible={isVisible} animationType="fade">
      <Overlay intensity={10}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
        >
          <ModalContainer>
            <ModalHeader>
              <Text color="white" align="center" weight="600">
                Add Label
              </Text>
              <TouchableOpacity
                onPress={() => {
                  onClose();
                }}
              >
                <Feather name="x" size={28} color="white" />
              </TouchableOpacity>
            </ModalHeader>

            <Wrapper>
              <ModalInput
                placeholder="Label title"
                placeholderTextColor="#9CA3AD"
                onChangeText={(title) => {
                  setLabel({ ...label, title });
                }}
              />
              <Separator />
              <FieldContainer>
                <FielDescriptionContainer>
                  <Feather name="droplet" size={24} color={label.color} />
                  <Text color="white" weight="600" style={{ marginLeft: 8 }}>
                    color
                  </Text>
                </FielDescriptionContainer>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <ColorPicker
                    onSelectColor={(color) => {
                      setLabel({ ...label, color });
                    }}
                    colors={colors}
                  />
                </ScrollView>
              </FieldContainer>
            </Wrapper>

            <Button
              title="Add Label"
              onPress={() => {
                onClose();
                if (label.title) {
                  onAddLabel(label);
                }
              }}
            />
          </ModalContainer>
        </KeyboardAvoidingView>
      </Overlay>
    </Modal>
  );
}
