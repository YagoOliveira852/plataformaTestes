import { Layout} from 'antd';
import React from 'react';
import Form from '../../components/form/form';
import MenuComponent from '../../components/menu/menu';
const { Header, Content, Footer } = Layout;

const Home = () => (
    <div>
        <Layout style={{height:760}}>
        <Header
        style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
        }}
        >
        <div className="logo" />
        <MenuComponent/>
        </Header>
        <Content
        className="site-layout"
        style={{
            padding: '0 50px',
            marginTop: 64,
        }}
        >
        <div
            className="site-layout-background"
            style={{
            padding: 24,
            minHeight: 380,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center,'
            }}
        >
            <Form/>
        </div>
        </Content>
        <Footer
        style={{
            textAlign: 'center',
        }}
        >
        
        </Footer>
    </Layout>
    </div>
);

export default Home;