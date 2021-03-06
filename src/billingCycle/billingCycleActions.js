import axios from "axios";
import { toastr } from "react-redux-toastr";    
import { getFormValues, reset as resetForm } from 'redux-form'
import { showTabs, selectTab} from  '../common/table/tabActions'
import { initialize } from "redux-form";

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}



//FUNÇÃO QUE DISPARA A ACTION
export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}   

export function create(values) {
    return submit(values, 'post')
}
    
export function update(values) {
    return submit(values, 'put')
    }

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
        return dispatch => {
            const id = values._id ? values._id : ''
            axios[method](`${BASE_URL}/billingCycles/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso.') //mostrar a msg de SUCESSP 
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Error', error))
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

    export function showDelete(billingCycle){
        return [
            showTabs('tabDelete'),
            selectTab('tabDelete'),
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