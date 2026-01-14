// src/components/Blog.jsx
import { Typography, Card, Row, Col, Tag, Button } from 'antd';
import { FileTextOutlined, ReadOutlined, CalendarOutlined, EyeOutlined } from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Title, Paragraph } = Typography;

const articles = [
  {
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes for production-ready applications.',
    date: '2024-01-15',
    readTime: '8 min read',
    views: '2.3K',
    tags: ['Node.js', 'Microservices', 'Docker'],
    link: 'https://medium.com/@yourprofile',
  },
  {
    title: 'React Performance Optimization Techniques',
    excerpt: 'Discover advanced techniques to optimize your React applications, including code splitting, lazy loading, and memoization strategies.',
    date: '2024-01-08',
    readTime: '10 min read',
    views: '3.1K',
    tags: ['React', 'Performance', 'JavaScript'],
    link: 'https://dev.to/yourprofile',
  },
  {
    title: 'Understanding Cloud Architecture Patterns',
    excerpt: 'A comprehensive guide to common cloud architecture patterns and best practices for building resilient cloud-native applications.',
    date: '2023-12-20',
    readTime: '12 min read',
    views: '1.8K',
    tags: ['AWS', 'Cloud', 'Architecture'],
    link: 'https://medium.com/@yourprofile',
  },
  {
    title: 'Modern CSS: Grid and Flexbox Mastery',
    excerpt: 'Master modern CSS layout techniques with practical examples and real-world use cases for responsive web design.',
    date: '2023-12-10',
    readTime: '6 min read',
    views: '4.2K',
    tags: ['CSS', 'Frontend', 'Web Design'],
    link: 'https://dev.to/yourprofile',
  },
];

function Blog() {
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
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ padding: '80px 50px', background: '#fff' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>
        <FileTextOutlined /> Blog & Articles
      </Title>

      <Row gutter={[32, 32]}>
        {articles.map((article, index) => (
          <Col xs={24} md={12} key={index}>
            <Card
              ref={(el) => (cardsRef.current[index] = el)}
              hoverable
              style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              actions={[
                <Button type="link" icon={<ReadOutlined />} href={article.link} target="_blank">
                  Read Article
                </Button>,
              ]}
            >
              <Title level={4}>{article.title}</Title>
              <div style={{ marginBottom: '15px', color: '#666' }}>
                <CalendarOutlined /> {article.date} | <ReadOutlined /> {article.readTime} | <EyeOutlined /> {article.views}
              </div>
              <Paragraph>{article.excerpt}</Paragraph>
              <div>
                {article.tags.map((tag, i) => (
                  <Tag color="geekblue" key={i}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Blog;