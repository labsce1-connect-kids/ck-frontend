import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image} from 'react-native';
import {PeopleSearch} from '../screens/PeopleSearch';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {Text} from '../components'
import {onClickNewSearch} from '../screens/PeopleSearch';


export default createStackNavigator({
    PeopleSearch,
},
{
    
    navigationOptions: {
        drawerLabel: 'People Search',
    },
    defaultNavigationOptions: ({ navigation }) => ({
        headerLeft: 
        <TouchableOpacity onPress={ () => onClickNewSearch() } 
            style={{marginLeft: 15}}
        >
            <Ionicons name="ios-search" size={25} color="green" />
            <Text size={10}>New Search</Text>
        </TouchableOpacity>,
        title: `         People Search`,
        headerStyle: {
            borderBottomColor: 'transparent',
        },
        headerRight: 
            <TouchableOpacity onPress={ () => navigation.toggleDrawer() }>
                <Image
                    source={require('../assets/images/menu-icon.png')}
                    style={{ width: 23, height: 20 , marginHorizontal: 25 }}
                />
            </TouchableOpacity>
        
    })
},)