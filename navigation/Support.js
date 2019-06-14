import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import Support from '../screens/Support';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default createStackNavigator({
    Support,
},
{
    navigationOptions: {
        drawerLabel: 'Support',
    },
    defaultNavigationOptions: ({ navigation }) => ({
        title: 'Support',
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