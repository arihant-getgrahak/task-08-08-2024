import { Footer, Hero, Header } from "@/components";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Header />
      <Hero />
      <Footer />
    </ScrollView>
  );
}
