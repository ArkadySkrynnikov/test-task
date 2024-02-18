import React, { FunctionComponent, ReactElement, useState } from 'react';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { choiseGroupItems } from '../../consts/choiseGroupItems';
import { choiceGroupWrapperProps } from '../../types/choiceGroup';

const items = choiseGroupItems
// export type currencyInChart = "USD" | "EUR" | "YUAN";

const ChoiceGroupWrapper: FunctionComponent<choiceGroupWrapperProps> = ({value, setValue}): ReactElement => {

  return (
    <ChoiceGroup
      value={}
      onChange={}
      items={}
      getItemLabel={}
      multiple={false}
      name={"choiceGroupItemsMoney"}
    />
  );
};

export default React.memo(ChoiceGroupWrapper);