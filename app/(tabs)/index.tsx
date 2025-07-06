import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import "react-native-get-random-values";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../_components/TodoItem";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const storeData = async (value: Todo[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("todos", jsonValue);
  } catch (e) {
    // saving error
  }
};

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem("todos");
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("todos");
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (e) {
    // error reading value
    return null;
  }
};

export default function HomeScreen() {
  const [text, onChangeText] = React.useState("");
  const [todos, onChangeTodos] = React.useState<Todo[]>([]);

  const addTodo = () => {
    onChangeTodos([...todos, { id: uuidv4(), text, completed: false }]);
    onChangeText("");
  };

  console.log(todos);

  useEffect(() => {
    const getTodos = async () => {
      const response = await getData();
      if (response) onChangeTodos(response);
    };
    getTodos();
  }, []);

  const toggleComplete = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, completed: !todo.completed };
    });
    onChangeTodos(newTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          style={styles.flatList}
          data={todos}
          renderItem={({ item }) => <TodoItem todo={item} onChangeValue={() => toggleComplete(item.id)} />}
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
