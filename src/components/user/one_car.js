import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Img from 'react-image';
import { Table } from 'reactstrap';
import Icon from 'react-icons-kit';
import { motorcycle } from 'react-icons-kit/fa/motorcycle';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { instagram } from 'react-icons-kit/fa/instagram';
import { googlePlus } from 'react-icons-kit/fa/googlePlus';
import ContactForm from './contact';
import axios from 'axios';

class OneCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bike_details: null
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    let str = id.substring(1);
    axios
      .post('http://10.1.2.113:8080/BikeShop/getbikes?bikeid=' + str)
      .then(response => {
        this.setState({
          bike_details: response.data
        });
        console.log(response.data);
      });
  }

  render() {
    let id = this.state.bike_details ? this.state.bike_details.BikeID : null;
    // let year = this.state.bike_details ? this.state.bike_details.year : null;
    // let make = this.state.bike_details ? this.state.bike_details.make : null;
    let model = this.state.bike_details ? this.state.bike_details.Model : null;
    // let trim = this.state.bike_details ? this.state.bike_details.trim : null;
    let image = this.state.bike_details
      ? this.state.bike_details.ImageAddress
      : null;
    let price = this.state.bike_details
      ? this.state.bike_details.SellingPrice
      : null;
    // let sale = this.state.bike_details ? this.state.bike_details.sale : null;
    // let vin = this.state.bike_details ? this.state.bike_details.vin : null;
    let sp = this.state.bike_details
      ? this.state.bike_details[0].SellingPrice
      : 0;
    let g66price = sp - (sp * 6.5) / 100;

    let abs = this.state.bike_details ? this.state.bike_details.Abs : null;
    let brake = this.state.bike_details ? this.state.bike_details.Brake : null;
    let engine = this.state.bike_details
      ? this.state.bike_details.EngineSize
      : null;
    let mileage = this.state.bike_details
      ? this.state.bike_details.Mileage
      : null;
    let power = this.state.bike_details ? this.state.bike_details.Power : null;
    let torque = this.state.bike_details
      ? this.state.bike_details.Torque
      : null;
    let tyreType = this.state.bike_details
      ? this.state.bike_details.TyreType
      : null;
    let warranty = this.state.bike_details
      ? this.state.bike_details.Warrenty
      : null;

    return (
      <Container>
        {/* {console.log(this.state.bike_details.mileage)} */}
        {/* <Row>     */}
        <div className='container' style={{ marginTop: 15 }}>
          <Row className='image-n-price border-secondary'>
            <Col md='8'>
              <Img
                className='singleImage'
                src={
                  this.state.bike_details
                    ? this.state.bike_details[0].ImageAddress
                    : null
                }
              />
            </Col>
            <Col md='4'>
              <div className='card border-secondary mb-3'>
                <div
                  className='card-header text-black'
                  style={{ backgroundColor: 'white' }}
                >
                  <h5>
                    <center>Detail Pricing</center>
                  </h5>
                </div>
                <div className='card-body one-car-price'>
                  <center>
                    <Table size='sm'>
                      <tbody>
                        <tr>
                          <td>
                            <strong>MSRP:</strong>
                          </td>
                          <td>
                            <strong>
                              ₹
                              {this.state.bike_details
                                ? this.state.bike_details[0].SellingPrice
                                : null}
                            </strong>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-danger'>Dealer's Discount:</td>
                          <td className='text-danger'>6.5 %</td>
                        </tr>
                        <tr>
                          <td className='text-success'>
                            <strong>MO's Price</strong>
                          </td>
                          <td className='text-success'>
                            <strong>₹{sp - (sp * 6.5) / 100}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </center>
                  <hr />
                  <Table size='sm'>
                    <tbody>
                      <tr>
                        <td>Estimated Rent:</td>
                        <td>
                          ₹
                          {this.state.bike_details
                            ? this.state.bike_details[0].SellingPrice / 4
                            : null}
                          /pa**
                        </td>
                      </tr>
                      <tr>
                        <td>EMI:</td>
                        <td>
                          ₹
                          {this.state.bike_details
                            ? Number(
                                (
                                  this.state.bike_details[0].SellingPrice / 12
                                ).toFixed(1)
                              )
                            : null}
                          /pm**
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>

              <div className='card border-secondary mb-3'>
                <div
                  className='card-header text-black'
                  style={{ backgroundColor: 'white' }}
                >
                  <h5>
                    <center>Reach Us</center>
                  </h5>
                </div>
                <center>
                  <div className='card-body text-primary'>
                    <div className='row'>
                      <center>
                        Call Us- 0120-3323401(Toll Free) <br />
                        Email- support@mobikes.com
                      </center>
                    </div>
                    <div className='row'>
                      <div className='md=12'>
                        515 E Grant St, Phoenix, AZ 85004
                      </div>
                    </div>
                    <br />
                    <div className='row'>
                      <div className='md=12' />
                    </div>
                  </div>
                </center>
              </div>
            </Col>
          </Row>
        </div>
        <br />
        <Row>
          <Col md='8'>
            <div className='card border-secondary mb-3'>
              <div
                className='card-header text-black'
                style={{ backgroundColor: 'white' }}
              >
                <h5>Highlighted Features</h5>
              </div>
              <div className='card-body'>
                <div className='feature-highlight'>
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <Icon
                            className='car-icon'
                            size={25}
                            icon={motorcycle}
                          />{' '}
                          {this.state.bike_details
                            ? this.state.bike_details[0].Abs
                            : null}
                        </td>
                        <td>
                          <Icon
                            className='car-icon'
                            size={25}
                            icon={motorcycle}
                          />{' '}
                          {this.state.bike_details
                            ? this.state.bike_details[0].Brake
                            : null}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Icon
                            className='car-icon'
                            size={25}
                            icon={motorcycle}
                          />{' '}
                          {this.state.bike_details
                            ? this.state.bike_details[0].EngineSize
                            : null}
                        </td>
                        <td>
                          <Icon
                            className='car-icon'
                            size={25}
                            icon={motorcycle}
                          />{' '}
                          {this.state.bike_details
                            ? this.state.bike_details[0].Torque
                            : null}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Icon
                            className='car-icon'
                            size={25}
                            icon={motorcycle}
                          />{' '}
                          {this.state.bike_details
                            ? this.state.bike_details[0].Mileage
                            : null}
                        </td>
                        <td>
                          <Icon
                            className='car-icon'
                            size={25}
                            icon={motorcycle}
                          />{' '}
                          {this.state.bike_details
                            ? this.state.bike_details[0].Power
                            : null}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Icon
                            className='car-icon'
                            size={25}
                            icon={motorcycle}
                          />{' '}
                          {this.state.bike_details
                            ? this.state.bike_details[0].Warrenty
                            : null}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Col>
          <Col md='4'>
            <div className='card border-secondary mb-3'>
              <div
                className='card-header text-black'
                style={{ backgroundColor: 'white' }}
              >
                <h5>Share This Vehicle</h5>
              </div>
              <div className='card-body'>
                <Row>
                  <Col md='3'>
                    <Icon icon={facebook} size={30} />
                  </Col>
                  <Col md='3'>
                    <Icon icon={twitter} size={30} />
                  </Col>
                  {/* </Row>
                <Row> */}
                  <Col md='3'>
                    <Icon icon={instagram} size={30} />
                  </Col>
                  <Col md='3'>
                    <Icon icon={googlePlus} size={30} />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md='12'>
            <div className='card border-success'>
              <div className='card-header text-white bg-success'>
                <h5>Schedule Test Drive</h5>
              </div>
              <div className='card-body text-success'>
                <ContactForm id={id} />
              </div>
            </div>
            <br />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    car: state.cars.find(car => car.id == props.match.params.id)
  };
}

export default connect(
  mapStateToProps,
  null
)(OneCar);
