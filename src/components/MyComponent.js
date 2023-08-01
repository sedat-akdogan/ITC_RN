import React, { Component, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

class MyComponent extends Component {
    constructor() {
        super();
        this.state = { Counter: 0 }
    };

    incCount() {
        this.setState({
            Counter: this.state.Counter + 1
        });
    }

    decCount() {
        if (this.state.Counter > 0) {
            this.setState({
                Counter: this.state.Counter - 1
            });
        }
    }

    reSet() {
        this.setState ({
            Counter: 0
        })
    }

    render() {
        return (
            <SafeAreaView>
                <Text style={styles.text}>Counter: {this.state.Counter}</Text>
                <Button onPress={this.incCount.bind(this)} title="Increase Counter" />
                <Button onPress={this.decCount.bind(this)} title="Decrease Counter" />
                <Button style={styles.last} onPress={this.reSet.bind(this)} title="Reset Counter" />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        marginTop: 50,
        marginBottom: 20,
        color: "darkblue",
        fontSize: 30,
        alignSelf: "center"
    }
})

export default MyComponent;