import React from 'react';
import { connect } from 'react-redux';

import Section from './Section/Section.js';
import ContactForm from './ContactForm/ContactForm.js';
import ContactList from './ContactList/ContactList.js';
import FilterContacts from './FilterContacts/FilterContacts.js';
import Button from './Button/Button.js';

const App = ({ contacts }) => {
  const isContacts = contacts.items.length;
  const isShowFindCOntact = isContacts >= 2;
  const isShowContactList = isContacts !== 0;

  return (
    <>
      <Button />
      <Section title={'Phonebook'}>
        <ContactForm />
        {isShowFindCOntact && <FilterContacts />}
        {isShowContactList !== 0 && <ContactList />}
      </Section>
    </>
  );
};

const mapStateToprops = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToprops)(App);
