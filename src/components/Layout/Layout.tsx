import React from 'react';
import {Layout as AntLayout} from 'antd';
import Header from '../Header/Header';

const {Content, Footer} = AntLayout;

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <AntLayout>
            <Header/>
            <Content style={{padding: '0 50px', marginTop: 64}}>
                {children}
            </Content>
            <Footer style={{textAlign: 'right'}}>
                PerxShop ©{new Date().getFullYear()}
            </Footer>
        </AntLayout>
    );
};

export default Layout;