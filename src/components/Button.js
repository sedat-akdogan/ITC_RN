import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

class MyButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = { change: true };
    }

    render() {
        return(
            <SafeAreaView>
                <Button onPress={() => {
                    this.setState({change: !this.state.change });      
                }} title="Click Me">
                </Button>
                {this.state.change ? (<Text>Hello</Text>) : (<Text>Bello</Text>)}
            </SafeAreaView>
        );
    }
}

export default MyButton;

// import React from 'react';
// import { Text, StyleSheet, Pressable } from 'react-native';

// export default function Button(props) {
//   const { onPress, title = 'Save' } = props;
//   return (
//     <Pressable style={styles.button} onPress={onPress}>
//       <Text style={styles.text}>{title}</Text>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//     backgroundColor: 'black',
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: 'white',
//   },
// });