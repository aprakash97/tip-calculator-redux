import { connect } from 'react-redux';
import { Summary } from '../components/Summary';

const mapStateToProps = (state) => {
  let subtotal = 0;
  const items = state.items;

  for (const item of items) {
    subtotal += item.quantity * item.price;
  }

  console.log(subtotal);
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
