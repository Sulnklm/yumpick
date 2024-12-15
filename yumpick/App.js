import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import screens
import HomeScreen from "./screens/HomeScreen";
import ReservationsScreen from "./screens/ReservationsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#0000dd',
          tabBarInactiveTintColor: '#c6c5ed'
        }}
      >
        <Tab.Screen 
          name='Home'
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size}  />
            )
          }}
        />
        <Tab.Screen 
          name='Info'
          component={ReservationsScreen}
          options={{
            headerTitle: 'Tab Information',
            tabBarLabel: 'Information',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="information" color={color} size={size}  />
            )
          }}
        />
        <Tab.Screen 
          name='Opts'
          component={ProfileScreen}
          options={{
            title: 'Tab Options',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="tab" color={color} size={size}  />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>    
  );
}