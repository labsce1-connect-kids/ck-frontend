import React, { Component } from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Modal
} from 'react-native';
import Colors from '../../constants/Colors';


export default class Loading extends Component {
  
  render() {
    return (
      <Modal
        transparent={false}
        visible={this.props.animating}
        onRequestClose={() => {
          this.animating=false;
          this.visible=false;
        }}
      >
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator 
            animating={this.props.animating} 
            size="large" 
            color={Colors.clientBlue} 
          />
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginBottom: 7
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

AppRegistry.registerComponent('Loading', () => Loading)