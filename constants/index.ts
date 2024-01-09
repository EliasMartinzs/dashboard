import { IoHomeOutline } from "react-icons/io5";
import { BsInfoSquare } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";
import { KanbanSquare } from "lucide-react";
import {
  MdRestaurant,
  MdDirectionsBus,
  MdHome,
  MdShoppingCart,
  MdSchool,
  MdFitnessCenter,
  MdLocalHospital,
  MdAttachMoney,
  MdMusicNote,
  MdLocalMovies,
  MdPets,
  MdLocalGroceryStore,
  MdFlight,
  MdDirectionsCar,
  MdSportsSoccer,
  MdWork,
  MdLaptop,
  MdLibraryBooks,
  MdLocalCafe,
  MdEvent,
  MdWc,
  MdLocalLaundryService,
  MdWifi,
  MdBeachAccess,
  MdNaturePeople,
} from "react-icons/md";
import { StatusProps } from "@/types";

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

const expenseCategories: StatusProps[] = [
  { id: 1, value: "Alimentação", label: MdRestaurant },
  { id: 2, value: "Transporte", label: MdDirectionsBus },
  { id: 3, value: "Moradia", label: MdHome },
  { id: 4, value: "Compras", label: MdShoppingCart },
  { id: 5, value: "Educação", label: MdSchool },
  { id: 6, value: "Academia", label: MdFitnessCenter },
  { id: 7, value: "Saúde", label: MdLocalHospital },
  { id: 8, value: "Finanças", label: MdAttachMoney },
  { id: 9, value: "Entretenimento", label: MdMusicNote },
  { id: 10, value: "Filmes", label: MdLocalMovies },
  { id: 11, value: "Animais de Estimação", label: MdPets },
  { id: 12, value: "Supermercado", label: MdLocalGroceryStore },
  { id: 13, value: "Viagem", label: MdFlight },
  { id: 14, value: "Carro", label: MdDirectionsCar },
  { id: 15, value: "Esportes", label: MdSportsSoccer },
  { id: 16, value: "Trabalho", label: MdWork },
  { id: 17, value: "Tecnologia", label: MdLaptop },
  { id: 18, value: "Livros", label: MdLibraryBooks },
  { id: 19, value: "Café", label: MdLocalCafe },
  { id: 20, value: "Eventos", label: MdEvent },
  { id: 21, value: "Banheiro", label: MdWc },
  { id: 22, value: "Lavanderia", label: MdLocalLaundryService },
  { id: 23, value: "Internet", label: MdWifi },
  { id: 24, value: "Praia", label: MdBeachAccess },
  { id: 25, value: "Natureza", label: MdNaturePeople },
];

export { linksHeaderLanding, expenseCategories };
