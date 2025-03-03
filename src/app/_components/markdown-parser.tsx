import Markdown from "markdown-to-jsx";
import { H2, P } from "./elements";

export const MarkdownParser = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  const props = {
    children,
    className: className ?? "",
  };

  return (
    <Markdown
      options={{
        overrides: {
          h2: {
            component: H2,
            props,
          },
          p: {
            component: P,
            props,
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
};
