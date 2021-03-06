import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BoxLoading } from 'react-loadingg';

import '../assets/sass/resume.scss';


const runAos = () => {
  AOS.init({
    delay: 0,
    duration: 1200,
    mirror: false,
    offset: 0,
  });
};

const Layout = ({ children }) => {
  // AOS.init();
  useEffect(() => {
    runAos();
  }, []);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (

    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Resume' },
          { name: 'keywords', content: 'site, web' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div className={'main-body'}>{children}</div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
