// src/components/Projects.jsx
import { Typography, Card, Row, Col, Tag, Button } from 'antd';
import { ProjectOutlined, GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Title, Paragraph } = Typography;

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
    role: 'Lead Developer',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    outcome: 'Increased sales by 40% and reduced checkout time by 60%',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'AI-Powered Task Manager',
    description: 'Smart task management app with AI-driven prioritization and deadline predictions.',
    role: 'Full Stack Developer',
    tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
    outcome: 'Used by 10K+ users, 4.8/5 rating on app stores',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Real-Time Collaboration Tool',
    description: 'WebSocket-based collaboration platform for teams with document editing and video chat.',
    role: 'Backend Lead',
    tech: ['Node.js', 'Socket.io', 'WebRTC', 'Redis', 'Docker'],
    outcome: 'Handles 50K concurrent users with 99.9% uptime',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with workout plans and nutrition guidance.',
    role: 'Mobile Developer',
    tech: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
    outcome: '100K+ downloads, featured on App Store',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

function Projects() {
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
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: (index % 2) * 0.2,
          ease: 'back.out(1.7)',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ padding: '80px 50px', background: '#fff' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>
        <ProjectOutlined /> Projects
      </Title>

      <Row gutter={[32, 32]}>
        {projects.map((project, index) => (
          <Col xs={24} md={12} key={index}>
            <Card
              ref={(el) => (cardsRef.current[index] = el)}
              hoverable
              style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              actions={[
                <Button type="link" icon={<GithubOutlined />} href={project.github} target="_blank">
                  Code
                </Button>,
                <Button type="link" icon={<LinkOutlined />} href={project.demo} target="_blank">
                  Demo
                </Button>,
              ]}
            >
              <Title level={4}>{project.title}</Title>
              <Paragraph><strong>Role:</strong> {project.role}</Paragraph>
              <Paragraph>{project.description}</Paragraph>
              <div style={{ marginBottom: '10px' }}>
                {project.tech.map((tech, i) => (
                  <Tag color="blue" key={i} style={{ marginBottom: '5px' }}>
                    {tech}
                  </Tag>
                ))}
              </div>
              <Paragraph strong style={{ color: '#52c41a' }}>
                📊 Outcome: {project.outcome}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projects;