import { z } from 'zod';

const contentSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export type Content = z.infer<typeof contentSchema>;

type PostArgs = {
  content: Content;
};

export const Post = ({ content }: PostArgs) => {
  return (
    <div>
      <h4>{content.title}</h4>
      <p>{content.content}</p>
    </div>
  );
};
