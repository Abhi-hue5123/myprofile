export const site = {
  name: "Abhiram Singuru",
  shortName: "Abhiram Singuru",
  initials: "as",
  role: "Data Engineer",
  tagline:
    "Data Engineer with 5+ years building enterprise-grade pipelines — from raw ingestion to clean, query-ready data at scale.",
  pillStatus: "Open to opportunities",
  location: "Hyderabad, India",
  timezone: "IST · UTC+5:30",
  email: "abhiramsinguru@gmail.com",
  resume: "/files/Abhiram_Singuru_CV.pdf",
  url: "https://abhiramsinguru.vercel.app",
  replyWithin: "Usually replies within 24 hours.",
  avatar: "/images/profile.png",
  portrait: "/images/profile.png",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Abhi-hue5123", handle: "@Abhi-hue5123" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abhiram-singuru11", handle: "@abhiram-singuru11" },
];

export const about = [
  "I build the infrastructure that makes data reliable. With 4+ years in data engineering, I specialize in ETL development, large-scale ingestion, and distributed data systems using Python, Hive, Hadoop, and AWS.",
  "At Tata Consultancy Services, I work on Citi Bank's enterprise data platform — designing ingestion pipelines, preprocessing enterprise datasets at scale, and keeping production systems running clean and on time.",
  "I enjoy the unglamorous parts of data work: hunting down root causes, improving data quality, and automating away the noise. My stack includes Python, Hive, Impala, Oracle PL/SQL, Hadoop, Autosys, and Git.",
];

export const currently = [
  { label: "Currently", value: "Data Engineer @ Tata Consultancy Services" },
  { label: "Focus", value: "Enterprise ETL, distributed data & cloud pipelines" },
  { label: "Certified", value: "AWS Cloud Practitioner · OCI Gen AI · Oracle SQL" },
];

