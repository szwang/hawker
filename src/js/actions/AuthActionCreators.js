import Dispatcher from '../AppDispatcher';
import Constants from '../AppConstants';

const ActionType = Constants.ActionTypes;

export default {

  openAuthModal(modalType) {
    Dispatcher.dispatch({
      type: ActionType.OPEN_AUTH_MODAL,
      modalType: modalType //login, signup, forgot password
    })
  }

}