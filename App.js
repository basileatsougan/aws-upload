import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Pressable
        style={{
          backgroundColor: "#0e45eb",
          width: 120,
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontsize: 15,
            fontWeight: "bold",
            color: "#fff",
            marginLeft: 15,
          }}
        >
          UPLOAD FILE
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
