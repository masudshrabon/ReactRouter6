var React = require('react');

var Student = React.createClass({
	
	render: function(){
		var hrefRoll = "#student/"+this.props.roll;
		var hashParts = location.hash.split('/');
		return (
			<tr>
				<td className={hashParts[1] ? 'hidden' : ''}>{this.props.serialNo}</td>
				<td>{this.props.name} </td>
				<td>{this.props.roll}</td>
				<td>{this.props.subject}</td>
				<td>{this.props.session}</td>
				<td className={hashParts[1] ? 'hidden' : ''}><a href={hrefRoll}>Details</a> </td>
			</tr>
		);
	}	
});

module.exports= Student;