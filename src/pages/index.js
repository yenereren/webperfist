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
                  <img className="img" src="https://media-exp1.licdn.com/dms/image/C4D03AQGukrG-P0ISbg/profile-displayphoto-shrink_200_200/0/1608570863263?e=1634774400&v=beta&t=uRJAxYVlJuuI7k8aHadRwfz24Iutr2u58drOq9PdzIk"></img>
                  <div className="name">{node.instructor}</div>

                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      )}

      <div className="container">
          <div className="container-title">
            <h1>Konuşmacı ol</h1>
          </div>

          <div className="row">
            <div className="col-6">
              <label for="firstName" class="form-label">İsim</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""></input>
            </div>
            <div className="col-6">
              <label for="firstName" class="form-label">Soyisim</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""></input>
            </div>
            <div className="col-12 mt-2">
              <label for="firstName" class="form-label">Email</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""></input>
            </div>
            <div className="col-12 mt-2">
              <button className="btn-block">Gönder</button>
            </div>
            
          </div>
      </div>

      <div className="container mb-6">
        <div className="row justify-content-start">
          <h1>Konuşmacılar</h1>
        </div>
        <div className="row justify-content-center">
          {members.map(({ node }) => (
            <div key={node.id} className="col-6 mb-2">
              <div className="speaker-container">
                {node.image && (
                  <div className="speaker-image">
                    <img src={node.image} />
                  </div>
                )}
                <h2 className="speaker-title">{node.name}</h2>
                <div className="speaker-content">{node.title}</div>
              </div>
            </div>
          ))}
        </div>
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
          instructor
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
