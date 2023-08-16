import React from "react";
import { Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./CardSlider.css"; // You can define your own styles in this file

const CardSlider = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      title: "Explore",
      description: "Computer science is considered as part of a family of five separate yet interrelated disciplines: computer engineering, computer science, information systems, information technology, and software engineering. This family has come to be known collectively as the discipline of computing.",
      buttonText: "Learn it"
    },
    {
      image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Execute",
      description: "Computer science is considered as part of a family of five separate yet interrelated disciplines: computer engineering, computer science, information systems, information technology, and software engineering. This family has come to be known collectively as the discipline of computing.",
      buttonText: "Move in"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1664475819491-58edbc5c650c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Experiment",
      description: "Computer science is considered as part of a family of five separate yet interrelated disciplines: computer engineering, computer science, information systems, information technology, and software engineering. This family has come to be known collectively as the discipline of computing.",
      buttonText: "checkout"
    },

  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ChevronLeftIcon />,
    nextArrow: <ChevronRightIcon />,
  };
  const iconStyle7={
  backgroundColor:'#5a8ad0',

  }

  return (
    <Container>
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div>
        <Card key={index} className="custom-card">
          <CardContent className="card-content">
            <Typography variant="h5" component="div" className="card-title">
              {slide.title}
            </Typography>
            <Typography variant="body2" className="card-description">
              {slide.description}
            </Typography>
            <Button variant="contained" style={iconStyle7} className="card-button">
              {slide.buttonText}
            </Button>
          </CardContent>
          <CardMedia
            component="img"
            height="140"
            image={slide.image}
            alt={`Card ${index + 1}`}
            className="card-image"
          />
        </Card>
        </div>
      ))}
    </Slider>
  </Container>
  );
};

export default CardSlider;

