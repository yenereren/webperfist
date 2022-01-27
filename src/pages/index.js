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

  return (
    <Layout bodyClass="page-home">
      <SEO title={site.title} />
      <Helmet>
        <meta name="description" content={site.description} />
        <meta property='og:title' content={site.title} />
        <meta property='og:image' content={site.image} />
        <meta property='og:description' content={site.description} />
        <meta property='og:url' content={site.description} />
      </Helmet>

      <div className="intro">
      
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-6 col-lg-6">
              <img className="logo" height={config.logo.desktop_height} alt={config.logo.alt} src={config.logo.desktop} />
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>

            <div className="col-6 col-md-6 col-lg-6 mt-6">
                <div className={"social-media youtube-bg"}>
                    <a target={"_blank"} href={"https://www.youtube.com/webperfist"}>youtube.com/webperfist</a>
                </div>
                <div className={"social-media kommunity-bg"}>
                    <a target={"_blank"} href={"https://www.kommunity.com/webperfist"}>kommunity.com/webperfist</a>
                </div>
                <div className={"social-media twitter-bg"}>
                    <a target={"_blank"} href={"https://www.twitter.com/webperfist"}>twitter.com/webperfist</a>
                </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container mt-2">
          <span className={"upcoming-event-title"}>Bir Sonraki Etkinliğimiz - 2 Şubat 2022 19:30</span>
          <a  target={"_blank"} href={"https://www.youtube.com/channel/UCGvIZZ3YJ14lmUaf4UIrtwA"}>
            <img className={"upcoming-event mt-1"} src={"/images/event-images/week7.png"} />
          </a>
      </div>


      <div className="container mt-3 mb-3">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCjzsICzKWqa16i4urzSGUheRq-Cx2BJTiLDd7fSSNrVnRyw/viewform?embedded=true" frameBorder="0" className="speaker-form-iframe">Yükleniyor…</iframe>
      </div>

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
          youtube_image
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
        description
        image
        url
      }
    }
  }
`;

export default Home;
