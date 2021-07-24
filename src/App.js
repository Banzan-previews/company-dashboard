import React from 'react'
import {Switch,Route,BrowserRouter} from 'react-router-dom'


import styled from 'styled-components';
import Navbar from './Components/Navbar'
import SideBar from './Components/SideBar'
import Home from './Components/Overview'
import Growth from './Components/Growth'
import Resource from './Components/Resource'
import Timeline from './Components/Timeline'
import Manage from './Components/Manage';

import { Space } from './Components/Utils';
import './App.css';

const Container = styled.div`
  position : fixed ;
  width : 100%;
  height : 100%;
  left : 0 ;
  top : 0;
  overflow-y : scroll;
  // background-color : white;
  background-color : #f4f5fa;
`

const WorkArea = styled.div`
  display : flex;
`

const ShowcaseGrid = styled.div`
  width : 100%; 
  display: flex;
  flex-wrap : wrap;
  margin-left : 200px;
  
  `



function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
        <SideBar />
        <Navbar/>
        <Space size={100} />
        <WorkArea>
          <ShowcaseGrid>
              <Switch>
                <Route path='/growth' component={Growth} />
                <Route path='/resource' component={Resource} />
                <Route path='/timeline' component={Timeline} />
                <Route path='/manage' component={Manage} />
                <Route  path='/' component={Home} />
              </Switch>

          </ShowcaseGrid>
        </WorkArea>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
