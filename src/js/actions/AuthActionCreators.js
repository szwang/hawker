import Dispatcher from '../AppDispatcher';
import ActionType from '../AppConstants';
import { post } from '../utils/ServerUtils';

export default {

  openAuthModal(modalType) {
    console.log('modal type: ', modalType)
    Dispatcher.dispatch({
      type: ActionType.OPEN_MODAL,
      modalType: modalType //login, signup, forgot password
    })
  },

  signup(data) {
    console.log('signup action called: ', data);
    post('/signup', data)
    .then((response) => {
      console.log('response: ', response);
    })
  }

}