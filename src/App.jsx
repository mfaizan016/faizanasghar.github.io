import { Layout, ConfigProvider, theme } from 'antd';
import { useState } from 'react';
import './App.css';
import Sidebar from './Component/Sidebar/sidebar';
import Introduction from './Component/Introduction/introduction';
import Background from './Component/Background/Background';
import Projects from './Component/Projects/Projects';
import Skills from './Component/Skilss/Skills';
import Experience from './Component/Experience/Experience';
import Testimonials from './Component/Testimonial/Testimonials';
import Blog from './Component/Blog/Blog';
import Achievements from './Component/Acheivements/Acheivements';
import Contact from './Component/Contact/Contact';

const { Content } = Layout;

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: '#0a0a0a',
          colorBgContainer: '#141414',
          colorBgElevated: '#1f1f1f',
          colorBorder: '#303030',
          colorText: '#ffffff',
          colorTextSecondary: '#a0a0a0',
          colorPrimary: '#1890ff',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', background: '#c4c1c1' }}>
        <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <Layout style={{ background: '#b3aeae', marginTop: '64px' }}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div id="home" style={{ minHeight: '100vh' }}>
              <Introduction />
              <Background />
              <Projects />
              <Skills />
              <Experience />
              <Testimonials />
              <Blog />
              <Achievements />
            </div>
            <div id="about" style={{ minHeight: '100vh' }}>
              <Background />
              <Skills />
              <Experience />
            </div>
            <div id="contact" style={{ minHeight: '100vh' }}>
              <Contact />
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;