import { createStackNavigator } from 'react-navigation';

import PeopleSearch from '../screens/PeopleSearch';

export default createStackNavigator({
    PeopleSearch,
},
{
    navigationOptions: {
        drawerLabel: 'People Search'
    },
    defaultNavigationOptions: {
        title: 'People Search'
    }
},  )