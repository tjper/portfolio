import Layout from '../components/Layout';
import { Posts } from '../components/Posts';
import { Content } from '../components/Post';

type Props = {
  contents: Content[]
}

export default function IndexPage({ contents }: Props) {
  return (
    <Layout title="Timeline | T James Perry" contents={contents}>
      <div className='m-auto w-4/6 flex flex-col'>
        <Posts contents={contents} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const contents = [
    { id: 1, title: 'Weekend in Door County' },
    { id: 2, title: 'Error handling in Golang' },
  ];
  return {
    props: {
      contents: contents,
    }
  }
}
