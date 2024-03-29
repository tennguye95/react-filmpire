import React, {useRef} from 'react';
import { CssBaseline } from '@mui/material';
import {Switch, Route} from 'react-router-dom';
import {Actors, MovieInformation, Movies, NavBar, Profile} from './index.js';
import useStyles from './styles';
import useAlan from './Alan.jsx';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
      <div className={classes.toolbar}/>
        <Switch>
          <Route exact path='/movie/:id'>
            <MovieInformation />
          </Route>
          <Route exact path='/actors/:id'>
            <Actors />
          </Route>
          <Route exact path='/'>
            <Movies />
          </Route>
          <Route exact path='/profile/:id'>
            <Profile />
          </Route>
        </Switch>
      </main>
      <div ref={alanBtnContainer}/>
    </div>
  )
}

export default App;