import { createStackNavigator } from 'react-navigation';

import Forgot from '../screens/Forgot';

export default createStackNavigator({
    Forgot,
},  {
    defaultNavigationOptions: {
        title: 'Reset Password'
    }
})