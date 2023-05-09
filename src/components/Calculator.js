import { Card } from '@twilio-paste/core';
import { TipSelectContainer } from '../containers/TipSelectContainer';

// import { Summary } from './Summary';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemContainer';
import { SummaryContainer } from '../containers/SummaryContainer';

// const items = [
//   { uuid: 1, name: 'Tofu Roast', price: 14, quantity: 1 },
//   { uuid: 2, name: 'Vegan Ham', price: 12, quantity: 1 }
// ];

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      {/* <NewItemForm /> */}
      {/* <MenuItems items={items} /> */}
      <MenuItemsContainer />
      <TipSelectContainer />
      {/* <Summary /> */}
      <SummaryContainer />
    </Card>
  );
};

export default Calculator;
