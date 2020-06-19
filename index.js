/*
index.js 는 리액트 네이티브 프로젝트의 시작파일이다.
이파일을 시작으로 리액트 네이티브의 자바스크립트 코드가 번들링 된다.
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
