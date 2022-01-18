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
import { create, update, remove } from './billingCycleActions'
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
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update}/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove}/>

                            </TabContent>


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
        create,
        update,
        remove }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)

