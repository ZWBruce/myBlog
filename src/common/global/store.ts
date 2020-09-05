import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

interface Act {
  type: string;
  val?: any
}

const initalState: any = {
  count: 1,
  articleCount: 0,
  tagsCount: 0,
  articleList: [],
  tagsList: [],
  sortedArticle: []
}

function reducer(state = initalState, action: Act) {
  let { type, val } = action
  switch (type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1
      };
    case 'GET_ARTICLE_LIST':
      let sorted = val.list.sort((b: any, a: any) => a.time - b.time)
      return {
        ...state,
        articleCount: val.count,
        articleList: val.list,
        sortedArticle: sorted,
      }
    case 'GET_TAGS_LIST':
      return {
        ...state,
        tagsCount: val.count,
        tagsList: val.list
      }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk))