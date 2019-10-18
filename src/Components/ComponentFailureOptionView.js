import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import MultiSelect from '@kenshooui/react-multi-select'
import '@kenshooui/react-multi-select/dist/style.css'
import '../css/ComponentFailureOptionView.css'

function MakeOption (x) {
  return { id: x, label: x }
}

class ComponentFailureOptionView extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      items: [
        { id: 0, label: 'item 1' },
        { id: 2, label: 'item 2' },
        { id: 3, label: 'item 3' },
        { id: 4, label: 'item 4' }
      ],
      selectedItems: []
    }
  }

  handleChange (selectedItems) {
    this.props.SelectedFailureOptiondispatch(selectedItems)
    this.setState({ selectedItems })
  }

  render () {
    const FailureList = this.props.SelectedFailureOption

    const { selectedItems, SelectedComponentName } = this.state

    return (
      <Container id='root-box'>
        <div>
          <h1 className='title'>Failure Location</h1>
          <MultiSelect
            items={FailureList.map(x => MakeOption(x))}
            selectedItems={selectedItems}
            onChange={this.handleChange}
          />
        </div>
      </Container>
    )
  }
}

export default ComponentFailureOptionView
