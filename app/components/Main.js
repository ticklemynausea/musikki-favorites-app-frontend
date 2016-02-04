import React from 'react';
import { Button } from 'react-bootstrap';

class Main extends React.Component {

  someCallback() {

  }

  render() {
    return (
        <Button bsStyle='success' bsSize='small' onClick={this.someCallback}>
          Something
        </Button>

    )
  }

}

export default Main;