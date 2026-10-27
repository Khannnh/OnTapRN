import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, TextInput } from "react-native"

export const LoginScreen = () => {
    return (
        <SafeAreaView>
            <Text style = {{padding:50,fontSize:32, color:'blue' , fontWeight:'400', textAlign:'center'}}>Hello world:)))</Text>
            <TextInput style = {styles.input}>Nhập tên của bạn</TextInput>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        fontFamily:'times',
        color:'pink',
        fontSize:25
    }
})
