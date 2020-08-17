/**
 * @format
 */
// importing node's globals in react-native
import './global.js';
import { AppRegistry } from 'react-native';
import App from './src/app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
