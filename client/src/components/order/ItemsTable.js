import React from 'react';
import PropTypes from 'prop-types';
// import ItemsTableRow from "./ItemsTableRow";
import { Table, Button } from 'semantic-ui-react';

// Renders the list of Items

const ItemsTable = ({items, onEditClick, onDeleteClick}) => {
  return (
    <Table padded attached>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={2}>#</Table.HeaderCell>
          <Table.HeaderCell >Item</Table.HeaderCell>
          <Table.HeaderCell width={2}>Qty</Table.HeaderCell>
          <Table.HeaderCell width={2}>Price</Table.HeaderCell>
          <Table.HeaderCell width={4}>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>

      </Table.Body>
    </Table>
  );
};

ItemsTable.propTypes = {

};

export default ItemsTable;
