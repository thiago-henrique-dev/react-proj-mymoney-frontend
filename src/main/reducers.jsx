import { combineReducers } from "redux";
import { reducer as formReducer} from 'redux-form'
import DashboardReducers from "../dashboard/dashboardReducer";
import { reducer as toastrReducer } from 'react-redux-toastr'
import TabReducer from "../common/table/tabReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";

//REDUCERS
//vai ser justamente o resultado da combinação de todos os reducers da minha aplicação
//a função reducer recebe dois parametros: o primeiro, é o proprio estado que é store
// o segundo parametro é a ação ou a action que foi disparada para que o reducers fosse chamado.


const rootReducer = combineReducers({
      dashboard: DashboardReducers,
      tab: TabReducer,
      billingCycle: BillingCycleReducer,
      form: formReducer,
      toastr: toastrReducer
})

export default rootReducer