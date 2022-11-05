import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Button } from 'react-native';
import Video from 'react-native-video';

const VideoComponent = () => {
  return (
    <View style={{ width: '100%', height: 400 }}>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        resizeMode="contain"
        style={StyleSheet.absoluteFill}
        onBuffer={() => console.log('Using ExoPlayer')} // To check whether ExoPlayer is used
      />
    </View>
  );
};

const App = () => {
  const [key, setKey] = useState(Date.now());
  const [mount, setMount] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setKey(Date.now());
      }, 50);

      setTimeout(() => {
        setKey(Date.now());
      }, 60);

      setTimeout(() => {
        setKey(Date.now());
      }, 70);

      setTimeout(() => {
        setKey(Date.now());
      }, 80);
    }, 3000);
  }, []);

  return (
    <SafeAreaView>
      <Button title="Unmount" onPress={() => setMount(false)} />

      {mount && (
        <View key={key}>
          <VideoComponent />
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
