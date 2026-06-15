import { View, Text } from "react-native";

import Markdown from "react-native-markdown-display";

interface Props {
  role: string;
  content: string;
}

export default function ChatMessage({
  role,
  content
}: Props) {
  return (
    <View
      style={{
        marginVertical: 8,
        padding: 10,
        borderRadius: 10,
        backgroundColor:
          role === "user"
            ? "#333"
            : "#222"
      }}
    >
      <Markdown>
        {content}
      </Markdown>
    </View>
  );
}