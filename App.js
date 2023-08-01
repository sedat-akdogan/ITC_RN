import React from 'react';
import Class from './src/components/Class';
import MyComponent from './src/components/MyComponent';
import AnyClass from './src/components/Practice';
import MyButton from './src/components/Button';
import MyPractice from './src/components/Practice';
import TuesdayLesson from './src/components/TuesdayLesson';
import { View } from 'react-native';


function App() {
  return (
    <View>
      <MyPractice />
      <TuesdayLesson />
    {/* // <MyButton />
    // < AnyClass />
    // <MyComponent />
    // <Class /> */}
    </View>
  );
}

export default App;
