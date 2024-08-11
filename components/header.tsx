import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function Header() {
  return (
    <View style={sheet.container}>
      <Pressable
        onPress={() => {
          alert("Menu Clicked");
        }}
      >
        <Image
          source={require("../assets/images/hamburger.png")}
          style={sheet.images}
        />
      </Pressable>
      <Text>Task 08/08/2024</Text>
      <Text></Text>
    </View>
  );
}

const sheet = StyleSheet.create({
  container: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 55,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  images: {
    width: 25,
    height: 25,
  },
});
