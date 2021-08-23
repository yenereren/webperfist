import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Home = props => {
  const intro = props.data.intro;
  const site = props.data.site.siteMetadata;
  const events = props.data.events.edges;
  const members = props.data.members.edges;
  const config = props.data.configJson;


  return (
    <Layout bodyClass="page-home">
      <SEO title={site.title} />
      <Helmet>
        <meta
          name="description"
          content="İstanbul Web Performance, web'i kitlelere daha hızlı ulaştırmak için bir araya gelen bir topluluktur."
        />
      </Helmet>

      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-6 col-md-6 col-lg-6">
              <img className="logo" height={config.logo.desktop_height} alt={config.logo.alt} src={config.logo.desktop} />
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>

            <div className="col-6 col-md-6 col-lg-6">
              {intro.frontmatter.intro_image && (
                <div className="col-12">
                  <img alt={intro.frontmatter.title}  src={intro.frontmatter.intro_image} />
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
      
      {events.length > 0 && (
        <div className="container">
          <div className="container-title">
            <h1>Yaklaşan Etkinlikler</h1>
          </div>

          <div className="row">
          {events.map(({ node }) => (
            <div key={node.id} className="col-6 col-md-6 mb-2">
              <div className="event">
                <div className="info">
                  <div className="event-title">
                    {node.title}
                  </div>
                  <div className="date">
                    {node.date}
                  </div>
                  <div className="description">
                    {node.description}
                  </div>
                </div>
                <div className="instructor">
                  <img className="img" src={node.instructor.image}></img>
                  <div className="name">{node.instructor.name}</div>

                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      )}

      <div className="container mt-3 mb-3">

          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCjzsICzKWqa16i4urzSGUheRq-Cx2BJTiLDd7fSSNrVnRyw/viewform?embedded=true" frameBorder="0" className="speaker-form-iframe">Yükleniyor…</iframe>


      </div>

    </Layout>
  );
};

export const query = graphql`
  query {
    
    configJson {
        logo {
          alt
          desktop
          mobile
          desktop_height
        }
    }
    intro: markdownRemark(
      fileAbsolutePath: {regex: "/content/index.md/"}
    ) {
        html
        frontmatter {
          image
          intro_image
          intro_image_absolute
          intro_image_hide_on_mobile
          title
        }
    }
    members : allMembersJson {
      edges {
        node {
          name
          bio
          image
        }
      }
    }
    events: allEventsJson {
      edges {
        node {
          title
          displayName
          description
          date
          instructor {
            name
            image
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Home;
