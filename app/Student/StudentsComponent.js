var React = require('react');
var StudentList = require('./StudentList.js');

var StudentsComponent = React.createClass({
	render: function(){
		return (
			<div className="well">
				<div className="panel panel-heading">
					<div className="row">
						<div className="col-md-8">
							<h2 >Students List </h2>
						</div>
						<div className="col-md-4"> 
							<h4><a href="#studentForm" className="btn btn-primary pull-right">Add New Student</a></h4>
						</div>
					</div>
				</div>
				<div>
					<StudentList studentData = {this.props.studentData} />
				</div>
			</div>
		);
	}	
});

module.exports = StudentsComponent;