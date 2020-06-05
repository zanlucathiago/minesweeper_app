import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return <WebView source={{uri: __DEV__ ? 'http://10.0.2.2:3000/' : 'file:///android_asset/index.html'}} />;
  }
}

export default MyWeb;
