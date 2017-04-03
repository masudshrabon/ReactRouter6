var React = require('react');
var Student = require('./Student.js');

var StudentList = React.createClass({
	render: function(){
		var serialNo = 0;
		var students = studentObject.map(function(student){
			return <Student serialNo={++serialNo} name= {student.Name} roll= {student.Roll} subject= {student.Subject} session={student.Session}/>
		});
		var hashParts = location.hash.split('/');
		return (
			<div className="panel panel-body">
				<table className="table table-striped">
					<tr>
						<th>Serial #</th>
						<th>Name </th>
						<th> Roll</th>
						<th> Subject</th>
						<th> Session</th>
						<th> Detail Info</th>
					</tr>
					<tbody>
						{students} 
					</tbody>
				</table>			
			</div>
		);
	}	
});

module.exports = StudentList;