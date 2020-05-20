import React, { Component } from "react";
import Search from "../components/buttons/Search";
import DatePicker from "../components/buttons/DatePicker";
import Level from "../components/buttons/Level";
import TeamSelector from "../components/buttons/TeamSelector";
import FavoriteSportsFilter from "../components/buttons/FavoriteSportsFilter";
import TextField from "@material-ui/core/TextField";
import MyMap from "../components/buttons/MyMap";
import Card from "../components/buttons/Card";
import { NavLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import SubmitBtn from "../components/buttons/SubmitBtn";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

class Home extends Component {
  state = {
    isSwitchOn: false,
    isFilterOn: false,
    search: "",
    startDate: "",
    endDate: "",
    level: "",
    team: "",
    favoriteSports: false,
  };

  toggle = () => {
    this.setState({
      isSwitchOn: !this.state.isSwitchOn,
    });
  };
  toggleFilter = () => {
    this.setState({
      isFilterOn: !this.state.isFilterOn,
    });
  };
  handleChange = (event, value) => {
    let res;
    if (value === null) res = "";
    else {
      res = value.sport;
    }
    this.setState({
      search: res,
    });
  };

  handleEndDate = (date) => {
    this.setState({
      endDate: date,
    });
  };

  handleStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleRating = (newValue) => {
    let res;
    if (newValue === null || newValue === 1) {
      res = "facile";
    } else if (newValue === 2) {
      res = "modéré";
    } else if (newValue === 3) {
      res = "confirmé";
    }
    this.setState({
      level: res,
    });
  };

  handleTeam = (newValue) => {
    this.setState({
      team: newValue,
    });
  };

  handleFavorite = (value) => {
    this.setState({
      favoriteSports: value,
    });
  };

  render() {
    // console.log(this.state.isFilterOn);
    return (
      // VUE FILTER
     
      <>
        <div className="search-bar-home">
    
          <button onClick={this.toggleFilter}>click</button>
   
    
          <div className="flex-between">
            <div className="margin-general">
              <Search clbk={this.handleChange} />
            </div>
            <div className="margin-general">
              <DatePicker
                endDate={this.handleEndDate}
                startDate={this.handleStartDate}
              />
            </div>
          </div>
  
     
          <div>
            <SubmitBtn />
          </div>
    
      {/* {!this.context.isLoggedIn && (
        <NavLink exact to="/signin">
       <h1>Connection</h1>
        </NavLink>
        )}
        {!this.context.isLoggedIn && (
        <NavLink exact to="/signup">
       <h1>Inscription</h1>
        </NavLink>
        )} */}
        </div>

        
        <div
          className={
            this.state.isFilterOn ? "toggleFilterOn" : "toggleFilterOff"
          }
        >
          <div className="flex-between">
            {/* <button>Filters</button> */}
            <div className="margin-general">
             
              <Level ratingValue={this.handleRating} />
            </div>
            <div className="margin-general">
              <TeamSelector parentCallback={this.handleTeam} />
            </div>
            <div className="margin-general">
           
              <FavoriteSportsFilter parentCallback={this.handleFavorite} />
            </div>
            <div className="change-view-container">
              <button onClick={this.toggle}>Changer vue</button>
            </div>
          </div>
        </div>

        {/* // VUE CHANGER VIEW */}

        <>
      
          {/* <div className="change-view-container">
          <button onClick={this.toggle}>Changer vue</button>
        </div> */}
          <div
            className={
              this.state.isSwitchOn ? "toggleDisplayOff" : "toggleDisplayOn"
            }
          >
            <MyMap />
          </div>

          <div
            className={
              this.state.isSwitchOn ? "toggleDisplayOn" : "toggleDisplayOff"
            }
          >
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="md">
                <h2 className="title">Lundi 17 Mai 2020</h2>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Card />
                  </Grid>
                </Grid>
              </Container>
            </React.Fragment>
          </div>
        </>
      </>
    );
  }
}

export default Home;
