import Layout from '../components/Layout';
import { InlineLink } from '../components/InlineLink';
import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';

export default function About() {
  return (
    <Layout title="About | T. James Perry">
      <div className="flex items-center space-x-3">
        <Title size="xl">Welcome!</Title>
        <span className="text-3xl">👋</span>
      </div>
      <Paragraph size="md">
        This is my personal site. I have few snippets of information below; allowing you to get to know me a bit better.
        You can see more of what I have been up to recently by exploring this site through the menu.
      </Paragraph>
      <Title size="lg">Career</Title>
      <Paragraph size="md">
        I have been a contributor and driver of critical backend systems in the AI, micro-mobility, trucking, and
        customer-service industries. I take pride in my attention to detail, lucid and efficient communication style,
        and principled curiosity; which have allowed me to deliver value in all of these industries.
      </Paragraph>
      <Title size="md">Engineering</Title>
      <Paragraph size="md">
        While viewing a painting, we often assume it was produced by one artist; it is a signature of the individual.
        Programmers have been said to think of themselves as artists. If we are artists, we are all attemping to leave
        our own signature on a shared canvas, while creating business value. This creates problems for the engineer that
        the lone artist does not experience. How can a team of engineers consistently create business value while mixing
        mediums and styles on a shared and growing canvas? This is a scalability problem and the primary challenge every
        engineering department faces, and the solution may be found in the daily habits and standards of the individuals
        building these systems. Scalable teams optimize for fast and iterative development, thinking like an owner,
        clear communication, and enforcing SOLID design principles. Scalable managment enforces processes that create
        space for and reward these habits. When an engineering team fails to build effective systems it is first felt
        when a business is no longer able to iterate because of problems of its own making.
      </Paragraph>
      <Title size="lg">Personal</Title>
      <Paragraph size="md">
        At the time of writing this, I intend to use this website as a depository for content I produce. I will post
        photography, articles I author, and maybe a video or two. Visit the <InlineLink href="/">Home</InlineLink> page
        to explore what I have shared.
      </Paragraph>
    </Layout>
  );
}
