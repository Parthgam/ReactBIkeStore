import React, { Component } from 'react';
import { connect } from 'react-redux';
import Car from './car';
import TopSearchBar from './top_search_bar';
import '../../index.css';
import axios from 'axios';

class CarsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bike_list: []
    };
  }

  componentDidMount() {
    // this.props.getCars();
    // this.props.getMessages();

    axios.post('http://10.1.2.113:8080/BikeShop/getbikes').then(response => {
      this.setState({
        bike_list: response.data
      });
      // console.log(response.data);
    });
  }

  render() {
    // console.log(this.state.bike_list);
    let carList = this.state.bike_list
      ? this.state.bike_list.map((bike, index) => {
          return (
            <div key={bike.BikeID} className='col-12'>
              <Car
                history={this.props.history}
                key={bike.BikeID}
                bike={this.state.bike_list[index]}
              />
            </div>
          );
        })
      : null;

    return (
      <div className='container' style={{ marginTop: 15 }}>
        <div className='row'>
          {carList}
          {/* {console.log(carList)}
          {console.log(this.props.car_list)} */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  var filtered = state.cars;

  if (state.filtered.make) {
    filtered = filtered.filter(car => car.make == state.filtered.make);
  }
  if (state.filtered.body) {
    filtered = filtered.filter(car => car.body_type == state.filtered.body);
  }
  filtered = filtered.sort((car1, car2) =>
    state.filtered.priceRange === 'lowHigh'
      ? car1.price - car2.price
      : car2.price - car1.price
  );

  return {
    filtered: state.filtered,
    cars: filtered
  };
}

export default connect(
  mapStateToProps,
  null
)(CarsList);
