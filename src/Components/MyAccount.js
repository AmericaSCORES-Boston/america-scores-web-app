import React from 'react';
import ReactDOM from 'react-dom';

var icon = require('../Assets/User-icon.png');

class MyAccountMangager extends React.Component {
	
  function RenData(props) {
    const content = props.data.map((adata) =>
      <div>
       <p><strong>Name:</strong> {adata.name}</p>
        <br />
        <p><strong>Email:</strong> {adata.email}</p>
        <br />                                 
        <p><strong>Phone:</strong>{adata.phone}</p>  
        <br />                                  
        <p><strong>Password:</strong>{adata.password}</p>         
    </div>
    );
  return (
    <div>
      {content}
    </div>
  );
}

render () {
		const data=[];
		<div className="all">
		<center><h1>My Account</h1>
		<img src={icon} alt="UserIcon" data-reactid=".0.0"/>
    		<RenData data={data} />
		</center>
		</div>
	}
}

RenderDOM.render(
  <MyAccountCompiler data={[]} />
  document.getElementById('root')
  );

export {
	MyAccountCompiler
}