export const experience = [
  {
    company: "Tata Consultancy Services",
    location: "Hyderabad, India",
    roles: [
      {
        title: "Big Data Engineer",
        period: "Oct 2025 — Present",
        bullets: [
          "Own end-to-end ETL pipelines ingesting enterprise data into Hadoop-based platforms at scale.",
          "Design and optimize batch processing workflows across multiple source systems for downstream analytics.",
          "Automate preprocessing of structured and semi-structured data using Python and PySpark.",
          "Diagnose and resolve production pipeline failures — root cause analysis to zero-downtime recovery.",
          "Enforce data quality standards across UAT and Production, monitoring ingestion health end-to-end.",
          "Partner with cross-functional teams to architect scalable data solutions and hit reliability targets.",
        ],
        stack: ["Python", "SQL", "Hive", "Hadoop (HDFS)", "PySpark", "AWS", "Git"],
      },
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    location: "India",
    roles: [
      {
        title: "Programmer Analyst / Associate",
        period: "Oct 2021 — Sep 2025",
        bullets: [
          "Built and tuned Oracle PL/SQL packages, procedures, and triggers powering enterprise applications.",
          "Automated backend operations with Unix shell scripts, cutting manual effort and reducing errors.",
          "Resolved production incidents fast — from triage to permanent fix — maintaining system stability.",
          "Translated business requirements into production-ready database solutions, validated end-to-end.",
          "Mentored junior engineers on Oracle development, SQL optimization, and production support discipline.",
        ],
        stack: ["Oracle SQL", "PL/SQL", "Unix Shell Scripting", "Oracle", "TOAD", "Git"],
      },
    ],
  },
];

export const selectedWork = [
  {
    slug: "enterprise-etl-pipeline",
    year: "2025 — Present",
    title: "Enterprise ETL Data Ingestion Pipeline",
    blurb:
      "End-to-end data ingestion pipelines moving enterprise data from source systems into Hadoop at scale. Python-driven preprocessing, schema validation, and batch optimization for reliable downstream analytics.",
    stack: ["Python", "SQL", "Hive", "Hadoop (HDFS)", "AWS", "ETL"],
    href: null,
    repo: null,
    confidential: true,
  },
  {
    slug: "python-preprocessing-framework",
    year: "2025 — Present",
    title: "Python Data Preprocessing Framework",
    blurb:
      "Reusable Python toolkit for cleaning, validating, and transforming enterprise datasets — fixed-width files, schema mismatches, inconsistencies — before ingestion into Hive.",
    stack: ["Python", "Pandas", "PySpark", "Hive", "Data Validation"],
    href: null,
    repo: null,
    confidential: true,
  },
  {
    slug: "pipeline-monitoring-recovery",
    year: "2021 — Present",
    title: "Production Pipeline Monitoring & Recovery",
    blurb:
      "Automated monitoring and recovery system for enterprise ingestion workflows. Detects failures, validates data loads, and surfaces root causes through structured log analysis.",
    stack: ["Python", "Unix Shell", "SQL", "Hive", "Git"],
    href: null,
    repo: null,
    confidential: true,
  },  {
    slug: "jdk17-migration-kafka",
    year: "2026",
    title: "JDK 17 Migration — Kafka File Ingestion Services",
    blurb:
      "Migrated 2 file-based ingestion services (Kafka sink) from legacy JDK to JDK 17. Updated configurations, resolved CVM remediation bugs, and executed end-to-end validation in UAT. Deployed to production via Lightspeed and GitHub.",
    stack: ["Java", "JDK 17", "Kafka", "GitHub", "Lightspeed", "UAT Testing"],
    href: null,
    repo: null,
    confidential: true,
  },
  {
    slug: "rest-api-ingestion-pmc",
    year: "2026",
    title: "REST API Ingestion Pipeline — PMC Payments Data",
    blurb:
      "Built and deployed an end-to-end REST API ingestion pipeline to pull payments data (PMC rates) from ISG Cloud. Established connectivity across SIT, UAT, and Production. Python script fetches, flattens, and explodes JSON responses into delimited files for Hive table loading via Banzai.",
    stack: ["Python", "REST API", "JSON", "Hive", "Banzai", "SIT/UAT/Prod"],
    href: null,
    repo: null,
    confidential: true,
  },
];

export const archive = [
  { year: "2026", title: "REST API Ingestion Pipeline — PMC Payments Data", made: "Tata Consultancy Services", stack: ["Python", "REST API", "JSON", "Hive", "Banzai"], href: null },
  { year: "2026", title: "JDK 17 Migration — Kafka File Ingestion Services", made: "Tata Consultancy Services", stack: ["Java", "JDK 17", "Kafka", "GitHub", "Lightspeed"], href: null },
  { year: "2026", title: "Enterprise ETL Data Ingestion Platform", made: "Tata Consultancy Services", stack: ["Python", "Hive", "Hadoop", "AWS", "ETL"], href: null },
  { year: "2026", title: "Python Data Preprocessing Framework", made: "Tata Consultancy Services", stack: ["Python", "PySpark", "Pandas", "Data Validation"], href: null },
  { year: "2026", title: "Production Data Pipeline Support", made: "Tata Consultancy Services", stack: ["SQL", "Hive", "Unix Shell", "Git"], href: null },
  { year: "2024", title: "Oracle Database Development", made: "Cognizant Technology Solutions", stack: ["Oracle SQL", "PL/SQL", "Unix Shell", "TOAD"], href: null },
  { year: "2023", title: "Production Support & Database Optimization", made: "Cognizant Technology Solutions", stack: ["PL/SQL", "Oracle", "SQL Performance", "Git"], href: null },
];

export const certifications = [
  { title: "Oracle Cloud OCI Generative AI Professional", dates: "12/2024 — 12/2026" },
  { title: "Oracle Database SQL Certified Associate (1Z0-071)", dates: "02/2025" },
  { title: "AWS Certified Cloud Practitioner", dates: "08/2024 — 08/2027" },
];

export const writing = [
  {
    category: "Data Engineering",
    title: "Building Reliable ETL Pipelines: Best Practices for Enterprise Data Ingestion",
    description:
      "An overview of designing scalable ETL pipelines, handling schema validation, implementing data quality checks, and optimizing batch data ingestion for enterprise data platforms.",
  },
  {
    category: "Big Data",
    title: "Getting Started with Hive and Hadoop: A Practical Guide for Data Engineers",
    description:
      "A beginner-friendly guide explaining Hive architecture, HDFS fundamentals, partitions, external vs managed tables, and practical query optimization techniques used in big data environments.",
  },
  {
    category: "Cloud & AWS",
    title: "From SQL Developer to Data Engineer: My AWS Cloud Learning Journey",
    description:
      "Sharing my experience transitioning from traditional database development to cloud-based data engineering, including lessons learned while earning the AWS Certified Cloud Practitioner certification.",
  },
];

export const stack = {
  reachFor: ["Python", "SQL", "Hive", "Hadoop (HDFS)", "PySpark", "ETL Development", "Unix Shell Scripting", "Git"],
  comfortable: ["Impala", "AWS", "Talend", "Oracle SQL", "PL/SQL", "Banzai", "TOAD", "Splunk", "Dynatrace", "VS Code"],
};

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Writing", href: "/#writing" },
  { label: "About", href: "/#about" },
  { label: "Archive", href: "/archive" },
  { label: "Uses", href: "/uses" },
];

