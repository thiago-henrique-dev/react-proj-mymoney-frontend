import axios from "axios";
import { toastr } from "react-redux-toastr";    
import { getFormValues, reset as resetForm } from 'redux-form'
import { showTabs, selectTab} from  '../common/table/tabActions'
import { initialize } from "redux-form";

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}



//FUNÇÃO QUE DISPARA A ACTION
export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}   

export function create(values) {
    return dispatch => {
          axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso.') //mostrar a msg de SUCESSP 
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
     }
        
    }

    export function showUpdate(billingCycle){
            return [
                showTabs('tabUpdate'),
                selectTab('tabUpdate'),
                initialize('billingCycleForm', billingCycle)
            ]
    }

    export function init(){
        return [
            showTabs('tabList', 'tabCreate'),
            selectTab('tabList'),
            getList(),
            initialize('billingCycleForm', INITIAL_VALUES)
        ]
    }