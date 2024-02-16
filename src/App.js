import React from 'react';
import Navbar from './components/Navbar';
import Hero   from './components/Hero';
import Home from './components/pages/Home';
import Team from './components/pages/Team';
import HonorsAndAchievements from './components/pages/HonorsAndAchievements';
import Products from './components/pages/Products';
import Publications from './components/pages/Publications';
import CapacityBuilding from './components/pages/CapacityBuilding';
import Collaborations from './components/pages/Collaborations';
import About from './components/pages/About';
import News from './components/pages/News';
import Masters from './components/pages/Masters';
import Phd from './components/pages/Phd';
import RAs from './components/pages/RAs';
import Interns from './components/pages/Interns';
import Fydp from './components/pages/Fydp';
import Fydp2022 from './components/pages/fydp2022home.jsx';
import Projects from './fydp2023/Projects';
import PhdHome from './components/pages/phdhome.jsx';
import MSHome from './components/pages/mshome.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css';
const PlaceholderComponent = () => <div></div>;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<PlaceholderComponent />} /> */}
          <Route path='/' exact Component={Home} />
          <Route path='/team'  Component={Team} />
          <Route path='/honors-and-achievements' Component={HonorsAndAchievements} />
          <Route path='/products' Component={Products} />
          <Route path='/publications' Component={Publications} />
          <Route path='/capacity-building' Component={CapacityBuilding} />
          <Route path='/collaborations' Component={Collaborations} />
          <Route path='/about-page' Component={About} />
          <Route path='/news' Component={News} />
          <Route path='/masters' Component={Masters} />
          {/* <Route path='/masters' Component={MSHome} /> */}
          <Route path='/phd' Component={Phd} />
          {/* <Route path='/phd' Component={PhdHome} /> */}
          <Route path='/ras' Component={RAs} />
          <Route path='/interns' Component={Interns} />
          {/* <Route path='/fydp' Component={Fydp2022} /> */}
          <Route path='/fydp' Component={Fydp} />

        </Routes>
      </Router>

      {/* <Hero/> */}


        
    </>
  );
}

export default App;
