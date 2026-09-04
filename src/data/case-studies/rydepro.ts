import type { CaseStudy, CaseStudyImage } from "./types";

export type RydeProSurface = {
  number: string;
  title: string;
  description: string;
  responsibility: string;
};

export type RydeProFeature = {
  number: string;
  eyebrow: string;
  heading: string;
  summary: string;
  details: string[];
  status: "Shipped" | "Co-designed · Handoff";
  image: CaseStudyImage;
};

export const rydeproCaseStudy: CaseStudy = {
  hero: {
    tagline:
      "Taking a complex mobility ecosystem from MVP 1.0 to launch across rider mobile, web booking, and operations — then shaping what came next for riders and drivers.",
    role: "Product Designer (UI/UX)",
    duration: "12 months",
    platforms: ["Rider app", "Web app", "Admin dashboard"],
    liveLinks: [
      { label: "Website", url: "https://rydepro.com/" },
      { label: "Book a ride", url: "https://bookings.rydepro.com/" },
      {
        label: "iOS app",
        url: "https://apps.apple.com/us/app/rydepro/id6743641159",
      },
      {
        label: "Android app",
        url: "https://play.google.com/store/apps/details?id=com.rydepro",
      },
    ],
    image: {
      src: "/rydepro/cover.png",
      caption: "RydePro product experience",
      alt: "RydePro rider application screens displayed on a laptop",
      layout: "wide",
    },
  },
  problem: {
    eyebrow: "The challenge",
    heading: "A simple booking experience had to coordinate a complex operation",
    paragraphs: [
      "RydePro was never a simple point-A-to-point-B product. A single booking could be on-demand or scheduled, one-way or round-trip, hourly or multi-destination — with different passengers, luggage, vehicles, accessibility needs, payment states, and dispatch requirements attached.",
      "Every choice made by a rider created a downstream job for drivers and operations. The design challenge was to make that complexity feel calm on the surface while preserving the detail, visibility, and control the team needed behind it.",
    ],
  },
  solution: {
    eyebrow: "The approach",
    heading:
      "One connected product model, designed from rider intent to operational action",
    paragraphs: [
      "I designed the experience as one system rather than three disconnected interfaces. Booking information, trip states, driver actions, payments, and operational controls used a shared language across the rider app, web experience, and admin dashboard.",
      "That foundation helped us take MVP 1.0 to launch in eight months, then continue into deeper post-booking and driver workflows during the final phase of my 12-month engagement.",
    ],
    pillars: [
      "Flexible booking",
      "Operational visibility",
      "Driver earnings",
      "Inclusive travel",
      "Shared trip states",
    ],
  },
  metrics: [
    { label: "Product engagement", value: "12 months" },
    { label: "MVP 1.0 to launch", value: "8 months" },
    { label: "Core surfaces shipped", value: "3" },
    { label: "Next-phase tracks", value: "2" },
  ],
  process: [
    {
      step: "Understand the operation",
      description:
        "Mapped booking requirements and the people, decisions, and dependencies behind every ride.",
    },
    {
      step: "Model the system",
      description:
        "Defined shared trip states and connected rider actions to driver, dispatch, and admin outcomes.",
    },
    {
      step: "Design across surfaces",
      description:
        "Built the rider mobile, responsive web, and operations experiences as one coherent product.",
    },
    {
      step: "Ship and evolve",
      description:
        "Worked through handoff and launch, then moved into post-booking and driver-app improvements.",
    },
  ],
  personas: [],
  flow: {
    title: "Booking intent to a fulfilled ride",
    image: {
      src: null,
      caption: "End-to-end RydePro service flow",
      alt: "Placeholder for the RydePro end-to-end service flow",
      placeholderLabel:
        "Create one service blueprint: Rider booking → payment authorization → dispatch → driver assignment → live trip → completion and payout.",
    },
  },
  ecosystem: [],
  gallery: [],
  closing: {
    heading: "Designing the calm surface of a complicated operation",
    body: "RydePro taught me that mobility design is state management at human scale. The best experience is not the one that hides complexity; it is the one that gives each person exactly the right information and action at the right moment. That thinking shaped the MVP we launched and the next phase we designed after it.",
  },
};

export const rydeproSurfaces: RydeProSurface[] = [
  {
    number: "01",
    title: "Rider mobile app",
    description:
      "A focused path from trip intent to a clear reservation, built for immediate and planned travel.",
    responsibility: "Booking · Payment · Trip management",
  },
  {
    number: "02",
    title: "Responsive web booking",
    description:
      "The same booking power translated for desktop and mobile web without losing context or flexibility.",
    responsibility: "Responsive UX · Complex forms · Checkout",
  },
  {
    number: "03",
    title: "Admin and dispatch",
    description:
      "A system-wide operations view for monitoring bookings, drivers, exceptions, and intervention.",
    responsibility: "Live operations · Dispatch · Oversight",
  },
  {
    number: "04",
    title: "Driver and post-booking",
    description:
      "The next-phase experience for accepting work, completing trips, and keeping riders informed.",
    responsibility: "Co-designed · Prepared for handoff",
  },
];

