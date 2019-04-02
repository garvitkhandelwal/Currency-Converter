import React, { Component } from 'react';
import { View, Text, ImageBackground, Keyboard, Animated, Platform } from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    if(Platform.OS === 'android'){
      let showListener = 'keyboardDidShow';
      let hideListener = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }
  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }
  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.ImageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      })
    ]).start();
  };
  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.ImageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      })
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];
    const imageStyle = [
      styles.image,
      { width: this.imageWidth, height: this.imageWidth },
    ];

    return(
      <View style={styles.container}>
        <Animated.ImageBackground
          source={require('./images/background.png')}
          style={containerImageStyle}
          resizeMode="contain"
        >
          <Animated.Image source={require('./images/logo.png')} style={imageStyle} resizeMode="contain"/>
        </Animated.ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
};

export default Logo;
