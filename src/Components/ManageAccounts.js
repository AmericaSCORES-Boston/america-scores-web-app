import React, { Component } from 'react';

class ManageAccountsManager extends Component {
  render() {
    return (
      <div className="ManageAccountsManager">
        <div className="Account-header">

        <h1>Manage Accounts</h1>
        </div>
        <ManageAccountsTable  accounts={this.props.accounts} />
      </div>
      );
  }
}

class ManageAccountsTable extends Component {
  render() {
    var rows = [];
    this.props.accounts.forEach(function(account) {
      rows.push(<AccountRow account={account} key={account.name} />);
    });
    return (
      <table>
      <thead>
      <tr>
      <th>Name</th>
      <th>Account Type</th>
      <th>Program Permissions</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
      </table>
      );
  }
}

class AccountRow extends Component {
   render() {
    return (
      <tr className="account-row">
        <td>{this.props.account.name}</td>
        <td>{this.props.account.type}</td>
        <td>{this.props.account.permissions}</td>
      </tr>
    );
  }
}

export  {
  ManageAccountsManager,
  ManageAccountsTable
};