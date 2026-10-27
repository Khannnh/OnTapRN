import { SafeAreaProvider } from "react-native-safe-area-context"
import { Text } from "react-native"

export const HomeScreen = () => {
    return (
        <SafeAreaProvider>
            <Text>Hello world</Text>
        </SafeAreaProvider>
    )
}