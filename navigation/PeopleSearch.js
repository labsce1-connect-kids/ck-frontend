import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import PeopleSearch from '../screens/PeopleSearch';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default createStackNavigator({
    PeopleSearch,
},
{
    navigationOptions: {
        drawerLabel: 'People Search',
    },
    defaultNavigationOptions: ({ navigation }) => ({
        title: 'People Search',
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