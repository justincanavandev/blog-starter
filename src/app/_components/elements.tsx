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
    <p {...rest} className="text-md my-2 first:mt-0 last:mb-0">
      {children}
    </p>
  );
};

export const A = ({
  children,
  href,
  className,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className">) => {
  return (
    <Link 
      className={`text-blue-600 underline ${className ?? ""}`} 
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};
