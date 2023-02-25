import Layout from '../components/Layout';
import { Title } from '../components/Title';
import { Paragraph } from '../components/Paragraph';

import Image from 'next/image';
import james from '../public/static/james.jpg';

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
      <Title size="lg">About</Title>
      <div className="flex flex-col items-center sm:block">
        <Image className="float-right mx-6 mt-2 mb-6 shadow-md shadow-zinc-900" src={james} alt="James" quality={100} width={310} height={200} placeholder="blur" />
        <Paragraph size="md">
          My lovely wife, our children, and I reside in Wisconsin, where we enjoy our many seasons and a community of friends and family that we have built over the years. Apart from my fatherly duties, I stay busy with a career in software engineering, being a generally curious person, and finding the proper balance between being thoughtful and not taking myself too seriously. I hope to use this website to rub my gifts together and create something of substance for your and my benefit.
        </Paragraph>
      </div>
      <Title size="lg">Career</Title>
      <Paragraph size="md">
        I have been a contributor and driver of critical backend systems in the AI, micro-mobility, trucking, and customer-service industries. I take pride in my attention to detail, lucid and efficient communication style, and principled curiosity; which have allowed me to deliver value in all of these industries.
      </Paragraph>
      <Title size="md">Thoughts on Engineering</Title>
      <Paragraph size="md">
        While viewing a painting, we often assume it was produced by one artist; it is a signature of the individual.
        From time-to-time, programmers, present themselves as lone artists. Their canvas is ones-and-zeros and logic itself, abstracted as programming languages. Their brush is their mind and ego flowing into each fingertip, carving out each module with refined taste. Thankfully, people animated by this caricature, tend not to be valued by effective engineering teams, for modern software engineering is a social exercise. High performing teams hire for the engineers who can use their intelligence to contribute to a team in a scalable manner. Scalable behavior in an engineering context equates being an owner, efficient communicaton, iterative development, refining and following shared standards and processes, and applying SOLID design principles.
      </Paragraph>
    </Layout>
  );
}
