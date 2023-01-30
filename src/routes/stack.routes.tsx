import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../contexts/useAuth";

import { Home } from "../screens/Home";
import { Order } from "../screens/Order";
import { Product } from "../screens/Product";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export const StackRoutes = () => {
  const { user } = useAuth();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
       {user?.isAdmin ? (
        <Group>
          <Screen name="home" component={Home} />
          <Screen name="product" component={Product} />
        </Group>
       ) : (
        <Group>
          <Screen name="tabRoutes" component={TabRoutes} />
          <Screen name="order" component={Order} />
        </Group>
       )       
      } 
    </Navigator>
  )
}