import React from 'react';
import { connect } from 'react-redux';

import ContactItem from '../ContactItem/ContactItem.js';

import s from './ContactList.module.css';

const ContactList = ({ list }) => {
  return (
    <ul className={s.list}>
      {list.map(elem => (
        <ContactItem key={elem.id} id={elem.id} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  const { items: contacts, filter } = state.contacts;
  const filtredList = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );
  return {
    list: filtredList,
  };
};

export default connect(mapStateToProps)(ContactList);
