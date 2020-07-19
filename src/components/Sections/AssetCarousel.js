import React from "react";

// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators, Container, Col, Row } from "reactstrap";
import Asset1 from "assets/img/iisAssets/coursel_asset_1.jpg"
import Asset2 from "assets/img/iisAssets/coursel_asset_2.jpg"
import Asset3 from "assets/img/iisAssets/coursel_asset_3.jpg"
import Asset4 from "assets/img/iisAssets/coursel_asset_4.jpg"


// core components
const items = [
  {
    src: Asset1,
  },
  {
    src: Asset2,
  },
  {
    src: Asset3,
  },
  {
    src: Asset4,
  }
];

function Example(){
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <Container>
      <Row>
      <Col  className="mr-auto ml-auto" xs={12} lg={10}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {items.map(item => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}
              >
                <img src={item.src} alt={item.altText} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{item.caption}</h5>
                </div>
              </CarouselItem>
            );
          })}
          <a
            className="carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              previous();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-left"></i>
          </a>
          <a
            className="carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              next();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-right"></i>
          </a>
        </Carousel>
      </Col>
        </Row>
    </Container>
  );
}

export default Example;