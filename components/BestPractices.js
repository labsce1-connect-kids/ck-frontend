import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BestPractices() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Connect Our Kids makes free tools for social workers engaged in
        permanancy searches for foster kids. Watch the video below to learn more
        about the free tools and resources in this app.
      </Text>
      <Text style={styles.tempText}>Youtube video goes here</Text>
      <Text style={styles.tempText}>More content here?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 30,
    marginTop: 20
  },
  text: {
    color: "black",
    marginTop: 100
  },
  tempText: {
    color: "red",
    marginTop: 50
  }
});