export const rydeproFeatures: RydeProFeature[] = [
  {
    number: "01",
    eyebrow: "Booking architecture",
    heading: "Making a powerful booking engine feel obvious",
    summary:
      "The booking flow had to support very different journeys without confronting every rider with every possible decision. I structured the experience so complexity appeared progressively, only when a trip required it.",
    details: [
      "On-demand, scheduled, one-way, round-trip, hourly, and multi-destination travel",
      "Pickup, stops, timing, passengers, luggage, pets, and vehicle requirements",
      "Clear review, payment authorization, pricing, and reservation confirmation",
    ],
    status: "Shipped",
    image: {
      src: null,
      caption: "01 · End-to-end rider booking flow",
      alt: "Placeholder for a composite of the RydePro rider booking flow",
      placeholderLabel:
        "Add one wide flow board with 6–8 mobile screens: trip type, locations, schedule, preferences, vehicle selection, booking review, payment, and confirmation. Connect them with a thin route line.",
    },
  },
  {
    number: "02",
    eyebrow: "Responsive product",
    heading: "Translating the same decisions to web without flattening the experience",
    summary:
      "Web booking was not a reduced copy of mobile. Larger screens created room for better comparison and context, while the responsive version still had to remain usable when riders booked from a phone browser.",
    details: [
      "Responsive information hierarchy across desktop, tablet, and mobile web",
      "Persistent trip context while riders compared services and vehicles",
      "Consistent terminology and validation between web and the rider app",
    ],
    status: "Shipped",
    image: {
      src: null,
      caption: "02 · Responsive web-booking experience",
      alt: "Placeholder for a responsive RydePro web-booking mockup",
      placeholderLabel:
        "Add one polished browser mockup of the web-booking flow. Show the route or map beside pickup, timing, passenger, accessibility, and vehicle controls; include one small mobile-web frame for responsiveness.",
    },
  },
  {
    number: "03",
    eyebrow: "Operations and dispatch",
    heading: "Giving the team a command center, not another dashboard",
    summary:
      "The admin experience needed to answer urgent operational questions quickly: what is happening, what is at risk, who is responsible, and what action can resolve it? The interface brought live ride context and dispatch controls into one view.",
    details: [
      "Active, upcoming, delayed, and unassigned booking visibility",
      "Driver availability, assignment, reassignment, and trip monitoring",
      "Filters and operational actions designed around exception handling",
    ],
    status: "Shipped",
    image: {
      src: null,
      caption: "03 · Admin operations command center",
      alt: "Placeholder for the RydePro admin and dispatch dashboard",
      placeholderLabel:
        "Add one wide desktop dashboard using fake data: live map, booking queue, driver status, filters, alerts, and assign/reassign actions. Add 3 small numbered annotations showing how dispatch resolves an at-risk ride.",
    },
  },
  {
    number: "04",
    eyebrow: "Driver earnings",
    heading: "Making every earned dollar understandable before cash-out",
    summary:
      "Driver finance needed clarity at every step. I focused on separating available and pending earnings, explaining trip-level amounts, and making cash-out confirmation and failure states difficult to misunderstand.",
    details: [
      "Available balance, pending earnings, and transaction history",
      "Trip-level earning breakdown and deductions",
      "Cash-out review, confirmation, success, failure, and retry states",
    ],
    status: "Shipped",
    image: {
      src: null,
      caption: "04 · Driver earnings and cash-out",
      alt: "Placeholder for the RydePro driver earnings and cash-out flow",
      placeholderLabel:
        "Add a four-phone composition: earnings overview, trip breakdown, cash-out review, and success or retry state. Keep the monetary hierarchy large enough to read without zooming.",
    },
  },
  {
    number: "05",
    eyebrow: "Inclusive and trusted travel",
    heading: "Treating special requirements as core booking information",
    summary:
      "Accessibility and authorized rides were designed as part of the booking model rather than buried in a note field. The goal was to make requirements explicit for riders and actionable for the people fulfilling the trip.",
    details: [
      "Accessibility, service-animal, luggage, and seating preferences",
      "Clear ownership and permission across authorized rides",
      "The right requirements carried from booking into dispatch and fulfilment",
    ],
    status: "Shipped",
    image: {
      src: null,
      caption: "05 · Accessibility and authorized rides",
      alt: "Placeholder for RydePro accessibility and authorized-ride screens",
      placeholderLabel:
        "Add a 2×2 feature board: accessibility preferences, service-animal or luggage requirements, authorized-rider setup, and the final ride summary showing how those details reach operations.",
    },
  },
  {
    number: "06",
    eyebrow: "What came next",
    heading: "Connecting the rider’s post-booking journey to the driver experience",
    summary:
      "After MVP launch, I worked with another product designer on the driver app and the rider’s post-booking experience. We aligned both sides around a shared sequence of trip states so neither person had to guess what was happening next.",
    details: [
      "Driver job discovery, acceptance, arrival, trip progress, and completion",
      "Rider confirmation, assignment, arrival, live trip, and completion states",
      "Prepared as the next product phase before my departure",
    ],
    status: "Co-designed · Handoff",
    image: {
      src: null,
      caption: "06 · Rider post-booking and driver-app states",
      alt: "Placeholder for paired RydePro rider and driver trip-state screens",
      placeholderLabel:
        "Add a split journey: rider post-booking states on the left and matching driver states on the right. Use a shared vertical timeline from confirmed → assigned → arriving → in trip → completed.",
    },
  },
];
