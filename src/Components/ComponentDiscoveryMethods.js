import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import MultiSelect from '@kenshooui/react-multi-select'
import '@kenshooui/react-multi-select/dist/style.css'
import '../css/ComponentDiscoveryMethods.css'

function MakeOption (x) {
  return { id: x, label: x }
}

class ComponentDiscoveryMethods extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      selectedItems: []
    }
  }

  handleChange (selectedItems) {
    this.props.SelectedDiscoveryMethodsdispatch(selectedItems)

    this.setState({ selectedItems })
  }
  render () {
    const itemlist = this.props.SelectedDiscovery

    const { selectedItems } = this.state
    return (
      <Container id='root-box'>
        <div>
          <h1 className='title'>DiscoveryMethods</h1>
          <MultiSelect
            items={itemlist.map(x => MakeOption(x))}
            selectedItems={selectedItems}
            onChange={this.handleChange}
          />
        </div>
      </Container>
    )
  }
}

export default ComponentDiscoveryMethods
