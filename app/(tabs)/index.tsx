import { StyleSheet, View } from "react-native";

import TextInputExample from "./_components/TextInputExample";

const app = () => {
  return (
    <View style={styles.container}>
      <TextInputExample />
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backdropFilter: "rgba(0,0,0,0.5)",
  },
});
