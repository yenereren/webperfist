import React, { useEffect, useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Layout bodyClass="page-home">
      <SEO title={site.title} />
      <Helmet>
        <meta
          name="description"
          content="İstanbul Web Performance, web'i kitlelere daha hızlı ulaştırmak için bir araya gelen bir topluluktur."
        />
      </Helmet>

      {isModalOpen &&
        <div className="modal" tabIndex="-1" style={{'display':'block'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header modal-header-container">
                <button onClick={toggleModal} type="button" className="close-button">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <iframe className="newsletter-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSfbsH4LQk-zJYlvX8KSP5DKloUavwgc0-SsBP-D6A4o8pOe6A/viewform?embedded=true" height="450" width="100%" frameBorder="0" >Yükleniyor…</iframe> 
              </div>
              <div className="modal-footer">
                <button onClick={toggleModal} type="button" className="btn btn-secondary">Vazgeç</button>
              </div>
            </div>
          </div>
        </div>
      }

      

      <div className="intro">
      
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-6 col-lg-6">
              <img className="logo" height={config.logo.desktop_height} alt={config.logo.alt} src={config.logo.desktop} />
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
              <div className="social-media-container">
                <a href={config.socialMedia.slack} target="blank" className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M14.5 3A1.5 1.5 0 0 1 16 4.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 14.5 3zm-10 10H6v1.5A1.5 1.5 0 1 1 4.5 13zm8.5 5h1.5a1.5 1.5 0 1 1-1.5 1.5V18zm1.5-5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3zm5-5a1.5 1.5 0 0 1 0 3H18V9.5A1.5 1.5 0 0 1 19.5 8zm-15 0h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3zm5-5A1.5 1.5 0 0 1 11 4.5V6H9.5a1.5 1.5 0 0 1 0-3zm0 10a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 9.5 13z"/></svg>
                </a>
                <a href={config.socialMedia.youtube} target="blank" className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.606 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.5 6 12 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592C4.285 7.419 4 9.196 4 12s.285 4.58.394 5.006c.076.297.292.522.538.59C5.372 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592C19.715 16.581 20 14.8 20 12s-.285-4.58-.394-5.005zm1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
                </a>
                <a href={config.socialMedia.twitter} target="blank" className="mr-2">
                  <svg className="twitter-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"/></svg>
                </a>
                <a href={config.socialMedia.github} target="blank" className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"/></svg>
                </a>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-6">
              {intro.frontmatter.intro_image && (
                <div className="col-12 intro-image">
                  <img alt={intro.frontmatter.title}  src={intro.frontmatter.intro_image} />
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      <div className="container mt-2">
        <button onClick={toggleModal} className="btn btn-primary btn-block font-weight-bold">ETKİNLİKLERİMİZE ABONE OLUN</button>
      </div>
      
      {events.length > 0 && (
        <div className="container">
          <div className="container-title">
            <h1>Yaklaşan Etkinlikler</h1>
          </div>

          <div className="row">
          {events.map(({ node }) => (
            <div key={node.id} className="col-12 col-md-6 mb-2">
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
                  <img className="img" loading="lazy" width="100" height="100" src={node.instructor.image}></img>
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

      {isModalOpen && <div class="modal-backdrop fade show"></div>}

    </Layout>
  );
};

export const query = graphql`
  query {
    
    configJson {
        socialMedia {
          youtube,
          github,
          twitter,
          slack
        },
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
