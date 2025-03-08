import React from "react";
import { Row, Col, Typography } from "antd";

import "./FooterContainer.scss";

const { Text } = Typography;

const FooterContainer: React.FC = () => {
  return (
    <div className="footer-container">
      <Row gutter={[16, 24]} justify="space-between">
        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="footer-text">
          <Text
            style={{
              color: "#FFF",
            }}
          >
            BASIC
          </Text>
          <Text
            style={{
              color: "#FFF",
            }}
          >
            (514) 904-6789
          </Text>
          <Text
            style={{
              color: "#FFF",
            }}
          >
            Quebec, 3100 Boulevard de la Côte-Vertu
          </Text>
        </Col>

        <Col
          xs={12}
          sm={8}
          md={6}
          lg={6}
          xl={6}
          className="footer-links-container"
        >
          <a href="#" className="footer-link">
            Activité 1
          </a>
          <a href="#" className="footer-link">
            Activité 2
          </a>
          <a href="#" className="footer-link">
            Activité 3
          </a>
        </Col>

        <Col
          xs={12}
          sm={8}
          md={6}
          lg={6}
          xl={6}
          className="footer-links-container"
        >
          <a href="#" className="footer-link">
            Titre 1
          </a>
          <a href="#" className="footer-link">
            Titre 2
          </a>
          <a href="#" className="footer-link">
            Titre 3
          </a>
        </Col>

        <Col
          xs={24}
          sm={8}
          md={6}
          lg={6}
          xl={6}
          className="footer-links-container"
        >
          <a href="#" className="footer-link">
            Blog
          </a>
          <a href="#" className="footer-link">
            Nous contacter
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default FooterContainer;
