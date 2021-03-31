import { all, fork, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import {
  ADD_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCTS_REQUEST,
  REQUEST_ADD_CATEGORIES,
  REQUEST_CATEGORIES,
  REQUEST_SETTINGS,
  REQUEST_UPDATE_SETTINGS,
  UPDATE_PRODUCT_REQUEST,
  UPLOAD_MAIN_IMG_REQUEST,
  GET_CATEGORY_BY_ID_REQUEST,
  UPDATE_CATEGORY_REQUEST,
  REQUEST_SLIDES,
  REQUEST_UPDATE_SLIDES,
  REQUEST_ADD_SLIDES,
  REQUEST_DELETE_SLIDES,
  REQUEST_UPDATE_SLIDE_VISIBILITY,
  GET_USERS_REQUEST,
  ADD_USER_REQUEST,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST,
  USER_SIGN_IN_FETCHING,
  USER_SIGN_OUT,
} from './types';
import {
  fetchCategoryWorker,
  addCategoryWorker,
  getCategoryByIdWorker,
  updateCategoryWorker,
} from './sagas/categories.saga';
import { fetchSettingsWorker, updateSettingsWorker } from './sagas/settings.saga';
import {
  addProductWorker,
  deleteProductWorker,
  getProductByIdWorker,
  getProductsWorker,
  updateProductWorker,
  uploadMainImgWorker,
} from './sagas/products.saga';
import {
  addSlideWorker,
  fetchSlideWorker,
  deleteSlideWorker,
  updateSlideVisibilityWorker,
  updateSlideWorker,
} from './sagas/slides.saga';
import {
  addUserWorker,
  deleteUserWorker,
  getUsersWorker,
  updateUserWorker,
} from './sagas/users.saga';
import { sigInUser, signOutUser } from './sagas/user.saga';

export function* sagaCategoriesWatcher(): SagaIterator {
  yield takeEvery(REQUEST_CATEGORIES, fetchCategoryWorker);
  yield takeEvery(REQUEST_ADD_CATEGORIES, addCategoryWorker);
  yield takeEvery(GET_CATEGORY_BY_ID_REQUEST, getCategoryByIdWorker);
  yield takeEvery(UPDATE_CATEGORY_REQUEST, updateCategoryWorker);
}

export function* sagaProductsWatcher(): SagaIterator {
  yield takeEvery(GET_PRODUCTS_REQUEST, getProductsWorker);
  yield takeEvery(GET_PRODUCT_BY_ID_REQUEST, getProductByIdWorker);
  yield takeEvery(ADD_PRODUCT_REQUEST, addProductWorker);
  yield takeEvery(UPLOAD_MAIN_IMG_REQUEST, uploadMainImgWorker);
  yield takeEvery(UPDATE_PRODUCT_REQUEST, updateProductWorker);
  yield takeEvery(DELETE_PRODUCT_REQUEST, deleteProductWorker);
}

// Settings
function* sagaSettingsWatcher(): SagaIterator {
  yield takeEvery(REQUEST_SETTINGS, fetchSettingsWorker);
  yield takeEvery(REQUEST_UPDATE_SETTINGS, updateSettingsWorker);
}

// Slides
function* sagaSlidesWatcher(): SagaIterator {
  yield takeEvery(REQUEST_ADD_SLIDES, addSlideWorker);
  yield takeEvery(REQUEST_SLIDES, fetchSlideWorker);
  yield takeEvery(REQUEST_UPDATE_SLIDES, updateSlideWorker);
  yield takeEvery(REQUEST_DELETE_SLIDES, deleteSlideWorker);
  yield takeEvery(REQUEST_UPDATE_SLIDE_VISIBILITY, updateSlideVisibilityWorker);
}

export function* sagaUsersWatcher(): SagaIterator {
  yield takeEvery(GET_USERS_REQUEST, getUsersWorker);
  yield takeEvery(ADD_USER_REQUEST, addUserWorker);
  yield takeEvery(UPDATE_USER_REQUEST, updateUserWorker);
  yield takeEvery(DELETE_USER_REQUEST, deleteUserWorker);
}

export function* sagaUserWatcher(): SagaIterator {
  yield takeEvery(USER_SIGN_IN_FETCHING, sigInUser);
  yield takeEvery(USER_SIGN_OUT, signOutUser);
}

// RootSaga
export default function* rootSaga(): SagaIterator {
  yield all([
    fork(sagaCategoriesWatcher),
    fork(sagaProductsWatcher),
    fork(sagaSettingsWatcher),
    fork(sagaSlidesWatcher),
    fork(sagaUsersWatcher),
    fork(sagaUserWatcher),
  ]);
}
