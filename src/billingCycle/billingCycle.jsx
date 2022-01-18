import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/table/tabs'
import TabsHeader from '../common/table/tabsHeader'
import TabsContent from '../common/table/tabsContent'
import TabHeader from '../common/table/tabHeader'
import TabContent from '../common/table/tabContent'
import { selectTab, showTabs } from '../common/table/tabActions'
import { create } from './billingCycleActions'
import List from './billingCycleList'
import Form from './billingCycleForm'



class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabDelete')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render (){
        return (
            <div >
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>   
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>  
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List/>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>


                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
        selectTab, 
        showTabs,
        create }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)

