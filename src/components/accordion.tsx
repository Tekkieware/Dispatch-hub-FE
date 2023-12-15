"use client";
import {
  Children,
  type PropsWithChildren,
  createContext,
  useContext,
  cloneElement,
  useState,
  type HTMLAttributes,
  ReactNode,
  isValidElement,
} from "react";

type ContextType = {
  active: string | null;
  setActive: (value: string | null) => void;
};
const AccordionContext = createContext<ContextType>({
  active: null,
  setActive: (value) => {},
});

export const useAccordion = () => useContext(AccordionContext);

export const Accordion = ({ children }: PropsWithChildren) => {
  const [active, setActive] = useState<string | null>(null);

  const mappedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        id: `accordion-item-${index}`,
        ...child.props,
      });
    }
    return null;
  });
  return (
    <AccordionContext.Provider value={{ active, setActive }}>
      {mappedChildren}
    </AccordionContext.Provider>
  );
};

type AccordionItemProps = Omit<HTMLAttributes<HTMLDivElement>, "content"> & {
  trigger: ReactNode;
  content: ReactNode;
};

export const AccordionItem = ({
  content,
  trigger,
  className,
  ...rest
}: AccordionItemProps) => {
  const id = `accordion-item-${rest["id"]}`;

  const { active, setActive } = useAccordion();

  const isOpen = active === id;

  return (
    <div className={className} {...rest}>
      <div className="" onClick={() => setActive(isOpen ? null : id)}>
        {trigger}
      </div>

      {isOpen ? content : null}
    </div>
  );
};
