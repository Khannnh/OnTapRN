import { SafeAreaProvider } from "react-native-safe-area-context"
import { LoginScreen } from "./src/screen/LoginScreen"

const App = () => {
  return (
    <SafeAreaProvider>
      <LoginScreen></LoginScreen>
    </SafeAreaProvider>
  )
}
export default App;