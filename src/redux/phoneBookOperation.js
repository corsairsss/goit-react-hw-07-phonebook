import axios from 'axios';

import phoneBookAction from './phoneBookActions';

axios.defaults.baseURL = 'http://localhost:2000';

const addContact = ({ name, phone }) => dispatch => {
  dispatch(phoneBookAction.addContactRequest());

  axios
    .post('/contacts', { name, phone })
    .then(response => {
      console.log(response.data);
      dispatch(phoneBookAction.addContactSuccess(response.data));
    })
    .catch(error => dispatch(phoneBookAction.addContactError(error)));
};

const fetchContact = () => dispatch => {
  dispatch(phoneBookAction.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(response => {
      dispatch(phoneBookAction.fetchContactsSuccess(response.data));
    })
    .catch(error => dispatch(phoneBookAction.fetchContactsError(error)));
};

export default {
  addContact,
  fetchContact,
  //   removeContact,
};
