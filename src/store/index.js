//redux configration//

import reducer from './reducer';
import {createStore} from 'readux';

const store = createStore(reducer)
export default store;