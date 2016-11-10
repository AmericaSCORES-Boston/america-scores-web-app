class Students extends React.Component {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'blue'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.locations}</td>
      </tr>
    );
  }
}

class StudentsTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
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
 
ReactDOM.render(
  <div>
  <h1> STUDENT </h1>
  <img src={'http://placehold.it/400x20&text=slide1'}/>
  <StudentsTable products={testdata} />
  </div>,
  document.getElementById('container')
);
