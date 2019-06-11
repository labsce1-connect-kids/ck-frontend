import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';

import { Button, Block, Text, Input } from '../components';

// const styles = StyleSheet.create({
//     peoplesearch: {
//         flex: 1,
//     }
// });

class PeopleSearch extends Component {
    render() {
        return (
            <Block center middle>
                <Text> People Search </Text>
            </Block>
        )
    }
}

export default PeopleSearch;