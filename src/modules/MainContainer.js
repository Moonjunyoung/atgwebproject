import * as _ from 'lodash'
// 액션타입 지정

const pmbddata = require('../Data/pmdb.json')

const ComponentNameDataCreate = array => {
  let tmp = []
  let ComponentsName = []
  for (let i = 0; i < array.length; i++) {
    let uniqdata = array[i].ComponentTypeName.trim()
    tmp.push(uniqdata)
  }
  ComponentsName = _.uniq(tmp)
  return ComponentsName
}

const SELECTCOMPONENTNAME = 'ComponentNameListView/SELECTCOMPONENTNAME'

// 액션생성함수
export const SelectedComponentName = (
  selectitem // 사용자가 컴포넌트이름을 선택할시 발생시켜야됨
) => ({ type: SELECTCOMPONENTNAME, selectitem })

// 초기상태 props

const initialState = {
  totaldata: pmbddata,
  componentNamedata: ComponentNameDataCreate(pmbddata),
  SelectedComponentName: [],
  SelectedFailureOption: [],
  SelectedMechanism: [],
  SelectedInfluence: [],
  SelectedMethod: []
}

const MainContainer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTCOMPONENTNAME:
      return {
        SelectedComponentName: action.item
      }

    default:
      return state
  }
}

export default MainContainer
