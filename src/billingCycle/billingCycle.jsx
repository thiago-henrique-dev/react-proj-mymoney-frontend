import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/table/tabs'
import TabsHeader from '../common/table/tabsHeader'
import TabsContent from '../common/table/tabsContent'

class BillingCycle extends Component {
    render (){
        return (
            <div >
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>   
                    <Tabs>
                        <TabsHeader>

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

