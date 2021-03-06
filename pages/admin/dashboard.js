import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Edit from "@material-ui/icons/Edit";
import DeleteForever from "@material-ui/icons/DeleteForever";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import CloudDownload from "@material-ui/icons/CloudDownload";
import Cloud from "@material-ui/icons/Cloud";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const demoDesigns = [{
    name: 'My Awesome design', 
    color:'#FFDF00',
    size:40,
    type:'White Diamonds',
    url:'https://cdn.shopify.com/s/files/1/0015/4638/7531/products/rosegoldpendant_720x.jpg?v=1640465863'
  },{
    name:'I love rose',
    color:'#B76E79',
    size: 50,
    type:'Blue purl',
    url:'https://cdn.shopify.com/s/files/1/0534/1092/2660/products/2B6A98210.jpg?v=1646210187'
  },{
    name: 'Purple is great',
    color:'#bec2cb',
    type:'Red rose',
    size:22,
    url:'https://cdn.shopify.com/s/files/1/0515/0831/4272/products/crown-wh-compressed_2_700x700.jpg?v=1635429183'
  }];
  return (
    <div>
      {/* <h3>Your Design</h3> */}
      <GridContainer>
      {demoDesigns.map((design) => (
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary" style={{padding: 0}}>
          
              <img style={{ width: '100%', height: '250px', objectFit: 'cover' }} className="ct-chart" src={design.url} />
            </CardHeader>
            <CardBody>
              <div style={{display:'flex', justifyContent:'space-between'}}>
              <h4 className={classes.cardTitle}>{design.name}</h4>
               <div className={classes.stats}>
                 <div> <CloudDownload /> STL</div>
                 <div> <CloudDownload  style={{ marginLeft: '.5rem' }}/> OBJ</div>
                 </div>
              </div>
              <p className={classes.cardCategory}>
              <div style={{display: 'flex', marginBottom: '.5rem'}}>
                {/* <AccessTime style={{marginRight: '.5rem', marginBottom: '.5rem'}} /> */}
                Created on 
                 22 Apr, 2022  
                </div>
                {/* <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                time and some other parameter */}
                <div style={{display: 'flex', alignItems:'center'}}>
                <div style={{borderRadius: '50%',  backgroundColor: design.color, width: '1rem', height: '1rem', color: design.color, marginRight: '.25rem' }}></div> 
                base / {design.size} cm with {design.type}
                </div>
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Edit /> Edit 
                <DeleteForever style={{ marginLeft: '1rem' }}/> Delete 
              </div>
            </CardFooter>
          </Card>
        </GridItem> 
      ))}
        
      </GridContainer>
     
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
