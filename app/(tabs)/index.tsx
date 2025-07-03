import React from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
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
      <SafeAreaView>
        <TextInput style={styles.input} onChangeText={setText} value={text} />
        {todos.map((v, i) => (
          <Text key={i}>{v}</Text>
        ))}
        <Button title="Todoを追加" onPress={handleAddTodo} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  // container: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: "100%",
  // },
  // text: {},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
