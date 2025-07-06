import { Checkbox } from "expo-checkbox";
import React from "react";
import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

type Props = {
  todo: {
    id: string;
    task: string;
    completed: boolean;
  };
  onEditTodo: (id: string, task: string) => void;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggleComplete, onDelete }: Props) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [text, onChangeText] = React.useState(todo.task);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (isEditing) {
          setIsEditing(false);
          Keyboard.dismiss();
        }
      }}
    >
      <View style={styles.list}>
        {!isEditing && (
          <Text style={styles.text} onPress={() => setIsEditing(true)}>
            {todo.task}
          </Text>
        )}
        {isEditing && (
          <TextInput onChangeText={onChangeText} value={"hoge"} autoFocus onBlur={() => setIsEditing(false)} />
        )}
        <Checkbox value={todo.completed} onValueChange={() => onToggleComplete(todo.id)} />
        <Button title="削除" onPress={() => onDelete(todo.id)} />
      </View>
    </TouchableWithoutFeedback>
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
