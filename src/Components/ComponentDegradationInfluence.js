import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import MultiSelect from '@kenshooui/react-multi-select'
import '@kenshooui/react-multi-select/dist/style.css'
import '../css/ComponentDegradationMechanism.css'

function MakeOption (x) {
  return { id: x, label: x }
}
class ComponentDegradationInfluence extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      selectedItems: []
    }
  }

  handleChange (selectedItems) {
    this.props.SelectedDegradationInfluncedispatch(selectedItems) // 선택한아이템을 액션함수실행

    this.setState({ selectedItems })
  }
  render () {
    const { selectedItems } = this.state
    const SelectedInfluence = this.props.SelectedInfluence

    return (
      <Container id='root-box'>
        <div>
          <h1 className='title'>Degradation Influence</h1>
          <MultiSelect
            items={SelectedInfluence.map(x => MakeOption(x))}
            selectedItems={selectedItems}
            onChange={this.handleChange}
          />
        </div>
      </Container>
    )
  }
}

export default ComponentDegradationInfluence
