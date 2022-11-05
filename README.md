<h1 align="center">
  react-native-video ExoPlayer zombie audio bug
</h1>

## Steps To Reproduce

1. **Install dependencies**

   ```sh
   yarn
   ```

1. **Set up ExoPlayer**

   Add the following to `android/settings.gradle`

   ```sh
   include ':react-native-video'
   project(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android-exoplayer')
   ```

   ---OR---

   Add the following to `react-native.config.js`

   ```sh
   'react-native-video': {
     platforms: {
       android: {
         sourceDir: '../node_modules/react-native-video/android-exoplayer',
       },
     },
   },
   ```

1. **Start metro & app**

   ```sh
   yarn start
   ```

   ```sh
   yarn android
   ```

1. 3 seconds after video starts playing, `setKey` will force `<Video>` component to re-mount, listen for duplicate audio streams

1. Press 'Unmount' button to unmount `<Video>` component and obvserve how audio steam is still playing despite there being no active video player
