import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Image, Modal, TouchableHighlight, Platform, Alert } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { Button, Block, Text, Input } from '../components';
// import OpenModal from './search/OpenModal';
import PersonCardModal from './search/PersonCardModal';
import MyList from './search/MyList';
import InputForm from './search/InputForm';
import Loading from './search/Loading';


export let onClickNewSearch;
    const newSearchCB = (callback) => {onClickNewSearch = callback};


export class PeopleSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: [],
            query: '',
            httpStatus: '',
            loading: false,
        }
    }
    
    callNewSearch= () => {
        Alert.alert('New Search?', 'This will reset your previous search data.',
            [
                {text: 'Cancel', onPress: () => {return}, style: 'cancel',},
                {text: 'OK', onPress: () => {
                    if (!this.state.loading){
                        this.setState({
                            matches: [],
                            query: '',
                            httpStatus: '',
                            loading: false,
                        })
                        console.log('state reset');
                    }   
                }},
            ], {cancelable: true},
        );// this.callNewSearch.bind(this)
    }
    
    ////////callAPI//////////
    callSubmit(encoded) {
        const url = 'https://dev.search.connectourkids.org/api/search-v2';
        const personJson = JSON.stringify({ person: encoded })
        const request = new Request(url, {
            method: 'POST',
            body: personJson
        });
        this.setState({loading: true});
        const callApi = async () => {
            try {
                await fetch(request)
                    .then(response => response.json()).then(response => {
                        console.log('response:', response);
                        let resData;
                        const isPersonInRes = Boolean(response.person);
                        if (isPersonInRes === true) {
                            resData = [response.person];
                        } else {
                            resData = response.possible_persons;
                        }
                        this.setState({
                            matches: resData,
                            query: response.query,
                            httpStatus: response["@http_status_code"]
                        });
                        console.warn('ok-',response["@http_status_code"]);
                        return response;
                    })
                    .catch((error, response) => {
                        console.error('req failed', error);
                    })
            } catch (err) { console.error('2catch', err); }
            await reDirect();
        }
        callApi();
        const reDirect = () => {
            // callResetState --> from submits params or import
            this.setState({loading: false});
            console.log('newState:',this.state);
            newSearchCB(this.callNewSearch.bind(this))
            return Promise.resolve(1);
        }
    }


    render() {
        return (
            <Block style={{ marginLeft: 25, marginRight: 25 }} >
                
            {
                (this.state.httpStatus == '200') ? //if
                <MyList 
                    // person={this.state.person} 
                    matches={this.state.matches}
                />  : //else
                <InputForm 
                    submitEmail={this.submitEmail.bind(this)} 
                    submitAddress={this.submitAddress.bind(this)} 
                    submitURL={this.submitURL.bind(this)} 
                    submitPhone={this.submitPhone.bind(this)} 
                    submitName={this.submitName.bind(this)} 
                /> 
            }
            {
                this.state.loading ? 
                <Loading animating={this.state.loading} /> : 
                null
            }
            </Block>
        )
    }


    submitEmail(email) {
        const encoded = encodeURI((`{"emails": [{"address": "${email}"}]}`));
        this.callSubmit(encoded);
    }
    submitAddress(house, street, city, state, zip_code) {
        const encoded = encodeURI((`{"addresses": [{"house": "${house}", "street": "${street}", "city":"${city}", "state": "${state}", "country": "US", "zip_code": "${zip_code}"}]}`));
        this.callSubmit(encoded);
    }
    submitURL(url) {
        const encoded = encodeURI((`{"urls": [{"url": "${url}"}]}`));
        this.callSubmit(encoded);
    }
    submitPhone(number) {
        const encoded = encodeURI((`{"phones": [{"number": "${number}"}]}`));
        this.callSubmit(encoded);
    }
    submitName(first, last) {
        const encoded = encodeURI((`{"names": [{"first": "${first}","last": "${last}"}]}`));
        this.callSubmit(encoded);
    }
}


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
const streetWidth = Platform.select({
    android: { width: 160 },
    ios: { width: 124 },
});

const zipCodeWidth = Platform.select({
    android: { width: 115 },
    ios: { width: 80 },
});
