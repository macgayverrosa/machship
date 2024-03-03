import { toolConfig } from "@/config/tools";

interface GetElementProps {
  name: string,
}

export const useGetElement = ({name}:GetElementProps) => {
  return toolConfig.find((element) => {
    return element.name === name;
  });
};

export default useGetElement;