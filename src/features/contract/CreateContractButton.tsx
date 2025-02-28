import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Field,
  makeStyles,
} from '@fluentui/react-components';
import { DatePicker } from '@fluentui/react-datepicker-compat';
import { AddFilled, ProhibitedNoteFilled, SaveFilled } from '@fluentui/react-icons';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
  },
});

export const CreateContractButton = () => {
  const styles = useStyles();

  return (
    <Dialog modalType="alert">
      <DialogTrigger disableButtonEnhancement>
        <Button
          style={{
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          }}
          icon={<AddFilled />}
          appearance="primary"
        >
          Contract
        </Button>
      </DialogTrigger>

      <DialogSurface>
        <form>
          <DialogBody>
            <DialogTitle>Add Contract</DialogTitle>
            <DialogContent className={styles.content}>
              <Field label="Select a date">
                <DatePicker placeholder="Select a date..." />
              </Field>
            </DialogContent>
            <DialogActions>
              <Button icon={<SaveFilled />} appearance="primary">
                Save (F9)
              </Button>
              <DialogTrigger disableButtonEnhancement>
                <Button icon={<ProhibitedNoteFilled />} appearance="secondary">
                  Cancel
                </Button>
              </DialogTrigger>
            </DialogActions>
          </DialogBody>
        </form>
      </DialogSurface>
    </Dialog>
  );
};
