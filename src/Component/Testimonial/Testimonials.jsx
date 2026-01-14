// src/components/Testimonials.jsx
import { Typography, Card, Row, Col, Avatar } from 'antd';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Title, Paragraph } = Typography;

const testimonials = [
  {
    name: 'John Smith',
    position: 'CTO, Tech Corp',
    content: 'An exceptional developer who consistently delivers high-quality work. Their technical expertise and problem-solving skills are outstanding.',
    avatar: 'J',
  },
  {
    name: 'Sarah Johnson',
    position: 'Product Manager, Digital Solutions',
    content: 'One of the best developers I\'ve worked with. Great communication skills and always goes above and beyond to meet deadlines.',
    avatar: 'S',
  },
  {
    name: 'Michael Chen',
    position: 'Senior Engineer, StartUp Innovations',
    content: 'A talented developer with a passion for learning. Their code is clean, well-documented, and maintainable.',
    avatar: 'M',
  },
  {
    name: 'Emily Davis',
    position: 'Team Lead, Big Tech Company',
    content: 'Outstanding work ethic and technical skills. A valuable team member who brings positive energy to every project.',
    avatar: 'E',
  },
];

function Testimonials() {
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
          opacity: 0,
          y: 50,
          rotation: 5,
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
        <TeamOutlined /> Testimonials
      </Title>

      <Row gutter={[32, 32]}>
        {testimonials.map((testimonial, index) => (
          <Col xs={24} md={12} key={index}>
            <Card
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              bordered={false}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <Avatar size={64} icon={<UserOutlined />} style={{ marginRight: '15px', backgroundColor: '#1890ff' }}>
                  {testimonial.avatar}
                </Avatar>
                <div>
                  <Title level={5} style={{ margin: 0 }}>{testimonial.name}</Title>
                  <Paragraph style={{ margin: 0, color: '#666' }}>{testimonial.position}</Paragraph>
                </div>
              </div>
              <Paragraph style={{ fontSize: '16px', fontStyle: 'italic' }}>
                "{testimonial.content}"
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Testimonials;