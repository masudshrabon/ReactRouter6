var React = require('react');
var Student = require('../Student/Student.js');

var StudentDetails = React.createClass({
	
	removeStudent: function(){
		var hashParts=location.hash.split('/');
		for(var index=studentObject.length-1; index>=0; index--) {
			if( studentObject[index].Roll === hashParts[1]) 
				studentObject.splice(index,1);
		}
		return;
	},
	
	render: function(){
		var hashParts=location.hash.split('/');
		var student = studentObject.map(function(student){
			if(student.Roll===hashParts[1]){
				return <Student name= {student.Name} roll= {student.Roll} subject= {student.Subject} session={student.Session}/>
			}
		});
		
		return (
			<div className="well">
				<div className="panel panel-heading">
					<h2>Student Details Information</h2>
				</div>
				<div className="panel panel-body">
					<table className="table table-striped">
						<tr>
							<th>Name </th>
							<th> Roll</th>
							<th> Subject</th>
							<th> Session</th>
						</tr>
						<tbody>
						{student}
						</tbody>
					</table>		
				</div>
				<div>
					<a className="btn btn-primary" href="#student">Back To List</a>
					<a className="btn btn-danger pull-right" onClick={this.removeStudent} href="#student" >Removed The Student</a>
				</div>
			</div>
		);
	}	
});

module.exports = StudentDetails;