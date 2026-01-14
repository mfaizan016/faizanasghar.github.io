// src/Component/Background/Background.jsx
import { Typography, Card, Row, Col, Timeline } from 'antd';
import { BookOutlined, TrophyOutlined } from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Title, Paragraph } = Typography;

function Background() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ padding: '80px 50px', background: '#0a0a0a' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px', color: '#ffffff' }}>
        <BookOutlined /> Background
      </Title>

      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <Card
            ref={(el) => (cardsRef.current[0] = el)}
            title="Education"
            bordered={false}
            style={{ boxShadow: '0 4px 12px rgba(24, 144, 255, 0.2)' }}
          >
            <Timeline
              items={[
                {
                  children: (
                    <>
                      <Title level={4} style={{ color: '#ffffff' }}>Bachelor's in Computer Science</Title>
                      <Paragraph style={{ color: '#a0a0a0' }}>University Name | 2018 - 2022</Paragraph>
                      <Paragraph style={{ color: '#a0a0a0' }}>GPA: 3.8/4.0</Paragraph>
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <Title level={4} style={{ color: '#ffffff' }}>Master's in Software Engineering</Title>
                      <Paragraph style={{ color: '#a0a0a0' }}>University Name | 2022 - 2024</Paragraph>
                      <Paragraph style={{ color: '#a0a0a0' }}>Specialization in Cloud Computing</Paragraph>
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card
            ref={(el) => (cardsRef.current[1] = el)}
            title="Certifications"
            bordered={false}
            style={{ boxShadow: '0 4px 12px rgba(24, 144, 255, 0.2)' }}
          >
            <Timeline
              items={[
                {
                  color: '#52c41a',
                  children: (
                    <>
                      <Title level={5} style={{ color: '#ffffff' }}><TrophyOutlined /> AWS Certified Solutions Architect</Title>
                      <Paragraph style={{ color: '#a0a0a0' }}>Amazon Web Services | 2024</Paragraph>
                    </>
                  ),
                },
                {
                  color: '#1890ff',
                  children: (
                    <>
                      <Title level={5} style={{ color: '#ffffff' }}><TrophyOutlined /> Google Cloud Professional</Title>
                      <Paragraph style={{ color: '#a0a0a0' }}>Google Cloud | 2023</Paragraph>
                    </>
                  ),
                },
                {
                  color: '#722ed1',
                  children: (
                    <>
                      <Title level={5} style={{ color: '#ffffff' }}><TrophyOutlined /> React Advanced Certification</Title>
                      <Paragraph style={{ color: '#a0a0a0' }}>Meta | 2023</Paragraph>
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Background;