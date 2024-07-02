import {
  AgentsSvg,
  BillingSvg,
  CreditsSvg,
  DashboardSvg,
  DataSourcesSvg,
  DeliverablesSvg,
  HelpSvg,
  ProjectsSvg,
  SettingsSvg,
  TemplatesSvg,
  ToolsSvg,
  UsageSvg,
} from "./static-svgs-urls";

const sidebarLinks = [
  {
    icon: DashboardSvg,
    heading: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: ProjectsSvg,
    heading: "Projects",
    link: "/projects",
  },
  {
    icon: TemplatesSvg,
    heading: "Templates",
    link: "/templates",
  },
  {
    icon: AgentsSvg,
    heading: "Agents",
    link: "/agents",
  },
  {
    icon: ToolsSvg,
    heading: "Tools",
    link: "/tools",
  },
  {
    icon: DeliverablesSvg,
    heading: "Deliverables",
    link: "/deliverables",
  },
  {
    icon: DataSourcesSvg,
    heading: "Data Sources",
    link: "/datasource",
  },
  {
    icon: UsageSvg,
    heading: "Usage",
    link: "/usage",
  },
  {
    icon: BillingSvg,
    heading: "Billing",
    link: "/billing",
  },
];

const sidebarFooterLinks = [
  {
    icon: HelpSvg,
    heading: "Help",
    link: "/help",
  },
  {
    icon: SettingsSvg,
    heading: "Settings",
    link: "/settings",
  },
  {
    icon: CreditsSvg,
    heading: "Credits 3,000/3,000",
    link: "/credits",
  },
];

export { sidebarLinks, sidebarFooterLinks };
