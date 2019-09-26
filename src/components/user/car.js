import React, { useState, useEffect } from 'react';
import { CardImg, Button, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import axios from 'axios';
const greyColor = {
  color: 'grey'
};

// const getBikes = () => {
//   return async () => {
//   //   dispatch({ type: GET_CARS_PENDING })
//     let bikes = await axios.post('http://10.1.2.113:8080/BikeShop/getbikes');
//     return bikes;
//   }
// }

let bikes;

// useEffect(async () => {
//       bikes = await axios.post('http://10.1.2.113:8080/BikeShop/getbikes');
// }, []);

const Car = ({ bike }, props) => {
  // let bike_list = getBikes();
  // console.log(bikes);
  // console.log(bike);

  return (
    <div>
      <Row>
        <Col md='12'>
          <div className='card border-secondary mb-3'>
            <div className='card-header' style={{ backgroundColor: 'white' }}>
              <h4 style={{ color: 'black', fontWeight: 'bold' }}>
                <Link to={`/cars/${bike.BikeID}`}>
                  {/* {car.year} {car.make} {car.model} {car.trim} */}
                  <h4 style={{ color: 'black' }}>{bike.Model}</h4>
                </Link>
              </h4>
            </div>
            <div className='card-body' style={{ paddingBottom: 0 }}>
              <Row>
                <Col md='5'>
                  <CardImg
                    className='carlist-margin'
                    top
                    width='100%'
                    src={bike.ImageAddress}
                    // alt={car.make}
                  />
                </Col>
                <Col md='4'>
                  <Table className='striped'>
                    <tbody>
                      <tr>
                        <td style={greyColor}>Engine:</td>
                        <td>{bike.EngineSize}</td>
                      </tr>
                      <tr>
                        <td style={greyColor}>Power:</td>
                        <td>{bike.Power}</td>
                      </tr>
                      <tr>
                        <td style={greyColor}>Torque:</td>
                        <td>{bike.Torque}</td>
                      </tr>
                      <tr>
                        <td style={greyColor}>Color:</td>
                        <td>{bike.color}</td>
                      </tr>
                      <tr>
                        <td style={greyColor}>Mileage:</td>
                        <td>{bike.Mileage}</td>
                      </tr>
                      <tr>
                        <td style={greyColor}>Brakes:</td>
                        <td>{bike.Brake}</td>
                      </tr>
                      <tr>
                        <td style={greyColor}>Tyre Type:</td>
                        <td>{bike.TyreType}</td>
                      </tr>
                      {/* <tr>
                        <td style={greyColor}>ABS:</td>
                        <td>{car.vin}</td>
                      </tr> */}
                    </tbody>
                  </Table>
                </Col>
                <Col md='3'>
                  <Table className='striped'>
                    <tbody>
                      <tr>
                        <td className='text-primary text-right'>
                          <strong>Maximum Selling Price:</strong>
                        </td>
                        <td className='text-primary text-right'>
                          <strong>₹{bike.SellingPrice}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-danger text-right'>
                          Dealer Discount:
                        </td>
                        <td className='text-danger text-right'>6.5 %</td>
                      </tr>
                      <tr>
                        <td className='text-primary text-right'>
                          <strong>Total:</strong>
                        </td>
                        <td className='text-primary text-right'>
                          <strong>
                            ₹
                            {bike.SellingPrice -
                              (bike.SellingPrice * 6.5) / 100}
                          </strong>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-primary text-right'>Est. Lease:</td>
                        <td className='text-primary text-right'>
                          {' '}
                          ₹{bike.SellingPrice / 4}
                        </td>
                      </tr>
                      <tr>
                        <td className='text-primary text-right'>EMI:</td>
                        <td className='text-primary text-right'>
                          ₹{Number((bike.SellingPrice / 12).toFixed(2))}
                        </td>
                      </tr>
                      <tr>
                        <td className='text-right' />
                        <td className='text-right'>
                          {/* <Link to={`/cars/${car.id}`}>
                            <Button className='btn btn-success'>More</Button>
                          </Link> */}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
            <div
              className='card-footer text-success'
              style={{ backgroundColor: 'white' }}
            >
              <Table>
                <tr>
                  <td
                    className='text-right col-2'
                    // style={{ paddingBottom: 0, paddingTop: 0 }}
                    style={{ margin: 0, padding: 0 }}
                  >
                    {/* {localStorage.setItem('isLoggedIn', true)} */}

                    {/* <a href='https://rzp.io/l/vqntC0j'> */}
                    {/* <Button
                      className='btn btn-success'
                      onClick={() => props.history.push('/')}
                    >
                      Buy Now
                    </Button> */}

                    {localStorage.getItem('isLoggedIn') === 'true' ? (
                      <a href='https://rzp.io/l/vqntC0j'>
                        {console.log(
                          localStorage.getItem('isLoggedIn'),
                          'Hello'
                        )}
                        <Button className='btn btn-success'>Buy Now</Button>
                      </a>
                    ) : (
                      <Link to='/sign-in'>
                        {console.log(localStorage.getItem('isLoggedIn'), ' 2')}
                        <Button className='btn btn-success'>Buy Now</Button>
                      </Link>
                    )}

                    {/* </a> */}

                    {/* {localStorage.getItem('isLoggedIn') === true ? (
                      <Link to={'/'}>
                        <Button
                          className='btn btn-success'
                          onClick={e => {
                            this.routePush();
                          }}
                        >
                          Buy Now
                        </Button>
                      </Link>
                    ) : (
                      <Link to={'/sign-in'}>
                        <Button className='btn btn-success'>Buy Now</Button>
                      </Link>
                    )} */}
                  </td>
                  <td
                    className='text-right col-2'
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                  >
                    <Link to={`/cars/:${bike.BikeID}`}>
                      <Button className='btn btn-success'>More</Button>
                    </Link>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Car;
