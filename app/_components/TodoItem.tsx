import { Checkbox } from "expo-checkbox";
import React from "react";
import { Button, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

type Props = {
  todo: {
    id: string;
    task: string;
    completed: boolean;
  };
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggleComplete, onDelete }: Props) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.list}>
        <Text style={styles.text}>{todo.task}</Text>
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
