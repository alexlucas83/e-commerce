import React, { Component } from 'react';
import './Carroussel.scss';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://wallpaperplay.com/walls/full/d/5/3/140061.jpg',
    altText: '',
    caption: 'Come alone or with friends to watch the latest movies of the moment'
  },
  {
    src: 'https://cdn.wallpapersafari.com/20/95/nfcGSK.jpg',
    altText: '',
    caption: 'VIP rooms'
  },
  {
    src: 'https://images4.alphacoders.com/294/294956.jpg',
    altText: '',
    caption: 'total immersion'
  }
];

class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="size-carousel" width="100%" height="700" media="screen" />
          <div className="sizeTitleCarousel"><CarouselCaption font-size captionText={item.caption} captionHeader={item.altText} /></div>
        </CarouselItem>
      );
    });
    return (
      <Carousel className="style-carousel"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default Carousel1;