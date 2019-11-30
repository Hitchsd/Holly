import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import { WebView } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

type Props = {};
export default class App extends Component<Props> {

  render() {
  return (
<View style={{flex:1, alignItems: 'center', justifyContent: 'space-between', overflow:'hidden'}}>
  <WebView
   style={styles.webview}
   source={{uri: 'http://tmk716.ru'}}
   javaScriptEnabled={true}
   domStorageEnabled={true}
   startInLoadingState={true}
   scalesPageToFit={true} />
</View>
    );
  }
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: 'yellow',
    width: deviceWidth,
    height: deviceHeight
  }
});