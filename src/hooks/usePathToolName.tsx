import { usePathname } from "next/navigation";

export const usePathToolName = () => {
  const path = usePathname();
  const pathName = path.substring(1, path.length);
  const toolName = pathName.substring(0, pathName.indexOf("/"));
  return toolName;
};

export default usePathToolName;