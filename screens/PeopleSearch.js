import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Image, Modal, TouchableHighlight } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { Button, Block, Text, Input } from '../components';
import ModalExample from './SearchCardModal';
// import { Ionicons } from '@expo/vector-icons';
// import  IconClose  from '../components/IconClose'
{/* <Ionicons name="closecircle" size={32} color="red" /> */}
// import { FontAwesome } from '@expo/vector-icons';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    flatview: {
      justifyContent: 'flex-start',
      paddingTop: 10,
      borderRadius: 2,
      paddingRight: 30
    },
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
    email: {
      color: '#000'
    }
    
  });

class PeopleSearch extends Component {
    constructor(props) {
        super(props);
        this.state= {
            matches: '',
            query: '',
            httpStatus: '',
            first: 'Clark',
            last: 'Kent',
            raw_address: '',
            email: '',
            modalVisible: false,
            number: '17039803804',
            numberMatch: '',
            url: 'https://twitter.com/dreamingwell',
            urlMatches: '',
            urlNames: ''
        }
    }
    //below key for <FlatList/>
    _keyExtractor = (item, index) => item["@search_pointer_hash"];

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    changeHandler = e => {
        // e.preventDefault(e);
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      submitURL() {
        const url = 'https://dev.search.connectourkids.org/api/search-v2';
        let encoded;
        const encodedName = encodeURI((`{"urls": [{"url": "${this.state.url}"}]}`));
        encoded = encodedName;
        const personJson = JSON.stringify({person:encoded})

        const request = new Request(url, {
            method: 'POST', 
            body: personJson
        });

        const callApi = async () => {
                
            try {
                await fetch(request)
                .then(response => response.json()).then(response => {
                    // alert('2then');
                    console.log('API response:', response.query);
                    // console.warn('http_status:', response["@http_status_code"]);
                    this.setState({
                        urlNames: response.person.names,
                        urlMatches: response.person.addresses,
                        query: response.query.usernames,
                    });
                    return response;
                })
                .catch((error, response) => {
                    // alert('1catch')
                    console.error('req failed', error);
                })
            } catch(err) {console.error('2catch', err);} 
            await reDirect();

}
        //callApi
        callApi();
        const reDirect = () => {
            // if @http_status_code === 200 // ??? '@' symbol
            //reset input
            this.setState({url: ''})
            // console.log('async after res? --> newState:', this.state.matches);
            // console.log('here',this.state.matches[0]["@search_pointer_hash"])
            // ...
            // return Promise.resolve(2);
            //navigate to next screen
        }
      }

      submitPhone() {
        const url = 'https://dev.search.connectourkids.org/api/search-v2';

        let encoded;
        const encodedName = encodeURI((`{"phones": [{"number": "${this.state.number}"}]}`));
        encoded = encodedName;
        const personJson = JSON.stringify({person:encoded})

        const request = new Request(url, {
            method: 'POST', 
            body: personJson
        });

        const callApi = async () => {
                
            try {
                await fetch(request)
                .then(response => response.json()).then(response => {
                    // alert('2then');
                    // console.log('STRAIGHT FROM API response:', response);
                    // console.warn('http_status:', response["@http_status_code"]);
                    this.setState({
                        numberMatch: response.possible_persons,
                        query: response.query,
                    });
                    return response;
                })
                .catch((error, response) => {
                    // alert('1catch')
                    console.error('req failed', error);
                })
            } catch(err) {console.error('2catch', err);} 
            await reDirect();

}
        //callApi
        callApi();
        const reDirect = () => {
            // if @http_status_code === 200 // ??? '@' symbol
            //reset input
            this.setState({number: ''})
            // console.log('async after res? --> newState:', this.state.matches);
            // console.log('here',this.state.matches[0]["@search_pointer_hash"])
            // ...
            // return Promise.resolve(2);
            //navigate to next screen
        }
        
    }//onSubmit
    



    onSubmit() {
            // console.log('CALLED: onSubmit()');
        const url = 'https://dev.search.connectourkids.org/api/search-v2';

        let encoded;
        const encodedName = encodeURI((`{"names": [{"first": "${this.state.first}","last": "${this.state.last}"}]}`));
        // const encodedName = encodeURI((`{"names": [{"first": "${this.state.first}","last": "${this.state.last}"}],"addresses":[{"raw_address":"${this.state.raw_address}"}]}`));
        
        // phones
        // {"phones": [{"number": "17039803804"}]}

        // address
        // {"addresses": [{"house": "8901", "street": "Garden Gate", "city":"Fairfax", "state": "VA", "zip_code": "22031"}]}

        // url
        // {"urls": [{"url": "https://twitter.com/dreamingwell"}]}


        encoded = encodedName;
            // console.log('encoded:\n', encoded);
        const personJson = JSON.stringify({person:encoded})
            // console.log('person-encoded-json:\n', personJson);

            const request = new Request(url, {
                method: 'POST', 
                body: personJson
            });
            const callApi = async () => {
                
                    try {
                        await fetch(request)
                        .then(response => response.json()).then(response => {
                            // alert('2then');
                            // console.log('STRAIGHT FROM API response:', response);
                            // console.warn('http_status:', response["@http_status_code"]);
                            this.setState({
                                matches: response.possible_persons,
                                query: response.query,
                            });
                            return response;
                        })
                        .catch((error, response) => {
                            // alert('1catch')
                            console.error('req failed', error);
                        })
                    } catch(err) {console.error('2catch', err);} 
                    await reDirect();

        }//callApi
        callApi();
        const reDirect = () => {
            // if @http_status_code === 200 // ??? '@' symbol
            //reset input
            this.setState({first: '', last: '', raw_address: ''})
            // console.log('async after res? --> newState:', this.state.matches);
            // console.log('here',this.state.matches[0]["@search_pointer_hash"])
            // ...
            return Promise.resolve(1);
            //navigate to next screen
        }
        
    }//onSubmit
    
    render() {
        return (
            <ScrollableTabView
                style={{marginTop: 5 }}
                initialPage={0}
                renderTabBar={() => 
                <ScrollableTabBar 
                activeTextColor='#008eb6'
                style={{ marginBottom: 34 }} />}>
                    <Block style={{ marginLeft: 25 }} tabLabel='Name'>
                        <Input 
                            onChangeText={(first) => {
                            // {console.log(this.state.first)}
                            this.setState({first})} 
                            }
                            name='first' 
                            value={this.state.first} 
                            style={{ marginBottom: 25 }} 
                            label='First Name' 
                            full
                        />
                        <Input onChangeText={(last) => this.setState({last})} name='last' value={this.state.last} style={{ marginBottom: 25 }} label='Last Name' full/>
                        {/* <Input onChangeText={(raw_address) => this.setState({raw_address})} name='raw_address' value={this.state.raw_address} style={{ marginBottom: 25 }} label='City, State' full/> */}
                            <Button full onPress={() => this.onSubmit()} style={{ marginBottom: 20 }} >
                                <Text height={21} spacing={0} color='white'>Search By Name</Text>
                            </Button>
                        {/* {console.log('ITEM: ', this.state.matches[0].search_pointer)} */}
                        <FlatList 
                        keyExtractor={this._keyExtractor}
                        style={{ marginBottom: 60 }}
                        // api starting @ possible_persons
                        data={this.state.matches}
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={true}
                        styles={styles.container}
                        renderItem={({ item }) =>
                            <React.Fragment>
                                <View style={{marginTop: 22}}>
                                    <Modal
                                    animationType="slide"
                                    transparent={false}
                                    visible={this.state.modalVisible}
                                    onRequestClose={() => {
                                        // Alert.alert('Modal has been closed.');
                                    }}>
                                        
                                    <TouchableHighlight style={{marginTop: 50, marginLeft: 50}}
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                            {/* <FontAwesome.Button name='close' backgroundColor='red' onPress={this.setModalVisible(!this.state.modalVisible)}/> */}
                                            {/* <IconClose /> */}
                                        <Text size={20}>Go Back</Text>
                                    </TouchableHighlight>      
                                    <View 
                                        style={{
                                            marginTop: 22,
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <View>
                                            
                                            {/* name */}
                                            <Text 
                                                style={styles.name}>
                                                {`${item.names[0].display}`}
                                            </Text>
                                            <Text style={styles.email}>
                                                Phone Numbers:{`\n`} {item.phones ? (item.phones.map(el => `${el.display},\n` )) : `n/a`}
                                            </Text>
                                        {/* {console.log('PHONES INFO: ', item.phones)} */}
{/* */}
                                    
{/* */}                                 
                                        </View>
                                    </View>
                                    </Modal>
{/* */} 
{/* */}
                            </View>
                            <View style={styles.flatview}>
                                <Block
                                    style={{
                                        borderColor: '#bbb', 
                                        borderBottomWidth: 1, 
                                        borderStyle: 'solid',
                                        paddingBottom: 15,
                                        marginLeft: 15,
                                    }}
                                >
                                    <TouchableHighlight onPress={() => {this.setModalVisible(true);}}>
                                        <Text style={styles.name}>
                                            {`${item.names[0].display}`}
                                        </Text>
                                    </TouchableHighlight>
                                    <Text style={styles.text}> 
                                        {(item.gender) ? `Gender: ${item.gender.content}` : 'Gender: n/a' }                             
                                    
                                    </Text>
                                    <Text style={styles.text}>
                                        {(item.dob) ? `Age: ${item.dob.display}` : 'Age: n/a' }
                                    </Text>
                                    <Text style={styles.text}>Locations: {item.addresses.map((element, index) => {
                                        return (
                                        `${element.display}, ` 
                                        )      
                                    })}
                                    </Text>
                                </Block>
                            </View>
                            </React.Fragment>
                            }
                        />
                    </Block>
{/* */} 
                    {/* <Block style={{ marginLeft: 25 }} tabLabel='Email'>
                        <Input style={{ marginBottom: 25 }} label='Email' full/>
                        <Button full style={{ marginBottom: 10 }} >
                            <Text height={21} spacing={0} color='white'>Search By Email</Text>
                        </Button>
                    </Block> */}
                    <Block style={{ marginLeft: 25 }} tabLabel='Phone'>
                        <Input onChangeText={(number) => this.setState({number})} name='number' value={this.state.number} style={{ marginBottom: 25 }} label='Phone Number' placeholder='17039803804' full/>
                        <Button onPress={() => this.submitPhone()} full style={{ marginBottom: 10 }} >
                            <Text height={21} spacing={0} color='white'>Search By Phone</Text>
                        </Button>
                        <FlatList 
                        keyExtractor={this._keyExtractor}
                        style={{ marginBottom: 60 }}
                        // api starting @ possible_persons
                        data={this.state.numberMatch}
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={true}
                        styles={styles.container}
                        renderItem={({ item }) =>
                            <React.Fragment>
                                <View style={{marginTop: 22}}>
                                    <Modal
                                    animationType="slide"
                                    transparent={false}
                                    visible={this.state.modalVisible}
                                    onRequestClose={() => {
                                        // Alert.alert('Modal has been closed.');
                                    }}>
                                        
                                    <TouchableHighlight style={{marginTop: 50, marginLeft: 50}}
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                            {/* <FontAwesome.Button name='close' backgroundColor='red' onPress={this.setModalVisible(!this.state.modalVisible)}/> */}
                                            {/* <IconClose /> */}
                                        <Text size={20}>Go Back</Text>
                                    </TouchableHighlight>      
                                    <View 
                                        style={{
                                            marginTop: 22,
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <View>
                                            
                                            {/* name */}
                                            <Text 
                                                style={styles.name}>
                                                {`${item.names}`}
                                            </Text>
                                            <Text style={styles.email}>
                                                Phone Numbers:{`\n`} {item.phones ? (item.phones.map(el => `${el.display},\n` )) : `n/a`}
                                            </Text>
                                            <Text>
                                                User Id:{`\n`} {item.user_ids ? (item.user_ids.map(el => `${el.content},\n` )) : `n/a`}
                                            </Text>
                                        {/* {console.log('PHONES INFO: ', item.phones)} */}
{/* */}
                                    
{/* */}                                 
                                        </View>
                                    </View>
                                    </Modal>
{/* */} 
{/* */}
                            </View>
                            <View style={styles.flatview}>
                                <Block
                                    style={{
                                        borderColor: '#bbb', 
                                        borderBottomWidth: 1, 
                                        borderStyle: 'solid',
                                        paddingBottom: 15,
                                        marginLeft: 15,
                                    }}
                                >
                                    <TouchableHighlight onPress={() => {this.setModalVisible(true);}}>
                                        <Text style={styles.name}>
                                        {(item.names) ? `${item.names[0].display}` : 'Name: n/a' }
                                        </Text>
                                    </TouchableHighlight>
                                    <Text style={styles.text}> 
                                        {(item.gender) ? `Gender: ${item.gender.content}` : 'Gender: n/a' }                             
                                    
                                    </Text>
                                    <Text style={styles.text}>
                                        {(item.dob) ? `Age: ${item.dob.display}` : 'Age: n/a' }
                                    </Text>
                                    {/* <Text style={styles.text}>Locations: {item.addresses.map((element, index) => {
                                        return (
                                        `${element.display}, ` 
                                        )      
                                    })}
                                    </Text> */}
                                    <Text>
                                        Location: {item.addresses ? (item.addresses.map(el => ` ${el.display} ` )) : `n/a`}
                                    </Text>
                                    {/* <Text>
                                    {(item.addresses) ? `Location: ${item.addresses[0].display}` : 'Location: n/a' }
                                    </Text> */}
                                </Block>
                            </View>
                            </React.Fragment>
                            }
                        />
                    </Block>




                    <Block style={{ marginLeft: 25 }} tabLabel='Address'>
                        <Input style={{ marginBottom: 25 }} label='House Number' placeholder='4428' full/>
                        <Input style={{ marginBottom: 25 }} label='Street Name' placeholder='Garden Gate' required full/>
                        <Input style={{ marginBottom: 25 }} label='City' placeholder='Fairfax' required full/>
                        <Input style={{ marginBottom: 25 }} label='State' placeholder='VA' required full/>
                        <Input style={{ marginBottom: 25 }} label='Zipcode' placeholder='22031' required full/>
                        <Button full style={{ marginBottom: 10 }} >
                            <Text height={21} spacing={0} color='white'>Search By Address</Text>
                        </Button>
                    </Block>
                    <Block style={{ marginLeft: 25 }} tabLabel='URL'>
                        <Input onChangeText={(url) => this.setState({url})} name='url' value={this.state.url} placeholder='https://twitter.com/dreamingwell' style={{ marginBottom: 25 }} label='URL' full/>
                        <Button onPress={() => this.submitURL()} full style={{ marginBottom: 10 }} >
                            <Text height={21} spacing={0} color='white'>Search By URL</Text>
                        </Button>
                        <FlatList 
                        keyExtractor={(index, key) => key.toString()}
                        style={{ marginBottom: 60 }}
                        // api starting @ possible_persons
                        data={this.state.urlMatches}
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={true}
                        styles={styles.container}
                        renderItem={({ item }) =>
                            <React.Fragment>
                                <View style={{marginTop: 22}}>
                                    <Modal
                                    animationType="slide"
                                    transparent={false}
                                    visible={this.state.modalVisible}
                                    onRequestClose={() => {
                                        // Alert.alert('Modal has been closed.');
                                    }}>
                                        
                                    <TouchableHighlight style={{marginTop: 50, marginLeft: 50}}
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                            {/* <FontAwesome.Button name='close' backgroundColor='red' onPress={this.setModalVisible(!this.state.modalVisible)}/> */}
                                            {/* <IconClose /> */}
                                        <Text size={20}>Go Back</Text>
                                    </TouchableHighlight>      
                                    <View 
                                        style={{
                                            marginTop: 22,
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <View>
                                            
                                            {/* name */}
                                            <Text key={item}
                                                style={styles.name}>
                                                {`${this.state.urlNames[0].display}`} {`\n`}
                                                {`${item["display"]}`}
                                                {/* User Id:{`\n`} {item.names ? (item.names.map(el => `${el.first},\n` )) : `n/a`} */}
                                            </Text>
                                            {/* <Text style={styles.email}>
                                                Location: {item ? (item.map(el => `${el.display}` )) : `n/a`}
                                            </Text> */}
                                            {/* <Text>
                                                User Id:{`\n`} {item.user_ids ? (item.user_ids.map(el => `${el.content},\n` )) : `n/a`}
                                            </Text> */}
                                        {/* {console.log('PHONES INFO: ', item.phones)} */}
{/* */}
                                    
{/* */}                                 
                                        </View>
                                    </View>
                                    </Modal>
{/* */} 
{/* */}
                            </View>
                            <View style={styles.flatview}>
                                <Block
                                    style={{
                                        borderColor: '#bbb', 
                                        borderBottomWidth: 1, 
                                        borderStyle: 'solid',
                                        paddingBottom: 15,
                                        marginLeft: 15,
                                    }}
                                >
                                    <TouchableHighlight onPress={() => {this.setModalVisible(true);}}>
                                        <Text style={styles.name}>
                                        {this.state.urlNames[0].display}
                                        </Text>
                                    </TouchableHighlight>
                                    <Text style={styles.text}> 
                                        {item.display}           
                                    
                                    </Text>
                                </Block>
                            </View>
                            </React.Fragment>
                            }
                        />
                    </Block>



                    <Block center tabLabel='Recent Searches'>
                        <Text>Recent Searches: </Text>
                    </Block>
            </ScrollableTabView>
        )
    }
}
export default PeopleSearch;

