export const socialLinks = {
  github: "https://github.com/fuadsalah3",
  telegram: "https://t.me/fuyesalah",
  instagram: "https://www.instagram.com/kiyar_fam",
};

export const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "MongoDB", "Three.js", "Tailwind CSS", "GraphQL", "Docker",
  "AWS", "Redis", "Python", "Go", "Kubernetes",
];

export const projects = [
  {
    id: "elite-merkato",
    title: "Elite / Merkato Store",
    description: "A high-performance e-commerce platform serving thousands of concurrent users. Built with Next.js, PostgreSQL, and Redis for blazing-fast checkout experiences.",
    tags: ["Next.js", "PostgreSQL", "Redis", "Stripe", "Docker"],
    color: "from-amber-500/20 to-yellow-600/20",
    size: "wide" as const,
  },
  {
    id: "data-pulse",
    title: "DataPulse Analytics",
    description: "Real-time analytics dashboard processing millions of events daily with sub-second query latency.",
    tags: ["React", "GraphQL", "ClickHouse", "Go"],
    color: "from-blue-500/20 to-cyan-500/20",
    size: "small" as const,
  },
  {
    id: "chain-vault",
    title: "ChainVault",
    description: "Decentralized asset management platform with multi-sig wallets and on-chain governance.",
    tags: ["Solidity", "React", "Web3", "Hardhat"],
    color: "from-purple-500/20 to-pink-500/20",
    size: "small" as const,
  },
  {
    id: "nexus-cms",
    title: "Nexus CMS",
    description: "Headless CMS with drag-drop editor, built for enterprise content teams.",
    tags: ["Next.js", "MongoDB", "AWS S3", "TypeScript"],
    color: "from-emerald-500/20 to-teal-500/20",
    size: "small" as const,
  },
  {
    id: "aegis-auth",
    title: "Aegis Auth",
    description: "Enterprise SSO and authorization framework supporting OAuth2, SAML, and custom JWT flows.",
    tags: ["Node.js", "Redis", "PostgreSQL", "OAuth2"],
    color: "from-red-500/20 to-orange-500/20",
    size: "small" as const,
  },
  {
    id: "cloud-orch",
    title: "Cloud Orchestrator",
    description: "Infrastructure-as-code platform for multi-cloud deployments with real-time monitoring.",
    tags: ["Go", "Kubernetes", "Terraform", "AWS"],
    color: "from-sky-500/20 to-indigo-500/20",
    size: "wide" as const,
  },
];

export const services = [
  {
    title: "Frontend Architecture",
    description: "Crafting pixel-perfect, responsive interfaces with React, Next.js, and Three.js that captivate users and drive engagement.",
    icon: "✨",
  },
  {
    title: "Backend Engineering",
    description: "Designing scalable, resilient APIs and microservices with PostgreSQL, MongoDB, and Node.js that handle millions of requests.",
    icon: "⚡",
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end product development from database schema design to deployment, ensuring every layer works in perfect harmony.",
    icon: "🔗",
  },
];
