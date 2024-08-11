import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function About() {
  return (
    <View style={style.view}>
      <Text style={style.heading}>About Us</Text>
      <Text style={style.para}>
        I am Arihant Jain, from Jaipur Rajasthan. I have completed my B.Tech. in
        Computer Science from Teerthanker Mahaveer University. I am currently
        working as Associate Software Engineer at GetGrahak.
      </Text>
      <Pressable style={style.button} accessibilityLabel="Go Home">
        <Link href="/">
          <Text style={{ color: "white" }}>Back</Text>
        </Link>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  para: {
    textAlign: "center",
    width: "80%",
    fontSize: 20,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    width: 200,
    alignItems: "center",
    backgroundColor: "black",
  },
});
