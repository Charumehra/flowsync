import {
  Bot,
  BarChart3,
  ShieldCheck,
  Workflow,
  Clock3,
  Users,
} from "lucide-react";

export const features = [
  {
    title: "AI Automation",
    description:
      "Automate repetitive workflows with intelligent AI.",
    icon: <Bot size={34} />,
  },

  {
    title: "Analytics",
    description:
      "Track productivity using real-time dashboards.",
    icon: <BarChart3 size={34} />,
  },

  {
    title: "Enterprise Security",
    description:
      "Protect business data with enterprise-grade security.",
    icon: <ShieldCheck size={34} />,
  },

  {
    title: "Workflow Builder",
    description:
      "Design custom workflows without writing code.",
    icon: <Workflow size={34} />,
  },

  {
    title: "Time Tracking",
    description:
      "Monitor productivity across your entire organization.",
    icon: <Clock3 size={34} />,
  },

  {
    title: "Team Collaboration",
    description:
      "Bring everyone together with shared workspaces.",
    icon: <Users size={34} />,
  },
];