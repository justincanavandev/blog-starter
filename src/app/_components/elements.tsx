export const H2 = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return <h2 className={`text-5xl ${className}`}>{children}</h2>;
};

export const P = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return <p className={`text-md ${className}`}>{children}</p>;
};