export const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "", label: "Certifications" },
  { value: 10, suffix: "+", label: "Pipeline Projects" },
];

export const techMarquee = {
  row1: [
    { name: "Python", icon: "FaPython", color: "#3776AB" },
    { name: "SQL", icon: "FaDatabase", color: "#4DB8FF" },
    { name: "Hive", icon: "SiApachehive", color: "#FDEE21" },
    { name: "Hadoop (HDFS)", icon: "SiApachehadoop", color: "#66CCFF" },
    { name: "AWS", icon: "FaAws", color: "#FF9900" },
    { name: "ETL Development", icon: null, color: "#7C5CFF" },
    { name: "Unix Shell Scripting", icon: "SiGnubash", color: "#4EAA25" },
    { name: "Git", icon: "BsGit", color: "#F97316" },
  ],
  row2: [
    { name: "Impala", icon: null, color: "#22D3EE" },
    { name: "PySpark", icon: "SiApachespark", color: "#E25A1C" },
    { name: "Talend", icon: null, color: "#22D3EE" },
    { name: "Oracle SQL", icon: null, color: "#F80000" },
    { name: "PL/SQL", icon: null, color: "#F80000" },
    { name: "Banzai", icon: "SiSnowflake", color: "#29B5E8" },
    { name: "TOAD", icon: null, color: "#7C5CFF" },
    { name: "Splunk", icon: "SiSplunk", color: "#FF6C37" },
    { name: "Dynatrace", icon: "SiDynatrace", color: "#1496FF" },
    { name: "VS Code", icon: "VscVscode", color: "#007ACC" },
  ],
};

export const uses = [
  {
    heading: "Development",
    items: [
      { label: "Visual Studio Code", value: "My primary editor for Python development, SQL scripting, and ETL workflows." },
      { label: "Git & GitHub", value: "Version control for managing source code, collaboration, and tracking changes across projects." },
      { label: "Jupyter Notebook", value: "Used for data analysis, experimentation, and testing data transformation logic." },
    ],
  },
  {
    heading: "Data Engineering",
    items: [
      { label: "Python", value: "Building ETL pipelines, data preprocessing, automation, and validation scripts." },
      { label: "Hive & Hadoop (HDFS)", value: "Working with distributed storage and Hive-based data processing for large-scale datasets." },
      { label: "SQL & PL/SQL", value: "Writing optimized queries, stored procedures, data validation scripts, and troubleshooting production issues." },
      { label: "PySpark", value: "Processing and transforming large datasets using distributed computing." },
    ],
  },
  {
    heading: "Cloud & Tools",
    items: [
      { label: "AWS", value: "Working with cloud services and understanding data lake architectures as an AWS Certified Cloud Practitioner." },
      { label: "TOAD", value: "Database development and Oracle administration." },
      { label: "Unix Shell", value: "Automating ETL workflows, file operations, and production support tasks." },
      { label: "Splunk", value: "Analyzing logs and troubleshooting production data pipeline issues." },
    ],
  },
  {
    heading: "Hardware & Environment",
    items: [
      { label: "MacBook Air (M-Series)", value: "Primary development machine for coding and learning." },
      { label: "macOS", value: "Daily development environment with Zsh and Terminal." },
      { label: "GitHub", value: "Hosting personal projects and maintaining my portfolio." },
    ],
  },
];
