import {
  ScrollView,
  TextInput
} from "react-native";

import { useState } from "react";

export default function EditorScreen() {
  const [content, setContent] =
    useState("");

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#111"
      }}
    >
      <TextInput
        multiline
        value={content}
        onChangeText={setContent}
        style={{
          color: "white",
          minHeight: 800,
          padding: 12,
          fontSize: 14,
          fontFamily: "monospace"
        }}
      />
    </ScrollView>
  );
}