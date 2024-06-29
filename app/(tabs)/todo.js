import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "../../screens/SignInScreen";

export default function TodoScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <SignInScreen/>
        </View>
    );}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff"
    }
});

