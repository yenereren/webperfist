import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Social from './Social';

const SubFooter = props => {
  const data = useStaticQuery(graphql`
    query SubFooterQuery {
      configJson {
        footer {
          copyright_text
          copyright_link
        }
      }
    }
  `);
  return (
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sub-footer-inner">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
