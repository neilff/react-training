import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/Card';

ReactDOM.render(
  <div>
    <Card>
      <h2>Jane Doe</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nec scelerisque dolor no aliquam dolor.
      </p>
    </Card>
  </div>,
  document.getElementById('root')
);
