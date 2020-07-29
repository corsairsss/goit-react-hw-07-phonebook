import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapDispatchToProps = {
  onAddContact: phoneBookOperation.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
