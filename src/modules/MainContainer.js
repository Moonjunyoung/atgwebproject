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

// componentNametype과 failureOption값과비교해야됨
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

  for (let j = 0; j < failureoption.length; j++) {
    const failuredata = failureoption[j]; // 선택한 failure option
    for (let i = 0; i < mechanism.length; i++) {
      const mechanismdata = mechanism[i].label; // 선택한 mechanism
      for (let z = 0; z < pmbddata.length; z++) {
        // pmbd데이터로 선택한것들을 찾음
        if (componentName == pmbddata[z].ComponentTypeName) {
          if (mechanismdata == pmbddata[z].DegradationMechanism) {
            if (failuredata.label == pmbddata[z].FailureLocation) {
              sorteddata.push(pmbddata[z].DegradationInfluence);
            }
          }
        }
      }
    }
  }
  sorteddata = _.uniq(sorteddata);
  return sorteddata;
};
const CreateDiscoveryMethods = (
  componentName,
  failureoption,
  DegradationMechanism,
  DegradationInfluence
) => {
  let sorteddata = [];
  for (let i = 0; i < failureoption.length; i++) {
    const failuredata = failureoption[i].label;
    for (let j = 0; j < DegradationMechanism.length; j++) {
      const Mechdata = DegradationMechanism[j].label;
      for (let k = 0; k < DegradationInfluence.length; k++) {
        const Infludata = DegradationInfluence[k].label;
        for (let z = 0; z < pmbddata.length; z++) {
          if (componentName == pmbddata[z].ComponentTypeName) {
            if (failuredata == pmbddata[z].FailureLocation) {
              if (Mechdata == pmbddata[z].DegradationMechanism) {
                if (Infludata == pmbddata[z].DegradationInfluence) {
                  sorteddata.push(pmbddata[z].DiscoveryMethods);
                }
              }
            }
          }
        }
      }
    }
  }
  sorteddata = _.uniq(sorteddata);
  return sorteddata;
};

const CreateTableViewdata = (
  ComponentTypeName,
  FailureLocation,
  DegradationMechanism,
  DegradationInfluence,
  DiscoveryMethods
) => {
  let sorteddata = [];
  for (let i = 0; i < FailureLocation.length; i++) {
    const failuredata = FailureLocation[i].label;
    for (let j = 0; j < DegradationMechanism.length; j++) {
      const Mechdata = DegradationMechanism[j].label;
      for (let k = 0; k < DegradationInfluence.length; k++) {
        const Infludata = DegradationInfluence[k].label;
        for (let p = 0; p < DiscoveryMethods.length; p++) {
          const MethodsData = DiscoveryMethods[p].label;
          for (let z = 0; z < pmbddata.length; z++) {
            if (ComponentTypeName == pmbddata[z].ComponentTypeName) {
              if (failuredata == pmbddata[z].FailureLocation) {
                if (Mechdata == pmbddata[z].DegradationMechanism) {
                  if (Infludata == pmbddata[z].DegradationInfluence) {
                    if (MethodsData == pmbddata[z].DiscoveryMethods) {
                      sorteddata.push(pmbddata[z]);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  sorteddata = _.uniq(sorteddata);
  return sorteddata;
};
// 액션타입설정
const SELECTCOMPONENTNAME = "ComponentNameListView/SELECTCOMPONENTNAME";
const SELECTFAILUREOPTION =
  "ComponentDegradationFailureOption/SelectedFailureOptiondispatch";
const SELECTMECHANISM = "ComponentDegradationMechanism/SELECTMECHANISM";
const SELECTMETHOD = "ComponentDiscoveryMethods/SELECTMETHOD";

const SELECTINFLUENCE = "ComponentDiscoveryMethods/SELECTINFLUENCE";

const SEARCH = "ComponentSearch/SEARCH";
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
export const SelectedDegradationInfluncedispatch = selecteditem => ({
  type: SELECTINFLUENCE,
  selecteditem,
});
export const SelectedDiscoveryMethodsdispatch = selecteditem => ({
  type: SELECTMETHOD,
  selecteditem,
});

export const Searchdispatch = () => ({
  type: SEARCH,
});
// 사용자가 컴포넌트이름을 선택할시 발생시켜야됨

// 초기상태 props

const initialState = {
  totaldata: pmbddata,
  componentNamedata: ComponentNameDataCreate(pmbddata),
  SelectedComponentName: "",
  SelectedUserFailureOption: [],
  SelectedUserDegradtionMech: [],
  SeletcedUserInfluence: [],
  SeletcedUserDiscoveryMethod: [],
  SelectedFailureOption: [],
  SelectedMechanism: [],
  SelectedInfluence: [],
  SelectedDiscovery: [],
  TableViewData: [],
};

const MainContainer = (state = initialState, action) => {
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
    case SELECTINFLUENCE:
      return {
        ...state,
        SelectedDiscovery: CreateDiscoveryMethods(
          state.SelectedComponentName,
          state.SelectedUserFailureOption,
          state.SelectedUserDegradtionMech,
          action.selecteditem
        ),
        SeletcedUserInfluence: action.selecteditem,
      };
    case SELECTMETHOD:
      return {
        ...state,
        SeletcedUserDiscoveryMethod: action.selecteditem,
      };
    case SEARCH:
      return {
        ...state,
        TableViewData: CreateTableViewdata(
          state.SelectedComponentName,
          state.SelectedUserFailureOption,
          state.SelectedUserDegradtionMech,
          state.SeletcedUserInfluence,
          state.SeletcedUserDiscoveryMethod
        ),
      };
    default:
      return state;
  }
};

export default MainContainer;
