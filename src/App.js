import React from 'react';
import './App.css';
import Blogs from './containers/Blogs'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BlogPage from './components/BlogPage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Home from './components/Home'
import Resume from './components/Resume'
import About from './components/About'

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blogs} />
      <Route exact path="/blog/:id" component={BlogPage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/about" component={About} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
