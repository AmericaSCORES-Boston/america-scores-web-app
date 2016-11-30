import React from 'react';
import ReactDOM from 'react-dom';

var icon = require('../Assets/User-icon.png');

class MyAccountCompiler extends React.Component {
	
render() {
	function renData(props) {
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
	};
	
	var data = {name: "Alice", email: "alice@email.com", phone: 5036672134, password: "******"};

	return(
		<div className="all">
			<center><h1>My Account</h1>
			<img src={icon} alt="UserIcon" data-reactid=".0.0"/>      
    		<renData data={data} />
			</center>
		</div>
		);
	};
};

export defaulf MyAccountCompiler;
