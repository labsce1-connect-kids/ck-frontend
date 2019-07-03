import React, { PureComponent, Fragment } from 'react';
import { Modal,   TouchableHighlight, View, StyleSheet } from 'react-native';
import {Block, Text} from '../../components'
import { Ionicons } from '@expo/vector-icons';


export default class PersonCardModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state={modalVisible: false}
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
}

  render() {
    return (
      <Block>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false)
          }}>
          <TouchableHighlight style={{marginTop: 50, marginBottom: 50,marginLeft: 10, }}
            onPress={() => {
              this.setModalVisible(false);
            }}>
              <View style={{flexDirection: 'row', }}>
                <Text style={{lineHeight: 34}}>
                  <Ionicons name="ios-arrow-dropleft" size={36} />
                </Text>  
                <Text size={24} style={{lineHeight: 34}} >
                  &nbsp;Return to Results
                </Text>
              </View>
          </TouchableHighlight>
          
          <View
            style={{
              // marginTop: 22,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={styles.name}>
                {`${this.props.name}`}
              </Text>
              <View style={{flexDirection: 'row'}} >
                <Text style={styles.text}>
                  {
                    (this.props.item.dob) ? 
                    `Age: ${(this.props.item.dob.display)}` : 
                    'Age: n/a' 
                  }
                </Text>
                <Text style={styles.text}>&nbsp;-&nbsp;</Text>
                <Text style={styles.text}> 
                  {
                    (this.props.item.gender) ? 
                    `Gender: ${this.props.item.gender.content}\n` : 
                    'Gender: n/a \n' 
                  }
                </Text>
              </View>
              <Text style={styles.text}>
                <Text style={styles.title}>Phone Numbers:{'\n'}</Text> 
                {
                  this.props.item.phones ? 
                  (this.props.item.phones.map(el => `     ${el.display},\n`)) : 
                  `n/a`
                }
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Social Media:{'\n'}</Text>
                {
                  this.props.item.user_ids ? 
                  (this.props.item.user_ids.map(el => `     ${el.content},\n`)) : 
                  `n/a`
                }
              </Text>
            </View>
          </View>
        </Modal>
      <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          {/* <Ionicons name="md-information-circle" size={26} color="orange" /> */}
          <Ionicons name="md-eye" size={26} color="orange" />
        </TouchableHighlight>
      </Block>
      
    )
  }
};

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    color: '#008eb6',
    lineHeight: 30
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    textDecorationLine: 'underline',
  },
});
