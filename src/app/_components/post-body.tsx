import { MarkdownParser } from "./markdown-parser";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <MarkdownParser>{content}</MarkdownParser>
    </div>
  );
}
