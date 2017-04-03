var React = require('react');


// In nav bar tab, addClass as active
var changeNavbar = function(firstHashPart){
	$(function() {
		var url ="http://localhost:8080/" +firstHashPart;
		var navElementsList = $('#nav li a');

		var navElement;
		
		$('#nav li').removeClass();
		
		for(var i=0;i<navElementsList.length; i++){
			if(navElementsList[i].href===url){
				navElement = navElementsList[i];
				break;
			}
		}
		if(navElement){
			navElement = navElement.parentNode;
			$(navElement).addClass('active');
			//console.log(navElement);
		}
	});
};

var route = function () {
	var hashParts = location.hash.split('/');
	
	require.ensure([], function (require) {
		var Footer = require('./Footer/Footer.js');
		React.render(Footer(), document.getElementById('footer'));
	});
		
	if (!hashParts[0] || hashParts[0].length === 1 || hashParts[0] === '#home') {
		changeNavbar(hashParts[0]);
		require.ensure([], function (require) {
			var Home = require('./Home/Home.js');
			React.render(Home(), document.getElementById('app'));
		});
	} 
	else if (hashParts[0] === '#admin'){
		changeNavbar(hashParts[0]);
		require.ensure([], function (require) {
			var Admin = require('./Admin/Admin.js');
			React.render(<Admin />, document.getElementById('app'));
		});
	}
	else if (hashParts[0] === '#student'){
		changeNavbar(hashParts[0]);
		if(!hashParts[1]){
			require.ensure([], function (require) {
				var StudentsComponent = require('./Student/StudentsComponent.js');
				React.render(StudentsComponent(), document.getElementById('app'));
			});  
		}
		else{
			require.ensure([], function (require) {
				var StudentDetails = require('./StudentDetails/StudentDetails.js');
				React.render(StudentDetails(), document.getElementById('app'));
			});
		}	
	}
	else if (location.hash === '#studentForm'){	   
		changeNavbar(hashParts[0]);
		require.ensure([], function (require) {
			var StudentForm = require('./StudentForm/StudentForm.js');
			React.render(<StudentForm />, document.getElementById('app'));
		});
	}
	
};

window.onhashchange = route;
route();

// If hot swapping can be done, do it by resolving the current route
// and render the application again
if (module.hot) {
  module.hot.accept(route);
}
