// src/components/Achievements.jsx
import { Typography, Card, Row, Col } from 'antd';
import { StarOutlined, TrophyOutlined, RocketOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Title, Paragraph } = Typography;

const achievements = [
  {
    icon: <TrophyOutlined style={{ fontSize: '48px', color: '#faad14' }} />,
    title: 'Best Developer Award 2023',
    description: 'Recognized as the top performing developer for outstanding contributions and technical excellence.',
    year: '2023',
  },
  {
    icon: <RocketOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
    title: 'Innovation Award',
    description: 'Awarded for developing an innovative solution that increased company revenue by 150%.',
    year: '2023',
  },
  {
    icon: <StarOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
    title: 'Hackathon Winner',
    description: 'First place in Global Tech Hackathon with an AI-powered productivity tool.',
    year: '2022',
  },
  {
    icon: <ThunderboltOutlined style={{ fontSize: '48px', color: '#eb2f96' }} />,
    title: 'Open Source Contributor',
    description: 'Contributed to 50+ open source projects with 1000+ GitHub stars earned.',
    year: 'Ongoing',
  },
  {
    icon: <TrophyOutlined style={{ fontSize: '48px', color: '#722ed1' }} />,
    title: 'Speaker at Tech Conference',
    description: 'Keynote speaker at ReactConf 2023, presenting on modern web development practices.',
    year: '2023',
  },
  {
    icon: <StarOutlined style={{ fontSize: '48px', color: '#13c2c2' }} />,
    title: 'Published Technical Author',
    description: 'Published articles reaching 100K+ readers on leading tech platforms.',
    year: '2022-2024',
  },
];

function Achievements() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.5,
          opacity: 0,
          duration: 0.6,
          delay: (index % 3) * 0.15,
          ease: 'back.out(1.7)',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ padding: '80px 50px', background: '#f0f2f5' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>
        <StarOutlined /> Achievements & Awards
      </Title>

      <Row gutter={[32, 32]}>
        {achievements.map((achievement, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              ref={(el) => (cardsRef.current[index] = el)}
              hoverable
              style={{ height: '100%', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              bordered={false}
            >
              <div style={{ marginBottom: '20px' }}>{achievement.icon}</div>
              <Title level={4}>{achievement.title}</Title>
              <Paragraph style={{ color: '#666', marginBottom: '10px' }}>{achievement.year}</Paragraph>
              <Paragraph>{achievement.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Achievements;