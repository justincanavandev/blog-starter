import Markdown from "markdown-to-jsx";
import { A, H2, P } from "./elements";

export const MarkdownParser = ({ children }: { children: string }) => {
  const props = {
    children,
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
          a: {
            component: A,
            props,
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
};
