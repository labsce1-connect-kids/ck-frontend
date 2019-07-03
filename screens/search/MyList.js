import React, {PureComponent, Fragment} from 'react'
import {FlatList, View, TouchableHighlight, StyleSheet} from 'react-native'
import PersonCardModal from './PersonCardModal'
import Colors from '../../constants/Colors';
import {Text} from '../../components';
// import {Text as MyText}  from 'react-native';
// import {Text}  from 'react-native';


{/* ////MyList//// */}
export default class MyList extends PureComponent {
  _keyExtractor = (item, key) =>
    item["@search_pointer_hash"] ? item["@search_pointer_hash"] : key.toString()
  // _keyExtractor = (item, index) => item["@search_pointer_hash"] 

  _renderItem = ({item, index}) => (
    <MyListItem
      // id={item.id}
      item={item}
      name={!item.names ? 'Name Not Listed' : item.names[0].display}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.matches}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        // keyExtractor={(index, key) => key.toString()}
      />
    );
  }
};


{/* ////MyListItem//// */}
class MyListItem extends PureComponent {
  render() {
    return (
      <View style={{
        // borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.clientBlue,
        marginTop: 15,
        marginBottom: 15,
        paddingLeft: 5,
        paddingBottom: 30,
      }}>
        <View style={{
          flexDirection: 'row-reverse', justifyContent: 'space-between'
        }}>
          <View>
              <PersonCardModal
                item={this.props.item}
                name={this.props.name}
              />
          </View>
          <Text style={{
            fontSize: 22, 
            lineHeight: 30, 
            color: Colors.clientBlue
          }}>
            {`${this.props.name}`}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>
            {
              (this.props.item.dob) ? 
              `Age: ${(this.props.item.dob.display)}` : 
              'Age: n/a' 
            }
          </Text>
          <Text>&nbsp;-&nbsp;</Text>
          <Text> 
            {
              (this.props.item.gender) ? 
              `Gender: ${this.props.item.gender.content}` : 
              'Gender: n/a' 
            }
          </Text>
        </View>
        <Text>
          Locations: {`\n`}
          {
            this.props.item.addresses ? //if
              this.props.item.addresses.map(
              element => {
                return (`${element.display}, `);
              }) : //else
              null
          }
        </Text>
      </View>
    )
  }
};

