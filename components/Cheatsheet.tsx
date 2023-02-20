import { ReactNode } from 'react';
import { Title } from './Title';
import { Terminal } from './Terminal';
import { Code } from './Code';
import { Editor, Language } from './Editor';
import { CheatsheetTag, Tag } from './CheatsheetTag';

export type Props = Cheatsheet & {
  filters: Tag[] | null;
  onClick: (tag: Tag) => void;
};

export const Cheatsheet = (props: Props) => {
  const { title, tags, description, answer, filters, onClick } = props;

  let answerDisplay: ReactNode;
  switch (answer.kind) {
    case 'terminal':
      answerDisplay = <Terminal>{answer.prompt}</Terminal>;
      break;
    case 'code':
      answerDisplay = <Code>{answer.text}</Code>;
      break;
    case 'editor':
      answerDisplay = <Editor text={answer.text} language={answer.language} />;
      break;
  }

  if (filters && !isFilteredFor(tags, filters)) {
    return;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <Title size="xs" compact>
          {title}
        </Title>
        <div className="flex space-x-3">
          {tags.map((tag) => {
            const selected = filters?.includes(tag);
            return <CheatsheetTag key={tag} tag={tag} selected={selected} onClick={onClick} />;
          })}
        </div>
      </div>
      {description}
      {answerDisplay}
    </div>
  );
};

type Cheatsheet = {
  id: string;
  title: string;
  description?: string;
  answer: Code | Editor | Terminal;
  tags: Tag[];
};

type Terminal = {
  kind: 'terminal';
  prompt: string;
};

type Code = {
  kind: 'code';
  text: string;
};

type Editor = {
  kind: 'editor';
  language: Language;
  text: string;
};

const isFilteredFor = (has: Tag[], needs: Tag[]) => {
  const set = new Set(has);
  return needs.every((tag) => set.has(tag));
};
