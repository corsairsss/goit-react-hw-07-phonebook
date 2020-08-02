import React, { Component } from 'react';
import { connect } from 'react-redux';

import phoneBookOperation from '../redux/phoneBookOperation';
import phoneBookSelectors from '../redux/phoneBookSelectors.js';

import Section from './Section/Section.js';
import ContactForm from './ContactForm/ContactForm.js';
import ContactList from './ContactList/ContactList.js';
import FilterContacts from './FilterContacts/FilterContacts.js';
import Button from './Button/Button.js';
import Spinner from './Spinner/Spinner.js';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    const loading = this.props.loading;
    const isContacts = this.props.contacts.length;
    const isShowFindCOntact = isContacts >= 2;
    const isShowContactList = isContacts !== 0;

    return (
      <>
        <Button />
        {loading && <Spinner />}
        <Section title={'Phonebook'}>
          <ContactForm />
          {isShowFindCOntact && <FilterContacts />}
          {isShowContactList !== 0 && <ContactList />}
        </Section>
      </>
    );
  }
}

const mapStateToprops = state => {
  return {
    loading: phoneBookSelectors.getLoading(state),
    contacts: phoneBookSelectors.getContacts(state),
  };
};
const mapDispatchToProps = {
  onFetchContacts: phoneBookOperation.fetchContact,
};

export default connect(mapStateToprops, mapDispatchToProps)(App);
