// import NetInfo from '@react-native-community/netinfo';
import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

// import {Image} from 'react-native';
// import {ActivityIndicator, View} from 'react-native';
// const index = require('./build/index.html');
// const source = require('./build/index.html');
// const webviewSource = Image.resolveAssetSource(source);
class MyWeb extends Component {
  // constructor() {
  //   super();
  //   this.state = {};

  //   NetInfo.fetch().then((state) => {
  //     console.log('Connection type', state.type);
  //     console.log('Is connected?', state.isConnected);

  //     this.setState({
  //       type: state.type,
  //     });
  //   });
  // }

  render() {
    // const {type} = this.state;

    // if (!type) {
    //   return null;
    // }

    // const low = type !== 'wifi';
    return <WebView source={{uri: 'file:///android_asset/index.html'}} />;
    // return (
    //   <WebView
    //     source={require('./android/app/src/main/assets/index.html')}
    //     startInLoadingState
    //   />
    //   // <WebView url="./android/app/src/main/assets/index.html" />
    // );
  }
}

export default MyWeb;
