import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BaseLayout from './components/Layout';
import Explorer from './components/Explorer';
import People from './components/People';
import Films from './components/Films';
import Starships from './components/Starships';

// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<


ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={Explorer} />
      <Route path="/characters" component={People} />
      <Route path="/films" component={Films} />
      <Route path="/starships" component={Starships} />
    </Switch>
  </BaseLayout>
</BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
