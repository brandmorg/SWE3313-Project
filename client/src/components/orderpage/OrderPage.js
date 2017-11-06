import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

// Lots of magic needs to happen here
// Click handlers for stuff
// Full order object stored in state
// Import a whole bunch of things

class OrderPage extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container>
        <Grid.Column width={10}>
          <h1>Table Goes Here</h1>
        </Grid.Column>
        <Grid.Column width={6}>
          <h1>Customer Data goes here</h1>
        </Grid.Column>
      </Grid>
    );
  }
}

OrderPage.propTypes = {};

export default OrderPage;
