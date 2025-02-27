import React from 'react';
import { Button } from '@fluentui/react-components';
import { AddFilled } from '@fluentui/react-icons';

export const ContractTab = () => {
  return (
    <div>
      <div>
        <Button icon={<AddFilled />} appearance="primary">
          Create
        </Button>
      </div>
    </div>
  );
};
