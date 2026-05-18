// ---------------------------------------------------------------------------
// Single source of truth for portfolio content.
// All copy extracted verbatim from Fares' existing site - no invented entries.
// Edit here to update the whole portfolio.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Fares Alnzlawe",
  handle: "fares",
  title: "Software Engineer",
  taglineRoles: ["Data Engineer", "Flutter Developer", "Software Engineer"],
  taglineLong: "Building scalable data systems and modern mobile applications.",
  location: "Saudi Arabia",
  bio: "Software Engineer focused on building end-to-end data-driven applications, combining real-time data processing with user-facing mobile experiences. Experienced in developing Flutter applications and backend systems, working with SQL and NoSQL databases, and integrating scalable services. Built projects involving data pipelines and mobile interfaces, with a strong interest in designing systems that turn data into usable products.",
  education: {
    school: "King Fahd University of Petroleum and Minerals (KFUPM)",
    degree: "Software Engineering",
  },
  contact: {
    email: "fares.alnzlawe@gmail.com",
    linkedin: "https://www.linkedin.com/in/fares-alnzlawe/",
    github: "https://github.com/FaresFouziNZ",
    cv: "https://drive.google.com/file/d/1vYXN8FtBJl8tukNk3sl-kOqOptifb95g/view",
  },
  avatar: {
    src: "/assets/avatar.jpg",
    alt: "Fares Alnzlawe",
  },
};

// ---------------------------------------------------------------------------
// Projects - three real shipped projects
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  techstack: string[];
  development: string[];
  impact: string[];
  repo?: string;
  accent: "phosphor" | "amber" | "cyan" | "magenta";
  image: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "discord-kafka-pipeline",
    title: "Real-Time Discord Data Pipeline",
    subtitle:
      "End-to-end system for streaming and storing Discord server data.",
    techstack: ["Kafka", "Python", "HDFS", "Docker", "Discord API"],
    development: [
      "Developed a data ingestion service to collect messages from Discord text channels using the Discord API.",
      "Implemented a Kafka producer to stream the collected data into a Kafka topic in real-time.",
      "Designed a pipeline to handle continuous message ingestion and data structuring.",
      "Stored streamed data in HDFS for scalable and durable storage.",
      "Containerized the system using Docker to ensure consistent deployment and environment setup.",
    ],
    impact: [
      "Built a real-time streaming pipeline simulating production-like data workflows.",
      "Enabled scalable storage of large volumes of unstructured data.",
      "Demonstrates practical experience with distributed systems, data pipelines, and containerization.",
    ],
    repo: "https://github.com/FaresFouziNZ/discordBackupBot",
    accent: "phosphor",
    image: {
      src: "/assets/discord.png",
      alt: "Discord logo",
    },
  },
  {
    slug: "suspicious-transactions",
    title: "Suspicious Bank Transaction Detection System",
    subtitle:
      "Batch-based data processing system for detecting anomalous financial transactions.",
    techstack: ["Scala", "ZIO", "PostgreSQL", "MinIO", "FastAPI", "Docker"],
    development: [
      "Developed a batch processing system to analyze financial transaction data for suspicious behavior patterns.",
      "Designed the system to avoid redundant computation by optimizing batch processing logic.",
      "Implemented data storage and querying using PostgreSQL for structured transaction records.",
      "Integrated MinIO as an object storage layer for handling raw or large-scale data files.",
      "Built a separate FastAPI service in Python to expose an external API for calculating suspicious risk scores.",
      "Used Scala with ZIO to build a functional and reliable backend processing pipeline.",
    ],
    impact: [
      "Demonstrates strong understanding of batch data processing systems.",
      "Shows ability to design multi-service architectures (processing + API layer).",
      "Highlights experience with functional programming (Scala + ZIO).",
      "Implements real-world concepts like deduplication and system efficiency.",
      "Reflects ability to work across multiple backend technologies.",
    ],
    repo: "https://github.com/FaresFouziNZ/Suspicious-Transaction-Detection",
    accent: "amber",
    image: {
      src: "/assets/fraud-detection.png",
      alt: "Fraud detection icon",
    },
  },
  {
    slug: "spotify-clone",
    title: "Spotify Mobile Application Clone",
    subtitle:
      "Flutter-based MVP replicating core features of a music streaming platform, built in a 6-day app development challenge.",
    techstack: ["Flutter", "Dart", "Supabase", "Riverpod", "Go Router"],
    development: [
      "Developed a functional MVP of a music streaming application within a 6-day time constraint.",
      "Implemented core features including song playback, search functionality, and playlist creation.",
      "Designed a responsive UI inspired by modern music streaming platforms.",
      "Built navigation structure using Go Router for multi-screen flow.",
      "Managed state and lifecycle using Flutter Hooks.",
      "Used Freezed for structured and type-safe data models.",
      "Integrated Supabase for backend data storage and retrieval.",
    ],
    impact: [
      "Delivered a working mobile MVP under strict time constraints (6 days).",
      "Demonstrated ability to rapidly learn and apply new technologies (Hooks, Go Router, Freezed, Riverpod, Supabase).",
      "Showcased practical Flutter architecture and state management skills (MVVM).",
      "Balanced feature scope with delivery speed in a real-world simulation scenario.",
    ],
    accent: "cyan",
    image: {
      src: "/assets/spotify.png",
      alt: "Spotify logo",
    },
  },
];

