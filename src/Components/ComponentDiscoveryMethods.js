import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css";
import "../css/ComponentDiscoveryMethods.css";

class ComponentDiscoveryMethods extends Component {
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
        <div>
          <h1 className="title">DiscoveryMethods</h1>
          <MultiSelect
            items={items}
            selectedItems={selectedItems}
            onChange={this.handleChange}
          />
        </div>
      </Container>
    );
  }
}

export default ComponentDiscoveryMethods;
