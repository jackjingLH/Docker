import * as types from './mutation-types'

const matutaions = {
  [types.SET_DECLINE](state, DecLine) {
    state.DecLine = DecLine
  },
  [types.SET_IMGINDEX](state, ImgIndex) {
    state.ImgIndex = ImgIndex
  },
  [types.SET_ITEM](state, Item) {
    state.Item = Item
  },
  [types.SET_ROTATEX](state, RotateX) {
    state.RotateX = RotateX
  }
}

export default matutaions
