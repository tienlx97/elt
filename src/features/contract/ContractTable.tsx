import React from 'react';
import type { TableColumnDefinition, TableColumnId } from '@fluentui/react-components';
import {
  Button,
  createTableColumn,
  InteractionTag,
  InteractionTagPrimary,
  makeStyles,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  SearchBox,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
  useTableFeatures,
  useTableSort,
} from '@fluentui/react-components';
import { ChevronDown16Filled, EditRegular } from '@fluentui/react-icons';

import { CreateContractButton } from './CreateContractButton';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },

  searchActionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    justifyContent: 'space-between',
  },

  actionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: '1rem',
  },

  search: {
    width: '500px',
    maxWidth: '465px',
  },

  header: {
    fontWeight: 'bold',
  },

  commonButton: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
});

interface NoCell {
  label: string;
}

interface IncotermsCell {
  name: string;
  year: number;
}

interface ContractValueCell {
  value: string;
}

interface CustomerCell {
  label: string;
}

interface LocationCell {
  label: string;
}

interface ProcessCell {
  status: string;
}

interface Contract {
  no: NoCell;
  customer: CustomerCell;
  incoterms: IncotermsCell;
  location: LocationCell;
  contractValue: ContractValueCell;
  process: ProcessCell;
}

const items: Contract[] = [
  {
    no: { label: '24KCT29' },
    customer: { label: 'JHIA' },
    incoterms: { name: 'CIF', year: 2010 },
    contractValue: {
      value: '55,100.00 USD',
    },
    location: { label: 'Philipine' },
    process: { status: 'Draft' },
  },
  {
    no: { label: '25KCT01' },
    customer: { label: 'UNM' },
    incoterms: { name: 'CIF', year: 2010 },
    contractValue: {
      value: '123,000.00 USD',
    },
    location: { label: 'Thailand' },
    process: { status: 'Signed' },
  },
];

const columns: TableColumnDefinition<Contract>[] = [
  createTableColumn<Contract>({
    columnId: 'no',
    compare: (a, b) => {
      return a.no.label.localeCompare(b.no.label);
    },
  }),
  createTableColumn<Contract>({
    columnId: 'acustomer',
    compare: (a, b) => {
      return a.customer.label.localeCompare(b.customer.label);
    },
  }),
  createTableColumn<Contract>({
    columnId: 'incoterms',
    compare: (a, b) => {
      return a.incoterms.name.localeCompare(b.incoterms.name);
    },
  }),
  createTableColumn<Contract>({
    columnId: 'contractValue',
    compare: (a, b) => {
      return a.contractValue.value.localeCompare(b.contractValue.value);
    },
  }),
  createTableColumn<Contract>({
    columnId: 'process',
    compare: (a, b) => {
      return a.process.status.localeCompare(b.process.status);
    },
  }),
];

export const ContractTable = () => {
  const styles = useStyles();

  const {
    getRows,
    sort: { getSortDirection, toggleColumnSort, sort },
  } = useTableFeatures(
    {
      columns,
      items,
    },
    [
      useTableSort({
        defaultSortState: { sortColumn: 'file', sortDirection: 'ascending' },
      }),
    ],
  );

  const headerSortProps = (columnId: TableColumnId) => ({
    onClick: (e: React.MouseEvent) => {
      toggleColumnSort(e, columnId);
    },
    sortDirection: getSortDirection(columnId),
    className: styles.header,
  });

  const rows = sort(getRows());

  return (
    <div className={styles.root}>
      <div className={styles.searchActionWrapper}>
        <div>
          <SearchBox appearance="underline" placeholder="Search" className={styles.search} />
        </div>
        <div className={styles.actionWrapper}>
          <CreateContractButton />

          <Menu openOnHover>
            <MenuTrigger disableButtonEnhancement>
              <Button appearance="primary" iconPosition="after" icon={<ChevronDown16Filled />}>
                File
              </Button>
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                <MenuItem>Import</MenuItem>
                <MenuItem>Export</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      </div>
      <Table sortable aria-label="Table with sort" style={{ minWidth: '500px' }}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell {...headerSortProps('no')}>No</TableHeaderCell>
            <TableHeaderCell {...headerSortProps('acustomer')}>Customer</TableHeaderCell>
            <TableHeaderCell {...headerSortProps('incoterms')}>Incoterms</TableHeaderCell>
            <TableHeaderCell {...headerSortProps('location')}>Location</TableHeaderCell>
            <TableHeaderCell {...headerSortProps('contractValue')}>Contract Value</TableHeaderCell>
            <TableHeaderCell {...headerSortProps('process')}>Process</TableHeaderCell>
            <TableHeaderCell {...headerSortProps('actions')}>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(({ item }) => (
            <TableRow key={item.no.label}>
              <TableCell>{item.no.label}</TableCell>
              <TableCell>{item.customer.label}</TableCell>
              <TableCell>{item.incoterms.name + ' ' + item.incoterms.year}</TableCell>
              <TableCell>{item.location.label}</TableCell>
              <TableCell>{item.contractValue.value}</TableCell>
              <TableCell>
                <InteractionTag size="small">
                  <InteractionTagPrimary color="red"> {item.process.status}</InteractionTagPrimary>
                </InteractionTag>
              </TableCell>
              <TableCell role="gridcell" tabIndex={0}>
                <TableCellLayout>
                  <Button icon={<EditRegular />} aria-label="Edit" />
                </TableCellLayout>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
