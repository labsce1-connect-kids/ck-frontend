import { createStackNavigator } from 'react-navigation';

import BestPractices from '../screens/BestPractices';

export default createStackNavigator({
    BestPractices,
}, 
{
    navigationOptions: {
        drawerLabel: 'Best Practices'
    },
    defaultNavigationOptions: {
        title: 'Best Practices'
    }
},)