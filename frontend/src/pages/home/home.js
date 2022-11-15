import { Layout} from 'antd';
import React from 'react';
import FormComponent from '../../components/form/form';
import MenuComponent from '../../components/menu/menu';
const { Header, Content, Footer } = Layout;

const Home = ({FluxoBasico, FluxoAlternativo, FluxoExcecao, FluxoGeral}) => {   
    
    return (
    <div>
        <Layout 
        style={{
            height: '100%',
            minHeight: '100vh',
            background: '#f0f2f5'
            }}>
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
            alignItems: 'center',
            }}
        >
            <FormComponent 
                FluxoBasico={FluxoBasico} 
                FluxoAlternativo={FluxoAlternativo} 
                FluxoExcecao= {FluxoExcecao} 
                FluxoGeral={FluxoGeral}
            />
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
)};

export default Home;