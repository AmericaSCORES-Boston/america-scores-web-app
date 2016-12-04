import React, { Component } from 'react';
import csvLogo from '../../Assets/CSV-icon.png';
import './CSVPages.css';




/*
Represents the page of all the America Scores locations where the admin can
select a location and then in the next page they will see all the programs
associated with that location. After they choose a program, they will see a page
with all the students in that program, where they can download the CSV.
Endpoint: /CSVPage
*/
class CSVLocation extends Component {
  render() {
    var tempJSONArray = [{"site_id":1,"site_name":"Lin-Manuel Elementary","site_address":"1155 Tremont Street, Roxbury Crossing, MA"},{"site_id":2,"site_name":"Yawkey Boys and Girls Club","site_address":"115 Warren St, Roxbury, MA"}];

    return (
      <div className="download-elements">

        <h1>CSV Data</h1>

        <br/>

        <img src={csvLogo} alt="CSV Icon"/>

        <form action="/CSVPage2" id="locationForm">
          Location:

          <br/><br/>

          <SiteSelect sites={tempJSONArray} />

          <br/>

          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}


/*
Represents the list of Sites that will be mapped to a list of options
ex:
<option value="1">Location 1</option>
*/
class SiteSelect extends Component {
  render() {
    return (
      <div>
        <select name="location">
          {this.props.sites.map(
            function(site, index) {
              return <option key={index} value={site.site_id}>{site.site_name}</option>;
            }
          )}
        </select>
      </div>
    );
  }
}

export default CSVLocation;