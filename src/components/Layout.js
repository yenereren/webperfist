import React from 'react';
import SEO from './SEO';
import SubFooter from './SubFooter';
import '../scss/style.scss';

const Layout = props => (
  <>
    <SEO />
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
      <div id="wrapper" className="wrapper">
        {props.children}
      </div>
      <SubFooter />
    </div>
  </>
);

export default Layout;
