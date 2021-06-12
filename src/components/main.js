import React from "react";
import { Card, CardBody,} from "shards-react";
import Grid from '@material-ui/core/Grid';
import Navbar from './navbar'
import Button from '@material-ui/core/Button';

export default function main() {
  return (
      <div>
<Grid container spacing={3}>

    <Grid item xs={12}>
    <Navbar/>
    </Grid>
     
        <Grid item xs={3} >
       <Card>
          <CardBody>
          <h5 className="txt-blue">TOTAL INVOICES</h5>
            <h1>15</h1>
            <p>Submitted</p>
          </CardBody>
        </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
          <CardBody>
            <h5 className="txt-blue">TOTAL AMOUNT FUNDED</h5>

            <h1>$1530000</h1>
            <p>For 11 invoice</p>
          </CardBody>
        </Card>
        </Grid>
        <Grid item xs={3} >
      <Card>
          <CardBody>
          <h5 className="txt-blue">SPOLY TOKEN HANDLING</h5>

            <h1>4,300,086</h1>
            <p>Est. $32445 </p>
          </CardBody>
        </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
          <CardBody>
          <h5 className="txt-blue">SPOLY PRICE</h5>
            <h1>$0.234221</h1>
            <p>+21%</p>
          </CardBody>
        </Card>
        </Grid>

       <Grid item xs={6}>
           <h4 className="txt-white">ALERT</h4>
           
       <Card>
      <CardBody>
      <h4 className="txt-blue cardbody-heading">Invoices</h4>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
      <CardBody>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    
    </Card>
    <Card>
      <CardBody>
      <h4 className="txt-blue cardbody-heading">Invoices</h4>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>
    <Card>
      <CardBody>
      <h4 className="txt-blue cardbody-heading">Invoices</h4>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>
    <Card>
      <CardBody>
      <h4 className="txt-blue cardbody-heading">Invoices</h4>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>
    </Grid>
    <Grid item xs={6}>
    <h4 className="txt-white">ACTIVITY</h4>
    <Card>
      <CardBody>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>

    
    </Grid>   
    
      
      </Grid>
       
     

    
      </div>
    
     

     
  
  );
}