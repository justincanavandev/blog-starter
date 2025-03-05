import Link from "next/link";
import { ComponentProps } from "react";

export const H2 = ({
  children,
  ...rest
}: { children: string } & ComponentProps<"h2">) => {
  return <h2 {...rest} className="text-5xl mb-4">{children}</h2>;
};

export const P = ({
  children,
  ...rest
}: { children: string } & ComponentProps<"p">) => {
  return (
    <p {...rest} className="text-md">
      {children}
    </p>
  );
};

export const A = ({
  children,
  href,
  ...rest
}: {
  children: string;
  href: string;
} & ComponentProps<"a">) => {
  return (
    <Link {...rest} href={href}>
      {children}
    </Link>
  );
};
