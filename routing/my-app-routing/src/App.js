// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

// We give each route either a target `component`, or we can send functions in `render` or `children` 
// that return valid nodes. `children` always returns the given node whether there is a match or not.
const App = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>{' '}
      <Link to={{pathname: '/about'}}>About</Link>{' '}
      <Link to="/contact">Contact</Link>
      
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/contact"
          render={() => <h1>Contact Us</h1>} />
        <Route path="/blog" children={({match}) => (
          <li className={match ? 'active' : ''}>
            <Link to="/blog">Blog</Link>
          </li>)} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
);

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// // import { Title, List } from './components/App';
// import { Title/*, List*/ } from './components/App';
// import './index.css';
// ReactDOM.render(
//   <Router>
//       <div>
//           console.log(Title);

//         <Route path="/list" component={Title} /> }
//       </div>
//   </Router>,
//   document.getElementById('app')
// )

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// const Title = () => {
//   return (
//       <div className="title">
//         <h1>React Router demo</h1>
//         <Link to="/list"><button>Show the List</button></Link>
//       </div>
//   )
// }
// const List = () => {
//   return (
//     <div className="nav">
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//       <Link to="/"><button>Back Home</button></Link>
//     </div>
//   )
// }
// // module.exports = {
// //   Title,
// //   List
// // };

// export default List;