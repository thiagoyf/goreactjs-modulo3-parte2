import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoriteSuccess } from '../action/favorites';

export function* addFavorite(action) {
  // const response = yield api.get(`/repos/${action.payload.repository}`);
  // call é usado especificamente quando a função retorna uma promise
  const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

  const repositoryData = {
    id: data.id,
    name: data.full_name,
    description: data.description,
    url: data.html_url,
  };

  yield put(addFavoriteSuccess(repositoryData));
}
