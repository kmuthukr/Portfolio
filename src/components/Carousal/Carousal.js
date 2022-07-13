//https://react-bootstrap.github.io/components/carousel/
import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample(props) {
    const images = props.carousal_images_set;  

  return (
    <Carousel fade  hover={false} autoPlay={true} interval={2000} controls={false} indicators={false}>
        {images.map(image_local => (
            <Carousel.Item key={image_local.id}>
                <img className="circle" src={image_local.image} alt="krisshna"/>
            </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default CarouselFadeExample;