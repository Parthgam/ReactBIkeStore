import React, { Component } from 'react';
import { Table, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteCar } from '../../actions/cars';
import Icon from 'react-icons-kit';
import { bin } from 'react-icons-kit/icomoon';
import { pencil } from 'react-icons-kit/icomoon';
import { Link } from 'react-router-dom';
import TotalMessage from './total_messages';
import TotalInventory from './total_inventory';
import Specials from './specials';

let bike_name = [
  {
    model: 'Hero Splendor Plus',
    brand: 'hero',
    price: '₹52,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-splendor/640X309/v_hero-motocorp-splendor-plus-alloy1527921365.jpg?tr=w-300,e-sharpen',
    engine: '97.2cc',
    power: '8.36 PS',
    torque: '8.05 Nm',
    mileage: '80.6 Kmpl',
    brakes: 'Drum',
    tire_type: 'Tubeless',
    qty: 95
  },
  {
    model: 'Hero HF Deluxe',
    brand: 'hero',
    price: '₹42,650.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-cd-deluxe/source/m_hf-deluxe_11539838596.jpg?tr=w-439,e-sharpen',
    engine: '97.2cc',
    power: '8.36 PS',
    torque: '8.05 Nm',
    mileage: '82.9 Kmpl',
    brakes: 'Drum',
    tire_type: 'Tubeless',
    qty: 26
  },
  {
    model: 'Hero Super Splendor',
    brand: 'hero',
    price: '₹59,250.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-super-splendor/source/m_super-splendor_11539840483.jpg?tr=w-439,e-sharpen',
    engine: '124.7 cc',
    power: '11.28 PS',
    torque: '11 Nm',
    mileage: '51.2 Kmpl',
    brakes: 'Drum',
    tire_type: 'Tubeless',
    qty: 78
  },
  {
    model: 'Hero Passion Pro',
    brand: 'hero',
    price: '₹54,675.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-passion-pro/source/m_passion-pro_11539840304.jpg?tr=w-439,e-sharpen',
    engine: '97.2 cc',
    power: '8.36 PS',
    torque: '8.05 Nm',
    mileage: '84 Kmpl',
    brakes: 'Disc',
    tire_type: 'Tubeless',
    qty: 33
  },
  {
    model: 'Hero XPulse 200',
    brand: 'hero',
    price: '₹100,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero/xpulse-200/source/m_xpulse-200_11556785892.jpg?tr=w-439,e-sharpen',
    engine: '199.6 cc',
    power: '18.4 PS',
    torque: '17.1 Nm',
    mileage: '42.75 Kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '14'
  },
  {
    model: 'Hero Glamour',
    brand: 'hero',
    price: '₹61,750.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero/glamour-2017/source/m_glamour-2017_11539840900.jpg?tr=w-439,e-sharpen',
    engine: '124.7 cc',
    power: '11.6 PS',
    torque: '11 Nm',
    mileage: '61.2 Kmpl',
    brakes: 'Disc',
    tire_type: 'Tubeless',
    qty: 26
  },
  {
    model: 'Hero Xtreme 200R',
    brand: 'hero',
    price: '₹92,900.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero/xtreme-200-s/source/m_xtreme-200-s_11560400470.jpg?tr=w-439,e-sharpen',
    engine: '199.6 cc',
    power: '18.4 PS',
    torque: '17.1 Nm',
    mileage: '36.90 Kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: 59
  },
  {
    model: 'Hero Xtreme 200S',
    brand: 'hero',
    price: '₹100,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-xtreme-200s/source/m_xtreme-200s_21556799705.jpg?tr=w-439,e-sharpen',
    engine: '199.6 cc',
    power: '18.4 PS',
    torque: '17.1 Nm',
    mileage: '36.90 Kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '45'
  },
  {
    model: 'Hero Passion Pro 110',
    brand: 'hero',
    price: '₹56,900.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero/passion-pro-110/source/m_passion-pro-110_11539841054.jpg?tr=w-439,e-sharpen',
    engine: '109.15 cc',
    power: '9.5 PS',
    torque: '9 Nm',
    mileage: '42.35 Kmpl',
    brakes: 'Drum',
    tire_type: 'Tubeless',
    qty: 88
  },
  {
    model: 'Hero Karizma ZMR',
    brand: 'hero',
    price: '₹108,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-karizma-zmr/source/m_karizma-zmr_11539840379.jpg?tr=w-439,e-sharpen',
    engine: '223 cc',
    power: '20.25 PS',
    torque: '19.7 Nm',
    mileage: '51 Kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '59'
  },
  {
    model: 'Hero Passion XPro',
    brand: 'hero',
    price: '₹58,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-passion-xpro/source/m_passion-xpro_11539838957.jpg?tr=w-439,e-sharpen',
    engine: '109.15 cc',
    power: '9.5 PS',
    torque: '9 Nm',
    mileage: '53 Kmpl',
    brakes: 'Disc',
    tire_type: 'Tubeless',
    qty: 73
  },
  {
    model: 'Hero XPulse 200T',
    brand: 'hero',
    price: '₹94,600.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero/xpulse-200t/source/m_xpulse-200t_11556785995.jpg?tr=w-439,e-sharpen',
    engine: '199.6 cc',
    power: '18.4 PS',
    torque: '17.1 Nm',
    mileage: '45.75 Kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '12'
  },
  {
    model: 'Hero Xtreme Sports',
    brand: 'hero',
    price: '₹78,850.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-xtreme-sports/source/m_xtreme-sports_11539840532.jpg?tr=w-439,e-sharpen',
    engine: '149.2 cc',
    power: '15.82 PS',
    torque: '13.50 Nm',
    mileage: '50 Kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: 22
  },
  {
    model: 'Hero Achiever',
    brand: 'hero',
    price: '₹67,350.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-achiever/source/m_achiever_11539838893.jpg?tr=w-439,e-sharpen',
    engine: '149.1 cc',
    power: '13.59 PS',
    torque: '12.8 Nm',
    mileage: '51.8 Kmpl',
    brakes: 'Disc',
    tire_type: 'Tubeless',
    qty: 95
  },
  {
    model: 'Royal Enfield Classic 350',
    brand: 'royal enfield',
    price: '₹154,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/royal-enfield/royal-enfield-classic-350/source/m_classic-350_11539345735.jpg?tr=w-439,e-sharpen',
    engine: '346 cc',
    power: '20.07 PS',
    torque: '28 Nm',
    mileage: '40.8 kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tube',
    qty: 95
  },
  {
    model: 'Royal Enfield Bullet 350',
    brand: 'royal enfield',
    price: '₹121,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/royal-enfield/royal-enfield-bullet/source/m_bullet-350_11540276110.jpg?tr=w-439,e-sharpen',
    engine: '346 cc',
    power: '20.07 PS',
    torque: '28 Nm',
    mileage: '40 Kmpl',
    brakes: 'Disc',
    tire_type: 'Tube',
    qty: 95
  },
  {
    model: 'Royal Enfield Himalayan',
    brand: 'royal enfield',
    price: '₹180,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/royal-enfield/royal-enfield-himalayan/source/m_himalayan_11540386022.jpg?tr=w-439,e-sharpen',
    engine: '411 cc',
    power: '24.83 PS',
    torque: '32 Nm',
    mileage: '29.48 kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tube',
    qty: 95
  },
  {
    model: 'Royal Enfield Interceptor 650',
    brand: 'royal enfield',
    price: '₹250,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/royal-enfield/interceptor-650/source/m_interceptor-650_11542346925.jpg?tr=w-439,e-sharpen',
    engine: '648 cc',
    power: '47.65 PS',
    torque: '52 Nm',
    mileage: '25.93 kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: 95
  },
  {
    model: 'Royal Enfield Thunderbird 350X',
    brand: 'royal enfield',
    price: '₹163,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/royal-enfield/thunderbird-350x/source/m_thunderbird-350x_11540276568.jpg?tr=w-439,e-sharpen',
    engine: '346 cc',
    power: '20.07 PS',
    torque: '28 Nm',
    mileage: '38.3 Kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '57'
  },
  {
    model: 'Royal Enfield Classic 500',
    brand: 'royal enfield',
    price: '₹201,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/royal-enfield/royal-enfield-classic/source/m_classic-500_11540276178.jpg?tr=w-439,e-sharpen',
    engine: '499 cc',
    power: '27.57 PS',
    torque: '41.3 Nm',
    mileage: '25.3 kmpl',
    brakes: 'Disc',
    tire_type: 'Tube',
    qty: '57'
  },
  {
    model: 'Royal Enfield Continental GT 650',
    brand: 'royal enfield',
    price: '₹265,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/royal-enfield/continental-gt-650/source/m_continental-gt-650_11542346981.jpg?tr=w-439,e-sharpen',
    engine: '648 cc',
    power: '47.65 PS',
    torque: '52 Nm',
    mileage: '24.2 kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '57'
  },
  {
    model: 'Royal Enfield Thunderbird 500X',
    brand: 'royal enfield',
    price: '₹214,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/royal-enfield/thunderbird-500x/source/m_thunderbird-500x_11540378634.jpg?tr=w-439,e-sharpen',
    engine: '499 cc',
    power: '27.57 PS',
    torque: '41.3 Nm',
    mileage: '26.3 kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '57'
  },
  {
    model: 'Royal Enfield Bullet Trials 350',
    brand: 'royal enfield',
    price: '₹162,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/royal-enfield/bullet-trials-350/source/m_bullet-trials-350_11553671691.jpg?tr=w-439,e-sharpen',
    engine: '346 cc',
    power: '20 PS',
    torque: '28 Nm',
    mileage: '40 Kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tube',
    qty: 95
  },
  {
    model: 'Benelli Leoncino',
    brand: 'Benelli',
    price: '₹479,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/benelli/benelli-leoncino/source/m_leoncino_11565004250.jpg?tr=w-439,e-sharpen',
    engine: '499.6 cc',
    power: '47.58 PS',
    torque: '45 Nm',
    mileage: '22.3 kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '57'
  },
  {
    model: 'Benelli TNT 600i',
    brand: 'Benelli',
    price: '₹620,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/benelli/benelli-tnt-600/source/m_tnt-600_11540290449.jpg?tr=w-439,e-sharpen',
    engine: '600 cc',
    power: '86.24 PS',
    torque: '54.6 Nm',
    mileage: '18 kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '57'
  },
  {
    model: 'Benelli TNT 300',
    brand: 'Benelli',
    price: '₹350,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/benelli/benelli-tnt-302/source/m_tnt-302_11540290423.jpg?tr=w-439,e-sharpen',
    engine: '300 cc',
    power: '38.79 PS',
    torque: '26.5 Nm',
    mileage: '25 Kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '57'
  },
  {
    model: 'Benelli TRK 502',
    brand: 'Benelli',
    price: '₹420,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/benelli/benelli-trk-502/source/m_trk-502_11550558205.jpg?tr=w-439,e-sharpen',
    engine: '500 cc',
    power: '47.58 PS',
    torque: '46 Nm',
    mileage: '30.97 kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '57'
  },
  {
    model: 'KTM 200 Duke',
    brand: 'KTM',
    price: '₹162,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/ktm/ktm-duke/source/m_duke-200_11539345907.jpg?tr=w-439,e-sharpen',
    engine: '199.5 cc',
    power: '25.83 PS',
    torque: '19.5 Nm',
    mileage: '35 Kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: 95
  },
  {
    model: 'KTM 125 Duke',
    brand: 'KTM',
    price: '₹125,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/ktm/125-duke/source/m_125-duke_11560399727.jpg?tr=w-439,e-sharpen',
    engine: '125 cc',
    power: '14.5 PS',
    torque: '12 Nm',
    mileage: '46.92 kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: 95
  },
  {
    model: 'KTM 390 Duke',
    brand: 'KTM',
    price: 'INR ₹248,000.00',
    img_link:
      'https://bd.gaadicdn.com/processedimages/ktm/ktm-duke-390/source/m_duke-390_11539346124.jpg?tr=w-439,e-sharpen',
    engine: '373.2 cc',
    power: '43.5 PS',
    torque: '37 Nm',
    mileage: '25.7 kmpl',
    brakes: 'Double Disc',
    tire_type: 'Tubeless',
    qty: '57'
  }
];
class Cars extends Component {
  handleDelete = id => {
    this.props.deleteCar(id);
  };

