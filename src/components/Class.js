import React, {Component} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';


class Class extends Component {
  state = {
    count: 0,
    inputText: '',
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  reset = () => {
    this.setState({
      count: 0,
      inputText: '',
    });
  };

  handleChange = text => {
    this.setState({
      inputText: text,
    });
  };

  render() {
    const {count, inputText} = this.state;
    return (
      <SafeAreaView style={{marginTop: 50}}>
        <Text style={{textAlign: 'center', fontSize: 30}}>{count}</Text>
        <Button onPress={this.handleIncrement} title="Increment" />
        <Button onPress={this.handleDecrement} title="Decrement" />
        <Button onPress={this.reset} title="Reset" />
        <TextInput
          onChangeText={this.handleChange}
          style={{
            height: 48,
            borderColor: 'red',
            borderWidth: 1,
            marginTop: 16,
            padding: 8,
            textAlign: 'center',
          }}
          value={inputText}
        />
      </SafeAreaView>
    );
  }
}

export default Class;