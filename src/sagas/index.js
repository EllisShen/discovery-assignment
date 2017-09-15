import { put, call, take } from 'redux-saga/effects'
import api from '../services/api'


/* 
/* Category Related Funcs */
/**/
function* fetchCategoryApi() {
  try {
    const listData = yield call(api.fetchCategory)
    yield put({ type: 'FETCH_CATEGORY_SUCCESS', listData })
  } catch (error) {
    yield put({ type: 'FETCH_CATEGORY_ERROR', error })
  }
}

function* fetchCategoryFlow() {
  while (true) {
    yield take('FETCH_VIDEO_CATEGORY');
    yield call(fetchCategoryApi)
  }
}

/* 
/* Video List Related Funcs */
/**/
function* fetchVideoListApi(payload) {
  try {
    const data = yield call(api.fetchVideoList, payload)
    yield put({ type: 'FETCH_VIDEO_LIST_SUCCESS', data })
  } catch (error) {
    yield put({ type: 'FETCH_VIDEO_LIST_ERROR', error })
  }
}

function* fetchVideoListFlow() {
  while(true) {
    const { payload } = yield take('FETCH_VIDEO_LIST');
    // console.log('payload', payload)
    yield call(fetchVideoListApi, payload)
  }
}

/* 
/* todo: Video Play Funcs */
/**/

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    call(fetchCategoryFlow),
    call(fetchVideoListFlow),
  ]
}
