import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import MultiSelect from "@kenshooui/react-multi-select";
import SearchIcon from "@material-ui/icons/Search";
import "@kenshooui/react-multi-select/dist/style.css";
import "../css/ComponentFailureOptionView.css";

class ComponentFailureOptionView extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      items: [
        { id: 0, label: "item 1" },
        { id: 2, label: "item 2" },
        { id: 3, label: "item 3" },
        { id: 4, label: "item 4" },
      ],
      selectedItems: [],
    };
  }

  handleChange(selectedItems) {
    this.setState({ selectedItems });
  }
  render() {
    const { items, selectedItems } = this.state;
    return (
      <Container id="root-box">
        <MultiSelect
          items={items}
          selectedItems={selectedItems}
          onChange={this.handleChange}
        />
      </Container>
    );
  }
}

export default ComponentFailureOptionView;
