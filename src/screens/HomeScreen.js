import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
      <Button
       title = "Go to components demo"
       onPress={() => {navigation.navigate("Components")}}
      />
      <Button
        title = "Go to list demo"
        onPress = {() => {navigation.navigate("List")}}
      />
      <Button
        title = "Go to image demo"
        onPress = {() => {navigation.navigate("Image")}}
      />
      <Button
        title = "Go to counter demo"
        onPress = {() => {navigation.navigate("Counter")}}
      />
      <Button
        title = "Go to color demo"
        onPress = {() => {navigation.navigate("Color")}}
      />
      <Button 
        title = "Go to square demo"
        onPress={() => {navigation.navigate("Square")}}
      />
      <Button
        title = "Go to text input demo"
        onPress = {() => {navigation.navigate("Text")}}
      />
    </View>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  }
});

export default HomeScreen;
