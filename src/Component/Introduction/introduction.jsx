// src/Component/Introduction/introduction.jsx
import { Typography, Space, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const { Title, Paragraph } = Typography;

function Introduction() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });
      gsap.from(descRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });
      gsap.from(buttonsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        padding: '80px 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        color: '#fff',
      }}
    >
      <Space direction="vertical" size="large" style={{ textAlign: 'center' }}>
        <Title ref={titleRef} level={1} style={{ color: '#fff', fontSize: '4rem', margin: 0 }}>
          Hi, I'm Your Name
        </Title>
        <Title ref={subtitleRef} level={3} style={{ color: '#1890ff', fontWeight: 'normal' }}>
          Full Stack Developer | Tech Enthusiast | Problem Solver
        </Title>
        <Paragraph ref={descRef} style={{ fontSize: '1.2rem', maxWidth: '600px', color: '#d0d0d0' }}>
          I'm passionate about creating innovative solutions and building scalable applications. 
          With a strong foundation in modern web technologies, I strive to deliver exceptional 
          user experiences and robust software solutions.
        </Paragraph>
        <Space ref={buttonsRef} size="large" style={{ marginTop: '20px' }}>
          <Button type="primary" size="large" icon={<GithubOutlined />} href="https://github.com/yourusername" target="_blank">
            GitHub
          </Button>
          <Button type="default" size="large" icon={<LinkedinOutlined />} href="https://linkedin.com/in/yourusername" target="_blank">
            LinkedIn
          </Button>
          <Button type="default" size="large" icon={<MailOutlined />} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </Space>
      </Space>
    </div>
  );
}

export default Introduction;