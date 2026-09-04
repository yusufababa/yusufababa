import type { CaseStudy } from "./types";

export const simkashCaseStudy: CaseStudy = {
  hero: {
    tagline:
      "A single app for Nigeria's mobile money, bill payments, and telecom access — plus the multi-tier agent network that powers it.",
    role: "Sole UI/UX Designer",
    duration: "6 months",
    platforms: ["Web", "Mobile", "Admin dashboards"],
    liveLinks: [{ label: "Visit simkash.com", url: "https://simkash.com" }],
    image: {
      src: "/simkash/Cover.png",
      caption: "Simkash wallet home screen",
      alt: "Simkash wallet home screen shown on a phone",
    },
  },
  problem: {
    eyebrow: "The problem",
    heading: "Financial access in Nigeria is fragmented across too many apps",
    paragraphs: [
      "Millions of Nigerians juggle a different app for every basic transaction — one for mobile money, another for airtime and data, a bank app for transfers, and a separate agent or POS visit for SIM registration or bill payments. Every switch adds friction, and for the agents reselling these services on the ground, there was often no digital tool at all — just cash, paper records, and word of mouth.",
      "On the distribution side, Simkash's business model depends on a multi-tier network of partners, agents, and coordinators reselling SIMs, airtime, and data nationwide. Without a shared system, that network had no visibility into commissions, inventory, or performance — every tier was operating blind.",
    ],
  },
  solution: {
    eyebrow: "The solution",
    heading: "One app for the wallet, the bills, and the network behind them",
    paragraphs: [
      "I designed Simkash as a single fintech-telecom super-app: a wallet for sending and receiving money, one flow for every kind of bill payment, and self-serve eSIM and virtual number purchase — all sitting on top of a role-based system that gives every tier of the distribution network, from a street-level agent to a state coordinator, a dashboard built for exactly what that role needs to see.",
    ],
    pillars: [
      "Mobile money & wallet",
      "Bill payments & data",
      "eSIM & virtual numbers",
      "Multi-tier agent network",
    ],
  },
  metrics: [
    { label: "Total users", value: "10K+" },
    { label: "Monthly active users", value: "8K+" },
    { label: "Transactions processed", value: "100K+" },
    { label: "Total volume", value: "₦100M+" },
  ],
  process: [
    {
      step: "Research",
      description:
        "Mapped existing user and agent workflows and pain points across mobile money, bill pay, and SIM resale.",
    },
    {
      step: "Wireframes",
      description:
        "Structured 10+ user flows and 7 role-based dashboards before touching visual design.",
    },
    {
      step: "Hi-fi design",
      description:
        "Built out the full design system and 250+ screens across web, mobile, and admin.",
    },
    {
      step: "Testing & iteration",
      description:
        "Refined flows and dashboard hierarchy across multiple rounds as the agent network grew.",
    },
  ],
  personas: [
    {
      name: "Amina Bello",
      initials: "AB",
      age: 27,
      role: "Marketing Executive",
      location: "Lagos, Nigeria",
      goal: "Pay bills, buy data, and send money to family without switching between four different apps.",
      frustration:
        "Juggles a bank app, two airtime apps, and a separate service for electricity bills — and still can't see it all in one place.",
      quote: "If one app can actually do all of it, I'll never open the others again.",
    },
    {
      name: "Ibrahim Sule",
      initials: "IS",
      age: 34,
      role: "Simkash Partner / Agent",
      location: "Kano, Nigeria",
      goal: "Track commissions, manage SIM inventory, and grow his customer base from his phone, without needing a laptop.",
      frustration:
        "Has no visibility into his standing in the agent network until a manual reconciliation at month-end.",
      quote: "I need to see my numbers the same day I make the sale, not weeks later.",
    },
  ],
  flow: {
    title: "Send money",
    image: {
      src: null,
      caption: "Send money — user flow map",
      alt: "Send money user flow diagram",
    },
  },
  ecosystem: [
    { label: "End User", description: "Wallet, bills, eSIM, virtual numbers" },
    { label: "Partner / Agent", description: "SIM inventory, device dashboard" },
    { label: "Simkash Pro", description: "Upgraded agent, commission dashboard" },
    { label: "State Coordinator", description: "Regional oversight, partner management" },
    {
      label: "Regional Manager",
      description: "Multi-state oversight, coordinator analytics",
    },
    { label: "Operational Manager", description: "Day-to-day operations dashboard" },
    { label: "General Manager", description: "Executive dashboard, commissions" },
    { label: "Investor Panel", description: "Investment tracking, profit withdrawal" },
    { label: "Super Admin", description: "Full platform, user & transaction management" },
  ],
  gallery: [
    {
      src: "/simkash/home-dashboard.png",
      caption: "Home dashboard",
      alt: "Simkash home dashboard screen",
    },
    {
      src: "/simkash/send-money.png",
      caption: "Simkash to Simkash transfer",
      alt: "Simkash to Simkash send money screen",
    },
    {
      src: "/simkash/buy-sim.png",
      caption: "Buy SIM",
      alt: "Simkash buy SIM flow screen",
    },
    {
      src: "/simkash/bill-payment.png",
      caption: "Electricity bill payment",
      alt: "Simkash electricity bill payment screen",
    },
    {
      src: "/simkash/airtime-to-cash.png",
      caption: "Airtime2Cash",
      alt: "Simkash airtime to cash conversion screen",
    },
  ],
  closing: {
    heading: "Designing for one user and nine roles at once",
    body: "The hardest part of Simkash wasn't any single screen — it was making sure the same design system could serve a first-time wallet user and a state coordinator managing hundreds of agents, without either one feeling like an afterthought. Six months in, that system is live, processing real transactions for a growing network across Nigeria.",
  },
};
