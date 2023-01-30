import { NavigationContainer } from "@react-navigation/native"
import { useAuth } from "../contexts/useAuth"
import { PublicRoutes } from "./public.routes"
import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";

export const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <StackRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  )
}