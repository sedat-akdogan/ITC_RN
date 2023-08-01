import React from 'react';
import Class from './src/components/Class';
import MyComponent from './src/components/MyComponent';
import AnyClass from './src/components/Practice';
import MyButton from './src/components/Button';
import MyPractice from './src/components/Practice';
import TuesdayLesson from './src/components/TuesdayLesson';
import { SafeAreaView, View } from 'react-native';
import LevelOne from './src/components/LevelOne';


function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "red", flexDirection: "row"}}>
      {/* <MyPractice /> */}
      {/* <TuesdayLesson /> */}
      <LevelOne />
      <LevelOne />
      <LevelOne />
      {/* // <MyButton />
    // < AnyClass />
    // <MyComponent />
    // <Class /> */}
    </SafeAreaView>
  );
}

export default App;
