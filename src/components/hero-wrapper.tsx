import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  classes?: {
    root?: string;
    inner?: string;
  };
};
export const HeroWrapper = ({
  className,
  children,
  classes,
  ...rest
}: Props) => {
  return (
    <header
      className={cn(
        "h-screen bg-no-repeat bg-cover -mt-[78px]",
        className,
        classes?.root
      )}
      {...rest}
    >
      <div
        className={cn(
          "h-full w-full bg-black/50 flex flex-col items-center",
          classes?.inner
        )}
      >
        {children}
      </div>
    </header>
  );
};
