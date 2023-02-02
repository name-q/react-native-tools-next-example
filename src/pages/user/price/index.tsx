import React, {useState} from 'react';
import {Image, Text, View, TouchableHighlight,Platform} from 'react-native';
import {Hoc} from '../../../components';
import {
  ImageBackground,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const isIOS = Platform.OS === 'ios'
const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const Price = () => {
  const [priceStr, setPriceStr] = useState('');
  console.log(priceStr,'<<<<priceStr')
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
        <SafeAreaView
          style={{flex: 1, position: 'relative'}}>
          <AmountInput priceStr={priceStr} setPriceStr={setPriceStr} />
        </SafeAreaView>
    </View>
  );
};

interface AmountInputProps {
  priceStr: string;
  setPriceStr: Function;
}
const AmountInput: React.FC<AmountInputProps> = ({priceStr, setPriceStr}) => {
  return (
    <View
      style={{
        position: 'absolute',
        width: screenWidth,
        backgroundColor: '#d8d8e0',
        left: 0,
        bottom: 0,
        height: 230,
        display: 'flex',
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: screenWidth * 0.75,
          justifyContent: 'space-around',
          alignContent: 'space-around',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 5,
        }}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'ABC'].map(
          (value, index) => (
            <TouchableHighlight
              key={index}
              underlayColor={'#abb5be'}
              onPress={() => {
                if (value === 'ABC') {
                  return;
                }
                setPriceStr(priceStr + value);
              }}
              style={{
                backgroundColor: '#fff',
                borderRadius: 4,
                height: 46,
                width: (screenWidth * 0.75) / 3 - 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: '#7b7b7b',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                }}>
                {value}
              </Text>
            </TouchableHighlight>
          ),
        )}
      </View>
      <View style={{width: screenWidth * 0.25}}>
        <TouchableHighlight
          underlayColor={'#abb5be'}
          onPress={() => {
            setPriceStr(priceStr.substring(0, priceStr.length - 1));
          }}
          style={{
            width: screenWidth * 0.23,
            height: 100,
            backgroundColor: '#abb5be',
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            borderBottomColor: '#7b7b7b',
            borderBottomWidth: 1,
          }}>
          <Image
            source={require('../../../../ui/left2.png')}
            resizeMode={'stretch'}
            style={{width: 23, height: 15.5}}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'#01a990'}
          style={{
            width: screenWidth * 0.23,
            height: 101,
            backgroundColor: '#01a990',
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            borderBottomColor: '#7b7b7b',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
            }}>
            确定
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Hoc(Price);
