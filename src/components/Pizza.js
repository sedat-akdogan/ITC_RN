import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';


const Pizza = () => {
    const [text, setText] = useState('');
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='Type here to translate!'
                defaultValue='text'
                onChangeText={newText => setText(newText)}
            />
            <Text style={{padding: 10, fontSize: 44}}>
                {text.
                split(' ')
                .map(word => word && '🍕')
                .join(' ')}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 100,
      borderWidth: 3,
      borderColor: 'red',
      fontSize: 20,
    },
  });

export default Pizza;