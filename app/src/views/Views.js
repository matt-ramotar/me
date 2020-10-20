import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './HomeView';
import AboutView from './AboutView';
import ContactView from './ContactView';
import ProjectsViewContainer from './ProjectsView';

export default function Views() {
  return (
    <div>
      <Route exact path='/' component={HomeView}></Route>
      <Route exact path='/about' component={AboutView}></Route>
      <Route exact path='/contact' component={ContactView}></Route>
      <Route exact path='/projects' component={ProjectsViewContainer}></Route>
    </div>
  );
}
