import React, {
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { currency } from '../../types/choiceGroup';
import { currencies } from '../../consts/currencies';

interface choiceGroupWrapperProps {
  value: currency;
  setValue: Dispatch<SetStateAction<currency>>;
}

const ChoiceGroupWrapper: FunctionComponent<choiceGroupWrapperProps> = ({
  value,
  setValue,
}): ReactElement => {
  return (
    <ChoiceGroup
      size={'xs'}
      value={value}
      onChange={(value) => setValue(value.value)}
      items={currencies}
      getItemLabel={(item) => item.symbol}
      multiple={false}
      name={'choiceGroupItemsMoney'}
    />
  );
};

export default React.memo(ChoiceGroupWrapper);
