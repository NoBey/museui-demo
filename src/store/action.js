import * as types from './mutation'
export const changeindexstate = ({commit, state}, title) => {
  commit(types.CHANGE_INDEX_STATE, title)
}
