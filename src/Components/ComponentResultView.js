import React, { Component } from "react";
import MaterialTable from "material-table";

import { withStyles } from "@material-ui/core/styles";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import "../css/ComponentResultView.css";
import { NONAME } from "dns";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};
class ComponentResultView extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        columns: [
          {
            title: "Degration Progress",
            field: "Degration Progress",
            headerStyle: {
              fontWeight: "bold",

              border: "1px solid black",

              textAlign: "center",
            },
          },
          {
            title: "Failure Timing",
            field: "Failure Timing",
            headerStyle: {
              fontWeight: "bold",
              textAlign: "center",

              border: "1px solid black",
            },
          },
          {
            title: "Time Code",
            field: "Time Code",
            headerStyle: {
              fontWeight: "bold",
              textAlign: "center",

              border: "1px solid black",
            },
          },
          {
            title: "Relative Frequency",
            field: "Relative Frequency",
            type: "numeric",
            headerStyle: {
              fontWeight: "bold",
              textAlign: "center",

              border: "1px solid black",
            },
          },
          {
            title: "Repair Time",
            field: "Repair Time",
            type: "numeric",
            headerStyle: {
              fontWeight: "bold",

              border: "1px solid black",
              textAlign: "center",
            },
          },
          {
            title: "Fail Weight",
            field: "Fail Weight",
            type: "numeric",
            headerStyle: {
              fontWeight: "bold",

              border: "1px solid black",
              textAlign: "center",
            },
          },
        

          {
            title: "Strength",
            field: "Strength",
            type: "numeric",
            headerStyle: {
              fontWeight: "bold",

              border: "1px solid black",
              textAlign: "center",
            },
          },
          {
            title: "Def Color",
            field: "Def Color",
            headerStyle: {
              fontWeight: "bold",
              textAlign: "center",

              border: "1px solid black",
            },
          },
          {
            title: "NewVulnerability",
            field: "NewVulnerability",
            headerStyle: {
              fontWeight: "bold",

              border: "1px solid black",

              textAlign: "center",
            },
          },
          {
            title: "Inst Col",
            field: "Inst Col",
            headerStyle: {
              fontWeight: "bold",

              border: "1px solid black",
              textAlign: "center",
            },
          },
          {
            title: "Def Fail Weight",
            field: "Def Fail Weight",
            type: "numeric",
            headerStyle: {
              fontWeight: "bold",

              border: "1px solid black",
              textAlign: "center",
            },
          },
        
          {
            title: "Task Metric",
            field: "Task Metric",
            type: "numeric",
            headerStyle: {
              fontWeight: "bold",
              textAlign: "center",

              border: "1px solid black",
            },
          },
          {
            title: "Attenuation",
            field: "Attenuation",
            type: "numeric",
            headerStyle: {
              fontWeight: "bold",
              textAlign: "center",

              border: "1px solid black",
            },
          },
          {
            title: "AddToList",
            field: "AddToList",
            type: "numeric",
            headerStyle: {
              fontWeight: "bold",
              textAlign: "center",
              border: "1px solid black",
            },
          },

          {
            title: "Component Type ID",
            field: "Component Type ID",
            type: "numeric",
            headerStyle: {
              fontWeight: "bold",
              textAlign: "center",
              border: "1px solid black",
            },
          },
          {
            title: "Counter",
            field: "Counter",
            type: "numeric",
            headerStyle: {
              fontWeight: "bold",
              textAlign: "center",
              border: "1px solid black",
            },
          },
          {
            title: "Last Changed In Version",
            field: "Last Changed In Version",
            type: "numeric",
            headerStyle: {
              fontWeight: "bold",
              textAlign: "center",

              border: "1px solid black",
            },
          },
          {
            title: "CommonDegradation",
            field: "CommonDegradation",
            headerStyle: {
              fontWeight: "bold",

              border: "1px solid black",
              textAlign: "center",
            },
          },
          {
            title: "Graph",
            field: "Graph",
            headerStyle: {
              fontWeight: "bold",

              border: "1px solid black",
              textAlign: "center",
            },
          },


        ],
      };
    }
  }
  render() {
    const totaldata=this.props.TableViewData;
    console.log(totaldata)
    return (
      <MaterialTable
        title="Data"
        columns={this.state.columns}
        icons={tableIcons}
      />
    );
  }
}

export default ComponentResultView;
