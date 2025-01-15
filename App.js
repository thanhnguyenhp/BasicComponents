import React from 'react';
import { Text, View } from 'react-native';
import Button from './Components/Button';
import Cat from './Components/Cat'

const onOK = () => {
  console.log("OK");
}

const App = () => {
  return (
    <View>
      <Cat name="My Cat" age="18" />
      <Button title="Duyệt" onMyPress={onOK} />
      <Button title="Submit" onMyPress={() => { console.log("Submit") }} />
    </View>
  );
}

export default App;
