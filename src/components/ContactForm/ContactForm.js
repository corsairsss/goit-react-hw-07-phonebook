import React, { Component } from 'react';
import { connect } from 'react-redux';

import phoneBookSelectors from '../../redux/phoneBookSelectors.js';
import phoneBookOperation from '../../redux/phoneBookOperation.js';

import defaultState from './defaultState.js';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = defaultState;

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contacts = this.props.contacts;
    const phone = this.state.phone;
    const isPhoneInContacts = contacts.find(contact => contact.phone === phone);
    if (isPhoneInContacts || phone === '') {
      alert('Contact Already Exist or Number,Name are Empty');
      return;
    }

    const { onAddContact } = this.props;
    onAddContact(this.state);
    this.setState(defaultState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.form__label}>
          Name:
          <input
            className={s.form__input}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
        </label>

        <label className={s.form__label}>
          Number:
          <input
            className={s.form__input}
            type="number"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
            placeholder="in format: 0XXXXXXXXX"
          />
        </label>

        <button type="submit" className={s.form__btn}>
          Add Contact
        </button>
      </form>
    );
  }
}
const mSTP = state => {
  return {
    contacts: phoneBookSelectors.getContacts(state),
  };
};

const mDTP = {
  onAddContact: phoneBookOperation.addContact,
};

export default connect(mSTP, mDTP)(ContactForm);
