	1. Locate the cmd to folder ReactRouter6
	2. command to install several npm packages:
		npm install webpack
		npm install webpack-dev-server
		npm install jsx-loader --save
		npm install react
		npm install style-loader --save
		npm install css-loader --save
		npm install url-loader --save
	3. To run the program:

		$ npm run dev



***In browser, point to: localhost:8080

### If Problem in localhost:8080, do the following:
If you have other programs running on that port, you will just need to change the port no. like following:
just change the port number from 8080 to 8081 (can be anything valid other) 
in the ProjectFolder \node_modules\webpack-dev-server\bin\webpack-dev-server.js file.

In the source code main.js file, change the port of variable 'url' in changeNavbar function to work the routing. 
