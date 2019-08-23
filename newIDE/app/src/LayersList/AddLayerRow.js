import React from 'react';
import { TableRow, TableRowColumn } from '../UI/Table';
import Add from '@material-ui/icons/Add';
import IconButton from '../UI/IconButton';
import styles from './styles';

const AddLayerRow = ({ onAdd }) => (
  <TableRow key="add-row">
    <TableRowColumn style={styles.handleColumn} />
    <TableRowColumn />
    <TableRowColumn style={styles.effectsColumn} />
    <TableRowColumn style={styles.toolColumn}>
      <IconButton onClick={onAdd}>
        <Add />
      </IconButton>
    </TableRowColumn>
  </TableRow>
);

export default AddLayerRow;
