import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LableAndInput from '../common/form/lableAndInput'

class BillingCycleForm extends Component { 
    render(){

        const { handleSubmit } = this.props 
        console.log(handleSubmit)
 
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LableAndInput} 
                        label='Nome' cols='12 4' placeholder="Informe o nome"   />
                    <Field name='month' component={LableAndInput} type="number" 
                        label="Mês" cols="12 4" placeholder="Informe o mês"/>
                    <Field name='year' component={LableAndInput} type="number" 
                        label="Ano" cols="12 4" placeholder="Informe o ano"/>
                </div>
                <div className='box-footers'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)