import Dispatcher from '../AppDispatcher';
import ActionType from '../AppConstants';

export default {

  openAuthModal(modalType) {
    Dispatcher.dispatch({
      type: ActionType.OPEN_MODAL,
      modalType: modalType //login, signup, forgot password
    })
  }

}