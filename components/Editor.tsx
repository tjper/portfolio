import hljs from 'highlight.js';

type Props = {
  text: string;
  language: Language;
};

export const Editor = ({ language, text }: Props) => {
  const html = { __html: hljs.highlight(text, { language: language }).value };

  return (
    <pre className="text-md flex items-center rounded-md bg-slate-900 p-2 text-neutral-300">
      <code className="mr-4">
        {text.split('\n').map((_, index) => (
          <div key={index} className="text-slate-400">
            {index}
          </div>
        ))}
      </code>
      <code dangerouslySetInnerHTML={html} />
    </pre>
  );
};

export type Language = 'go';
