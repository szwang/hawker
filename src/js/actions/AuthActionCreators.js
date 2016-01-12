import Dispatcher from '../AppDispatcher';
import ActionType from '../AppConstants';

export default {

  openAuthModal(modalType) {
    console.log('modal type: ', modalType)
    Dispatcher.dispatch({
      type: ActionType.OPEN_MODAL,
      modalType: modalType //login, signup, forgot password
    })
  }

}