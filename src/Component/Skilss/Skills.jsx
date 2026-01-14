// src/components/Skills.jsx
import { Typography, Card, Row, Col, Progress } from 'antd';
import { CodeOutlined } from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Title } = Typography;

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Vue.js', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'MySQL', level: 85 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 75 },
      { name: 'CI/CD', level: 85 },
    ],
  },
];

function Skills() {
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
          rotateY: 90,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power2.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ padding: '80px 50px', background: '#f0f2f5' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>
        <CodeOutlined /> Skills
      </Title>

      <Row gutter={[32, 32]}>
        {skillCategories.map((category, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              ref={(el) => (cardsRef.current[index] = el)}
              title={category.title}
              bordered={false}
              style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            >
              {category.skills.map((skill, i) => (
                <div key={i} style={{ marginBottom: '20px' }}>
                  <div style={{ marginBottom: '5px' }}>{skill.name}</div>
                  <Progress
                    percent={skill.level}
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                  />
                </div>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Skills;