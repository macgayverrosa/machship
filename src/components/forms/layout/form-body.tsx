import { Separator } from "../../ui/separator";

interface FormBodyProps {
  tool: string
  form: any
  act: string
}

const FormBody = ({ tool, form, act }:FormBodyProps) => {
  return (
    <div className="container relative p-0">
      <section>
        <div className="overflow-hidden rounded-[1rem] border bg-background shadow mt-5">
          <div className="space-y-6 p-10 pb-16 md:block">
            <div className="space-y-0.5">
              <h2 className="text-2xl font-bold tracking-tight">
                {act} {tool}
              </h2>
              <p className="text-muted-foreground">
                {act} a {tool} to your business.
              </p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
              <div className="flex-1">
                <div className="space-y-6">
                  {form}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormBody;