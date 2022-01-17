import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    render(){
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title="Dashboard" small='Versão 1.0' />
                <Content>
                    <ValueBox  cols='12 4' 
                    color='green' 
                    icon='bank'  
                    value={`R$ ${credit}`}
                    text='Total de Cŕedito'/>
                     <ValueBox 
                     cols='12 4' 
                     color='red' 
                     icon='credit-card' 
                     value={`R$ ${debt}`} 
                     text='Total de Débitos'/>
                     <ValueBox 
                     cols='12 4' 
                     color='blue'
                     icon='money'
                     value={`R$ ${credit - debt}`}                    
                     text='Valor Consolidade'/>


                </Content>
            </div>
        )
    }
} 

const mapStateToProps = state => ({summary: state.dashboard.summary})
export default connect(mapStateToProps)(Dashboard)
