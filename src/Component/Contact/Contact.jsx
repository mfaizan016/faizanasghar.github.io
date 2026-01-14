// src/components/Contact.jsx
import { Typography, Form, Input, Button, Card, Row, Col, Space } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, LinkedinOutlined, GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

function Contact() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(infoRef.current, {
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onFinish = (values) => {
    console.log('Form values:', values);
    // Handle form submission here
  };

  return (
    <div ref={containerRef} style={{ padding: '80px 50px', background: '#fff', minHeight: '100vh' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>
        <MailOutlined /> Get In Touch
      </Title>

      <Row gutter={[48, 48]} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Col xs={24} lg={12}>
          <Card ref={formRef} bordered={false} style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Title level={4}>Send a Message</Title>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input size="large" placeholder="Your Name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input size="large" placeholder="your.email@example.com" />
              </Form.Item>

              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: 'Please enter a subject' }]}
              >
                <Input size="large" placeholder="Subject" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea rows={6} placeholder="Your message..." />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card ref={infoRef} bordered={false} style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', height: '100%' }}>
            <Title level={4}>Contact Information</Title>
            
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Paragraph>
                  <MailOutlined style={{ fontSize: '20px', marginRight: '10px', color: '#1890ff' }} />
                  <strong>Email:</strong> your.email@example.com
                </Paragraph>
                <Paragraph>
                  <PhoneOutlined style={{ fontSize: '20px', marginRight: '10px', color: '#1890ff' }} />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </Paragraph>
                <Paragraph>
                  <EnvironmentOutlined style={{ fontSize: '20px', marginRight: '10px', color: '#1890ff' }} />
                  <strong>Location:</strong> San Francisco, CA, USA
                </Paragraph>
              </div>

              <div>
                <Title level={5}>Connect With Me</Title>
                <Space size="large">
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <LinkedinOutlined style={{ fontSize: '32px', color: '#0077b5' }} />
                  </a>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <GithubOutlined style={{ fontSize: '32px', color: '#333' }} />
                  </a>
                  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <TwitterOutlined style={{ fontSize: '32px', color: '#1da1f2' }} />
                  </a>
                </Space>
              </div>

              <div>
                <Title level={5}>LinkedIn Profile</Title>
                <Button 
                  type="primary" 
                  icon={<LinkedinOutlined />} 
                  size="large"
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                >
                  View LinkedIn Profile
                </Button>
              </div>

              <div style={{ marginTop: '30px', padding: '20px', background: '#f0f2f5', borderRadius: '8px' }}>
                <Paragraph strong>Available for:</Paragraph>
                <ul style={{ marginBottom: 0 }}>
                  <li>Freelance Projects</li>
                  <li>Consulting Opportunities</li>
                  <li>Speaking Engagements</li>
                  <li>Collaboration</li>
                </ul>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;