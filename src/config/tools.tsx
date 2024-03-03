import routes from "./routes"
import { Home, Contact, Users, Settings } from "lucide-react"

export const toolConfig = [
  {
    name: "home",
    href: routes.HOME,
    icon: <Home className="h-7 w-7" />,
  },  
  // {
  //   name: "employees",
  //   href: routes.EMPLOYEES,
  //   icon: <Contact className="h-7 w-7" />,
  // },
  // {
  //   name: "services",
  //   href: routes.SERVICES,
  //   icon: <Settings className="h-7 w-7" />,
  // },
  // {
  //   name: "clients",
  //   href: routes.CLIENTS,
  //   icon: <Users className="h-7 w-7" />,
  // },     
  {
    name: "devs",
    href: routes.DEVS,
    icon: <Users className="h-7 w-7" />,
  }, 

]