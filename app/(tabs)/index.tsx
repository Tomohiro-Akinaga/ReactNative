import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TodoItem from "../_components/TodoItem";

type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export default function HomeScreen() {
  const [text, setText] = React.useState("");
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleAddTodo = () => {
    setTodos([...todos, { id: uuidv4(), text, isCompleted }]);
    setText("");
  };

  console.log(todos);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          style={styles.flatList}
          data={todos}
          renderItem={({ item }) => <TodoItem todo={item} />}
          keyExtractor={(_, index) => String(index)}
        />
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
  flatList: {
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
