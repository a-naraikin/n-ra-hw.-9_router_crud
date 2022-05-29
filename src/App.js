import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import PostNew from './components/PostNew';
import PostView from './components/PostView';
import CardContext from './context/CardContext';
import PostEdit from './components/PostEdit';

export default function App() {
  const [create] = useState({id: null, content: '', created: false});

  return (
    <CardContext.Provider value={create}>
      <Router>
        <div className='container'>
          <Switch>
            <Route path='/posts/new' component={PostNew} />
            <Route path='/posts/edit' component={PostEdit} />
            <Route path='/posts/:id' component={PostView} />
            <Route path='/' component={Posts} />
          </Switch>
        </div>
      </Router>
    </CardContext.Provider>  
  );
}
