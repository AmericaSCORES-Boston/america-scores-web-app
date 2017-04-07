import React, { Component } from 'react';
import Api from '../api';

/*
Represents the page that lets you add sites to through the Api
*/
class AddSite extends Component {

  //Tells the Api to add the site based on
  addSite() {
    let siteName = document.getElementById("siteName").value;
    let siteAddress = document.getElementById("siteAddress").value;

    if (siteName === "" || siteAddress === "") {
      alert("one of these is empty");
      return;
    }

    Api.addSite(siteName, siteAddress).then(() => {window.location = '/Sites'});
  }
  render() {
    return (
      <div className="download-elements">
        <h2>Add a Site:</h2>
        <br/>
        Site Name: &nbsp; <input type="text" id="siteName" />
        <br/>
        Site Address:<input type="text" id="siteAddress" />
        <br/>
        <button onClick={this.addSite}>Add Site</button>
      </div>
    );
  }
}

export default AddSite;