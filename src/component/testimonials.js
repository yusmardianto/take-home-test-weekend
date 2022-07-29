import Container from 'react-bootstrap/Container';
import React, { Component } from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './component.css';
import axios from 'axios';

export default class Testimonial extends React.Component {

    state = {
        testimonis: []
    }

    componentDidMount() {
        axios.get(`https://wknd-take-home-challenge-api.herokuapp.com/testimonial`)
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
            <div className="definition">
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <br /><br /><br /><br /><br /><br />
                <div align="center">
                    <h1 className="titleTestimoni">Testimonial</h1>
                </div>
                <Container className="sliderTesti">
                    <Slider {...settings}>
                        { this.state.testimonis.map(testimoni =>
                            <div>
                                <Card
                                    style={{ width: '18rem', height:"200px"}}
                                    className="mb-2"
                                    >
                                    <Card.Body>
                                        <Card.Title>
                                            <h1 style={{fontWeight:"bold"}}>{testimoni.by}</h1>
                                        </Card.Title><br/>
                                        <Card.Text>
                                            {testimoni.testimony}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )}
                    </Slider>
                </Container>
            </div>
        );
    }
}