import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/table/tabs'
import TabsHeader from '../common/table/tabsHeader'
import TabsContent from '../common/table/tabsContent'
import TabHeader from '../common/table/tabHeader'

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

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle 

