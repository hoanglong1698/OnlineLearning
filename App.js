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
import Download from './src/components/Main/Download/download';
import Search from './src/components/Main/Search/search';
import Profile from './src/components/AccountManagement/Profile/profile';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from './src/globals/constants';
import Result from './src/components/Main/Search/result';

const MainStack = createStackNavigator();

const ListCoursesStack = () => {
  return (
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

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Download') {
              iconName = focused
                ? 'arrow-down-bold-circle'
                : 'arrow-down-bold-circle-outline';
            } else if (route.name === 'ListCourses') {
              iconName = focused
                ? 'view-list'
                : 'format-list-bulleted';
            } else if (route.name === 'Search') {
              iconName = focused
                ? 'magnify'
                : 'magnify';
            } else if (route.name === 'Profile') {
              iconName = focused
                ? 'account-circle'
                : 'account-circle-outline';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: color.headerBar,
          inactiveTintColor: color.infoTextColor,
        }}
      >
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Download" component={Download} />
        <BottomTab.Screen name="ListCourses" component={CoursesDetail} />
        <BottomTab.Screen name="Search" component={Result} />
        <BottomTab.Screen name="Profile" component={Profile} />
      </BottomTab.Navigator>
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
