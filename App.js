import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './src/components/Main/Home/home';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoursesDetail from './src/components/CourseDetail/courses-detail';
import EnterUsername from './src/components/Authentication/ForgotPassword/enter-username';
import ForgotPassword from './src/components/Authentication/ForgotPassword/forgot-password';

const MainStack = createStackNavigator();

const ListCoursesStack = () => {
  return(
  <MainStack.Navigator initialRouteName="ListCourse"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ffc226',
      }
    }}>
    <MainStack.Screen
      name="ListCourses"
      component={ListCourses}
      options={{
        title: "List Courses",
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#2c3051"
          />
        ),
      }} />

    <MainStack.Screen
      name="CoursesDetail"
      component={CoursesDetail}
      options={({ route }) => ({ title: route.params.item.title })} />

    </MainStack.Navigator>
  )
}

const MainTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainTab.Navigator>
        <MainTab.Screen name="Home" component={Home} />
        <MainTab.Screen name="ListCourses" component={ListCoursesStack} />
      </MainTab.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   {/* <Home /> */}
    //   {/* <ListCourses/> */}
    //   {/* <Login /> */}
    //   {/* <Register /> */}
    //   {/* <EnterUsername/> */}
    //   {/* <ForgotPassword/> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
