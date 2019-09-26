import React, { Component } from 'react';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { instagram } from 'react-icons-kit/fa/instagram';
import { googlePlus } from 'react-icons-kit/fa/googlePlus';
import Icon from 'react-icons-kit';

export default class FooterTop extends Component {
  render() {
    return (
      <div
        className='footer-top light-text'
        style={{ backgroundColor: '#28282c', paddingBottom: 10, color: 'grey' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <h5>OFFICE</h5>
              <br />
              {/* <hr
                style={{
                  color: 'grey',
                  height: 1,
                  border: 0,
                  borderTop: '1px solid grey'
                }}
              /> */}
              {/* G66 Cars <br/>
              515 E Grant St, <br/>
              Phoenix, AZ 85004 <br/>
              Phone: (602) 362-2670 */}
              Mannat,
              <br />
              Land's End,Bandstand,
              <br />
              Bandra (West), Mumbai, <br />
              Maharashtra–400050, India.
              <br />
            </div>
            <div className='col-4'>
              <h5>
                CONTACT US
                {/* <hr
                  style={{
                    color: 'grey',
                    height: 1,
                    border: 0,
                    borderTop: '1px solid grey'
                  }}
                /> */}
              </h5>
              <br />
              {/* Sun 10:00 am - 7:00 pm <br/>
              Mon 8:00 am - 9:00 pm <br/>
              Tue 8:00 am - 9:00 pm <br/>
              Wed 8:00 am - 9:00 pm <br/>
              Thu 8:00 am - 9:00 pm <br/>
              Fri 8:00 am - 9:00 pm <br/>
              Sat 8:00 am - 8:00 pm <br/> */}
              {/* Mon-Sat 8:00 am - 9:00 pm
              <br />
              Sunday Closed
              <br /> */}
              {/* <div className='row'> */}
              Call Us- 0120-3323401(Toll Free) <br />
              Email- support@mobikes.com
              {/* </div> */}
            </div>
            <div className='col-4'>
              <h5>FIND US</h5>
              <br />
              {/* <hr
                style={{
                  color: 'grey',
                  height: 1,
                  border: 0,
                  borderTop: '1px solid grey'
                }}
              /> */}
              {/* <p>
                These extremely popular cars continue to be top choices for many
                drivers who want dependable, long-lasting cars for their
                families. Check out our new car specials and financing options
                that offer great deals on these in-demand new cars.
              </p> */}
              <div className='row'>
                <div className='col-1'>
                  <Icon icon={facebook} size={25} />
                </div>
                <div className='col-1'>
                  <Icon icon={instagram} size={25} />
                </div>
                <div className='col-1'>
                  <Icon icon={googlePlus} size={25} />
                </div>
                <div className='col-1'>
                  <Icon icon={twitter} size={25} />
                </div>
              </div>
            </div>
          </div>
          <hr
            style={{
              color: 'black',
              height: 1,
              border: 0,
              borderTop: '0.1px solid grey'
            }}
          />
        </div>
        {/* <hr
          style={{
            color: 'black',
            height: 1,
            border: 0,
            borderTop: '0.1px solid #ccc'
          }}
        /> */}
        <div
          className='footer-bottom light-text'
          style={{
            backgroundColor: '#28282c',
            textAlign: 'center',
            color: 'grey'
          }}
        >
          <div className='container' style={{ padding: 0 }}>
            &copy; Copyright 2019 - Mo Bikes Pvt. Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    );
  }
}
