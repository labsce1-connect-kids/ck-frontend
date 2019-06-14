import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import BestPractices from '../screens/BestPractices';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default createStackNavigator({
    BestPractices,
}, 
{
    navigationOptions: {
        drawerLabel: 'Best Practices',
    },
    defaultNavigationOptions: ({ navigation }) => ({
        title: 'Best Practices',
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