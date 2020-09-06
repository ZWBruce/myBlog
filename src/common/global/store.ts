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
  ctgCount: 0,
  articleList: [],
  tagsList: [],
  sortedArticle: [],
  ctgList: []
}

function reducer(state = initalState, action: Act) {
  let { type, val } = action
  let { tagsList, ctgList } = state
  switch (type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1
      };
    case 'GET_ARTICLE_LIST':
      let sorted = val.list.sort((b: any, a: any) => a.time - b.time).slice(0, 5)
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
    case 'ADD_TAG':
      tagsList.push(val)
      console.log({ tagsList })
      return {
        ...state,
        tagsList: [...tagsList]
      }
    case 'GET_CTG_LIST':
      return {
        ...state,
        ctgCount: val.count,
        ctgList: val.list
      }
    case 'ADD_CTG':
      ctgList.push(val)
      console.log({ ctgList })
      return {
        ...state,
        ctgList: [...ctgList]
      }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk))