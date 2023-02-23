import Layout from '../components/Layout';
import { Posts } from '../components/Posts';
import { Content } from '../components/Post';

type Props = {
  contents: Content[];
};

export default function IndexPage({ contents }: Props) {
  return (
    <Layout title="Timeline | T James Perry" submenu={contents}>
      <Posts contents={contents} />
    </Layout>
  );
}

export async function getStaticProps() {
  const contents = [
    { id: 1, title: 'Weekend in Door County', content: loremIpsum },
    { id: 2, title: 'Error handling in Golang', content: loremIpsum },
    { id: 3, title: 'How THIS Neovim habit makes you a better developer.', content: loremIpsum },
    { id: 4, title: 'The biggest lie about programming? REACTING to tech twitter', content: loremIpsum },
    { id: 5, title: 'Is this Really Programming?', content: loremIpsum },
    {
      id: 6,
      title: 'Go is faster than Rust??! Go vs Rust vs TypeScript Servers (as a scientist)',
      content: loremIpsum,
    },
    { id: 7, title: 'Error handling 0 to LSP: Neovim TC from Scratchn Golang', content: loremIpsum },
    { id: 8, title: '1,606,240% FASTER algorithm', content: loremIpsum },
    { id: 9, title: 'Weekend in Door County', content: loremIpsum },
    { id: 10, title: 'Error handling in Golang', content: loremIpsum },
    { id: 11, title: 'How THIS Neovim habit makes you a better developer.', content: loremIpsum },
    { id: 12, title: 'The biggest lie about programming? REACTING to tech twitter', content: loremIpsum },
    { id: 13, title: 'Is this Really Programming?', content: loremIpsum },
    {
      id: 14,
      title: 'Go is faster than Rust??! Go vs Rust vs TypeScript Servers (as a scientist)',
      content: loremIpsum,
    },
    { id: 15, title: 'Error handling 0 to LSP: Neovim TC from Scratchn Golang', content: loremIpsum },
    { id: 16, title: '1,606,240% FASTER algorithm', content: loremIpsum },
    { id: 17, title: 'Error handling 0 to LSP: Neovim TC from Scratchn Golang', content: loremIpsum },
    { id: 18, title: '1,606,240% FASTER algorithm', content: loremIpsum },
    { id: 19, title: 'Weekend in Door County', content: loremIpsum },
    { id: 20, title: 'Error handling in Golang', content: loremIpsum },
    { id: 21, title: 'How THIS Neovim habit makes you a better developer.', content: loremIpsum },
    { id: 22, title: 'The biggest lie about programming? REACTING to tech twitter', content: loremIpsum },
    { id: 23, title: 'Is this Really Programming?', content: loremIpsum },
    {
      id: 24,
      title: 'Go is faster than Rust??! Go vs Rust vs TypeScript Servers (as a scientist)',
      content: loremIpsum,
    },
    { id: 25, title: 'Error handling 0 to LSP: Neovim TC from Scratchn Golang', content: loremIpsum },
    { id: 26, title: '1,606,240% FASTER algorithm', content: loremIpsum },
    { id: 27, title: 'The biggest lie about programming? REACTING to tech twitter', content: loremIpsum },
    { id: 28, title: 'Is this Really Programming?', content: loremIpsum },
    {
      id: 29,
      title: 'Go is faster than Rust??! Go vs Rust vs TypeScript Servers (as a scientist)',
      content: loremIpsum,
    },
    { id: 30, title: 'Error handling 0 to LSP: Neovim TC from Scratchn Golang', content: loremIpsum },
    { id: 31, title: '1,606,240% FASTER algorithm', content: loremIpsum },
    { id: 32, title: 'The biggest lie about programming? REACTING to tech twitter', content: loremIpsum },
    { id: 33, title: 'Is this Really Programming?', content: loremIpsum },
    {
      id: 34,
      title: 'Go is faster than Rust??! Go vs Rust vs TypeScript Servers (as a scientist)',
      content: loremIpsum,
    },
    { id: 35, title: 'Error handling 0 to LSP: Neovim TC from Scratchn Golang', content: loremIpsum },
    { id: 36, title: '1,606,240% FASTER algorithm', content: loremIpsum },
  ];
  return {
    props: {
      contents: contents,
    },
  };
}

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula, sapien at sagittis scelerisque, justo odio consectetur nibh, id interdum metus risus vel sapien. Curabitur suscipit arcu non enim porta iaculis. Vivamus nunc tortor, eleifend eu ultrices nec, condimentum et lacus. Fusce tellus diam, blandit a aliquam vitae, pretium vel est. Cras hendrerit tellus vel urna gravida accumsan. Mauris nec dignissim justo. Duis congue mauris in mi feugiat ultrices. Vivamus id neque gravida, aliquet quam in, suscipit metus. In faucibus elit in aliquam ornare. Pellentesque non cursus arcu, id molestie nunc. Donec nec cursus ex. Pellentesque mollis ante id interdum ullamcorper. Mauris tempor elit in dolor finibus tincidunt. Sed eu tellus vel odio tincidunt volutpat nec at arcu. In commodo lobortis est vitae ornare. Cras pharetra ac mi eget tempus. Nam tincidunt felis nec dui semper, in vestibulum urna tristique. Fusce pretium nibh dui, at lacinia enim condimentum nec. In pellentesque ultrices quam vitae tincidunt. Nulla ac varius ante. Duis finibus ut sapien nec mattis. Etiam hendrerit urna mauris, eget bibendum felis dignissim et. Ut sodales arcu id nunc consectetur gravida. Duis sed elit id ante luctus venenatis. Etiam eu pellentesque est. Etiam rhoncus non mauris eu ultrices. Sed nec commodo nibh, eget tristique lorem. Integer ante odio, pulvinar sodales placerat tincidunt, tincidunt nec quam. Quisque pellentesque eget diam sed interdum. Integer efficitur vel ante in efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu quam aliquet, blandit ante non, dignissim urna. Suspendisse accumsan, erat at convallis luctus, odio nulla rhoncus nibh, a vestibulum ex eros sed ligula. Nulla blandit nibh eu leo eleifend efficitur. Pellentesque egestas sem eu libero suscipit gravida. Fusce euismod massa tellus, vel dignissim dui dignissim eu. Curabitur neque enim, sodales eu euismod ac, aliquet ac erat. Ut fermentum fermentum rutrum. Duis quis elit vel risus lacinia ultricies. Nullam est metus, tincidunt in sagittis non, vehicula mollis turpis. Donec scelerisque non diam sit amet aliquet. Fusce venenatis orci ac dignissim semper. Phasellus aliquet enim eget metus vestibulum iaculis. Nulla nulla orci, rhoncus at nibh facilisis, lacinia varius mi. Curabitur vitae lacus vitae libero luctus dapibus ut sit amet magna. Nullam ac semper neque, et iaculis felis. Cras magna tortor, elementum a tempus id, suscipit in elit. Integer egestas diam nec nisi lobortis, in interdum libero pharetra. Sed pharetra augue ac magna convallis, vel ultricies augue aliquet. Sed sollicitudin, nisi id cursus ullamcorper, tellus diam malesuada sem, quis pharetra nisl nunc quis dolor. Curabitur fringilla dolor vel est rhoncus dapibus. Aenean ut dui quis mi ornare mollis. Suspendisse sed enim maximus, placerat dolor vel, pulvinar elit. Maecenas aliquam eleifend mollis. Phasellus nec orci nec nulla imperdiet porttitor quis ut magna. Fusce ornare consectetur magna eget congue. Etiam tempor dui elit, non posuere libero euismod quis. Proin consectetur sodales lorem id fringilla.';
