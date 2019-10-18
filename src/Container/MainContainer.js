import React from 'react'
import { connect } from 'react-redux'
import {
  SelectedComponentdispatch,
  SelectedFailureOptiondispatch,
  SelectedDegradationMechdispatch,
  SelectedDegradationInfluncedispatch
} from '../modules/MainContainer'
import { bindActionCreators } from 'redux'

import Container from '@material-ui/core/Container'
import ComponentNameListView from '../Components/ComponentNameListView'
import ComponentFailureOptionView from '../Components/ComponentFailureOptionView'
import ComponentDegradationMechanism from '../Components/ComponentDegradationMechanism'
import ComponentDegradationInfluence from '../Components/ComponentDegradationInfluence'
import ComponentDiscoveryMethods from '../Components/ComponentDiscoveryMethods'
import ComponentResultView from '../Components/ComponentResultView'

import '../css/MainContainer.css'

import styled, { css } from 'styled-components'

const Title = styled.h1`
  text-align: center;
  color: grey;
`

const MainContainer = ({
  ComponentNamedata,
  SelectedComponentdispatch,
  SelectedFailureOption,
  SelectedFailureOptiondispatch,
  SelectedMechanism,
  SelectedDegradationMechdispatch,
  SelectedInfluence,
  SelectedDegradationInfluncedispatch,
  SelectedDiscovery
}) => {
  return (
    <>
      <Title>PMBD Data View</Title>
      <ComponentNameListView
        ComponentNamedata={ComponentNamedata}
        SelectedComponentdispatch={SelectedComponentdispatch}
      />
      <Container id='Mainroot-box'>
        <ComponentFailureOptionView
          SelectedFailureOption={SelectedFailureOption}
          SelectedFailureOptiondispatch={SelectedFailureOptiondispatch}
        />
        <ComponentDegradationMechanism
          SelectedMechanism={SelectedMechanism}
          SelectedDegradationMechdispatch={SelectedDegradationMechdispatch}
        />
        <ComponentDegradationInfluence
          SelectedInfluence={SelectedInfluence}
          SelectedDegradationInfluncedispatch={
            SelectedDegradationInfluncedispatch
          }
        />
        <ComponentDiscoveryMethods SelectedDiscovery={SelectedDiscovery}/>
      </Container>

      <ComponentResultView />
    </>
  )
}

const mapStateToProps = state => ({
  totaldata: state.MainContainer.totaldata,
  ComponentNamedata: state.MainContainer.componentNamedata,
  SelectedComponentName: state.MainContainer.SelectedComponentName,
  SelectedFailureOption: state.MainContainer.SelectedFailureOption,
  SelectedMechanism: state.MainContainer.SelectedMechanism,
  SelectedInfluence: state.MainContainer.SelectedInfluence,
  SelectedMethod: state.MainContainer.SelectedMethod,
  SelectedDiscovery:state.MainContainer.SelectedDiscovery
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      SelectedComponentdispatch,
      SelectedFailureOptiondispatch,
      SelectedDegradationMechdispatch,
      SelectedDegradationInfluncedispatch
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
