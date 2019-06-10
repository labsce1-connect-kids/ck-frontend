import { createStackNavigator } from 'react-navigation';

import Support from '../screens/Support';

export default createStackNavigator({
    Support,
},
{
    navigationOptions: {
        drawerLabel: 'Support'
    },
    defaultNavigationOptions: {
        title: 'Support'
    }
},  
)