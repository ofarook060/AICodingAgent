import {
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";

import { useState } from "react";

import { codingAgent }
from "../services/codingAgent";

import { useChatStore } from "../store/chatStore";

import ChatMessage from "../components/ChatMessage";

export default function ChatScreen() {
  const [prompt, setPrompt] =
    useState("");

  const { messages, addMessage } =
    useChatStore();

  async function handleSend() {
    if (!prompt.trim()) return;

    addMessage({
      id: Date.now().toString(),
      role: "user",
      content: prompt,
      createdAt: Date.now()
    });

    const result =
      await codingAgent(prompt);

    addMessage({
      id: `${Date.now()}-ai`,
      role: "assistant",
      content: result,
      createdAt: Date.now()
    });

    setPrompt("");
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 10
      }}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ChatMessage
            role={item.role}
            content={item.content}
          />
        )}
      />

      <TextInput
        value={prompt}
        onChangeText={setPrompt}
        placeholder="Ask..."
        style={{
          borderWidth: 1,
          padding: 10
        }}
      />

      <Button
        title="Send"
        onPress={handleSend}
      />
    </View>
  );
}