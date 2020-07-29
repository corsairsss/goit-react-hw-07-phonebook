import { createAction } from '@reduxjs/toolkit';

// --------------------------------------------------------------------------------------

// const addContactSuccess = createAction(
//   'phoneBook/addSuccess',
//   ({ name, phone }) => ({
//     payload: {
//       contact: {
//         name,
//         phone,

//       },
//     },
//   }),
// );

const addContactRequest = createAction('phoneBook/addRequest');
const addContactSuccess = createAction('phoneBook/addSuccess');
const addContactError = createAction('phoneBook/addError');

const fetchContactsRequest = createAction('phoneBook/fetchRequest');
const fetchContactsSuccess = createAction('phoneBook/fetchSuccess');
const fetchContactsError = createAction('phoneBook/fetchError');

const removeContact = createAction('phoneBook/removeContact');
const changeFilter = createAction('phoneBook/changeFilter');

const changeTheme = createAction('phoneBook/changeTheme');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  //
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  //
  removeContact,
  changeFilter,
  changeTheme,
};
