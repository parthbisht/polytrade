import React from 'react'
import Sidebar from './components/sidebar';
import Main from './components/main'
import { Container, Row, Col } from "shards-react";
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        
        <Grid item xs={3} >
      <Sidebar/>
        </Grid>
        <Grid item xs={9}>
          <Main/>
        </Grid>
      
      </Grid>
     
    </div>
  );
}

export default App;
