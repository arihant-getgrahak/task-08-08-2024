import { View, StyleSheet, Text } from "react-native";

export default function Footer() {
  return (
    <View style={style.container}>
      <Text style={{ fontSize: 20 }}>Created by Arihant Jain © 2024</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderTopColor: "black",
    borderTopWidth: 1,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});