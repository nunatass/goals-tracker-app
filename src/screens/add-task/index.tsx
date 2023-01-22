import React, { useState } from "react";
import {
  BackButton,
  Container,
  FieldContainer,
  FrequencyAndTimeContainer,
  Header,
  Input,
  InputContainer,
  MainContainer,
} from "./styles";
import { ScrollView, TouchableHighlight } from "react-native";
import ArrowBackIcon from "../../components/icons/arrow-back-icon";
import { Text } from "../../components/Text";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import { Feather } from "@expo/vector-icons";
import { DtPicker } from "../../components/DatePicker";

export default function AddTaskScreen() {
  const { goBack, navigate } = useNavigation();
  const [time, setTime] = useState("");
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [disciplineType, setDisciplineType] = useState(false);

  function handleTimePicker() {
    console.log({ time });

    setIsDatePickerVisible((prev) => {
      return !prev;
    });
  }

  function handleSelectDiscipline() {
    navigate("SelectDisciplineScreen" as never);
  }

  return (
    <Container>
      <ScrollView>
        <Header>
          <BackButton onPress={goBack}>
            <ArrowBackIcon />
          </BackButton>
          <Text weight="600" align="left" size={24} color="white">
            Add Task
          </Text>
        </Header>
        <MainContainer>
          <Text weight="600" align="left" size={16} color="white">
            Task title
          </Text>
          <InputContainer>
            <Input placeholder="Task title" placeholderTextColor="#9CA3AD" />
          </InputContainer>

          <FrequencyAndTimeContainer>
            <FieldContainer>
              <Text weight="600" align="left" size={16} color="white">
                Dateline
              </Text>
              <InputContainer>
                <TouchableHighlight
                  onPress={handleTimePicker}
                  underlayColor={"transparent"}
                >
                  {time ? (
                    <Text weight="400" align="left" size={16} color="white">
                      {time}
                    </Text>
                  ) : (
                    <Text weight="400" align="left" size={16} color="#9CA3AD">
                      Select a date
                    </Text>
                  )}
                </TouchableHighlight>
                <Feather name="calendar" size={24} color="#9CA3AD" />
              </InputContainer>
            </FieldContainer>
            <FieldContainer>
              <Text weight="600" align="left" size={16} color="white">
                Frequency
              </Text>
              <InputContainer>
                <TouchableHighlight
                  onPress={handleTimePicker}
                  underlayColor={"transparent"}
                >
                  {time ? (
                    <Text weight="400" align="left" size={16} color="white">
                      {time}
                    </Text>
                  ) : (
                    <Text weight="400" align="left" size={16} color="#9CA3AD">
                      set time
                    </Text>
                  )}
                </TouchableHighlight>
                <Feather
                  name="clock"
                  size={24}
                  color="#9CA3AD"
                  style={{
                    marginLeft: 10,
                  }}
                />
              </InputContainer>
            </FieldContainer>
          </FrequencyAndTimeContainer>

          <Text weight="600" align="left" size={16} color="white">
            Discipline
          </Text>
          <InputContainer>
            <TouchableHighlight
              onPress={handleSelectDiscipline}
              underlayColor={"transparent"}
            >
              {disciplineType ? (
                <Text weight="400" align="left" size={16} color="white">
                  {disciplineType}
                </Text>
              ) : (
                <Text weight="400" align="left" size={16} color="#9CA3AD">
                  Select a discipline
                </Text>
              )}
            </TouchableHighlight>
            <Feather name="dollar-sign" size={24} color="#9CA3AD" />
          </InputContainer>

          <Button
            title="Create"
            onPress={() => {
              console.log();
            }}
            style={{ marginTop: 20 }}
          />
          <DtPicker
            isVisible={isDatePickerVisible}
            onTimeChange={(time) => {
              console.log({ time });
              setTime(time);
              setIsDatePickerVisible(false);
            }}
            mode="time"
          />
        </MainContainer>
      </ScrollView>
    </Container>
  );
}
