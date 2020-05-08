import react from "react"

import Layout from "../components/Layout";
import "../public/styles.scss"

import { getSinglePost } from './api/posts';
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

function About(props) {
    return (
        <Layout className="about-page-layout">
          <Container className="about-page-header-container">
            <Row className="justify-content-center">
              <Col>
                <Jumbotron>
                  <h1>About Us</h1>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
          <Container className="about-page-container">
            <Row className="justify-content-center">
              <Col lg={8}>
                <h1>{props.post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
              </Col>
            </Row>
          </Container>
        </Layout>
    )
}

About.getInitialProps = async () => {
  const post = await getSinglePost(`this-is-a-post`);
  return { post: post }
}

export default About