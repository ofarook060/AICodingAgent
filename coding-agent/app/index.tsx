import { View } from "react-native";

import { Button } from "react-native";

import { router } from "expo-router";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        gap: 10
      }}
    >
      <Button
        title="Chat"
        onPress={() =>
          router.push("/chat")
        }
      />

      <Button
        title="Files"
        onPress={() =>
          router.push("/files")
        }
      />

      <Button
        title="Terminal"
        onPress={() =>
          router.push("/terminal")
        }
      />
    </View>
  );
}