// ---------------------------------------------------------------------------
// Experience - real roles, dates verbatim
// ---------------------------------------------------------------------------

export type Experience = {
  position: string;
  entity: string;
  date: string;
  bullets: string[];
  logo: { src: string; alt: string };
};

export const experiences: Experience[] = [
  {
    position: "Graduate Development Program - Data Engineer",
    entity: "Government (Confidential)",
    date: "Aug 2024 - Jul 2025",
    bullets: [
      "Designed ETL pipelines to extract data from diverse sources to the Enterprise Data Warehouse, resulting in a 40% reduction in data retrieval time.",
      "Implemented automated Data Quality Frameworks with rule-based validation, anomaly detection, and reconciliation pipelines, reducing manual review time and data discrepancies by 25%.",
      "Automated Data Profiling and Cleansing to maintain high-quality data within the warehouse, leading to improved analytics and decision-making.",
      "Utilized Apache Airflow for workflow orchestration, and MS SQL Server for data storage and transformation.",
    ],
    logo: {
      src: "/assets/saudi-emblem.svg",
      alt: "Emblem of Saudi Arabia",
    },
  },
  {
    position: "Part-Time Flutter Developer",
    entity: "KFUPM (King Fahd University of Petroleum and Minerals)",
    date: "Jan 2023 - May 2023",
    bullets: [
      "Enhanced course-section distribution by 10% through Flutter scheduling interface development.",
      "Integrated front-end pages with REST APIs and local CSV files reliably.",
      "Developed a complex student schedule planner UI using Flutter improving overall usability experience.",
    ],
    logo: {
      src: "/assets/kfupm.png",
      alt: "KFUPM logo",
    },
  },
  {
    position: "Software Developer (Part-Time)",
    entity: "Naseej",
    date: "Aug 2022 - Feb 2023",
    bullets: [
      "Connected front-end interfaces with REST APIs and local CSV datasets efficiently.",
      "Followed Waterfall software development methodology ensuring consistent high-quality delivery.",
      "Improved overall software performance by 25% via targeted optimization and collaboration.",
    ],
    logo: {
      src: "/assets/naseej.webp",
      alt: "Naseej logo",
    },
  },
  {
    position: "Software Engineering Intern",
    entity: "sMusicians",
    date: "Jul 2021 - Jun 2022",
    bullets: [
      "Supported development tasks in early-stage software projects.",
      "Gained hands-on experience with software development lifecycle and team collaboration.",
      "Worked on debugging, feature implementation, and system maintenance.",
      "Participated in Agile Scrum ceremonies aligning development with project objectives effectively.",
    ],
    logo: {
      src: "/assets/smusicians.png",
      alt: "sMusicians logo",
    },
  },
];

// ---------------------------------------------------------------------------
// Skills - grouped exactly as the original portfolio listed them
// ---------------------------------------------------------------------------

export type SkillGroup = {
  name: string;
  accent: "phosphor" | "amber" | "cyan";
  items: string[];
};

