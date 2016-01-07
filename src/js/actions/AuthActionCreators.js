import Dispatcher from '../AppDispatcher';
import Constants from '../AppConstants';

const ActionType = Constants.ActionTypes;

  storeRouterTransitionPath(path) {
    Dispatcher.dispatch({
      type: ActionType.ROUTER_NEXT_TRANSITION_PATH,
      path: path
    })
  },
export default {

  openAuthModal(modalType) {
    Dispatcher.dispatch({
      type: ActionType.OPEN_AUTH_MODAL,
      modal: modalType //login, signup, forgot password
    })
  }

}