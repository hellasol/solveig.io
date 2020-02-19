import React from 'react';
import './App.css';
import ProfileCard from "./components/card"
import Project from "./components/projects"
import Layout from "./components/layout"


function App() {
  return (
    <div>
      <header>
      <Layout>
         <ProfileCard />
         <Project />
      </Layout>
      </header>
    </div>
  );
}

export default App;
