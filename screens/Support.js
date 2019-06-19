import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
// import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { Button, Block, Text, Input } from '../components';

class Support extends Component {
    constructor(props) {
        super(props);
        this.state= {
            matches: '',
            query: '',
            httpStatus: '',
            first: '',
            last: '',
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
                            console.log('response:', response);
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
            console.log('async after res? --> newState:', this.state);
            return Promise.resolve(1);
            //navigate to next screen
        }
        
    }//onSubmit
    
    render() {
        return (
            // <Block center middle>
            //     <Text> Support </Text>
            // </Block>
            // <ScrollableTabView
            //     style={{marginTop: 20 }}
            //     initialPage={0}
            //     renderTabBar={() => <ScrollableTabBar style={{ marginBottom: 34,  }} />}
            // 
            <React.Fragment>
                <Block style={{ marginLeft: 25 }} tabLabel='Name'>
                    <Input onChangeText={(first) => {
                        // {console.log(this.state.first)}
                        this.setState({first})}
                    }
                    
                         name='first' value={this.state.first} style={{ marginBottom: 25 }} label='First Name' full/>
                    <Input onChangeText={(last) => this.setState({last})} name='last' value={this.state.last} style={{ marginBottom: 25 }} label='Last Name' full/>
                    <Input onChangeText={(raw_address) => this.setState({raw_address})} name='raw_address' value={this.state.raw_address} style={{ marginBottom: 25 }} label='City, State' full/>
                    <Button full onPress={() => this.onSubmit()} style={{ marginBottom: 60 }} >
                        <Text height={21} spacing={0} color='white'>Search</Text>
                    </Button>
                    {/* <Text>Recent Searches</Text> */}
                </Block>
                {/* <Block style={{ marginLeft: 25 }} tabLabel='Email'>
                    <Input style={{ marginBottom: 25 }} label='Email' full/>
                    <Button full style={{ marginBottom: 10 }} >
                        <Text height={21} spacing={0} color='white'>Search</Text>
                    </Button>
                </Block>
                <Block style={{ marginLeft: 25 }} tabLabel='Phone'>
                    <Input style={{ marginBottom: 25 }} label='Phone' full/>
                    <Button full style={{ marginBottom: 10 }} >
                        <Text height={21} spacing={0} color='white'>Search</Text>
                    </Button>
                </Block>
                <Block style={{ marginLeft: 25 }} tabLabel='Address'>
                    <Input style={{ marginBottom: 25 }} label='Address' full/>
                    <Button full style={{ marginBottom: 10 }} >
                        <Text height={21} spacing={0} color='white'>Search</Text>
                    </Button>
                </Block>
                <Block style={{ marginLeft: 25 }} tabLabel='URL'>
                    <Input style={{ marginBottom: 25 }} label='URL' full/>
                    <Button full style={{ marginBottom: 10 }} >
                        <Text height={21} spacing={0} color='white'>Search</Text>
                    </Button>
                </Block> */}
                </React.Fragment>
        )
    }
}
export default Support;

