import React from 'react';
// import Class from './src/components/Class';
// import MyComponent from './src/components/MyComponent';
// import AnyClass from './src/components/Practice';
// import MyButton from './src/components/Button';
// import MyPractice from './src/components/Practice';
// import TuesdayLesson from './src/components/TuesdayLesson';
import { Text, View } from 'react-native';
import MyStack from './src/navigator/Navigator';
import HomeScreen from './src/navigator/HomeScreen';
import ProfileScreen from './src/navigator/ProfileScreen';
// import Navigation from './src/components/Navigation';
// import MyModal from './src/components/MyModal';
// import Pizza from './src/components/Pizza';
// import Cafe from './src/components/Cafe';


function App() {
  return (
    <View style={{flex:1}} >
      <MyStack />
      {/* <HomeScreen />
      <ProfileScreen /> */}
      {/* <Navigation /> */}
      {/* <MyModal /> */}
      {/* <Pizza /> */}
      {/* <MyPractice /> */}
      {/* <TuesdayLesson /> */}
      {/* <Cafe /> */}
      {/* // <MyButton />
        < AnyClass />
        <MyComponent />
        <Class /> */}
    </View>
  );
}

export default App;
