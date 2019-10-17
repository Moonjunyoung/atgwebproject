import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css";
import "../css/ComponentDegradationMechanism.css";

function MakeOption(x) {
  return { id: x, label: x };
}
class ComponentDegradationMechanism extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedItems: [],
    };
  }

  handleChange(selectedItems) {
    this.props.SelectedDegradationMechdispatch(selectedItems);
    this.setState({ selectedItems });
  }
  render() {
    const itemlist = this.props.SelectedMechanism;
    const { selectedItems } = this.state;

    return (
      <Container id="root-box">
        <div>
          <h1 className="title">Degradation Mechanism</h1>
          <MultiSelect
            items={itemlist.map(x => MakeOption(x))}
            selectedItems={selectedItems}
            onChange={this.handleChange}
          />
        </div>
      </Container>
    );
  }
}

export default ComponentDegradationMechanism;
