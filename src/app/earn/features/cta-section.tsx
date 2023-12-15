import { Button } from "@/components/ui/button";

type Props = {};
export const CTASection = (props: Props) => {
  return (
    <div className=" py-14 flex flex-col items-center">
      <p className="text-black text-2xl font-medium">Click to register</p>
      <Button className="rounded-lg mt-4">Register</Button>
    </div>
  );
};
