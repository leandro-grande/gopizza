import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';
import { TabMenu } from '../components/TabMenu';
import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';
import { Orders } from '../screens/Orders';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {

  const { COLORS } = useTheme();

  return (
    <Navigator screenOptions={{ 
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: COLORS.SECONDARY_900,
      tabBarInactiveTintColor: COLORS.SECONDARY_400,
      tabBarStyle: {
        height: 80,
        paddingVertical: Platform.OS === 'ios' ? 20 : 0
      }
      }}>
      <Screen 
        name='home' 
        component={Home} 
        options={{
          tabBarIcon: ({color}) => (
            <TabMenu color={color} title="Cardápio" />
          )
        }}
      />
      <Screen 
        name='cart' 
        component={Cart} 
        options={{
          tabBarIcon: ({color}) => (
            <TabMenu color={color} title="Carrinho" />
          )
        }}
      />
      <Screen 
        name='orders' 
        component={Orders} 
        options={{
          tabBarIcon: ({color}) => (
            <TabMenu color={color} title="Pedido" />
          )
        }}
      />
    </Navigator>
  )
}