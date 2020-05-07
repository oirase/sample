
import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as actions from '../actions'
import axios from 'axios'

export function* setFile(){
  const url = '/redux/server.php'
  while(true) {
    yield take(actions.setStart)
    try {
      const { data } = yield call(axios.get, url)
      yield put(actions.setData(data))
      console.log('success')
      console.log(data)
    } catch (error) {
      yield put(actions.setError('error'))
      console.log('error')
    }
  }
}

export default function* root() {
  yield fork(setFile)
}