import Dispatcher from '../AppDispatcher';
import Constants from '../AppConstants';
import EventEmitter from 'events';
import assign from 'object-assign';

const _modal = { type: null };

const CHANGE_EVENT = 'change';

function setModalType(type) {
  _modal.type = type;
}

const ModalStore = assign({}, EventEmitter.prototype, {
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
  getAuthModalType() {
    return _modal.type;
  }
})

ModalStore.dispatchToken = Dispatcher.register(function(payload) {

  switch(payload.type) {
    case ActionType.OPEN_AUTH_MODAL:
      setModalType(payload.modalType);
      ModalStore.emitChange();
      break;

    default:
      // do nothing
  }

});

export default ModalStore;