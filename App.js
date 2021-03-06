import React, { useState, useContext } from 'react';
import { StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color, screenName, themes } from './src/globals/constants';
import ProfileStack from './src/components/Navigation/profile-stack';
import HomeStack from './src/components/Navigation/home-stack';
import FavoritesStack from './src/components/Navigation/favorites-stack';
import BrowseStack from './src/components/Navigation/browse-stack';
import SearchStack from './src/components/Navigation/search-stack';
import SplashScreen from './src/components/Others/Splashscreen/splash-screen';
import Login from './src/components/Authentication/Login/login';
import { AuthenticationProvider } from './src/provider/authentication-provider';
import { ThemeProvider, ThemeContext } from './src/provider/theme-provider';
import Register from './src/components/Authentication/Register/register';
import RegisterSuccessfully from './src/components/Authentication/Register/register-successfully';
import ForgotPassword from './src/components/Authentication/ForgotPassword/forgot-password';
import SendEmailSuccessfully from './src/components/Authentication/ForgotPassword/send-email-successfully';
import i18n from './utils/i18n';

const MainNavigationStack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === i18n.t("Home")) {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === i18n.t("Favorite")) {
            iconName = focused
              ? 'heart-circle'
              : 'heart-circle-outline';
          } else if (route.name === i18n.t("Browse")) {
            iconName = focused
              ? 'view-list'
              : 'format-list-bulleted';
          } else if (route.name === i18n.t("Search")) {
            iconName = focused
              ? 'magnify'
              : 'magnify';
          } else if (route.name === i18n.t("Profile")) {
            iconName = focused
              ? 'account-circle'
              : 'account-circle-outline';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}

      tabBarOptions={{
        activeTintColor: theme.activeTintColor,
        inactiveTintColor: theme.inactiveTintColor,
        activeBackgroundColor: theme.backgroundBottomBar,
        inactiveBackgroundColor: theme.backgroundBottomBar
      }}
    >
      <BottomTab.Screen name={i18n.t("Home")} component={HomeStack} />
      <BottomTab.Screen name={i18n.t("Favorite")} component={FavoritesStack} />
      <BottomTab.Screen name={i18n.t("Browse")} component={BrowseStack} />
      <BottomTab.Screen name={i18n.t("Search")} component={SearchStack} />
      <BottomTab.Screen name={i18n.t("Profile")} component={ProfileStack} />
    </BottomTab.Navigator>
  )
}

const MainNavigation = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <MainNavigationStack.Navigator>
      <MainNavigationStack.Screen
        name={screenName.splashScreen}
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <MainNavigationStack.Screen
        name={screenName.loginScreen}
        component={Login}
        options={{ headerShown: false }}
      />

      <MainNavigationStack.Screen
        name={screenName.bottomTabScreen}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <MainNavigationStack.Screen
        name={screenName.signupScreen}
        component={Register}
        options={{
          title: i18n.t("Register"),
          headerTintColor: theme.headerText,
          headerStyle: {
            backgroundColor: theme.headerBar,
          },
          headerTitleStyle: {
            color: theme.headerText,
          },
        }}
      />

      <MainNavigationStack.Screen
        name={screenName.registerSuccessfullyScreen}
        component={RegisterSuccessfully}
        options={{
          title: "Đăng ký thành công",
          headerTintColor: theme.headerText,
          headerStyle: {
            backgroundColor: theme.headerBar,
          },
          headerTitleStyle: {
            color: theme.headerText,
          },
        }}
      />

      <MainNavigationStack.Screen
        name={screenName.forgotPasswordScreen}
        component={ForgotPassword}
        options={{
          title: i18n.t("ForgotPassword"),
          headerTintColor: theme.headerText,
          headerStyle: {
            backgroundColor: theme.headerBar,
          },
          headerTitleStyle: {
            color: theme.headerText,
          },
        }}
      />

      <MainNavigationStack.Screen
        name={screenName.sendEmailSuccessfully}
        component={SendEmailSuccessfully}
        options={{
          title: "Gửi email thành công",
          headerTintColor: theme.headerText,
          headerStyle: {
            backgroundColor: theme.headerBar,
          },
          headerTitleStyle: {
            color: theme.headerText,
          },
        }}
      />
    </MainNavigationStack.Navigator>
  )
}

export default function App() {
  console.disableYellowBox = true;

  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
