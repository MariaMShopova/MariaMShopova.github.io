export const siteConfig = {
  name: "Maria Shopova",
  title: "Turning strategy, data and AI into practical operating solutions",
  description:
    "Portfolio of Maria Shopova: strategy and operations professional and builder of Lucid (an AI analytics app) and Ūtil (a team utilisation tool).",
  accentColor: "#3730a3",
  // Every link is optional: anything left out is hidden from the page.
  social: {
    email: "m_shopova@outlook.com",
    linkedin: "https://www.linkedin.com/in/mariamshopova/",
    github: "",
  },
  // Cookie-free visitor counting via GoatCounter (https://www.goatcounter.com).
  // Paste your GoatCounter site code here to switch it on; leave empty for off.
  analytics: { goatcounterCode: "" },
  aboutMe:
    "I'm a seasoned strategic advisor with over six years of experience across professional services, consulting, digital transformation and program governance. My work sits where operations, data and technology meet. In practice, that means turning fragmented information and scattered data into one clear picture that senior leaders can act on.\n\nI build practical solutions, designed to apply across a wide range of situations, both in my day-to-day professional roles and through the advisory engagements I have with external organisations. I design them with Claude Code as my preferred AI pair-programmer, though I've also worked with OpenAI's equivalent. These solutions are particularly suited to the needs of senior executives facing questions in which strategy, operating models and execution need to come together. I bring a pragmatic perspective to complex organisational questions, connecting strategic intent with the systems, processes and decisions required to make it work in practice.",
  // Optional short tag row under the bio. The full list lives in skillGroups.
  skills: [] as string[],
  skillGroups: [
    {
      label: "Skills",
      items: [
        "Strategic workforce management",
        "Capacity planning",
        "OKR / KPI development & monitoring",
        "Data analysis",
        "Process improvement",
        "Cross-functional collaboration",
        "Change management",
        "Team management",
        "Project management",
        "Critical thinking",
        "Presentation skills",
        "P&L management",
        "Budget planning",
      ],
    },
    {
      label: "Tools",
      items: [
        "Claude Code",
        "Adobe Workfront",
        "Jira",
        "Gong",
        "Gainsight",
        "Tableau",
        "Salesforce",
        "Tipalti",
        "Basware",
        "Confluence",
        "Trello",
        "Miro",
        "Productboard",
        "Highspot",
        "Figma",
        "Asana",
        "Temenos Transact",
        "Eclipse Design Studio",
      ],
    },
    {
      label: "Methodologies",
      items: ["PROSCI", "PRINCE2", "Scrum", "Kanban", "Lean Six Sigma"],
    },
    {
      label: "Certifications & training",
      items: [
        "McKinsey Product Academy",
        "Product-Led Growth Certificate (Product School)",
        "Product Analytics Certificate (Product School)",
      ],
    },
    {
      label: "Languages",
      items: ["Bulgarian (native)", "English (fluent)", "Spanish (beginner)"],
    },
  ] as { label: string; items: string[] }[],
  projects: [
    {
      name: "Lucid",
      status: "Live",
      description:
        "Your data, made lucid. Upload spreadsheets and Lucid understands them, flags the messy parts, connects what's related across files, builds the reports that matter, explains what's important and suggests what to do next. Anyone can try it: sign in with any email.",
      highlights: [
        "Profiles every column on upload (type, role, currency) and suggests fixes for problems like header rows that are off by a few lines",
        "Detects relationships between datasets and analyses them together, while Projects keep unrelated uploads from ever being mixed",
        "AI picks and builds the dashboard charts, writes an executive summary, insights, recommendations and data opportunities",
        "Ask Lucid: a conversational assistant that answers questions about your own data",
        "Admin view tracks real AI token usage and estimated cost per feature",
        "A regression test suite guards against bugs that already happened once",
      ],
      link: "https://lucid-analytics.vercel.app",
      linkLabel: "Try the live app",
      skills: ["Next.js", "TypeScript", "Supabase", "Claude API", "Tailwind CSS", "Vercel"],
    },
    {
      name: "Ūtil",
      status: "In development",
      description:
        "A standalone team-utilisation tool in the same suite as Lucid. Upload an activity feed and an employee roster and Ūtil works out utilisation for each person, role and team, based on the hours they were actually available to work.",
      highlights: [
        "Calculation engine: billable hours divided by available hours, measured against each person's target",
        "Available hours account for contracted hours, work schedules, approved leave and both public and company holidays",
        "Public holidays pulled automatically for 100+ countries, with manager-maintained custom holidays on top",
        "Fuzzy name matching and column matching reconcile roster and activity files that don't line up perfectly",
        "One login across the suite, with its own separate database schema so Ūtil's data never mixes with Lucid's",
      ],
      skills: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tremor charts"],
    },
  ] as {
    name: string;
    status?: string;
    description: string;
    highlights?: string[];
    link?: string;
    linkLabel?: string;
    skills?: string[];
  }[],
  // One entry per company, most recent first, with each role held there
  // listed inside it (most recent first). `bullets` is optional on any role:
  // add a list of achievements and it appears under that role's title.
  experience: [
    {
      company: "Brandwatch LLC",
      location: "EU (Remote)",
      dateRange: "May 2023 – Aug 2026",
      roles: [
        {
          title: "Manager, Strategy & Operations",
          dateRange: "May 2023 – Aug 2026",
          summary:
            "I was accountable for the strategic direction and day-to-day operation of a global services department at a global product company, serving customers across EMEA, APAC and North America. My remit was global, so every process, target and decision had to work across regions, time zones and service models. I owned the operational delivery and strategic direction end to end: ensuring customer commitments were met, revenue and utilisation targets were achieved, customers remained satisfied and executives had a clear view of a $20M+ client portfolio through monthly P&L reviews and quarterly business reviews.\n\nI also led the technology agenda from an operational perspective – I shaped the department's AI strategy and led the productisation of an AI reporting solution that cut client report delivery time by about 70%. I brought IT, HR, RevOps, Customer Success and Finance together to turn scattered data into 40+ dashboards and I built the utilisation model that gave us one view of how busy every person, role and team really was across 15 geographies.",
        },
      ],
    },
    {
      company: "S&G Technology Services (acquired by Sirma)",
      location: "EU (Remote)",
      dateRange: "Jan 2020 – Apr 2023",
      intro:
        "Over three years I grew from consultant to leading the program governance and operations function across the company, taking on more people, bigger programs and a wider remit at each step.",
      roles: [
        {
          title: "Program Governance & Operations Lead",
          dateRange: "Feb 2022 – Apr 2023",
          summary:
            "I led a team of 10+ delivering large fintech and financial-services software programs, with a 4.6 out of 5 customer satisfaction score and 16% higher customer lifetime value. Beyond delivery, I built the company's project governance standards and ran the PMO and change office that rolled them out across three departments and 170+ people. I also advised go-to-market leadership on how to package our expertise into productised offerings, which lifted lead-to-customer conversion by about 60%.",
        },
        {
          title: "Senior Manager, Digital Transformation",
          dateRange: "Dec 2021 – Jan 2022",
          summary:
            "I led a multidisciplinary team of consultants, engineers, analysts, architects and designers across 10+ client engagements worth around €3M in revenue, balancing workloads, dependencies and contingencies. I also took full ownership of one workstream in a major transformation program, from planning and budget to reporting and stakeholder management.",
        },
        {
          title: "Digital Transformation Manager",
          dateRange: "Feb 2021 – Nov 2021",
          summary:
            "I ran project teams of four to six people, turning client ambitions into delivery plans that covered scope, process design, risk and change, while keeping programs on time and on budget. I led the executive conversations with clients and internal leadership, presenting progress, flagging risks early and bringing solutions and workarounds.",
        },
        {
          title: "Consultant",
          dateRange: "Jan 2020 – Jan 2021",
          summary:
            "I started out digging into program data and feedback to see what was really being delivered and where the opportunities were, using the classic consulting toolkit of client interviews, workshops, gap analysis and process mapping. I also acted as the bridge between R&D and corporate stakeholders, helping turn product vision into user stories and feature specs with commercial value in mind.",
        },
      ],
    },
  ] as {
    company: string;
    location?: string;
    dateRange: string;
    intro?: string;
    roles: {
      title: string;
      dateRange: string;
      summary?: string;
      bullets?: string[];
    }[];
  }[],
  education: [
    {
      school: "Imperial College London",
      degree: "MSc Management, concentration in Finance",
      location: "United Kingdom",
      dateRange: "2019",
      summary:
        "Studied at Imperial College London, a global top-10 university, where I earned the Imperial Business Case Award for the strongest overall performance in the Entrepreneurship module, including the final business case pitch. Beyond the classroom, I took part in international immersion programmes in New York and Lisbon, gaining first-hand exposure to companies and institutions including Morgan Stanley, the New York Stock Exchange, Bloomberg, IBM Watson, N26, the Mayor’s Office of New York City and Feedzai. Alongside my academic work, I was also an active member of the Consulting Club, Women in Business Society and Imperial Investment Society.",
    },
  ] as {
    school: string;
    degree: string;
    location?: string;
    dateRange?: string;
    summary?: string;
    achievements?: string[];
  }[],
};
