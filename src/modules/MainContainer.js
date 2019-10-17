import * as _ from "lodash";
// 액션타입 지정

const pmbddata = require("../Data/pmdb.json");

const ComponentNameDataCreate = array => {
  let tmp = [];
  let ComponentsName = [];
  for (let i = 0; i < array.length; i++) {
    let uniqdata = array[i].ComponentTypeName.trim();
    tmp.push(uniqdata);
  }
  ComponentsName = _.uniq(tmp);
  return ComponentsName;
};

const CreateFailureOptionData = (selecteditem, PmbdData) => {
  let sorteddata = [];
  let Selecteditem = selecteditem.trim();

  for (let j = 0; j < PmbdData.length; j++) {
    let ComponentNameData = PmbdData[j].ComponentTypeName;
    if (ComponentNameData == Selecteditem) {
      sorteddata.push(PmbdData[j].FailureLocation);
    }
  }
  sorteddata = _.uniq(sorteddata);
  return sorteddata;
};

//componentNametype과 failureOption값과비교해야됨
const CreateDegradationMechanism = (componentName, selecteditem, PmbdData) => {
  let sorteddata = [];

  for (let i = 0; i < selecteditem.length; i++) {
    const selectitem = selecteditem[i].label;
    for (let j = 0; j < PmbdData.length; j++) {
      if (
        selectitem == PmbdData[j].FailureLocation &&
        componentName == PmbdData[j].ComponentTypeName
      ) {
        sorteddata.push(PmbdData[j].DegradationMechanism);
      }
    }
  }
  sorteddata = _.uniq(sorteddata);
  return sorteddata;
};

const CreateDegradationInfluence = (
  componentName,
  failureoption,
  mechanism,
  pmbddata
) => {
  let sorteddata = [];

  for (let i = 0; i < mechanism.length; i++) {
    const mechanismdata = mechanism[i].label;
    for (let z = 0; z < pmbddata.length; z++) {
      if (componentName == pmbddata[z].ComponentTypeName) {
        if (mechanismdata == pmbddata[z].DegradationMechanism) {
          sorteddata.push(pmbddata[z].DegradationInfluence);
        }
      }
    }
  }
  sorteddata = _.uniq(sorteddata);
  return sorteddata;
};

//액션타입설정
const SELECTCOMPONENTNAME = "ComponentNameListView/SELECTCOMPONENTNAME";
const SELECTFAILUREOPTION =
  "ComponentDegradationFailureOption/SelectedFailureOptiondispatch";
const SELECTMECHANISM = "ComponentDegradationMechanism/SELECTMECHANISM";
// 액션생성함수
export const SelectedComponentdispatch = selectitem => ({
  type: SELECTCOMPONENTNAME,
  selectitem,
});

export const SelectedFailureOptiondispatch = selectitem => ({
  type: SELECTFAILUREOPTION,
  selectitem,
});
export const SelectedDegradationMechdispatch = selecteditem => ({
  type: SELECTMECHANISM,
  selecteditem,
});

// 사용자가 컴포넌트이름을 선택할시 발생시켜야됨

// 초기상태 props

const initialState = {
  totaldata: pmbddata,
  componentNamedata: ComponentNameDataCreate(pmbddata),
  SelectedComponentName: "",
  SelectedUserFailureOption: [],
  SelectedUserDegradtionMech: [],
  SelectedFailureOption: [],
  SelectedMechanism: [],
  SelectedInfluence: [],
  SelectedMethod: [],
};

const MainContainer = (state = initialState, action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case SELECTCOMPONENTNAME:
      return {
        ...state,
        SelectedFailureOption: CreateFailureOptionData(
          action.selectitem,
          pmbddata
        ),

        SelectedComponentName: action.selectitem,
      };
    case SELECTFAILUREOPTION:
      return {
        ...state,
        SelectedMechanism: CreateDegradationMechanism(
          state.SelectedComponentName,
          action.selectitem,
          pmbddata
        ),
        SelectedUserFailureOption: action.selectitem,
      };
    case SELECTMECHANISM:
      return {
        ...state,
        SelectedInfluence: CreateDegradationInfluence(
          state.SelectedComponentName,
          state.SelectedUserFailureOption,
          action.selecteditem,
          pmbddata
        ),
        SelectedUserDegradtionMech: action.selecteditem,
      };
    default:
      return state;
  }
};

export default MainContainer;
