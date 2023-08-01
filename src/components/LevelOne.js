import { StyleSheet, View } from "react-native";
import LevelTwo from "./LevelTwo";

const LevelOne = () => {
    return (
        <View style={styles.container}>
            <LevelTwo />
            <LevelTwo />
            <LevelTwo />
        </View>
    );
    }
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        margin: 10,
    }
});



export default LevelOne;