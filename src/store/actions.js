import * as types from './mutation-types'

export const SetDecline = function ({commit}, {bool}) {
  commit(types.SET_DECLINE, bool)
}
export const SetImgIndex = function ({commit}, {num}) {
  commit(types.SET_IMGINDEX, num)
}
export const SetItem = function ({commit}, {obj}) {
  commit(types.SET_ITEM, obj)
}
export const SetRotateX = function ({commit}, {deg}) {
  commit(types.SET_ROTATEX, deg)
}
