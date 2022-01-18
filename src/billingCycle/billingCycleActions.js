import axios from "axios";
import { toastr } from "react-redux-toastr";    
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab} from  '../common/table/tabActions'

const BASE_URL = 'http://localhost:3003/api'



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
            dispatch([resetForm('billingCycleForm'), //DISPARAR QUATRO AÇÕES, RESETAR, PEGAR A LISTA , SELECIONAR A TABLE E MOSTRAR A LISTA
                getList(),
                selectTab('tabList'),
                showTabs('tabList', 'tabCreate')
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
     }
        
    }