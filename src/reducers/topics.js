import { fromJS } from 'immutable';
import { EventTypes } from 'redux-segment';
import * as topics from '../api/topics';

export const TOPICS_LOADING = '@@reactTraining/TOPICS_LOADING';
export const REQUEST_TOPICS_SUCCESS = '@@reactTraining/REQUEST_TOPICS_SUCCESS';
export const REQUEST_TOPICS_ERROR = '@@reactTraining/REQUEST_TOPICS_ERROR';
export const MARK_INTERESTED_SUCCESS = '@@reactTraining/MARK_INTERESTED_SUCCESS';
export const MARK_UNINTERESTED_SUCCESS = '@@reactTraining/MARK_UNINTERESTED_SUCCESS';

const INITIAL_STATE = fromJS({
  pending: false,
  hasError: false,
  result: null,
});

function topicsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case TOPICS_LOADING:
      return state.set('pending', true)
                  .set('hasError', false);

    case REQUEST_TOPICS_SUCCESS:
    case MARK_INTERESTED_SUCCESS:
    case MARK_UNINTERESTED_SUCCESS:
      return state.merge(fromJS({
        pending: false,
        result: action.payload,
      }));

    case REQUEST_TOPICS_ERROR:
      return state.set('hasError', true)
                  .set('pending', false);

    default:
      return state;
  }
}

function requestTopicsPending() {
  return {
    type: TOPICS_LOADING,
  };
}

function requestTopicsSuccess(res) {
  return {
    type: REQUEST_TOPICS_SUCCESS,
    payload: res,
  };
}

function requestTopicsError(err) {
  return {
    type: REQUEST_TOPICS_ERROR,
    payload: err,
  };
}

function markInterestedSuccess(res) {
  return {
    type: MARK_INTERESTED_SUCCESS,
    payload: res,
  };
}

function markUninterestedSuccess(res) {
  return {
    type: MARK_UNINTERESTED_SUCCESS,
    payload: res,
  };
}

export function requestTopics() {
  return (dispatch) => {
    dispatch(requestTopicsPending());

    return topics.get()
      .then(res => dispatch(requestTopicsSuccess(res)))
      .then(null, err => dispatch(requestTopicsError(err)));
  };
}

export function markInterested(card) {
  return (dispatch) => {
    dispatch(requestTopicsPending());

    topics.markInterested(card)
      .then(topics.get)
      .then(res => dispatch(markInterestedSuccess(res)))
      .then(null, err => dispatch(requestTopicsError(err)));
  };
}

export function markUninterested(card) {
  return (dispatch) => {
    dispatch(requestTopicsPending());

    topics.markUninterested(card)
      .then(topics.get)
      .then(res => dispatch(markUninterestedSuccess(res)))
      .then(null, err => dispatch(requestTopicsError(err)));
  };
}

export default topicsReducer;
