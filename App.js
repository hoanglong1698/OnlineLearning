import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Main/Home/home';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <ListCourses/> */}
      {/* <Login /> */}
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
});
