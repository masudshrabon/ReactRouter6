var React = require('react');

var StudentForm = React.createClass({
	handleSubmit: function(e){
			e.preventDefault();
			var name = this.refs.name.getDOMNode().value.trim();
			var roll = this.refs.roll.getDOMNode().value.trim();
			var subject = this.refs.subject.getDOMNode().value.trim();
			var session = this.refs.session.getDOMNode().value.trim();
			
			if(!name || !roll || !subject || !session){
				return;
			}
			var newStudent = {Name: name, Roll: roll,Subject:subject,Session:session};
			studentObject.push(newStudent);
			this.refs.name.getDOMNode().value = '';
			this.refs.roll.getDOMNode().value = '';
			this.refs.subject.getDOMNode().value = '';
			this.refs.session.getDOMNode().value = '';
			return
		},
	
	render: function(){
		return (
			<div className="well">
				<div className="panel panel-heading">
					<h2>Student Form</h2>
				</div>
				<div className="panel panel-body">
					<form className="form-horizontal" role="form" onSubmit= {this.handleSubmit}>
						<div className="form-group">
							<label className="control-label col-sm-2">Name:</label>
							<div className="col-sm-6">
								<input type="text" required="required" className="form-control" placeholder="Your name" ref="name" />
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-sm-2">Roll:</label>
							<div className="col-sm-6">
							<input type="text" required="required" className="form-control" placeholder="Your Roll" ref="roll" />
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-sm-2">Subject:</label>
							<div className="col-sm-6">
							<input type="text" required="required" className="form-control" placeholder="Your subject" ref="subject" />
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-sm-2">Session:</label>
							<div className="col-sm-6">
							<input type="text" required="required" className="form-control" placeholder="Your session" ref="session" />
							</div>
						</div>
						
						<div className="formButton">
						<button type="submit" className="btn btn-primary">Add Student</button>
						</div>
					</form>		
				</div>				 
			</div>
		);
	}	
});

module.exports = StudentForm;