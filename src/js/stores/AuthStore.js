
export default {
  loggedIn() {
    return true;
  }
}

var _modal = { type: null }

var AuthStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },
  getAuthModalType() {

  }
})

AuthStore.dispatchToken = Dispatcher.register(function(payload) {

  switch(payload.type) {
    case ActionType.OPEN_AUTH_MODAL:
      AuthStore.emitChange();
      break;

    default:
      // do nothing
  }

});

export default AuthStore;