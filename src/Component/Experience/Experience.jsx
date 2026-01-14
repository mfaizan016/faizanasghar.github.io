// src/components/Experience.jsx
import { Typography, Timeline, Card } from 'antd';
import { TrophyOutlined, EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Title, Paragraph } = Typography;

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Corp Inc.',
    location: 'San Francisco, CA',
    period: '2023 - Present',
    responsibilities: [
      'Led a team of 5 developers in building microservices architecture',
      'Reduced application load time by 50% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 70%',
      'Mentored junior developers and conducted code reviews',
    ],
    color: 'blue',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    location: 'New York, NY',
    period: '2021 - 2023',
    responsibilities: [
      'Developed and maintained 10+ client-facing applications',
      'Integrated third-party APIs and payment systems',
      'Collaborated with UX team to improve user experience',
      'Reduced bug reports by 40% through comprehensive testing',
    ],
    color: 'green',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Innovations',
    location: 'Austin, TX',
    period: '2020 - 2021',
    responsibilities: [
      'Built responsive web applications using React and Node.js',
      'Participated in agile development process',
      'Fixed bugs and implemented new features',
      'Wrote unit and integration tests',
    ],
    color: 'purple',
  },
  {
    title: 'Software Engineering Intern',
    company: 'Big Tech Company',
    location: 'Seattle, WA',
    period: '2019 - 2020',
    responsibilities: [
      'Assisted in developing internal tools',
      'Learned best practices in software development',
      'Collaborated with cross-functional teams',
      'Contributed to open-source projects',
    ],
    color: 'orange',
  },
];

function Experience() {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(timelineRef.current, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ padding: '80px 50px', background: '#fff' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>
        <TrophyOutlined /> Experience
      </Title>

      <div ref={timelineRef} style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Timeline>
          {experiences.map((exp, index) => (
            <Timeline.Item key={index} color={exp.color}>
              <Card
                style={{ marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                bordered={false}
              >
                <Title level={4}>{exp.title}</Title>
                <Paragraph strong>{exp.company}</Paragraph>
                <Paragraph>
                  <EnvironmentOutlined /> {exp.location} | <CalendarOutlined /> {exp.period}
                </Paragraph>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </Card>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;