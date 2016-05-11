import { fromJS } from 'immutable';
import { EventTypes } from 'redux-segment';
import * as topics from '../api/topics';

export const CREATE_TOPIC_PENDING = '@@reactTraining/CREATE_TOPIC_PENDING';
export const CREATE_TOPIC_SUCCESS = '@@reactTraining/CREATE_TOPIC_SUCCESS';
export const CREATE_TOPIC_ERROR = '@@reactTraining/CREATE_TOPIC_ERROR';
export const CLEAR_SUCCESS  = '@@reactTraining/CLEAR_SUCCESS';

const INITIAL_STATE = fromJS({
  pending: false,
  hasError: false,
  message: false,
  code: null,
  showSuccess: false,
});

function createReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CREATE_TOPIC_PENDING:
      return state.set('showSuccess', false)
                  .set('pending', true)
                  .set('hasError', false);

    case CREATE_TOPIC_SUCCESS:
      return state.merge(fromJS({
        pending: false,
        showSuccess: true,
        ...action.payload,
      }));

    case CREATE_TOPIC_ERROR:
      return state.merge(fromJS({
        hasError: true,
        pending: false,
        ...action.payload,
      }));

    case CLEAR_SUCCESS:
      return state.set('showSuccess', false);

    default:
      return state;
  }
}

function createTopicPending() {
  return { type: CREATE_TOPIC_PENDING };
}

function createTopicSuccess(res, title, description) {
  return { type: CREATE_TOPIC_SUCCESS,
    payload: res,
    meta: {
      analytics: {
        eventType: EventTypes.track,
        eventPayload: {
          type: CREATE_TOPIC_SUCCESS,
          properties: { title, description },
        },
      },
    },
  };
}

function createTopicError(err) {
  return { type: CREATE_TOPIC_ERROR, payload: err };
}

export function clearSuccessMessage() {
  return { type: CLEAR_SUCCESS };
}

export function createTopic({ title, description }) {
  return (dispatch) => {
    dispatch(createTopicPending());

    return topics.create(title, description)
      .then(res => {
        dispatch(createTopicSuccess(res, title, description));
        dispatch({ type: 'redux-form/RESET', form: 'topic' });
      })
      .then(null, err => dispatch(createTopicError(err)));
  };
}

export default createReducer;
