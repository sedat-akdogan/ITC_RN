import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
    return (
        <Button
            title='Go to Profile'
            onPress={()=> 
            Navigation.navigate('Profilr', {name: 'ITC'})
            } 
        />
    );
};

const ProfileScreen = () => {
    return (
        <Text>Welcome to {TabRouter.params.name}'s profile</Text>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Home'
                    component={HomeScreen}
                    option={{title: 'Welcome to London'}}
                />
                <Stack.Screen 
                    name='Profile'
                    component={ProfileScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({

});

export default Navigation;