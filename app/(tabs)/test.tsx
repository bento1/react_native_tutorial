import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, StyleSheet, Image, Platform, Text, View, ImageBackground } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { StatusBar } from 'expo-status-bar';


export default function TabTestScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image source={{uri : 'https://i2.ruliweb.com/img/18/03/05/161f3826557109bbe.jpg'}} style={styles.reactLogo} />}  >
      <Image source={{uri : 'https://i2.ruliweb.com/img/18/03/05/161f3826557109bbe.jpg'}}/>
      <Text>빌리</Text>
      <Button title="button" onPress={()=>console.log('click!')}/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
