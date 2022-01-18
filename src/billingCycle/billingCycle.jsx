import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/table/tabs'
import TabsHeader from '../common/table/tabsHeader'
import TabsContent from '../common/table/tabsContent'
import TabHeader from '../common/table/tabHeader'
import TabContent from '../common/table/tabContent'


class BillingCycle extends Component {
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
                            <TabContent id='tabList'><h1>Lista</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>


                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle 

