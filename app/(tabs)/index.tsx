import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState<string[]>([]);

  const handleAddTodo = () => {
    setTodos([...todos, text]);
    setText("");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.todoList}>
          {todos.map((todo, index) => (
            <Text key={index} style={styles.todoItem}>
              {todo}
            </Text>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={handleAddTodo}>
            <Ionicons name="add" size={32} color="#000" />
          </TouchableOpacity>
          <TextInput style={styles.input} onChangeText={setText} value={text} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 24,
  },
  todoList: {
    marginBottom: 8,
  },
  todoItem: {
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 4,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 0,
    padding: 10,
  },
});
