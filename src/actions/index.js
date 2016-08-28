import * as ActionTypes from "../constants/ActionTypes";

export const actionCreators = {
  doDuang(message) {
    return {
      type: ActionTypes.DO_DUANG,
      payload: message
    }
  },
  query(commandMessage) {

  }
}
