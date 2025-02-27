import * as React from 'react';
import { makeStyles, tokens } from '@fluentui/react-components';
import {
  Board20Filled,
  Board20Regular,
  bundleIcon,
  MegaphoneLoud20Filled,
  MegaphoneLoud20Regular,
  PersonLightbulb20Filled,
  PersonLightbulb20Regular,
} from '@fluentui/react-icons';
import type { NavDrawerProps } from '@fluentui/react-nav-preview';
import { NavDrawer, NavDrawerBody, NavDrawerHeader, NavItem } from '@fluentui/react-nav-preview';

import { Logo } from './Logo';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    display: 'flex',
    height: '100%',
  },
  content: {
    flex: '1',
    padding: '16px',
    display: 'grid',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  field: {
    display: 'flex',
    marginTop: '4px',
    marginLeft: '8px',
    flexDirection: 'column',
    gridRowGap: tokens.spacingVerticalS,
  },
});

const Dashboard = bundleIcon(Board20Filled, Board20Regular);
const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);
const EmployeeSpotlight = bundleIcon(PersonLightbulb20Filled, PersonLightbulb20Regular);

export const Main = (props: Partial<NavDrawerProps>) => {
  const styles = useStyles();

  const [tab, setTab] = React.useState('1');

  return (
    <div className={styles.root}>
      <NavDrawer
        onNavItemSelect={(e, data) => {
          setTab(data.value);
        }}
        defaultSelectedValue="1"
        defaultSelectedCategoryValue="1"
        open={true}
        type="inline"
        density="medium"
      >
        <NavDrawerHeader>
          <Logo />
        </NavDrawerHeader>
        <NavDrawerBody>
          <NavItem icon={<Dashboard />} value="1">
            Contract
          </NavItem>
          <NavItem icon={<Announcements />} value="2">
            Annex
          </NavItem>
          <NavItem icon={<EmployeeSpotlight />} value="3">
            Customer
          </NavItem>
        </NavDrawerBody>
      </NavDrawer>
      <div className={styles.content}>
        <div className={styles.field}>{tab === '1' && <div>123</div>}</div>
      </div>
    </div>
  );
};
