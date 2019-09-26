import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteMsg } from '../../actions/message';
import Icon from 'react-icons-kit';
import { bin } from 'react-icons-kit/icomoon';
import { enlarge } from 'react-icons-kit/icomoon';
import MessageWindow from './message_window';

let messages = [
  {
    uname: 'Parth',
    umessage:
      'I want to take test ride of Royal Enfield 250R on coming Sunday at around 5:00 PM'
  },
  {
    uname: 'Abhinav',
    umessage: 'I want to take test ride on coming Sunday at around 9:00 PM'
  },
  {
    uname: 'Rajat',
    umessage:
      'I want to take test ride of Royal Enfield 250R on coming Sunday at around 5:00 PM'
  },
  {
    uname: 'Amit',
    umessage:
      'I want to take test ride of Royal Enfield 250R on coming Sunday at around 5:00 PM'
  },
  {
    uname: 'Chirag',
    umessage: 'I want to take test ride on coming Sunday at around 9:00 PM'
  },
  {
    uname: 'Shivam',
    umessage:
      'I want to take test ride of Royal Enfield 250R on coming Sunday at around 5:00 PM'
  },
  {
    uname: 'Chandan',
    umessage: 'I want to take test ride on coming Sunday at around 9:00 PM'
  }
];

class Messages extends Component {
  state = {
    show: false,
    id: '',
    uname: '',
    uemail: '',
    uphone: '',
    uinterest: '',
    umessage: ''
  };

  enlargeMessage = message => {
    let show = this.state.show;
    this.setState({
      show: !show,
      id: message.id,
      uname: message.uname,
      uemail: message.uemail,
      uphone: message.uphone,
      uinterest: message.uinterest,
      umessage: message.umessage
    });
  };

  handleDelete = id => {
    console.log('id is: ', id);
    this.props.deleteMsg(id);
    this.props.history.push('/admin/messages');
  };

  render() {
    let messagesList = messages.map(message => {
      return (
        <div>
          <Row>
            <Col md='4'>{message.uname}</Col>
            <Col md='6'>
              {/* {message.umessage ? message.umessage.substring(0, 50) : null} */}
              {message.umessage}
            </Col>
            <Col md='1'>
              <Icon
                className='text-success'
                icon={enlarge}
                // onClick={e => this.enlargeMessage(message)}
              />
            </Col>
            <Col md='1'>
              <Icon
                className='text-danger'
                icon={bin}
                // onClick={e => this.handleDelete(message.id)}
              />
            </Col>
          </Row>
          <hr />
        </div>
      );
    });

    return (
      <div className='container'>
        <br />
        <Row>
          <Col md='7'>
            <div className='card border-primary mb-3'>
              <div
                className='card-header text-white'
                style={{ backgroundColor: '#28282c' }}
              >
                MESSAGES
              </div>
              <div className='card-body text-primary'>{messagesList}</div>
            </div>
          </Col>
          <Col md='5'>
            {this.state.show ? <MessageWindow message={this.state} /> : null}
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    messages: state.messages
  };
}

export default connect(
  mapStateToProps,
  { deleteMsg }
)(Messages);
