import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Image } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { Button, Block, Text, Input } from '../components';


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
      fontWeight: '900',
    },
    email: {
      color: '#000'
    }
    
  });

class Support extends Component {
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

        }
    }
    changeHandler = e => {
        // e.preventDefault(e);
        this.setState({
          [e.target.name]: e.target.value
        });
      };
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
                            console.log('STRAIGHT FROM API response:', response);
                            this.setState({
                                matches: response.possible_persons,
                                query: response.query,
                            });
                            console.log('These are the MATCHES:NAMES respones', this.state.matches)
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
            console.log('async after res? --> newState:', this.state);
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
                tabBarActiveTextColor={'red'} 
                style={{ marginBottom: 34 }} />}>
                {/* <React.Fragment> */}
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
                        <FlatList 
                        style={{ marginBottom: 60 }}

                        // Sample data
                        // data={[{ name: "bob", age: 23 }, {name: "tim" }, 
                        //     { name: "teddy" }, {name: "bear" }, 
                        //     { name: "joe" }, {name: "grace" },
                        //     { name: "rose" }, {name: "timothy" },
                        //     { name: "arthur" }, {name: "dev" },
                        //     { name: "code" }, {name: "software" } ]}
                        
                        // api starting @ possible_persons
                        data={this.state.matches}
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={true}
                        keyExtractor={(item, index) => index.toString()}
                        styles={styles.container}
                        renderItem={({ item }) =>
                            <View style={styles.flatview}>
                                <Text style={styles.name}>
                                    {`${item.names[0].display}`}
                                </Text>
                                <Text style={styles.email}>Gender: {`${JSON.stringify(item.gender)}`} </Text>
                                <Text style={styles.email}>Age: {`${JSON.stringify(item.dob)}`} </Text>
                                <Text style={styles.email}>Phone: {`${JSON.stringify(item.phones)}`} </Text>
                                <Text style={styles.email}>Location: {`${item.addresses[0].display}`} </Text>
                                <Text style={styles.email}>Languages: {`${item.languages[0].display}`} </Text>
                                <Text style={styles.email}>Url {`${JSON.stringify(item.url)}`} </Text>
                            </View>
                            }
                        />
                    </Block>
                    <Block style={{ marginLeft: 25 }} tabLabel='Email'>
                        <Input style={{ marginBottom: 25 }} label='Email' full/>
                        <Button full style={{ marginBottom: 10 }} >
                            <Text height={21} spacing={0} color='white'>Search By Email</Text>
                        </Button>
                    </Block>
                    <Block style={{ marginLeft: 25 }} tabLabel='Phone'>
                        <Input style={{ marginBottom: 25 }} label='Phone' full/>
                        <Button full style={{ marginBottom: 10 }} >
                            <Text height={21} spacing={0} color='white'>Search By Phone</Text>
                        </Button>
                    </Block>
                    <Block style={{ marginLeft: 25 }} tabLabel='Address'>
                        <Input style={{ marginBottom: 25 }} label='Address' full/>
                        <Button full style={{ marginBottom: 10 }} >
                            <Text height={21} spacing={0} color='white'>Search By Address</Text>
                        </Button>
                    </Block>
                    <Block style={{ marginLeft: 25 }} tabLabel='URL'>
                        <Input style={{ marginBottom: 25 }} label='URL' full/>
                        <Button full style={{ marginBottom: 10 }} >
                            <Text height={21} spacing={0} color='white'>Search By URL</Text>
                        </Button>
                    </Block>
                    <Block center tabLabel='Recent Searches'>
                        <Text>Recent Searches: </Text>
                        
                    </Block>
                {/* </React.Fragment> */}
            </ScrollableTabView>
        )
    }
}
export default Support;

