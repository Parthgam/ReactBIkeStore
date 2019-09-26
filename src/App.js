import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCars } from './actions/cars';
import { getMessages } from './actions/message';

// User Components
import NavigationBar from './components/user/navigation_bar';
import TopSearchBar from './components/user/top_search_bar';
import FooterTop from './components/user/footer_top';
import FooterBottom from './components/user/footer_bottom';
import UserHomePage from './components/user/home';
import CarsList from './components/user/cars_list';
import OneCar from './components/user/one_car';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

// Admin Components
import AdminNavigatioBar from './components/admin/admin_top_navigation';
import Cars from './components/admin/admin_cars';
import NewCar from './components/admin/newcar';
import Messages from './components/admin/messages';
import EditCar from './components/admin/edit_car';
import { list } from 'react-icons-kit/icomoon';
import axios from 'axios';

var list1 = [
  {
    id: '1',
    year: '2017',
    make: '2016 model',
    model: 'Royal Enfield',
    link:
      'http://www.pngall.com/wp-content/uploads/2/Motorcycle-Bike-PNG-Photo.png'
  },
  {
    id: '2',
    year: '2017',
    make: '2016 model',
    model: 'Royal Enfield',
    link:
      'http://pluspng.com/img-png/png-hd-bike-ktm-rc-390-motorcycle-bike-png-image-1592.png'
  },
  {
    id: '3',
    year: '2017',
    make: '2016 model',
    model: 'Royal Enfield',
    link:
      'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-sneufhma344t4ukj6c74he4pc0-20180925123540.Medi.jpeg'
  },
  {
    id: '4',
    year: '2017',
    make: '2016 model',
    model: 'Royal Enfield',
    link:
      'https://img.etimg.com/thumb/msid-66937970,width-640,height-480,imgsize-176969,resizemode-4/whats-inside.jpg'
  },
  {
    id: '5',
    year: '2017',
    make: '2016 model',
    model: 'very new',
    link:
      'https://www.rushlane.com/wp-content/uploads/2019/05/tata-harrier-convertible-render.jpg'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bike_list: []
    };
  }

  componentDidMount() {
    // this.props.getCars();
    // this.props.getMessages();

    // axios.post('http://10.1.2.113:8080/BikeShop/getbikes').then((response) => {
    //   this.setState({
    //     bike_list: response.data
    //   })
    //   console.log(response.data);
    // });
    let loggedIn = false;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      // Do Nothing
      let a = 'abc';
      console.log(a);
    } else if (localStorage.getItem('isLoggedIn') === null) {
      localStorage.setItem('isLoggedIn', loggedIn);
    }
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Switch>
              <Route
                path='/admin/'
                render={() => (
                  <div>
                    <AdminNavigatioBar />
                    <Route exact path='/admin/' component={Cars} />
                    <Route exact path='/admin/newcar' component={NewCar} />
                    <Route
                      exact
                      path='/admin/editcar/:id'
                      component={EditCar}
                    />
                    <Route exact path='/admin/messages' component={Messages} />
                  </div>
                )}
              />

              {window.location.href == 'http://localhost:3000/sign-up' ||
              window.location.href == 'http://localhost:3000/sign-in' ? (
                <div>
                  <NavigationBar />
                  <Route exact path='/' component={UserHomePage} />
                  <Route exact path='/sign-in' component={SignInForm} />
                  <Route exact path='/sign-up' component={SignUpForm} />
                  <Route
                    exact
                    path='/cars'
                    render={() => <CarsList chu={true} car_list={list1} />}
                  />
                  <Route exact path='/cars/:id' component={OneCar} />
                </div>
              ) : (
                <Route
                  path='/'
                  render={props => (
                    <div>
                      <NavigationBar />
                      {/* <TopSearchBar {...props} /> */}
                      <Route exact path='/' component={UserHomePage} />
                      <Route exact path='/sign-in' component={SignInForm} />
                      <Route exact path='/sign-up' component={SignUpForm} />
                      {/* {console.log(carsList)} */}
                      <Route
                        exact
                        path='/cars'
                        render={() => <CarsList chu={true} car_list={list1} />}
                      />
                      <Route exact path='/cars/:id' component={OneCar} />
                      <FooterTop />
                      {/* <FooterBottom /> */}
                    </div>
                  )}
                />
              )}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCars: bindActionCreators(getCars, dispatch),
    getMessages: bindActionCreators(getMessages, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
