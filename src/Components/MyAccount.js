import React from 'react';
import ReactDOM from 'react-dom';
import Api from '../api';

//The User Account Icon.
var icon = require('../Assets/User-icon.png');

//This renders out the data of the most updated version of the User's own Account information 
//for them to view 
class MyAccountCompiler extends React.Component {	


		
render() {	
function renData(props) {
    		const content = props.data.map((adata) =>
      			<div className="userData">	       
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
    		<div className="displayData">
      		{content}
    		</div>
  		);	
};		
var data = {name: "Alice", email: "alice@email.com", phone: 5036672134, password: "******"};	
return(		
<div className="all">			
<div className="Header">				
<div className="Title">				
<h1>My Account</h1>				
</div>				
<div className="PageIcon">				
<img src={icon} alt="UserIcon" data-reactid=".0.0"/> 				
</div>			
</div>			
<div className="dataMethod">				
<renData data={data} />			
</div>		
</div>		
);	
};
};
export default MyAccountCompiler;
