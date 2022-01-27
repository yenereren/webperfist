import React from 'react';
import SEO from './SEO';
import SubFooter from './SubFooter';
import '../scss/style.scss';

const Layout = props => (
  <>
    <SEO />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
      <div id="wrapper" className="wrapper">
        {props.children}
      </div>
      <SubFooter />
    </div>

  </>
);

export default Layout;
