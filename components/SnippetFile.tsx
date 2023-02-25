import { File } from '../lib/gist';
import { Editor } from './Editor';

type Props = File;

export const SnippetFile = (props: Props) => <Editor text={props.content} language={props.language} />;