// Order matters - this is the order the cards render in the grid.
// Accent is attached per-skill so reordering never accidentally swaps colours.
// Colour pattern is intentionally diagonal so no two adjacent cards (in either
// direction) share an accent:
//   row 1: phosphor   amber      cyan
//   row 2: amber      cyan       phosphor
export const skills: SkillGroup[] = [
  {
    name: "Data Engineering",
    accent: "phosphor",
    items: [
      "Apache Kafka",
      "Apache Airflow",
      "Spark",
      "Hadoop HDFS",
      "Data pipelines",
      "Data warehousing",
      "Data architecture",
      "Big data systems",
    ],
  },
  {
    name: "Backend Development",
    accent: "amber",
    items: ["Python", "Scala", "Java", "REST APIs", "OOP", "Linux", "Git / GitHub"],
  },
  {
    name: "Product & System Thinking",
    accent: "cyan",
    items: [
      "Product Management",
      "System Design",
      "Software Architecture",
      "Agile Methodologies",
      "Business intelligence",
      "Data-driven decision making",
    ],
  },
  {
    name: "Soft Skills",
    accent: "amber",
    items: ["Leadership", "Communication", "Problem-solving"],
  },
  {
    name: "Tools & DevOps",
    accent: "cyan",
    items: ["Docker", "SQL (PostgreSQL, Supabase)", "NoSQL (Firebase)"],
  },
  {
    name: "Mobile Development",
    accent: "phosphor",
    items: ["Flutter", "Dart", "Firebase", "Supabase"],
  },
];

// ---------------------------------------------------------------------------
// Extracurriculars - leadership, hackathon, certifications
// ---------------------------------------------------------------------------

export type Extra = {
  title: string;
  entity: string;
  bullets: string[];
  link?: { url: string; label: string };
  logo: { src: string; alt: string };
};

export const extras: Extra[] = [
  {
    title: "President - Intellectual & Electronic Sports Club",
    entity: "King Fahd University of Petroleum and Minerals (KFUPM)",
    bullets: [
      "Led a student organization serving 3000+ members, focused on community building and student engagement.",
      "Directed club strategy and coordinated cross-functional teams to deliver events and technical initiatives.",
      "Acted as a Product Manager, bridging communication between Student Affairs and internal teams to align requirements and execution.",
      "Supervised the development committee as a Project Manager, overseeing multiple projects including Point System, Horof Game, and Horof Questions Application.",
      "Awarded Best Student Club by the university president for outstanding performance and impact.",
    ],
    link: {
      url: "https://www.linkedin.com/posts/fares-alnzlawe_%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D9%84%D9%84%D9%87-%D8%AD%D8%B5%D9%84-%D9%86%D8%A7%D8%AF%D9%8A-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A7%D8%AA-%D8%A7%D9%84%D8%B0%D9%87%D9%86%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9-activity-7067730772794687488--PQ-",
      label: "Celebration post on LinkedIn",
    },
    logo: {
      src: "/assets/ie-club.png",
      alt: "IE Club logo",
    },
  },
  {
    title: "Hackathon Winner - Tourism Solution Project",
    entity: "Google Developer Student Clubs (GDSC) - Flutter Weekend Hackathon",
    bullets: [
      "Formed and collaborated with a team in a fast-paced hackathon environment.",
      "Designed and developed a solution connecting tourists with local residents to enhance travel experiences.",
      "Built and delivered a functional application prototype within 36 hours.",
      "Led the development of the core application flow and main user scenarios.",
      "Achieved 1st place, demonstrating strong execution, teamwork, and problem-solving under time constraints.",
    ],
    link: {
      url: "https://github.com/FaresFouziNZ/FlutterWeekend",
      label: "Project repository",
    },
    logo: {
      src: "/assets/flutter.png",
      alt: "Flutter logo",
    },
  },
  {
    title: "Data Engineering Nano Degree (In Progress)",
    entity: "IBM",
    bullets: [
      "Currently completing a structured program covering data engineering fundamentals including data pipelines, databases, and large-scale data processing.",
      "Gaining hands-on experience with ETL workflows, data modeling, and storage systems.",
      "Applying learned concepts to real-world projects involving streaming and batch processing.",
    ],
    logo: {
      src: "/assets/ibm.svg",
      alt: "IBM logo",
    },
  },
];

// ---------------------------------------------------------------------------
// Section registry - used by nav and IDs
// ---------------------------------------------------------------------------

export const sections = [
  { id: "about", cmd: "./about", label: "about" },
  { id: "experience", cmd: "./experience", label: "experience" },
  { id: "projects", cmd: "./projects", label: "projects" },
  { id: "skills", cmd: "./skills", label: "skills" },
  { id: "extras", cmd: "./extras", label: "extras" },
  { id: "contact", cmd: "./contact", label: "contact" },
] as const;
