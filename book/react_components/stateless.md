# Stateless Components

- Super simple
- Given some state (as props)... return some DOM (or additional components)
- Pure

```js
import React from 'react';

function HelloMessage({ name = 'World' }) {
  return(
    <div>Hello {name}</div>
  );
};

HelloMessage.propTypes = { name: React.PropTypes.string };

ReactDOM.render(<HelloMessage name="Alice" />, mountNode);
```

#### Useful 95% of the time
