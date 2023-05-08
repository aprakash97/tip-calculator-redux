import { connect } from 'react-redux';
import {
  deleteItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { MenuItem } from '../components/MenuItem';
// const mapDispatchToprops = (dispatch) => {
//   return {
//     remove: (uuid) => dispatch(deleteItem(uuid))
//   };
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(deleteItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity))
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
