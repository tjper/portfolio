import { Content, Post } from './Post';

type Props = {
  contents: Content[];
};

export const Posts = ({ contents }: Props) => {
  return (
    <ul className="flex flex-col space-y-20">
      {contents.map((content) => (
        <li key={content.id}>
          <Post content={content} />
        </li>
      ))}
    </ul>
  );
};
