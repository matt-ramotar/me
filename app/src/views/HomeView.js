import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AboutView from './AboutView';
import ContactView from './ContactView';
import ProjectsView from './ProjectsView';

export default function HomeView() {
  return (
    <div>
      <ProjectsView />
      <AboutView />
      <ContactView />
    </div>
  );
}
