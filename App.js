import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BestPractices from "./components/BestPractices";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Landing Page */}
      <BestPractices />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
