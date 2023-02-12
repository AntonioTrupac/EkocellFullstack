import classnames from "classnames";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const LinkButton = ({
  children,
  className,
  href,
  ...props
}: LinkButtonProps) => {
  return (
    <a
      className={classnames(
        "px-4 py-2 rounded-md text-black bg-transparent border-tertiary border-2 hover:bg-tertiary hover:text-white hover:text-opacity-100 transition-all duration-300",
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkButton;
