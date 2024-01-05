import { IoHomeOutline } from "react-icons/io5";
import { BsInfoSquare } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";
import { KanbanSquare } from "lucide-react";

const linksHeaderLanding = [
  {
    label: "Home",
    href: "/",
    icon: IoHomeOutline,
  },
  {
    label: "Sobre",
    href: "#about",
    icon: BsInfoSquare,
  },
  {
    label: "Features",
    href: "#feature",
    icon: CiStar,
  },
  {
    label: "Contato",
    href: "#contact",
    icon: TiContacts,
  },
];

const linksHeaderDashboard = [
  {
    icon: KanbanSquare,
    href: "/dashboard",
  },
];

export { linksHeaderLanding };
