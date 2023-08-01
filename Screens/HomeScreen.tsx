import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { data } from "../InstaDummyData/data";

import Ant from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  const calculateTimePosted = (time: string) => {
    const t = +time;
    const sec = t / 1000;
    const minutes = sec / 60;
    const hours = minutes / 60;
    const now = hours / 60;
    return Math.ceil(now);
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((d) => {
          return (
            <View style={styles.container}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  marginVertical: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                  source={{
                    uri: "https://picsum.photos/200/300",
                  }}
                />
                <Text style={styles.username}>{d.user.username}</Text>
              </View>
              <Image
                source={{
                  uri: d.images.standard_resolution.url,
                }}
                style={styles.image}
              />
              <View style={styles.postDetailsContainer}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <TouchableOpacity style={{ marginLeft: 5 }}>
                    <Ant name={"hearto"} size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginLeft: 5 }}>
                    <Feather name={"message-circle"} size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginLeft: 5 }}>
                    <Ionicons name={"paper-plane-outline"} size={24} />
                  </TouchableOpacity>
                </View>

                <Text style={{ marginVertical: 5 }}>
                  Liked by{" "}
                  {d.likes.data.slice(0, 1).map((l) => {
                    return (
                      <Text style={{ fontWeight: "bold" }} key={l.id}>
                        {l.username}{" "}
                      </Text>
                    );
                  })}{" "}
                  and{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    {d.likes.count - 1} others
                  </Text>
                </Text>
                <Text>
                  <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                    {d.user.username}
                  </Text>
                  <Text> {d.caption?.text}</Text>
                </Text>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Comments", {
                        comments: d.comments.data,
                      })
                    }
                  >
                    <Text style={{ marginVertical: 5, color: "grey" }}>
                      View all {d.comments.count} comments
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={{ color: "grey" }}>
                  {Math.ceil(
                    Math.random() * 1 * calculateTimePosted(d.created_time)
                  )}
                  h ago
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    // borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  postDetailsContainer: {
    padding: 10,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 5,
  },
  likeButton: {
    color: "blue",
  },
});

export default HomeScreen;
