import { combineReducers } from "redux";
import DashboardReducers from "../dashboard/dashboardReducer";

//REDUCERS
//vai ser justamente o resultado da combinação de todos os reducers da minha aplicação
//a função reducer recebe dois parametros: o primeiro, é o proprio estado que é store
// o segundo parametro é a ação ou a action que foi disparada para que o reducers fosse chamado.


const rootReducer = combineReducers({
      dashboard: DashboardReducers
})

export default rootReducer