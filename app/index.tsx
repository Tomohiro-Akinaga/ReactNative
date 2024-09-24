import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useState } from "react";

export default function HomeScreen() {
  const [text, onChangeText] = useState("initial value");

  return (
    <View style={styles.container}>
      <Text>ToDOアプリ</Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.input}
      />
      <Button title="追加" onPress={() => Alert.alert("追加できません")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
