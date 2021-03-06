import React from 'react';
import { connect } from 'react-redux';

import phoneBookSelectors from '../../redux/phoneBookSelectors.js';

import themeConfig from '../../configStyles/configStyle.js';

import s from './Section.module.css';

const Section = ({ theme, title, children }) => {
  return (
    <section className={s.container} style={themeConfig[theme]}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    theme: phoneBookSelectors.getTheme(state),
  };
};

export default connect(mapStateToProps)(Section);
