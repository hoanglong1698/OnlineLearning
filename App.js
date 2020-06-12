import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoursesDetail from './src/components/CourseDetail/courses-detail';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from './src/globals/constants';
import ProfileStack from './src/components/Navigation/profile-stack';
import HomeStack from './src/components/Navigation/home-stack';
import DownloadStack from './src/components/Navigation/download-stack';
import BrowseStack from './src/components/Navigation/browse-stack';
import SearchStack from './src/components/Navigation/search-stack';
import SplashScreen from './src/components/Others/Splashscreen/splash-screen';

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
  console.disableYellowBox = true;
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
            } else if (route.name === 'Browse') {
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
        <BottomTab.Screen name="Home" component={HomeStack} />
        <BottomTab.Screen name="Download" component={DownloadStack} />
        <BottomTab.Screen name="Browse" component={BrowseStack} />
        <BottomTab.Screen name="Search" component={SearchStack} />
        <BottomTab.Screen name="Profile" component={SplashScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
