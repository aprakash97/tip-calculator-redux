import { NewItemForm } from '../components/NewItemForm';
import { connect } from 'react-redux';
import { addNewItem } from '../store/items/actions';
// import { bindActionCreators } from 'redux';

// const mapDispatchToProps = (dispatch) => {
//   //Normal 1
//   //   return {
//   //     onSubmit: (name, price) => dispatch(addNewItem(name, price))
//   //   };
//   //using bindActionCreators 2
//   return bindActionCreators(
//     {
//       onSubmit: (name, price) => addNewItem(name, price)
//     },
//     dispatch
//   );
// };
const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
