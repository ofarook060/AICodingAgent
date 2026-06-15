import { TouchableOpacity, Text } from "react-native";
import { FileNode } from "../types/file";

interface Props {
  item: FileNode;
  onPress: () => void;
}

export default function FileItem({
  item,
  onPress
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#333"
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 16
        }}
      >
        {item.type === "directory"
          ? "📁 "
          : "📄 "}
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}