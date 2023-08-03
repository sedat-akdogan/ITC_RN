import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from "react-native";


const Cafe = () => {
    return (
        <View style={styles.container}>
           <Cat name="Tom"/>
           <Cat name="Jerry"/>
        </View>
    );
};

const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View style={styles.container}>
            <Text>I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!</Text>
            <Button 
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
                disabled={!isHungry}
                onPress={() => {
                    setIsHungry(false);
                }}
            />
        </View>
    );
};
const styles=StyleSheet.create({
    container: {
        height: 200,
        marginTop: 10,
        padding: 10,
        backgroundColor: "blue",
    },
});



export default Cafe;