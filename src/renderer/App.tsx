import { FluentProvider, makeStyles, webLightTheme } from '@fluentui/react-components';

import { Main } from './Main';

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
  },

  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '20px',
    padding: '20px',
    boxSizing: 'border-box',
  },
});

export const App = () => {
  const styles = useStyles();

  return (
    <FluentProvider theme={webLightTheme} style={{ height: '100vh' }}>
      <div className={styles.root}>
        <Main />
      </div>
    </FluentProvider>
  );
};
