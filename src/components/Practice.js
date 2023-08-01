import React from 'react';
import { Text, StyleSheet, SafeAreaView, Button, TextInput } from 'react-native';

class MyPractice extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            Result: 0,
            inputNumber: '',
            existingNumber: 0,
        };
    }

    handleInputChange = (input) => {
        this.setState({ inputNumber: input });
    };

    handleAdd = () => {
        const {existingNumber, inputNumber } = this.state;
        const parsedInput = parseFloat(inputNumber);
        if (!isNaN(parsedInput)) {
            const Result = existingNumber + parsedInput;
            this.setState({ Result, existingNumber: Result, inputNumber: 0});
        }
    };

    render() {

        const { existingNumber, inputNumber, Result } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text1}>You already got:  {existingNumber} </Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={this.handleInputChange}
                    value={inputNumber}
                    keyboardType='numeric'
                    placeholder='Enter a new number to add'
                />
                <Button title='Add' onPress={this.handleAdd}/>
                <Text style={styles.result}>Your Result: {Result}</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    padding: 20,
    },
    text1: {
        fontSize: 18, 
        marginBottom:20,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    result: {
        fontSize: 18,
        marginTop: 10,
    }
});

export default MyPractice;
