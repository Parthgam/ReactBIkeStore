import React, { Component } from 'react';
import img from '../../img.jpeg';
import img2 from '../../img2.jpeg';
import img3 from '../../img3.jpeg';
import img9 from '../../img9.jpeg';
import img6 from '../../img6.jpeg';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: img6,
    altText: 'Bike',
    caption: 'Best Mileage Bikes',
    text: '2019'
  },
  {
    src: img9,
    altText: 'BMW cafe Racer',
    caption: 'BMW',
    text: 'BMW K1100 Cafe Racer'
  },
  {
    src: img3,
    altText: '',
    caption: 'Rent Bike',
    text: 'Available in Selected Cities'
  }
];

class JumboTron extends Component {
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
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            className='d-block w-100'
            style={{ height: 585 }}
            src={item.src}
            alt={item.altText}
          />
          <CarouselCaption
            style= {{ backgroundColor: 'grey'}}
            captionHeader={item.caption}
            captionText={item.text}
          />
        </CarouselItem>
      );
    });

    return (
      <div className='container'>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction='prev'
            directionText='Previous'
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction='next'
            directionText='Next'
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default JumboTron;

// import React, { Component } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';
//
// const items = [
//   {
//     id: 'https://s3.amazonaws.com/cartool/white_lamborghini_2.jpg',
//     altText: 'Slide 1',
//     caption: 'Slide 1'
//   },
//   {
//     id: 'https://s3.amazonaws.com/cartool/background.jpg',
//     altText: 'Slide 2',
//     caption: 'Slide 2'
//   },
//   {
//     id: 3,
//     altText: 'Slide 3',
//     caption: 'Slide 3'
//   }
// ];
//
// class JumboTron extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeIndex: 0 };
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.goToIndex = this.goToIndex.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//   }
//
//   onExiting() {
//     this.animating = true;
//   }
//
//   onExited() {
//     this.animating = false;
//   }
//
//   next() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
//     this.setState({ activeIndex: nextIndex });
//   }
//
//   previous() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
//     this.setState({ activeIndex: nextIndex });
//   }
//
//   goToIndex(newIndex) {
//     if (this.animating) return;
//     this.setState({ activeIndex: newIndex });
//   }
//
//   render() {
//     const { activeIndex } = this.state;
//
//     const slides = items.map((item) => {
//       return (
//         <CarouselItem
//           className="custom-tag"
//           tag="div"
//           key={item.id}
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//         >
//           <CarouselCaption className="text-success" captionText={item.caption} captionHeader={item.caption} />
//         </CarouselItem>
//       );
//     });
//
//     return (
//       <div className="container">
//         <style>
//           {
//             `.custom-tag {
//                 max-width: 100%;
//                 height: 550px;
//                 background-repeat: no-repeat;
//                 background-position: center;
//                 background-image: url('');
//               }`
//           }
//         </style>
//         <Carousel
//           activeIndex={activeIndex}
//           next={this.next}
//           previous={this.previous}
//         >
//           <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//           {slides}
//           <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
//           <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
//         </Carousel>
//       </div>
//     );
//   }
// }
//
// export default JumboTron;
