import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

interface Comments {
  comment: string;
  user: string;
}
const CommentsScreen = () => {
  const { params } = useRoute<any>();
  const { comments } = params;

  return (
    <View style={{ flex: 1 }}>
      {comments.map((comment: any) => {
        return (
          <View
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                source={{ uri: "https://picsum.photos/200/300" }}
                style={{ height: 35, width: 35, borderRadius: 50 }}
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>
                  {comment.from.username}
                </Text>
                <Text style={{ marginLeft: 20 }}>
                  {Math.ceil(Math.random() * 10)}h ago
                </Text>
              </View>
              <Text>{comment.text}</Text>
              <Text style={{ color: "grey" }}>Reply</Text>
            </View>
          </View>
        );
      })}

      {/* <Text>{JSON.stringify(params.comments)}</Text> */}
    </View>
  );
};

export default CommentsScreen;
