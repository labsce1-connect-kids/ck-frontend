import React, { Component, PureComponent, Fragment } from 'react';
import { StyleSheet, FlatList, View, Image, Modal, TouchableHighlight, ScrollView, Platform } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { Button, Block, Text, Input } from '../../components';


export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      first: 'Clark',
      last: 'Kent',
      email: 'clark.kent@example.com',
      number: '17039803804',
      numberMatch: '',
      url: 'https://twitter.com/dreamingwell',
      house: '602',
      street: 'W College Drive',
      city: 'Brainerd',
      state: 'MN',
      zip_code: '56401',
    })
  }

  // below not currently used //
  resetState() {
    this.setState({
      first: '',
      last: '',
      raw_address: '',
      email: '',
      house: '',
      street: '',
      city: '',
      state: '',
      zip_code: '',
      url: '',
      number: '',
    });
  }

  render() {
    return (
      <Block>
        <ScrollableTabView
          style={{ marginTop: 5 }}
          initialPage={0}
          renderTabBar={() =>
            <ScrollableTabBar
              activeTextColor='#008eb6'
              style={{ marginBottom: 34 }} />}>
{/* Name */}
          <Block style={{}} tabLabel='Name'>
            <Input onChangeText={(first) => { this.setState({ first }) }}
              name='first'
              value={this.state.first}
              style={{ marginBottom: 25 }}
              label='First Name'
              full
            />
            <Input onChangeText={(last) => this.setState({ last })} name='last' value={this.state.last} style={{ marginBottom: 25 }} label='Last Name' full />
            <Button full onPress={() => this.props.submitName(this.state.first, this.state.last)} style={{ marginBottom: 20 }} >
              <Text height={21} spacing={0} color='white'>Search By Name</Text>
            </Button>
          </Block>
{/* Email */}
          <Block style={{}} tabLabel='Email'>
            <Input onChangeText={(email) => this.setState({ email })} name='email' value={this.state.email} style={{ marginBottom: 25 }} label='Email' full />
            <Button onPress={() => this.props.submitEmail(this.state.email)} full style={{ marginBottom: 20 }} >
              <Text height={21} spacing={0} color='white'>Search By Email</Text>
            </Button>
          </Block>
{/* Phone */}
          <Block style={{}} tabLabel='Phone'>
            <Input onChangeText={(number) => this.setState({ number })} name='number' value={this.state.number} style={{ marginBottom: 25 }} label='Phone Number' placeholder='17039803804' full />
            <Button onPress={() => this.props.submitPhone(this.state.number)} full style={{ marginBottom: 20 }} >
              <Text height={21} spacing={0} color='white'>Search By Phone</Text>
            </Button>
          </Block>
{/* Address */}
          <Block style={{ flex: 1, }} tabLabel='Address'>
            <View style={{ flexDirection: 'row' }}>
              <Input onChangeText={(house) => this.setState({ house })} name='house' value={this.state.house} style={{ marginRight: 15, width: 185 }} label='House Number' placeholder='4428' required />
              <Input onChangeText={(street) => this.setState({ street })} name='street' value={this.state.street} style={{ ...streetWidth }} label='Street Name' placeholder='Garden Gate' required />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <Input onChangeText={(city) => this.setState({ city })} name='city' value={this.state.city} style={{ marginRight: 15, width: 150 }} label='City' placeholder='Fairfax' required />
              <Input onChangeText={(state) => this.setState({ state })} name='state' value={this.state.state} style={{ marginRight: 15, width: 65 }} label='State' placeholder='VA' required />
              <Input onChangeText={(zip_code) => this.setState({ zip_code })} name='zip_code' value={this.state.zip_code} style={{ ...zipCodeWidth }} label='Zipcode' placeholder='22031' required />
            </View>
            <View style={{ marginTop: 25, marginBottom: 20 }}>
              <Button onPress={() => this.props.submitAddress(this.state.house, this.state.street, this.state.city, this.state.state, this.state.zip_code)} full >
                <Text height={21} spacing={0} color='white'>Search By Address</Text>
              </Button>
            </View>
          </Block>
{/* url */}
          <Block style={{}} tabLabel='URL'>
            <Input onChangeText={(url) => this.setState({ url })} name='url' value={this.state.url} placeholder='https://twitter.com/dreamingwell' style={{ marginBottom: 25 }} label='URL' full />
            <Button onPress={() => this.props.submitURL(this.state.url)} full style={{ marginBottom: 20 }} >
              <Text height={21} spacing={0} color='white'>Search By URL</Text>
            </Button>
          </Block>
{/* Recent */}
          <Block center tabLabel='Recent Searches'>
            <Text>Recent Searches: </Text>
            <Text style={styles.name}>Coming Soon</Text>
          </Block>
        </ScrollableTabView>
      </Block>
    )
  }
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   marginTop: 5,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // flatview: {
  //   justifyContent: 'flex-start',
  //   paddingTop: 10,
  //   borderRadius: 2,
  //   paddingRight: 30
  // },
  name: {
    fontFamily: 'futura-light',
    fontSize: 20,
    color: '#008eb6',
    lineHeight: 30

  },
  text: {
    fontSize: 12,
    lineHeight: 14

  },
  // email: {
  //   color: '#000'
  // }
});

const streetWidth = Platform.select({
  android: { width: 160 },
  ios: { width: 124 },
});

const zipCodeWidth = Platform.select({
  android: { width: 115 },
  ios: { width: 80 },
});
