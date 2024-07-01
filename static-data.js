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
    link: "/",
  },
  {
    icon: ProjectsSvg,
    heading: "Projects",
    link: "/",
  },
  {
    icon: TemplatesSvg,
    heading: "Templates",
    link: "/",
  },
  {
    icon: AgentsSvg,
    heading: "Agents",
    link: "/",
  },
  {
    icon: ToolsSvg,
    heading: "Tools",
    link: "/",
  },
  {
    icon: DeliverablesSvg,
    heading: "Deliverables",
    link: "/",
  },
  {
    icon: DataSourcesSvg,
    heading: "Data Sources",
    link: "/",
  },
  {
    icon: UsageSvg,
    heading: "Usage",
    link: "/",
  },
  {
    icon: BillingSvg,
    heading: "Billing",
    link: "/",
  },
];

const sidebarFooterLinks = [
  {
    icon: HelpSvg,
    heading: "Help",
    link: "/",
  },
  {
    icon: SettingsSvg,
    heading: "Settings",
    link: "/",
  },
  {
    icon: CreditsSvg,
    heading: "Credits 3,000/3,000",
    link: "/",
  },
];

export { sidebarLinks, sidebarFooterLinks };
