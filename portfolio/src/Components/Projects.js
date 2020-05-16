import React from "react";
import MotherBoard from "../imgs/MotherBoard.png";
import MotherBoard2 from "../imgs/MotherBoard2.png";
import KeyBoard from "../imgs/KeyBoard.png";
import "./Projects.scss";

function Projects(props) {
	return (
		<div className="Projects">
			<div className="Title Groovn-Music">
				<h1>Groovn Music</h1>
			</div>
			<img src={MotherBoard} />
			<div className="Links">
				<a>The App</a>
				<a href="https://github.com/Pherpher089/groovn-music-fe">
					The Code
				</a>
			</div>
			<div className="Description">
				<h2>Description</h2>
				<p>
					A music recommendation app. Groovn music generates a
					recommended playlist for users based on their liked songs on
					their Spotify account
				</p>
			</div>
			<div className="Tech">
				<h2>Tech Used</h2>
				<h3>Front End</h3>
				<ul>
					<li>React.js</li>
					<li>React Hooks</li>
					<li>React Context</li>
					<li>Apollo/GraphQL</li>
				</ul>
				<h3>Back End</h3>
				<ul>
					<li>Node.js</li>
					<li>GraphQL</li>
					<li>Mongo Database</li>
					<li>Passport.js(Spotify Strategy)</li>
				</ul>
			</div>
			<div className="Responsibilities">
				<h2>Responsibilities</h2>
				<p>
					My contribution to this project besides project planning,
					was the front end. I set up the React app with routes and
					the context.{" "}
				</p>
			</div>

			<div className="Title Potluck-Planner">
				<h1>Potluck Planner</h1>
			</div>
			<img src={MotherBoard2} />
			<div className="Links">
				<a>The App</a>
				<a href="https://github.com/Pherpher089/bw-potluck-planner-pt-fe">
					The Front End
				</a>
				<a href="">The Back End</a>
			</div>
			<div className="Description">
				<h2>Description</h2>
				<p>
					An app for planning and organizing potlucks. Users can
					create potlucks with desired food items and invite others to
					attend. As an attendee, users can confirm or deny attendance
					as well as claim food items they would like to bring to the
					potluck.
				</p>
			</div>
			<div className="Tech">
				<h2>Tech Used</h2>
				<h3>Front End</h3>
				React.js - Redux - Axios - SC
				<ul>
					<li>React.js</li>
					<li>Redux</li>
					<li>React-Router</li>
					<li>Axios</li>
					<li>SCSS</li>
				</ul>
				<h3>Back End</h3>
				<ul>
					<li>Node.js</li>
					<li>Knex.js</li>
					<li>Bcryptjs</li>
					<li>Cors Middleware</li>
					<li>Express.js</li>
					<li>MySQL Database</li>
					<li>JWT Authentication</li>
				</ul>
			</div>
			<div className="Responsibilities">
				<h2>Responsibilities</h2>
				<p>
					I built out the front end in React. Using Redux as my state
					management and React-Router to organize the website on one
					page. With Redux, I set up all of the routes to communicate
					with the API and set the state of the application. I also
					built the backend for this application. With Knex as a DBMS,
					I created the database in an organized and normalized manor.
					I utilized express to create the server and set up the API.
					I created all of the routes using Express as well. I set up
					authentication for user accounts using JWTs. Finally I
					styled the front end using Sass.{" "}
				</p>
			</div>
			<div className="Title Bucket-List-App">
				<h1>Bucket List App</h1>
			</div>
			<img src={KeyBoard} />
			<div className="Links">
				<a>The App</a>
				<a href="https://github.com/Pherpher089/backend">Back End</a>
			</div>
			<div className="Description">
				<h2>Description</h2>
				<p>
					This is the back end of the Bucket List App. This API allows
					all CRUD operations necessary for creating and managing
					several bucket lists per user. The API also handles
					authentication for the front end using JWT. The database
					schema is perfectly normalized.{" "}
				</p>
			</div>
			<div className="Tech">
				<h2>Tech Used</h2>
				<ul>
					<li>Node.js</li>
					<li>Knex.js</li>
					<li>Bcryptjs</li>
					<li>Cors Middleware</li>
					<li>Express.js</li>
					<li>MySQL Database</li>
					<li>JWT Authentication</li>
				</ul>
			</div>
			<div className="Responsibilities">
				<h2>Responsibilities</h2>
				<p>
					My part of this project included setting up routes for the
					API. Building middleware for authorized routes. Developing
					and implementing database schema.
				</p>
			</div>
			<div className="Title Moms-app">
				<h1>Landing Page: Stay at Home Moms</h1>
			</div>
			<img src={MotherBoard} />
			<div className="Links">
				<a href="https://stay-at-home-moms-landing-page.netlify.app/">
					The Site
				</a>
				<a href="https://github.com/a-to-z-experiences-team/build-aToz-UI-2">
					The Code
				</a>
			</div>
			<div className="Description">
				<h2>Description</h2>
				<p>
					This is the landing page for the Stay at Home Moms web app.
					The goal was to showcase skills in UI using basic front end
					technologies.
				</p>
			</div>
			<div className="Tech">
				<h2>Tech Used</h2>
				<ul>
					<li>HTML5</li>
					<li>CSS</li>
					<li>JavaScript ES6</li>
					<li>Responsive Design Techniques</li>
				</ul>
			</div>
			<div className="Responsibilities">
				<h2>Responsibilities</h2>
				<p>I built this site by my self.</p>
			</div>
			<div>
				<h3>Interested in my game development?</h3>
				<a href="https://christutor.artstation.com/">
					My game development portfolio
				</a>
			</div>
		</div>
	);
}

export default Projects;
