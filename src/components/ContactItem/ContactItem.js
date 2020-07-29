import React from 'react';
import { connect } from 'react-redux';

import phoneBookAction from '../../redux/phoneBookActions.js';

import s from './ContactListItem.module.css';

const ContactItem = ({ phone, name, id, theme, removeContact }) => {
  const href = `tel:+38${phone}`;
  return (
    <li key={id} className={s.list__item}>
      <span>{name}:</span>
      <a href={href} className={theme === 'light' ? s.dark : s.light}>
        {phone}
      </a>
      <button className={s.btn_delete} type="button" onClick={removeContact}>
        <svg
          className={theme === 'light' ? s.svgLightTheme : s.svgDarkTheme}
          width="25"
          height="25"
          viewBox="0 0 32 32"
        >
          <title>delete-contact</title>
          <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
          <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
        </svg>
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = state.contacts.items.find(item => item.id === ownProps.id);

  return {
    ...contact,
    theme: state.PhBookTheme.theme,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeContact: () => dispatch(phoneBookAction.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
