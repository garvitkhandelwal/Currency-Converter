import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import Logo from '../components/Logo'
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'INR';
const TEMP_BASE_PRICE = '10';
const TEMP_QUOTE_PRICE = '690';
const TEMP_CONVERSION_RATE = 69;
const TEMP_CONVERSION_DATE = new Date();


class Home extends Component {

  handlePressBaseCurrency = () => {
    console.log('Base Currency!');
  }
  handlePressQuoteCurrency = () => {
    console.log('Quote Currency!');
  }
  handleChangeText = (text) => {
    console.log('changed text ', text);
  }
  handleSwapCurrency = () => {
    console.log('press swap currency');
  }

  render() {
    return (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <KeyboardAvoidingView behavior="padding">
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          defaultValue={TEMP_QUOTE_PRICE}
          editable={false}
        />
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          conversionRate={TEMP_CONVERSION_RATE}
          conversionDate={TEMP_CONVERSION_DATE}
        />
        <ClearButton
          text="Reverse Currencies"
          onPress={this.handleSwapCurrency}
        />
      </KeyboardAvoidingView>
    </Container>
  );
  }
}

export default Home;
