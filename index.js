/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import Context from './src/Routes/Context';

AppRegistry.registerComponent(appName, () => Context);
