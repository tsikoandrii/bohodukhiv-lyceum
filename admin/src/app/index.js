import React from 'react';
import PropTypes from 'prop-types';

import Container from '../views/layouts/Container';

function App({ children }) {
  return (
    <div className="page">
      <Container>
        { children }
      </Container>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node
}

export default App;
