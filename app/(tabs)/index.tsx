import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import "react-native-get-random-values";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../../libs/supabase";
import TodoItem from "../_components/TodoItem";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

export default function HomeScreen() {
  const [text, onChangeText] = React.useState("");
  const [todos, onChangeTodos] = React.useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await supabase.from("todos").select("*");
      if (error) console.log("error", error);
      else onChangeTodos(data);
    };
    fetchTodos();
  }, [todos]);

  const addTodo = async () => {
    const { data } = await supabase
      .from("todos")
      .insert([{ task: text }])
      .select();
    if (data) onChangeTodos([...todos, ...data]);
    onChangeText("");
  };

  const deleteTodo = async (id: string) => {
    const { data } = await supabase.from("todos").delete().eq("id", id);
    if (data) onChangeTodos(todos.filter((t) => t.id !== id));
  };

  const toggleComplete = async (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    const { data } = await supabase.from("todos").update({ completed: !todo.completed }).eq("id", id).select();
    if (data) {
      onChangeTodos(todos.map((t) => (t.id === id ? { ...t, completed: !todo.completed } : t)));
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          style={styles.flatList}
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onToggleComplete={() => toggleComplete(item.id)}
              onDelete={() => deleteTodo(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={addTodo}>
            <Ionicons name="add" size={32} color="#000" />
          </TouchableOpacity>
          <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
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
