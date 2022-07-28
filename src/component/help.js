import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import axios from 'axios';
import Image from '../img/Path3.png';
export default class Help extends React.Component {

  state = {
    testimonis: []
  }

  componentDidMount() {
    axios.get(`https://wknd-take-home-challenge-api.herokuapp.com/help-tips`)
      .then(res => {
        const testimonis = res.data;
        this.setState({ testimonis });
      })
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div aling="center" className="help"><br /><br /><br /><br />
        <img src={Image} className="BgimgRight" />
        <div align="center">
          <h1 className="titlehelp">Help & Tips</h1><br />
        </div>
        <Container>
          <Row>
            {this.state.testimonis.map(testimoni =>
              <Card className="text-white helpImg">
                <Card.Img src={testimoni.image} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title className="helpText">{testimoni.title}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}