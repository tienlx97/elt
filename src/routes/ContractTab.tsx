import React from 'react';
import { makeStyles } from '@fluentui/react-components';

import { ContractTable } from '../features/contract/ContractTable';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    gap: '1rem',
    flexDirection: 'column',
  },
});

export const ContractTab = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <ContractTable />
    </div>
  );
};
