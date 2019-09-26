import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  CardFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { search } from './search.png';

const zeroPadding = {
  padding: 0
};

const zeroMargin = {
  margin: 0
};

export default class Services extends Component {
  render() {
    return (
      <div className='services'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Card>
                <CardImg
                  top
                  width='100%'
                  style={{height : 280}}
                  // src='https://i.ytimg.com/vi/VEnDvbeIwN4/maxresdefault.jpg'
                  // src = 'https://i.ytimg.com/vi/7g1R_LD0yyY/maxresdefault.jpg'
                  // src='https://images.vexels.com/media/users/3/119681/list/a3dd4aabd016ad759a5a8c09121bc884-cool-trend-motorcycle-vector.png'
                  src = 'https://a.uguu.se/gwltofo7JkDa_image'
                  alt='New Car'
                />
                {/* < img src={search} alt="New Car"/> */}
                <CardBody style={zeroPadding}>
                  <CardFooter style={{backgroundColor: 'white'}}>
                    <CardTitle>Find New Vehicle</CardTitle>
                    <h4 className='text-right'>
                      <Link to='/cars'>
                        <Button className='btn-success'>More</Button>
                      </Link>
                    </h4>
                  </CardFooter>
                </CardBody>
              </Card>
            </div>

            <div className='col-6'>
              <Card style={zeroPadding}>
                <CardImg
                  top
                  width='100%'
                  src='https://image.jimcdn.com/app/cms/image/transf/dimension=672x10000:format=png/path/s5576b5a5c14d1243/image/i3b1417cf41597175/version/1538978813/palawan-by-motorbike-nathan-allen-in-puerto-princesa-philippines-via-idreamedofthis.png'
                  // src='https://images.pexels.com/photos/1796302/pexels-photo-1796302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  alt='New Car'
                />
                <CardBody style={zeroPadding}>
                  <CardFooter style={{backgroundColor: 'white'}}>
                    <CardTitle>Blog</CardTitle>
                    <h4 className='text-right'>
                      <Link to='/cars'>
                        <Button className='btn-success'>More</Button>
                      </Link>
                    </h4>
                  </CardFooter>
                </CardBody>
              </Card>
            </div>
            {/* <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://s3.amazonaws.com/cartool/finance.jpg" alt="Finance" />
                <CardBody>
                  <CardTitle>Financing</CardTitle>
                  <Button className='btn-success'>More</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://s3.amazonaws.com/cartool/test_drive.jpg" alt="Test Drive" />
                <CardBody>
                  <CardTitle>Schedule Test Drive</CardTitle>
                  <Button className='btn-success'>More</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://s3.amazonaws.com/cartool/service.jpg" alt="Service" />
                <CardBody>
                  <CardTitle>Schedule Service</CardTitle>
                  <Button className='btn-success'>More</Button>
                </CardBody>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
