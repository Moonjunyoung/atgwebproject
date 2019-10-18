import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: "2000px",
    height: "100px",
    backgroundColor: "black",
    fontSize: "50px",
    marginLeft: "15%",
  },
  input: {
    display: "none",
  },
}));

const ComponentSearch = ({ Searchdispatch, SeletcedUserDiscoveryMethod }) => {
  const classes = useStyles();
  const onClick = () => {
    console.log("버튼클릭");
    if (SeletcedUserDiscoveryMethod.length == 0) {
      alert("Data not Chaecking! (Search Fail...)");
    } else {
      Searchdispatch();
      alert("Search Success !!");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onClick}
      >
        SEARCH
      </Button>
    </div>
  );
};

export default ComponentSearch;
