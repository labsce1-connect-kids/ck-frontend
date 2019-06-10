import { createStackNavigator } from 'react-navigation';

import FamilyConnections from '../screens/FamilyConnections';

export default createStackNavigator({
    FamilyConnections,
},  
{
    navigationOptions: {
        drawerLabel: 'Family Connections'
    },
    defaultNavigationOptions: {
        title: 'Family Connections'
    }
},  
)