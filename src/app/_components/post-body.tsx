import { MarkdownParser } from "./markdown-parser";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4">
      <MarkdownParser>{content}</MarkdownParser>
    </div>
  );
}
