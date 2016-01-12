import Dispatcher from '../AppDispatcher';
import ActionType from '../AppConstants';
import EventEmitter from 'events';
import assign from 'object-assign';

const _user = { 
  loggedIn: false
};

const CHANGE_EVENT = 'change';

const AuthStore = assign({}, EventEmitter.prototype, {
  // functions for modals
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  loggedIn() {
    return _user.loggedIn;
  }
})

AuthStore.dispatchToken = Dispatcher.register((payload) => {

  switch(payload.type) {
    default:
      // do nothing
  }

});

export default AuthStore;