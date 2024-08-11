import { Link } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  Text,
  Linking,
  ScrollView,
  RefreshControl,
} from "react-native";
// import { WebView } from "react-native-webview";

export default function Hero() {
  const [resfresh, setrefresh] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openURL = (url: string) => {
    alert("Redirecting to my GitHub Id");
    setTimeout(() => {
      Linking.openURL(url).catch((err) =>
        console.error("Error opening URL:", err)
      );
    }, 1000);
  };

  const onRefresh = useCallback(() => {
    setrefresh(true);
    setTimeout(() => {
      setrefresh(false);
    }, 2000);
  }, []);

  return (
    <>
      <View style={style.view}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={resfresh} onRefresh={onRefresh} />
          }
          contentContainerStyle={style.view}
        >
          {/* <WebView source={{ uri: "https://expo.dev" }} /> */}
          <Modal
            visible={modalOpen}
            animationType="slide"
            onRequestClose={() => {
              alert("Modal has been closed.");
              setModalOpen(!modalOpen);
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Modal Content</Text>
              <Pressable
                style={[
                  style.button,
                  {
                    marginTop: 20,
                  },
                ]}
              >
                <Text
                  style={{ color: "white" }}
                  onPress={() => setModalOpen(!modalOpen)}
                >
                  Close Modal
                </Text>
              </Pressable>
            </View>
          </Modal>
          <Image
            style={style.image}
            source={{
              uri: "https://images.unsplash.com/photo-1720545525602-b3fcc473b32b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
            }}
          />
          <Pressable
            style={style.button}
            onPress={() => openURL("https://github.com/arihant-getgrahak")}
            accessibilityLabel="Redirect to my GitHub Id"
          >
            <Text style={{ color: "white" }}>My GitHub Id</Text>
          </Pressable>
          <Pressable
            style={style.button}
            onPress={() => setModalOpen(!modalOpen)}
            accessibilityLabel="Redirect to my GitHub Id"
          >
            <Text style={{ color: "white" }}>Open Modal</Text>
          </Pressable>
          <Pressable
            style={style.button}
            accessibilityLabel="Redirect to my GitHub Id"
          >
            <Link href="/about">
              <Text style={{ color: "white" }}>Switch to About Us page</Text>
            </Link>
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderBottomWidth: 2,
    borderColor: "red",
  },
  button: {
    borderRadius: 12,
    padding: 20,
    width: 200,
    alignItems: "center",
    backgroundColor: "black",
  },
});