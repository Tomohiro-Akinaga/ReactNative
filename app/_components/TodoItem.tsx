import { Checkbox } from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
  onChangeValue: (id: string) => void;
};

export default function TodoItem({ todo, onChangeValue }: Props) {
  return (
    <View style={styles.list}>
      <Text style={styles.text}>{todo.text}</Text>
      <Checkbox value={todo.completed} onValueChange={() => onChangeValue(todo.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  text: {
    marginRight: 8,
    flex: 1,
  },
});
