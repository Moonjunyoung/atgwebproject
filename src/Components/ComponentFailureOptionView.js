import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, fade } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import "../css/ComponentFailureOptionView.css";

const useListStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Row(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`hi ${index + 1}`} />
    </ListItem>
  );
}

Row.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

const useSearchBarStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 358,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
}));

const ComponentFailureOptionView = () => {
  const List = useListStyles();
  const SearchBar = useSearchBarStyles();

  const onClick = event => {
    console.log(event.target);
  };

  return (
    <Container maxWidth="xs" id="root-box">
      <div className={SearchBar.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={SearchBar.title} variant="h6" noWrap>
              Material-UI
            </Typography>
            <div className={SearchBar.search}>
              <div className={SearchBar.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: SearchBar.inputRoot,
                  input: SearchBar.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className={List.root} onClick={onClick}>
        <FixedSizeList height={281} width={360} itemSize={46} itemCount={50}>
          {Row}
        </FixedSizeList>
      </div>
    </Container>
  );
};

export default ComponentFailureOptionView;
