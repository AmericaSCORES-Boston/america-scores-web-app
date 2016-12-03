import React, { Component } from 'react';

class Students extends Component {
  render() {
    return (
      <tr>
        <td style={{color: 'blue'}}>
          {this.props.product.name}
        </td>
        <td style={{color: 'green'}}>
          {this.props.product.locations}
        </td>
      </tr>
    );
  }
}

class StudentsTable extends Component {
  render() {
    var rows = [];
    this.props.products.forEach(function(product) {
      rows.push(<Students product={product} key={product.name} />);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

var testdata = [
  {name: 'A', dob: '11/11/1111', locations: 'l1, l2, l3'},
  {name: 'B', dob: '11/11/1111', locations: 'l1, l2, l3'},
  {name: 'C', dob: '11/11/1111', locations: 'l1, l2, l3'},
  {name: 'D', dob: '11/11/1111', locations: 'l1, l2, l3'},
  {name: 'E', dob: '11/11/1111', locations: 'l1, l2, l3'}
];

var reactLogo = require('../Assets/User.png');

class StudentManager extends React.Component {
  render() {
    return (
        <div className="studentpage">
        <div className="header">
          <h1> STUDENT </h1>
        </div>
        <img src={reactLogo} alt="StudentIcon" data-reactid=".0.0"/>
        <StudentsTable products={testdata} />
        </div>
    );
  }
}

export  default StudentManager;
