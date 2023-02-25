import hljs from 'highlight.js';

type Props = {
  text: string;
  language: string;
};

export const Editor = ({ language, text }: Props) => {
  const html = { __html: hljs.highlight(text, { language: language }).value };

  return (
    <pre className="text-sm flex items-center rounded-md bg-slate-900 p-2 text-neutral-300 overflow-x-scroll">
      <code className="mr-4">
        {text.trim().split('\n').map((_, index) => (
          <div key={index} className="text-slate-400">
            {index}
          </div>
        ))}
      </code>
      <code dangerouslySetInnerHTML={html} />
    </pre>
  );
};
