import React, { Component } from 'react';
import '../Download.css'

class WipeResponse extends Component {
  render() {
    return (
      <div className='download-elements'>
        <br/>
          We Have Successfully Wiped the Data
        <br/>
        <a href='/CsvPage'><button>Back</button></a>
      </div>
    );
  }
}

export default WipeResponse;