  render() {
    let inventory = bike_name.map(car => {
      return (
        <tr>
          <th scope='row'>{car.brand}</th>
          <td>{car.model}</td>
          <td>{car.price}</td>
          <td>{car.engine}</td>
          <td>{car.power}</td>
          <td>{car.tire_type}</td>
          <td>{car.qty}</td>
          <td>{car.brakes ? 'Available' : 'Sold'}</td>
          <td>
            <Link to={`/admin/editcar/${car.id}`}>
              <Icon icon={pencil} />
            </Link>
          </td>
          <td>
            <Icon
              className='text-danger'
              icon={bin}
              onClick={e => this.handleDelete(car.id)}
            />
          </td>
        </tr>
      );
    });

    let totalInventory = this.props.cars ? this.props.cars : null;
    let totalMessages = this.props.messages ? this.props.messages : null;
    let specials = this.props.cars ? this.props.cars : null;

    return (
      <div className='container'>
        <br />
        <Row>
          <Col md='4'>
            <TotalMessage totalMessages={totalMessages} />
          </Col>
          <Col md='4'>
            <TotalInventory totalInventory={totalInventory} />
          </Col>
          <Col md='4'>
            <Specials specials={specials} />
          </Col>
        </Row>
        <br />
        <div className='card border-primary mb-3'>
          <div className='card-header text-white bg-primary'>INVENTORY</div>
          <div className='card-body'>
            <Table hover>
              <thead className='text-success'>
                <tr>
                  <th>BRAND</th>
                  <th>MODEL</th>
                  <th>PRICE</th>
                  <th>ENGINE</th>
                  <th>POWER</th>
                  <th>TYRE</th>
                  <th>STOCK</th>
                  <th>STATUS</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>{inventory}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    cars: state.cars,
    messages: state.messages
  };
}

export default connect(
  mapStateToProps,
  { deleteCar }
)(Cars);
