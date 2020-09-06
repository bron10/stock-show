import { all } from 'redux-saga/effects';
import { watchStock } from './stock';

export default function* rootSaga()  {
    return yield all([watchStock()]);
}