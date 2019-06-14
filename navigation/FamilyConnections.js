import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import FamilyConnections from '../screens/FamilyConnections';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default createStackNavigator({
    FamilyConnections,
},  
{
    navigationOptions: {
        drawerLabel: 'Family Connections',
    },
    defaultNavigationOptions: ({ navigation }) => ({
        title: 'Family Connections',
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