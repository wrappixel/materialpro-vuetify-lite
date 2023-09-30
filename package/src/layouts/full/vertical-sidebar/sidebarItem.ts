import {
  BorderAllIcon,
  AlertCircleIcon,
  CircleDotIcon,
  BoxMultiple1Icon,
  AdjustmentsHorizontalIcon,
  LayoutDashboardIcon

} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Home' },
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    to: "/",
  },
  { header: 'Utilities' },
  {
    title: "Alert",
    icon: AlertCircleIcon,
    to: "/ui/alerts",
  },
  {
    title: "Button",
    icon: CircleDotIcon,
    to: "/ui/buttons",
  },
  {
    title: "Cards",
    icon: BoxMultiple1Icon,
    to: "/ui/cards",
  },
  {
    title: "Curousel",
    icon: AdjustmentsHorizontalIcon,
    to: "/ui/curousel",
  },
  {
    title: "Tables",
    icon: BorderAllIcon,
    to: "/ui/tables",
  }

];

export default sidebarItem;
