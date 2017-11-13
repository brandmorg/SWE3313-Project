import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const StartPage = () => (
  <Segment
    style={{height: '30rem', padding: '6rem'}}
    raised
    vertical
    textAlign='center'>
    <Header size='huge'>
      Welcome
      <Header.Subheader>
        Click a link above to get started
      </Header.Subheader>
    </Header>
  </Segment>
);


export default StartPage;
