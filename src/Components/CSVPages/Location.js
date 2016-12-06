import React, { Component } from 'react';
import csvLogo from '../../Assets/CSV-icon.png';
import '../../Main.css';
import Api from '../../api.js';




/*
Represents the page of all the America Scores locations where the admin can
select a location and then in the next page they will see all the programs
associated with that location. After they choose a program, they will see a page
with all the students in that program, where they can download the CSV.
Endpoint: /CSVPage
*/
class CSVLocation extends Component {
  constructor() {
    super();
    this.state = {
      SitesArray:[{site_id:0,site_name:"Loading..."}] //so it has something to show if API is down
    };
  }

  //Makes the API call in this method because it will re-render after state changes
  componentDidMount() {
    let _this = this; //So that we can set the state inside the funciton (otherwise scope messes us up)
    Api.fetchSites().then(function(value) {
      if (value.length === 0) {
        _this.setState({SitesArray:[{site_id:0, site_name:"None"}]});
      }
      else {
        _this.setState({SitesArray:value});
      }
    });
  }

  //This function determines if there is no valid programs available for all sites
  //(i.e. either Loading... or None) and therefore if the next button should be disabled
  noValidOptions() {
    let siteArray = this.state.SitesArray;
    return (siteArray.length === 1 && siteArray[0].site_id < 1);
  }

  render() {
    return (
      <div className="download-elements">

        <img src={csvLogo} alt="CSV Icon"/>
        <h1>CSV Data</h1>

        <br/>

        <form action="/CSVPage2" id="locationForm">
          Location:

          <br/><br/>

          <SiteSelect sites={this.state.SitesArray} />
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
          })}
        </select>
      </div>
    );
  }
}

export default CSVLocation;