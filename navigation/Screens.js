import { createDrawerNavigator } from 'react-navigation';

import FamilyConnections from './FamilyConnections';
import BestPractices from './BestPractices';
import PeopleSearch from './PeopleSearch';
import Support from './Support';

// screens selection
export default createDrawerNavigator({
    BestPractices,
    FamilyConnections,
    PeopleSearch,
    Support,
});