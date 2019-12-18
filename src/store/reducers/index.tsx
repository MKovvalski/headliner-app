import { combineReducers } from 'redux'

import toReadList from './toReadList'
import articleList from './articleList'

export default combineReducers({
  articles: articleList,
  toRead: toReadList
})
