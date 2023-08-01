import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React from "react";

const Profile = () => {
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const { width } = Dimensions.get("window");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
        }}
      >
        <Image
          style={{ height: 70, width: 70, borderRadius: 50 }}
          source={{
            uri: "https://www.creativelive.com/blog/wp-content/uploads/2015/12/MikePano-2-620x359.jpg?x63231",
          }}
        />
        <View
          style={{
            flexDirection: "row",

            width: "100%",
            justifyContent: "space-around",
            paddingVertical: 20,
            paddingHorizontal: 50,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>12</Text>
            <Text style={{ fontSize: 17 }}>Posts</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>1236</Text>
            <Text style={{ fontSize: 17 }}>Followers</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>300</Text>
            <Text style={{ fontSize: 17 }}>Following</Text>
          </View>
        </View>
      </View>
      <View style={{ width: 200, marginLeft: 10 }}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          possimus earum nesciunt sunt corporis optio provident aspernatur in
          ipsum id aut, facilis incidunt neque illo cum beatae enim obcaecati
          nisi.
        </Text>
      </View>
      <View style={{ marginLeft: 10, flexDirection: "row", marginTop: 20 }}>
        <Text
          style={{
            fontWeight: "bold",
            marginRight: 10,
            backgroundColor: "#DBDCDE",
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 5,
          }}
        >
          Edit Profile
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            backgroundColor: "#DBDCDE",
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 5,
          }}
        >
          Share Profile
        </Text>
      </View>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 3,
          marginTop: 20,
        }}
      >
        {dummy.map((d) => {
          return (
            <View
              style={{
                width: width / 3 - 3,
                height: width / 3 - 3,
                backgroundColor: "#DBDCDE",
              }}
            >
              <Text>{d}</Text>
            </View>
          );
        })}
      </View>
      {/* <Text>{width/3-3}</Text> */}
    </ScrollView>
  );
};

export default Profile;
