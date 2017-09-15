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

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    call(fetchCategoryFlow),
  ]
}
