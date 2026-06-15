import {
  View,
  FlatList,
  Text,
  ActivityIndicator
} from "react-native";

import { useEffect, useState } from "react";

import FileItem from "../components/FileItem";

import { listFiles } from "../services/tools";

export default function FilesScreen() {
  const [loading, setLoading] =
    useState(true);

  const [files, setFiles] =
    useState<any[]>([]);

  useEffect(() => {
    loadFiles();
  }, []);

  async function loadFiles() {
    try {
      const result =
        await listFiles("/sdcard");

      setFiles(result.files ?? []);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <ActivityIndicator
        style={{ flex: 1 }}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111"
      }}
    >
      <FlatList
        data={files}
        keyExtractor={(item) =>
          item.name
        }
        renderItem={({ item }) => (
          <FileItem
            item={item}
            onPress={() => {}}
          />
        )}
      />
    </View>
  );
}