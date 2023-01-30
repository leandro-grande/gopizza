import { ReactNode } from "react"
import { AuthContextProvider } from "./useAuth"
import { OrderContextProvider } from "./useOrder"

type ContextsProviderProps = {
  children: ReactNode;
}

export const ContextsProvider = ({ children }: ContextsProviderProps) => {
  return (
    <AuthContextProvider>
      <OrderContextProvider>
        {children}
      </OrderContextProvider>
    </AuthContextProvider>
  )
}