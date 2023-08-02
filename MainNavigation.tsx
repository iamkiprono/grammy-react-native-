import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import AccountScreen from "./Screens/AccountScreen";
import SearchScreen from "./Screens/SearchScreen";
import AddScreen from "./Screens/AddScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import Ant from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if(focused){

            return <Foundation name="home" size={26}/>
          }else{
            
            return <Ionicons name="home-outline" size={24}/>
          }

        },

        // Change this to your desired header text color
        headerTitleStyle: {
          fontWeight: "bold", // You can add more styles to customize the header title
        },
      })}
    >
      <Tab.Screen
        options={{
          headerTitle: () => {
            return (
              <Text style={{ fontWeight: "bold", fontSize: 24 }}>Grammy</Text>
              // <Image
              //   style={{ height: 40, width: 40 }}
              //   source={{
              //     uri: "https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg",
              //   }}
              // />
            );
          },

          headerRight: () => {
            return (
              <View style={{ display: "flex", flexDirection: "row" }}>
                <TouchableOpacity style={{ marginHorizontal: 10 }}>
                  <Ant name={"hearto"} size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 10, marginLeft: 20 }}>
                  <Fontisto name="messenger" size={24} />
                </TouchableOpacity>
              </View>
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name={"search"} size={24} />;
            } else {
              return <EvilIcons name={"search"} size={26} />;
            }
          },
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconSize;
            if (focused) {
              iconName = "shopping";
              iconSize = 26;
            } else {
              iconName = "shopping-outline";
              iconSize = 24;
            }
            return <MCI name={iconName} size={iconSize} />;
          },
        }}
        name="Shop"
        component={AddScreen}
      />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
