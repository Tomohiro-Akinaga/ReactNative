import { Checkbox } from "expo-checkbox";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

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
  const [text, setText] = useState(todo.task);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <TouchableWithoutFeedback>
      <View style={styles.list}>
        {!isEditing && (
          <Text style={styles.text} onPress={() => setIsEditing(!isEditing)}>
            {todo.task}
          </Text>
        )}
        {isEditing && <TextInput value={text} autoFocus onSubmitEditing={() => setIsEditing(!isEditing)} />}
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
