import Dispatcher from '../AppDispatcher';
import ActionType from '../AppConstants';
import EventEmitter from 'events';
import assign from 'object-assign';

const _modal = { type: null };

const CHANGE_EVENT = 'change';

function setModalType(type) {
  console.log(type);
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
  getModalType() {
    return _modal.type;
  }
})

ModalStore.dispatchToken = Dispatcher.register((payload) => {

  switch(payload.type) {
    case ActionType.OPEN_MODAL:
      setModalType(payload.modalType);
      ModalStore.emitChange(); //to app component
      break;

    default:
      // do nothing
  }

});

export default ModalStore;