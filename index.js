import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import App from './App';
import ImageBrowser from './ImageBrowser';

const Navigation = StackNavigator({
  App: { screen: App },
  ImageBrowser: { screen: ImageBrowser}
})

AppRegistry.registerComponent('rncameraroll', () => Navigation);
