
index.html
```html
<script type="text/javascript">
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";
    analytics.load("oZyaSOH3qjyGX2QHDFMABRccz5Dcvbxh");
    //analytics.page()
    }}();
  </script>
  ```
  
  index.js
  
```js
  
import { createTracker } from 'redux-segment';
const tracker = createTracker(); 
                                  // Create the tracker...

// down where configuring store

const store = compose(
  persistState(['ui'], storageConfig),
  applyMiddleware(
    thunk,
    sagaMiddleware(pollMatches, updateMatches),
    logger,
    tracker
  )
)(createStore)(reducer, {});
```

src/reducers/create.js
```js
function createTopicSuccess(res) {
  return { type: CREATE_TOPIC_SUCCESS,
    payload: res,
    meta: {
      analytics: {
        eventType: EventTypes.track,
        eventPayload: {
          type: CREATE_TOPIC_SUCCESS,
          properties: res.toJSON(),
        },
      },
    },
  };
}
```

// track - short

src/reducers/topics.js
```js
function requestTopicsPending() {
  return {
    type: TOPICS_LOADING,
    meta: {
      analytics: EventTypes.track,
    },
  };
}

function requestTopicsSuccess(res) {
  return {
    type: REQUEST_TOPICS_SUCCESS,
    payload: res,
    meta: {
      analytics: EventTypes.track,
    },
  };
}

function requestTopicsError(err) {
  return {
    type: REQUEST_TOPICS_ERROR,
    payload: err,
    meta: {
      analytics: EventTypes.track,
    },
  };
}

function markInterestedSuccess(res) {
  return {
    type: MARK_INTERESTED_SUCCESS,
    payload: res,
    meta: {
      analytics: EventTypes.track,
    },
  };
}

function markUninterestedSuccess(res) {
  return {
    type: MARK_UNINTERESTED_SUCCESS,
    payload: res,
    meta: {
      analytics: EventTypes.track,
    },
  };
}
```

// identity 

```js
export function login({ username, password }) {
  return (dispatch) => {
    dispatch({ type: LOGIN_PENDING, meta: {
      analytics: EventTypes.track,
    } });

    return users.login(username, password)
      .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
        meta: {
          analytics: {
            eventType: EventTypes.identify,
            eventPayload: {
              userId: username,
              traits: { username, password },
            },
          },
        },
      }))
      .then(null, err => dispatch({
        type: LOGIN_ERROR,
        payload: err,
        meta: {
          analytics: EventTypes.track,
        },
      }));
  };
}
```