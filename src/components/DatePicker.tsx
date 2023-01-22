import { StyleSheet } from "react-native";
import DatePicker, {
  ModernDatepickerProps,
} from "react-native-modern-datepicker";

export interface DatePickerProps extends ModernDatepickerProps {
  isVisible?: boolean;
}

export const DatePickerOptions = {
  backgroundColor: "#20282D",
  textHeaderColor: "#4792FF",
  textDefaultColor: "#fff",
  selectedTextColor: "#fff",
  mainColor: "#4792FF",
};

export const styles = StyleSheet.create({
  datePicker: {
    borderRadius: 10,
    position: "absolute",
    alignSelf: "center",
    zIndex: 999,
  },
});

export function DtPicker({
  mode = "calendar",
  isVisible = true,
  onSelectedChange,
}: DatePickerProps) {
  return isVisible ? (
    <DatePicker
      onSelectedChange={onSelectedChange}
      mode={mode}
      options={DatePickerOptions}
      style={styles.datePicker}
    />
  ) : null;
}
