// scripts/seedQuestions.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('../models/Question'); // path to your model

dotenv.config(); // Load MongoDB URI

const sampleQuestions = [
  // Data Structures
  {
    "topic": "data-structures",
    "questionText": "How would you implement a dynamic array and handle resizing efficiently?",
    "keywords": [
      "amortized analysis", "memory allocation", "capacity doubling", "copy overhead", "cache locality", "pointer management", "performance trade-offs"
    ]
  },
  {
    "topic": "data-structures",
    "questionText": "Explain the advantages and disadvantages of different collision resolution strategies in hash tables.",
    "keywords": [
      "open addressing", "chaining", "load factor", "rehashing", "primary clustering", "secondary clustering", "space-time tradeoff"
    ]
  },
  {
    "topic": "data-structures",
    "questionText": "Describe the use cases and performance implications of self-balancing binary search trees.",
    "keywords": [
      "AVL tree", "Red-Black tree", "rotation operations", "height balancing", "worst-case complexity", "insert/delete performance", "ordered data access"
    ]
  },
  {
    "topic": "data-structures",
    "questionText": "How do tries optimize prefix-based search and what are their memory considerations?",
    "keywords": [
      "prefix matching", "space efficiency", "node branching", "compressed tries", "suffix trees", "auto-complete", "memory overhead"
    ]
  },
  {
    "topic": "data-structures",
    "questionText": "Compare the use of adjacency lists and adjacency matrices for graph representation.",
    "keywords": [
      "sparse vs dense graphs", "space complexity", "edge lookup", "iteration efficiency", "modification cost", "directed/undirected graphs", "scalability"
    ]
  },
  {
    "topic": "data-structures",
    "questionText": "What are the trade-offs between stack and queue implementations using arrays vs linked lists?",
    "keywords": [
      "fixed vs dynamic size", "memory fragmentation", "pointer overhead", "cache performance", "circular buffer", "enqueue/dequeue efficiency", "overflow/underflow"
    ]
  },
  {
    "topic": "data-structures",
    "questionText": "How does a priority queue work and where is it used in real-world systems?",
    "keywords": [
      "heap data structure", "insert/delete-min", "task scheduling", "Dijkstra's algorithm", "event simulation", "time complexity", "stability"
    ]
  },
  {
    "topic": "data-structures",
    "questionText": "Explain the concept of union-find (disjoint set) and its applications.",
    "keywords": [
      "path compression", "union by rank", "connected components", "cycle detection", "network connectivity", "amortized time", "algorithm optimization"
    ]
  },
  {
    "topic": "data-structures",
    "questionText": "How would you design a data structure to support constant-time min/max retrieval?",
    "keywords": [
      "auxiliary stack", "double-ended queue", "monotonic stack", "space overhead", "push/pop invariants", "real-time analytics", "trade-offs"
    ]
  },
  {
    "topic": "data-structures",
    "questionText": "Discuss the impact of cache locality on the performance of different data structures.",
    "keywords": [
      "contiguous memory", "pointer chasing", "CPU cache", "spatial locality", "temporal locality", "linked vs array-based", "performance bottlenecks"
    ]
  },
  // Algorithms
  {
    "topic": "algorithms",
    "questionText": "Explain the time and space complexity trade-offs in divide and conquer algorithms.",
    "keywords": [
      "recursion depth", "subproblem partitioning", "merge overhead", "stack space", "parallelization", "master theorem", "algorithmic efficiency"
    ]
  },
  {
    "topic": "algorithms",
    "questionText": "How does memoization improve the efficiency of recursive algorithms?",
    "keywords": [
      "overlapping subproblems", "dynamic programming", "cache storage", "lookup cost", "state representation", "top-down approach", "space-time tradeoff"
    ]
  },
  {
    "topic": "algorithms",
    "questionText": "Describe the differences between greedy and dynamic programming approaches.",
    "keywords": [
      "optimal substructure", "local vs global optimum", "decision making", "problem constraints", "proof of correctness", "counterexamples", "algorithm selection"
    ]
  },
  {
    "topic": "algorithms",
    "questionText": "What are the challenges in implementing efficient graph traversal algorithms for large-scale graphs?",
    "keywords": [
      "memory usage", "visited node tracking", "queue/stack management", "parallel BFS/DFS", "distributed processing", "I/O bottlenecks", "scalability"
    ]
  },
  {
    "topic": "algorithms",
    "questionText": "How do you detect and resolve cycles in dependency graphs?",
    "keywords": [
      "topological sort", "DFS back edges", "cycle detection algorithms", "deadlock prevention", "dependency resolution", "graph coloring", "error reporting"
    ]
  },
  {
    "topic": "algorithms",
    "questionText": "Explain the significance of stable sorting algorithms and their use cases.",
    "keywords": [
      "relative order preservation", "multi-key sorting", "merge sort", "counting sort", "real-world applications", "algorithm selection", "performance impact"
    ]
  },
  {
    "topic": "algorithms",
    "questionText": "Discuss the impact of hash function quality on the performance of hash-based algorithms.",
    "keywords": [
      "collision probability", "uniform distribution", "cryptographic hash", "load balancing", "security vulnerabilities", "performance degradation", "hash table resizing"
    ]
  },
  {
    "topic": "algorithms",
    "questionText": "How do approximation algorithms provide solutions for NP-hard problems?",
    "keywords": [
      "approximation ratio", "heuristics", "polynomial time", "trade-off analysis", "practical feasibility", "intractable problems", "solution guarantees"
    ]
  },
  {
    "topic": "algorithms",
    "questionText": "What are the key considerations in designing parallel algorithms?",
    "keywords": [
      "data partitioning", "synchronization", "race conditions", "load balancing", "scalability", "communication overhead", "speedup analysis"
    ]
  },
  {
    "topic": "algorithms",
    "questionText": "Explain the role of amortized analysis in evaluating algorithm performance.",
    "keywords": [
      "aggregate method", "accounting method", "potential method", "worst-case vs average-case", "dynamic arrays", "splay trees", "cost distribution"
    ]
  },
  // Object-Oriented Programming
  {
    "topic": "object-oriented-programming",
    "questionText": "How does the SOLID principle improve software design in OOP?",
    "keywords": [
      "single responsibility", "open/closed", "Liskov substitution", "interface segregation", "dependency inversion", "maintainability", "extensibility"
    ]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "Explain the differences between composition and inheritance and when to use each.",
    "keywords": [
      "code reuse", "flexibility", "tight coupling", "hierarchy", "object collaboration", "design patterns", "change impact"
    ]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What are design patterns and how do they facilitate object-oriented design?",
    "keywords": [
      "creational patterns", "structural patterns", "behavioral patterns", "reusability", "best practices", "problem-solving", "software architecture"
    ]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "How does polymorphism enable extensibility in OOP systems?",
    "keywords": [
      "method overriding", "dynamic dispatch", "interface implementation", "runtime flexibility", "plug-in architecture", "open/closed principle", "code generalization"
    ]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "Discuss the role of encapsulation in ensuring data integrity and security.",
    "keywords": [
      "access modifiers", "information hiding", "getter/setter methods", "invariant enforcement", "API boundaries", "modularity", "security"
    ]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is dependency injection and how does it support testability?",
    "keywords": [
      "inversion of control", "mocking", "loose coupling", "constructor injection", "service locator", "unit testing", "maintainability"
    ]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "How do abstract classes differ from interfaces and when should each be used?",
    "keywords": [
      "partial implementation", "contract definition", "multiple inheritance", "default methods", "API design", "flexibility", "language constraints"
    ]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "Explain the concept of method overloading and overriding with examples.",
    "keywords": [
      "compile-time polymorphism", "runtime polymorphism", "signature matching", "inheritance", "dynamic binding", "code readability", "flexibility"
    ]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What are the implications of using static members in classes?",
    "keywords": [
      "shared state", "memory allocation", "utility functions", "global access", "thread safety", "lifecycle management", "design trade-offs"
    ]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "How does object-oriented design support large-scale software development?",
    "keywords": [
      "modularity", "reusability", "team collaboration", "code organization", "scalability", "maintenance", "domain modeling"
    ]
  },
  // System Design Basics
  {
    "topic": "system-design-basics",
    "questionText": "Explain how you would design a scalable chat application.",
    "keywords": [
      "real-time messaging", "WebSockets", "message queue", "user presence", "horizontal scaling", "load balancing", "data partitioning"
    ]
  },
  {
    "topic": "system-design-basics",
    "questionText": "How would you design a system for uploading and serving large files?",
    "keywords": [
      "file storage", "CDN", "chunked upload", "metadata management", "security", "access control", "throughput optimization"
    ]
  },
  {
    "topic": "system-design-basics",
    "questionText": "Describe the components and flow of a modern web application architecture.",
    "keywords": [
      "frontend-backend separation", "API gateway", "microservices", "database", "authentication", "statelessness", "service discovery"
    ]
  },
  {
    "topic": "system-design-basics",
    "questionText": "How would you ensure high availability in a distributed system?",
    "keywords": [
      "redundancy", "failover", "replication", "load balancing", "health checks", "auto-scaling", "disaster recovery"
    ]
  },
  {
    "topic": "system-design-basics",
    "questionText": "What strategies would you use to handle database scaling?",
    "keywords": [
      "sharding", "replication", "read/write splitting", "caching", "indexing", "eventual consistency", "NoSQL vs SQL"
    ]
  },
  {
    "topic": "system-design-basics",
    "questionText": "How would you design a rate limiter for an API?",
    "keywords": [
      "token bucket", "leaky bucket", "redis", "distributed counters", "throttling", "API gateway", "user quotas"
    ]
  },
  {
    "topic": "system-design-basics",
    "questionText": "Explain the concept of eventual consistency and where it is used.",
    "keywords": [
      "distributed databases", "CAP theorem", "consistency models", "replication lag", "data synchronization", "trade-offs", "availability"
    ]
  },
  {
    "topic": "system-design-basics",
    "questionText": "How would you design a notification system for millions of users?",
    "keywords": [
      "message queue", "push notifications", "fan-out", "batch processing", "scalability", "user segmentation", "delivery guarantees"
    ]
  },
  {
    "topic": "system-design-basics",
    "questionText": "What are the key considerations for designing a secure authentication system?",
    "keywords": [
      "password hashing", "token-based auth", "OAuth", "multi-factor authentication", "session management", "encryption", "secure storage"
    ]
  },
  // version-control
  {
    "topic": "version-control",
    "questionText": "What is the difference between Git and SVN?",
    "keywords": ["distributed vs centralized", "branching", "merge conflicts", "history management", "collaboration", "repository structure", "scalability"]
  },
  {
    "topic": "version-control",
    "questionText": "Explain the concept of branching and merging in Git.",
    "keywords": ["feature branches", "merge strategies", "conflict resolution", "fast-forward merge", "rebase", "workflow", "parallel development"]
  },
  {
    "topic": "version-control",
    "questionText": "How does Git handle merge conflicts and how can you resolve them?",
    "keywords": ["conflict markers", "manual resolution", "merge tools", "rebase conflicts", "commit history", "best practices", "collaboration"]
  },
  {
    "topic": "version-control",
    "questionText": "What is a pull request and what is its role in team collaboration?",
    "keywords": ["code review", "collaborative development", "approval workflow", "continuous integration", "feedback loop", "quality assurance", "merge policies"]
  },
  {
    "topic": "version-control",
    "questionText": "Describe the difference between git fetch and git pull.",
    "keywords": ["remote tracking", "local repository", "merge operation", "data synchronization", "workflow impact", "conflict risk", "best practices"]
  },
  {
    "topic": "version-control",
    "questionText": "How can you revert a commit in Git without losing history?",
    "keywords": ["git revert", "undo changes", "preserve history", "safe rollback", "commit log", "collaboration", "error correction"]
  },
  {
    "topic": "version-control",
    "questionText": "What is the purpose of .gitignore and how does it work?",
    "keywords": ["untracked files", "repository cleanliness", "pattern matching", "file exclusion", "project hygiene", "build artifacts", "security"]
  },
  {
    "topic": "version-control",
    "questionText": "Explain the concept of rebasing and when you would use it.",
    "keywords": ["linear history", "commit rewriting", "conflict management", "feature integration", "clean history", "collaboration", "workflow"]
  },
  {
    "topic": "version-control",
    "questionText": "How do you resolve a detached HEAD state in Git?",
    "keywords": ["HEAD pointer", "checkout", "commit referencing", "branch creation", "history navigation", "safe recovery", "best practices"]
  },
  {
    "topic": "version-control",
    "questionText": "What are Git hooks and how can they be used to enforce workflow policies?",
    "keywords": ["pre-commit", "pre-push", "automation", "code quality", "custom scripts", "team standards", "continuous integration"]
  },
  // debugging and testing
  {
    "topic": "debugging-testing",
    "questionText": "What is the difference between unit testing and integration testing?",
    "keywords": ["test scope", "isolation", "dependencies", "test coverage", "system boundaries", "test reliability", "automation"]
  },
  {
    "topic": "debugging-testing",
    "questionText": "How do you use breakpoints and watch expressions in a debugger?",
    "keywords": ["runtime inspection", "variable monitoring", "step execution", "call stack", "conditional breakpoints", "debugging tools", "error tracing"]
  },
  {
    "topic": "debugging-testing",
    "questionText": "Explain the concept of mocking in automated tests.",
    "keywords": ["dependency isolation", "test doubles", "fake data", "controlled environment", "behavior verification", "unit test reliability", "external services"]
  },
  {
    "topic": "debugging-testing",
    "questionText": "How can you identify and fix memory leaks in an application?",
    "keywords": ["profiling tools", "heap analysis", "object retention", "garbage collection", "resource management", "performance optimization", "diagnostics"]
  },
  {
    "topic": "debugging-testing",
    "questionText": "What is test-driven development (TDD) and what are its benefits?",
    "keywords": ["red-green-refactor", "design feedback", "code quality", "regression prevention", "documentation", "development workflow", "confidence"]
  },
  {
    "topic": "debugging-testing",
    "questionText": "Describe the process of root cause analysis for a production bug.",
    "keywords": ["log analysis", "error reproduction", "system monitoring", "incident response", "hypothesis testing", "fix validation", "postmortem"]
  },
  {
    "topic": "debugging-testing",
    "questionText": "How do you ensure your tests are reliable and not flaky?",
    "keywords": ["deterministic tests", "environment control", "test isolation", "mocking", "timing issues", "repeatability", "test maintenance"]
  },
  {
    "topic": "debugging-testing",
    "questionText": "What is code coverage and how should it be interpreted?",
    "keywords": ["test completeness", "coverage metrics", "quality indicators", "false confidence", "critical paths", "risk assessment", "tooling"]
  },
  {
    "topic": "debugging-testing",
    "questionText": "How do you debug asynchronous code or race conditions?",
    "keywords": ["concurrency", "timing analysis", "event sequencing", "logging", "breakpoints", "thread safety", "reproducibility"]
  },
  {
    "topic": "debugging-testing",
    "questionText": "What are the best practices for writing maintainable test cases?",
    "keywords": ["readability", "modularity", "clear assertions", "setup/teardown", "naming conventions", "test data management", "documentation"]
  },
  // APIs and Web Services
  {
    "topic": "apis-web-services",
    "questionText": "What is REST and what are its key principles?",
    "keywords": ["statelessness", "resource-based", "HTTP methods", "URI design", "representation", "client-server separation", "scalability"]
  },
  {
    "topic": "apis-web-services",
    "questionText": "Explain the difference between REST and GraphQL.",
    "keywords": ["query flexibility", "over-fetching", "under-fetching", "endpoint structure", "schema", "performance", "developer experience"]
  },
  {
    "topic": "apis-web-services",
    "questionText": "How do you secure an API against common vulnerabilities?",
    "keywords": ["authentication", "authorization", "rate limiting", "input validation", "CORS", "encryption", "OWASP"]
  },
  {
    "topic": "apis-web-services",
    "questionText": "What is API versioning and why is it important?",
    "keywords": ["backward compatibility", "breaking changes", "URI versioning", "header versioning", "client impact", "migration", "maintenance"]
  },
  {
    "topic": "apis-web-services",
    "questionText": "Describe the process of designing an idempotent API endpoint.",
    "keywords": ["HTTP methods", "safe operations", "side effects", "repeatable requests", "resource state", "error handling", "best practices"]
  },
  {
    "topic": "apis-web-services",
    "questionText": "How do you document an API for external developers?",
    "keywords": ["OpenAPI/Swagger", "examples", "endpoint descriptions", "authentication details", "error codes", "interactive docs", "versioning"]
  },
  {
    "topic": "apis-web-services",
    "questionText": "What are webhooks and how are they used?",
    "keywords": ["event-driven", "callback URLs", "asynchronous communication", "payload structure", "security", "retries", "integration"]
  },
  {
    "topic": "apis-web-services",
    "questionText": "How do you handle pagination in API responses?",
    "keywords": ["limit/offset", "cursor-based", "performance", "consistency", "client usability", "metadata", "scalability"]
  },
  {
    "topic": "apis-web-services",
    "questionText": "Explain the role of middleware in API development.",
    "keywords": ["request processing", "authentication", "logging", "error handling", "rate limiting", "modularity", "pipeline"]
  },
  {
    "topic": "apis-web-services",
    "questionText": "What is the difference between synchronous and asynchronous APIs?",
    "keywords": ["blocking", "non-blocking", "event-driven", "webhooks", "polling", "latency", "use cases"]
  },
  // Databases
  {
    "topic": "databases",
    "questionText": "What is normalization and why is it important in relational databases?",
    "keywords": ["data redundancy", "data integrity", "normal forms", "schema design", "update anomalies", "efficiency", "relationships"]
  },
  {
    "topic": "databases",
    "questionText": "Explain the difference between SQL and NoSQL databases.",
    "keywords": ["data model", "scalability", "schema flexibility", "consistency", "transactions", "use cases", "performance"]
  },
  {
    "topic": "databases",
    "questionText": "How do indexes improve database performance?",
    "keywords": ["query optimization", "search speed", "index types", "write overhead", "storage cost", "primary vs secondary", "maintenance"]
  },
  {
    "topic": "databases",
    "questionText": "What is ACID and why is it important?",
    "keywords": ["atomicity", "consistency", "isolation", "durability", "transaction management", "data reliability", "concurrency"]
  },
  {
    "topic": "databases",
    "questionText": "Describe the process of database sharding.",
    "keywords": ["horizontal partitioning", "scalability", "data distribution", "routing", "rebalancing", "availability", "complexity"]
  },
  {
    "topic": "databases",
    "questionText": "How do you prevent SQL injection attacks?",
    "keywords": ["input validation", "parameterized queries", "ORM", "escaping", "least privilege", "security testing", "best practices"]
  },
  {
    "topic": "databases",
    "questionText": "What is a database transaction and how is it managed?",
    "keywords": ["commit", "rollback", "savepoint", "concurrency control", "isolation levels", "error handling", "atomic operations"]
  },
  {
    "topic": "databases",
    "questionText": "Explain the concept of replication in databases.",
    "keywords": ["master-slave", "master-master", "eventual consistency", "failover", "read scaling", "data synchronization", "latency"]
  },
  {
    "topic": "databases",
    "questionText": "How do you design a schema for a many-to-many relationship?",
    "keywords": ["junction table", "foreign keys", "referential integrity", "query complexity", "normalization", "performance", "scalability"]
  },
  {
    "topic": "databases",
    "questionText": "What are stored procedures and when should you use them?",
    "keywords": ["precompiled code", "performance", "security", "business logic", "maintenance", "reusability", "database coupling"]
  },
  {
    "topic": "frontend-frameworks",
    "questionText": "What are the advantages of using a frontend framework like React or Angular?",
    "keywords": ["component-based", "state management", "reusability", "virtual DOM", "performance", "ecosystem", "developer productivity"]
  },
  // Frontend Frameworks
  {
    "topic": "frontend-frameworks",
    "questionText": "Explain the concept of virtual DOM and its benefits.",
    "keywords": ["DOM diffing", "efficient updates", "performance optimization", "rendering", "UI consistency", "framework internals", "reactivity"]
  },
  {
    "topic": "frontend-frameworks",
    "questionText": "How does data binding work in modern frontend frameworks?",
    "keywords": ["one-way binding", "two-way binding", "reactivity", "state synchronization", "event handling", "UI updates", "framework comparison"]
  },
  {
    "topic": "frontend-frameworks",
    "questionText": "What is component lifecycle and why is it important?",
    "keywords": ["mounting", "updating", "unmounting", "side effects", "resource management", "hooks", "performance"]
  },
  {
    "topic": "frontend-frameworks",
    "questionText": "How do you manage state in large frontend applications?",
    "keywords": ["global state", "context", "Redux", "MobX", "prop drilling", "scalability", "performance"]
  },
  {
    "topic": "frontend-frameworks",
    "questionText": "What are hooks in React and how do they improve development?",
    "keywords": ["useState", "useEffect", "custom hooks", "code reuse", "functional components", "side effects", "lifecycle"]
  },
  {
    "topic": "frontend-frameworks",
    "questionText": "How do you optimize frontend performance?",
    "keywords": ["code splitting", "lazy loading", "memoization", "virtualization", "bundle size", "caching", "render optimization"]
  },
  {
    "topic": "frontend-frameworks",
    "questionText": "Explain the concept of server-side rendering (SSR) and its benefits.",
    "keywords": ["SEO", "initial load time", "hydration", "Next.js", "performance", "user experience", "framework support"]
  },
  {
    "topic": "frontend-frameworks",
    "questionText": "How do you handle forms and validation in frontend frameworks?",
    "keywords": ["controlled components", "uncontrolled components", "form libraries", "validation rules", "user feedback", "error handling", "UX"]
  },
  {
    "topic": "frontend-frameworks",
    "questionText": "What are the best practices for structuring a frontend project?",
    "keywords": ["folder structure", "component organization", "modularity", "scalability", "naming conventions", "reusability", "maintainability"]
  },
  // Backend Development
  {
    "topic": "backend-development",
    "questionText": "What is the role of middleware in backend frameworks like Express?",
    "keywords": ["request processing", "response modification", "authentication", "logging", "error handling", "pipeline", "modularity"]
  },
  {
    "topic": "backend-development",
    "questionText": "How do you handle authentication and authorization in backend systems?",
    "keywords": ["JWT", "OAuth", "session management", "role-based access", "token validation", "security", "user management"]
  },
  {
    "topic": "backend-development",
    "questionText": "Explain the concept of RESTful API design.",
    "keywords": ["resource-based", "HTTP methods", "statelessness", "URI design", "CRUD operations", "best practices", "scalability"]
  },
  {
    "topic": "backend-development",
    "questionText": "How do you manage environment variables and configuration securely?",
    "keywords": ["dotenv", "config files", "secrets management", "environment separation", "security", "deployment", "best practices"]
  },
  {
    "topic": "backend-development",
    "questionText": "What are the common strategies for error handling in backend applications?",
    "keywords": ["try-catch", "error middleware", "logging", "user feedback", "graceful degradation", "monitoring", "alerts"]
  },
  {
    "topic": "backend-development",
    "questionText": "How do you implement rate limiting in a backend API?",
    "keywords": ["middleware", "redis", "token bucket", "IP tracking", "abuse prevention", "scalability", "performance"]
  },
  {
    "topic": "backend-development",
    "questionText": "What is the difference between synchronous and asynchronous programming in backend development?",
    "keywords": ["blocking", "non-blocking", "event loop", "callbacks", "promises", "performance", "scalability"]
  },
  {
    "topic": "backend-development",
    "questionText": "How do you ensure data validation and sanitization in backend systems?",
    "keywords": ["input validation", "schema validation", "security", "ORM", "data integrity", "user input", "best practices"]
  },
  {
    "topic": "backend-development",
    "questionText": "Explain the use of background jobs and queues in backend development.",
    "keywords": ["asynchronous processing", "task queues", "message brokers", "scalability", "performance", "job scheduling", "reliability"]
  },
  {
    "topic": "backend-development",
    "questionText": "How do you monitor and log backend application activity?",
    "keywords": ["logging libraries", "log aggregation", "metrics", "error tracking", "performance monitoring", "alerts", "observability"]
  },
  // Cloud and DevOps Basics
  {
    "topic": "cloud-devops-basics",
    "questionText": "What is Infrastructure as Code (IaC) and why is it important?",
    "keywords": ["automation", "version control", "repeatability", "Terraform", "CloudFormation", "deployment", "scalability"]
  },
  {
    "topic": "cloud-devops-basics",
    "questionText": "Explain the concept of continuous integration and continuous deployment (CI/CD).",
    "keywords": ["automation", "build pipelines", "testing", "deployment", "version control", "feedback loop", "DevOps"]
  },
  {
    "topic": "cloud-devops-basics",
    "questionText": "How do containers work and what are their benefits?",
    "keywords": ["Docker", "isolation", "portability", "resource efficiency", "microservices", "deployment", "scalability"]
  },
  {
    "topic": "cloud-devops-basics",
    "questionText": "What is the difference between vertical and horizontal scaling in the cloud?",
    "keywords": ["resource allocation", "auto-scaling", "performance", "cost", "availability", "load balancing", "architecture"]
  },
  {
    "topic": "cloud-devops-basics",
    "questionText": "How do you secure cloud infrastructure?",
    "keywords": ["IAM", "encryption", "network security", "firewalls", "compliance", "monitoring", "best practices"]
  },
  {
    "topic": "cloud-devops-basics",
    "questionText": "What are the advantages of using managed services in the cloud?",
    "keywords": ["maintenance", "scalability", "cost efficiency", "availability", "security", "focus on core business", "integration"]
  },
  {
    "topic": "cloud-devops-basics",
    "questionText": "Explain the concept of monitoring and alerting in DevOps.",
    "keywords": ["metrics", "log aggregation", "incident response", "uptime", "performance", "automation", "tooling"]
  },
  {
    "topic": "cloud-devops-basics",
    "questionText": "How do you implement automated testing in a CI/CD pipeline?",
    "keywords": ["unit tests", "integration tests", "build validation", "test coverage", "pipeline stages", "feedback", "quality assurance"]
  },
  {
    "topic": "cloud-devops-basics",
    "questionText": "What is serverless computing and what are its use cases?",
    "keywords": ["FaaS", "event-driven", "scalability", "cost efficiency", "deployment", "statelessness", "cloud providers"]
  },
  {
    "topic": "cloud-devops-basics",
    "questionText": "How do you manage secrets and sensitive data in DevOps workflows?",
    "keywords": ["secret management tools", "environment variables", "encryption", "access control", "compliance", "auditability", "best practices"]
  },
  // Manual Testing Fundamentals
  {
    "topic": "manual-testing-fundamentals",
    "questionText": "What is the difference between verification and validation in software testing?",
    "keywords": [
      "requirements analysis", "quality assurance", "process compliance", "end-user needs", "static vs dynamic testing", "defect prevention", "acceptance criteria"
    ]
  },
  {
    "topic": "manual-testing-fundamentals",
    "questionText": "How do you design effective test cases for maximum coverage?",
    "keywords": [
      "boundary value analysis", "equivalence partitioning", "decision tables", "test data selection", "traceability", "risk-based testing", "coverage metrics"
    ]
  },
  {
    "topic": "manual-testing-fundamentals",
    "questionText": "Explain the importance of exploratory testing and when to use it.",
    "keywords": [
      "ad hoc testing", "test heuristics", "learning-based approach", "defect discovery", "unstructured testing", "user perspective", "test charters"
    ]
  },
  {
    "topic": "manual-testing-fundamentals",
    "questionText": "What are the key components of a well-written bug report?",
    "keywords": [
      "reproducibility", "expected vs actual results", "steps to reproduce", "severity", "priority", "environment details", "attachments"
    ]
  },
  {
    "topic": "manual-testing-fundamentals",
    "questionText": "How do you prioritize test cases for execution under tight deadlines?",
    "keywords": [
      "risk assessment", "critical path", "business impact", "core functionality", "regression testing", "time constraints", "stakeholder input"
    ]
  },
  {
    "topic": "manual-testing-fundamentals",
    "questionText": "Describe the process of requirement traceability in manual testing.",
    "keywords": [
      "traceability matrix", "coverage mapping", "gap analysis", "change management", "compliance", "auditability", "test documentation"
    ]
  },
  {
    "topic": "manual-testing-fundamentals",
    "questionText": "What is the role of test data in manual testing and how do you manage it?",
    "keywords": [
      "data preparation", "test environment", "data masking", "edge cases", "repeatability", "data integrity", "test isolation"
    ]
  },
  {
    "topic": "manual-testing-fundamentals",
    "questionText": "How do you ensure unbiased and objective testing?",
    "keywords": [
      "test independence", "peer review", "blind testing", "documentation", "conflict of interest", "test planning", "quality standards"
    ]
  },
  {
    "topic": "manual-testing-fundamentals",
    "questionText": "Explain the difference between smoke testing and sanity testing.",
    "keywords": [
      "build verification", "critical functionality", "regression scope", "test depth", "release readiness", "quick checks", "stability assessment"
    ]
  },
  {
    "topic": "manual-testing-fundamentals",
    "questionText": "What are the challenges of manual regression testing and how can they be mitigated?",
    "keywords": [
      "test suite maintenance", "repetitive tasks", "human error", "automation feasibility", "prioritization", "test coverage", "resource allocation"
    ]
  },
  // Automation Testing Basics
  {
    "topic": "automation-testing-basics",
    "questionText": "What are the key benefits and limitations of automation testing?",
    "keywords": [
      "repeatability", "speed", "cost efficiency", "initial investment", "maintenance overhead", "test coverage", "human intervention"
    ]
  },
  {
    "topic": "automation-testing-basics",
    "questionText": "How do you select test cases suitable for automation?",
    "keywords": [
      "regression candidates", "high frequency", "data-driven", "stable functionality", "ROI analysis", "manual complexity", "automation feasibility"
    ]
  },
  {
    "topic": "automation-testing-basics",
    "questionText": "Explain the concept of data-driven testing and its advantages.",
    "keywords": [
      "parameterization", "test reusability", "input variation", "coverage expansion", "test scripts", "maintenance", "scalability"
    ]
  },
  {
    "topic": "automation-testing-basics",
    "questionText": "What are the challenges in maintaining automation scripts?",
    "keywords": [
      "UI changes", "locators", "flaky tests", "code refactoring", "test data management", "framework updates", "version control"
    ]
  },
  {
    "topic": "automation-testing-basics",
    "questionText": "Describe the role of assertions in automation testing.",
    "keywords": [
      "validation", "expected outcomes", "test pass/fail", "error reporting", "test reliability", "debugging", "script robustness"
    ]
  },
  {
    "topic": "automation-testing-basics",
    "questionText": "How do you handle dynamic elements in UI automation?",
    "keywords": [
      "dynamic locators", "wait strategies", "synchronization", "XPath/CSS selectors", "element identification", "timing issues", "test stability"
    ]
  },
  {
    "topic": "automation-testing-basics",
    "questionText": "What is the Page Object Model and why is it important?",
    "keywords": [
      "code organization", "reusability", "maintenance", "separation of concerns", "test readability", "scalability", "design patterns"
    ]
  },
  {
    "topic": "automation-testing-basics",
    "questionText": "How do you integrate automation tests into a CI/CD pipeline?",
    "keywords": [
      "build triggers", "test execution", "reporting", "pipeline stages", "failure handling", "feedback loop", "deployment gating"
    ]
  },
  {
    "topic": "automation-testing-basics",
    "questionText": "Explain the difference between functional and non-functional automation tests.",
    "keywords": [
      "feature validation", "performance", "security", "usability", "test objectives", "tool selection", "coverage"
    ]
  },
  {
    "topic": "automation-testing-basics",
    "questionText": "What are the best practices for writing maintainable automation scripts?",
    "keywords": [
      "modularity", "naming conventions", "code reuse", "parameterization", "error handling", "documentation", "review process"
    ]
  },
  // Testing Tools
  {
    "topic": "testing-tools",
    "questionText": "What factors should you consider when choosing a testing tool for your project?",
    "keywords": [
      "project requirements", "technology compatibility", "team expertise", "integration", "cost", "support", "scalability"
    ]
  },
  {
    "topic": "testing-tools",
    "questionText": "How do you evaluate the effectiveness of a test management tool?",
    "keywords": [
      "traceability", "reporting", "collaboration", "test planning", "defect tracking", "integration", "usability"
    ]
  },
  {
    "topic": "testing-tools",
    "questionText": "Explain the role of Selenium in automation testing.",
    "keywords": [
      "browser automation", "cross-browser testing", "WebDriver", "script languages", "integration", "open source", "limitations"
    ]
  },
  {
    "topic": "testing-tools",
    "questionText": "What are the advantages of using JUnit or TestNG for unit testing?",
    "keywords": [
      "annotations", "test suites", "assertions", "test lifecycle", "integration", "reporting", "community support"
    ]
  },
  {
    "topic": "testing-tools",
    "questionText": "How does a continuous integration tool like Jenkins support testing?",
    "keywords": [
      "build automation", "test execution", "reporting", "pipeline configuration", "plugin ecosystem", "scalability", "feedback"
    ]
  },
  {
    "topic": "testing-tools",
    "questionText": "Describe the use of static code analysis tools in quality assurance.",
    "keywords": [
      "code quality", "bug detection", "security vulnerabilities", "coding standards", "automation", "integration", "early feedback"
    ]
  },
  {
    "topic": "testing-tools",
    "questionText": "What is the purpose of using mocking frameworks in testing?",
    "keywords": [
      "dependency isolation", "test doubles", "behavior verification", "unit testing", "test reliability", "integration", "flexibility"
    ]
  },
  {
    "topic": "testing-tools",
    "questionText": "How do you use bug tracking tools to improve the testing process?",
    "keywords": [
      "defect lifecycle", "prioritization", "assignment", "status tracking", "metrics", "collaboration", "reporting"
    ]
  },
  {
    "topic": "testing-tools",
    "questionText": "Explain the benefits of using cloud-based testing tools.",
    "keywords": [
      "scalability", "accessibility", "cost efficiency", "parallel execution", "device coverage", "integration", "maintenance"
    ]
  },
  {
    "topic": "testing-tools",
    "questionText": "What are the challenges of tool integration in a complex testing environment?",
    "keywords": [
      "compatibility", "data synchronization", "workflow automation", "customization", "maintenance", "scalability", "vendor support"
    ]
  },
  // API Testing
  {
    "topic": "api-testing",
    "questionText": "What are the key aspects to validate when testing a REST API?",
    "keywords": [
      "status codes", "response structure", "data validation", "error handling", "authentication", "performance", "security"
    ]
  },
  {
    "topic": "api-testing",
    "questionText": "How do you design effective test cases for API endpoints?",
    "keywords": [
      "positive tests", "negative tests", "boundary conditions", "input validation", "data-driven testing", "coverage", "automation"
    ]
  },
  {
    "topic": "api-testing",
    "questionText": "Explain the importance of schema validation in API testing.",
    "keywords": [
      "contract testing", "OpenAPI/Swagger", "data types", "field constraints", "backward compatibility", "automation", "error detection"
    ]
  },
  {
    "topic": "api-testing",
    "questionText": "How do you test API authentication and authorization mechanisms?",
    "keywords": [
      "token validation", "role-based access", "OAuth", "JWT", "session management", "security", "negative scenarios"
    ]
  },
  {
    "topic": "api-testing",
    "questionText": "What are the challenges of testing APIs with third-party dependencies?",
    "keywords": [
      "mocking", "stubbing", "network latency", "rate limits", "data consistency", "error simulation", "integration"
    ]
  },
  {
    "topic": "api-testing",
    "questionText": "How do you automate API testing and integrate it into CI/CD pipelines?",
    "keywords": [
      "test scripts", "build triggers", "reporting", "failure handling", "pipeline stages", "feedback loop", "deployment gating"
    ]
  },
  {
    "topic": "api-testing",
    "questionText": "Explain the concept of idempotency in API testing and why it matters.",
    "keywords": [
      "safe operations", "repeatable requests", "side effects", "HTTP methods", "data consistency", "error handling", "best practices"
    ]
  },
  {
    "topic": "api-testing",
    "questionText": "How do you test for API rate limiting and throttling?",
    "keywords": [
      "request bursts", "429 errors", "quota enforcement", "retry logic", "performance impact", "automation", "monitoring"
    ]
  },
  {
    "topic": "api-testing",
    "questionText": "What is contract testing and how does it help in API development?",
    "keywords": [
      "consumer-driven contracts", "provider verification", "schema validation", "integration", "backward compatibility", "automation", "collaboration"
    ]
  },
  {
    "topic": "api-testing",
    "questionText": "How do you ensure API security during testing?",
    "keywords": [
      "input sanitization", "SQL injection", "XSS", "authentication", "authorization", "encryption", "vulnerability scanning"
    ]
  },
  {
    "topic": "performance-testing",
    "questionText": "What are the main objectives of performance testing?",
    "keywords": [
      "response time", "throughput", "resource utilization", "scalability", "bottleneck identification", "stability", "user experience"
    ]
  },
  {
    "topic": "performance-testing",
    "questionText": "How do you design a load testing scenario for a web application?",
    "keywords": [
      "user simulation", "concurrent users", "test scripts", "think time", "ramp-up", "peak load", "realistic patterns"
    ]
  },
  {
    "topic": "performance-testing",
    "questionText": "Explain the difference between load, stress, and soak testing.",
    "keywords": [
      "test objectives", "duration", "resource exhaustion", "system limits", "memory leaks", "stability", "failure points"
    ]
  },
  {
    "topic": "performance-testing",
    "questionText": "What metrics do you monitor during performance testing?",
    "keywords": [
      "CPU usage", "memory consumption", "disk I/O", "network latency", "error rates", "response time", "throughput"
    ]
  },
  {
    "topic": "performance-testing",
    "questionText": "How do you identify and analyze performance bottlenecks?",
    "keywords": [
      "profiling tools", "resource monitoring", "code hotspots", "database queries", "network analysis", "scalability", "root cause analysis"
    ]
  },
  {
    "topic": "performance-testing",
    "questionText": "Describe the process of baseline and benchmark testing.",
    "keywords": [
      "initial measurement", "performance goals", "comparison", "regression detection", "trend analysis", "test repeatability", "reporting"
    ]
  },
  {
    "topic": "performance-testing",
    "questionText": "How do you ensure the reliability of performance test results?",
    "keywords": [
      "environment consistency", "test repeatability", "data isolation", "noise reduction", "automation", "result validation", "statistical analysis"
    ]
  },
  {
    "topic": "performance-testing",
    "questionText": "What are the challenges of performance testing in cloud environments?",
    "keywords": [
      "resource variability", "auto-scaling", "network latency", "cost management", "test reproducibility", "multi-tenancy", "tool compatibility"
    ]
  },
  {
    "topic": "performance-testing",
    "questionText": "How do you use performance testing tools like JMeter or LoadRunner?",
    "keywords": [
      "test script creation", "parameterization", "distributed testing", "result analysis", "integration", "reporting", "scalability"
    ]
  },
  {
    "topic": "performance-testing",
    "questionText": "Explain the importance of performance testing in CI/CD pipelines.",
    "keywords": [
      "early detection", "automation", "regression prevention", "deployment gating", "feedback loop", "scalability", "quality assurance"
    ]
  },
  {
    "topic": "continuous-testing-cicd",
    "questionText": "What is continuous testing and how does it fit into the CI/CD pipeline?",
    "keywords": [
      "automation", "early feedback", "pipeline integration", "quality gates", "shift-left", "test coverage", "deployment readiness"
    ]
  },
  {
    "topic": "continuous-testing-cicd",
    "questionText": "How do you automate test execution in a CI/CD workflow?",
    "keywords": [
      "build triggers", "test orchestration", "parallel execution", "pipeline stages", "failure handling", "reporting", "tool integration"
    ]
  },
  {
    "topic": "continuous-testing-cicd",
    "questionText": "What are the benefits of integrating performance and security tests into CI/CD?",
    "keywords": [
      "early detection", "risk mitigation", "regression prevention", "compliance", "automation", "quality assurance", "deployment gating"
    ]
  },
  {
    "topic": "continuous-testing-cicd",
    "questionText": "How do you manage test data and environments for continuous testing?",
    "keywords": [
      "data provisioning", "environment isolation", "test repeatability", "data masking", "automation", "consistency", "scalability"
    ]
  },
  {
    "topic": "continuous-testing-cicd",
    "questionText": "Explain the role of test reporting and analytics in CI/CD pipelines.",
    "keywords": [
      "dashboard", "trend analysis", "failure tracking", "feedback loop", "quality metrics", "stakeholder communication", "continuous improvement"
    ]
  },
  {
    "topic": "continuous-testing-cicd",
    "questionText": "What challenges do you face when scaling continuous testing across multiple teams?",
    "keywords": [
      "test standardization", "tool compatibility", "resource allocation", "collaboration", "test maintenance", "governance", "scalability"
    ]
  },
  {
    "topic": "continuous-testing-cicd",
    "questionText": "How do you ensure fast feedback and minimal pipeline delays in continuous testing?",
    "keywords": [
      "test prioritization", "parallel execution", "test selection", "pipeline optimization", "caching", "incremental testing", "resource management"
    ]
  },
  {
    "topic": "continuous-testing-cicd",
    "questionText": "Describe the process of integrating automated UI and API tests in CI/CD.",
    "keywords": [
      "test orchestration", "tool integration", "pipeline configuration", "test dependencies", "failure handling", "reporting", "scalability"
    ]
  },
  {
    "topic": "continuous-testing-cicd",
    "questionText": "How do you handle flaky tests in a continuous testing environment?",
    "keywords": [
      "test reliability", "root cause analysis", "quarantine", "retry logic", "test maintenance", "reporting", "automation"
    ]
  },
  {
    "topic": "continuous-testing-cicd",
    "questionText": "What are the key metrics to track for continuous testing effectiveness?",
    "keywords": [
      "pass/fail rates", "test coverage", "execution time", "defect leakage", "feedback speed", "trend analysis", "quality improvement"
    ]
  },
  {
    "topic": "excel-formulas-functions",
    "questionText": "How do you use VLOOKUP and what are its limitations?",
    "keywords": [
      "vertical lookup", "range lookup", "approximate match", "column index", "data integrity", "performance", "alternatives"
    ]
  },
  {
    "topic": "excel-formulas-functions",
    "questionText": "Explain the difference between absolute and relative cell references in formulas.",
    "keywords": [
      "cell referencing", "formula copying", "dollar sign usage", "dynamic updates", "range selection", "drag-fill", "error prevention"
    ]
  },
  {
    "topic": "excel-formulas-functions",
    "questionText": "How can you use IF, AND, and OR functions to create complex logical conditions?",
    "keywords": [
      "nested logic", "conditional statements", "decision making", "multi-condition evaluation", "formula readability", "error handling", "data validation"
    ]
  },
  {
    "topic": "excel-formulas-functions",
    "questionText": "Describe the use of array formulas and their advantages.",
    "keywords": [
      "multi-cell operations", "dynamic ranges", "aggregate calculations", "performance impact", "curly braces", "modern functions", "error handling"
    ]
  },
  {
    "topic": "excel-formulas-functions",
    "questionText": "What is the purpose of the INDEX and MATCH combination?",
    "keywords": [
      "flexible lookup", "two-way search", "dynamic referencing", "column/row independence", "performance", "error handling", "advanced lookups"
    ]
  },
  {
    "topic": "excel-formulas-functions",
    "questionText": "How do you use conditional formatting with formulas?",
    "keywords": [
      "visual cues", "dynamic highlighting", "custom rules", "data-driven formatting", "error spotting", "trend analysis", "user experience"
    ]
  },
  {
    "topic": "excel-formulas-functions",
    "questionText": "Explain the use of TEXT and DATE functions for data transformation.",
    "keywords": [
      "string manipulation", "date parsing", "format conversion", "data cleaning", "concatenation", "extraction", "automation"
    ]
  },
  {
    "topic": "excel-formulas-functions",
    "questionText": "How can you use SUMPRODUCT for advanced calculations?",
    "keywords": [
      "weighted sums", "conditional aggregation", "multi-criteria analysis", "array operations", "performance", "data modeling", "complex formulas"
    ]
  },
  {
    "topic": "excel-formulas-functions",
    "questionText": "What are dynamic named ranges and how do they improve formula flexibility?",
    "keywords": [
      "OFFSET function", "automatic expansion", "data tables", "formula maintenance", "scalability", "error reduction", "automation"
    ]
  },
  {
    "topic": "excel-formulas-functions",
    "questionText": "How do you troubleshoot and audit complex formulas in Excel?",
    "keywords": [
      "formula evaluation", "trace precedents", "error checking", "step-by-step debugging", "dependency analysis", "documentation", "best practices"
    ]
  },
  {
    "topic": "data-cleaning",
    "questionText": "What are the common types of data quality issues encountered during cleaning?",
    "keywords": [
      "missing values", "duplicates", "inconsistent formats", "outliers", "typos", "invalid entries", "noise"
    ]
  },
  {
    "topic": "data-cleaning",
    "questionText": "How do you handle missing data in a dataset?",
    "keywords": [
      "imputation", "deletion", "mean/median substitution", "predictive modeling", "flagging", "impact analysis", "data integrity"
    ]
  },
  {
    "topic": "data-cleaning",
    "questionText": "Explain the process of detecting and removing duplicate records.",
    "keywords": [
      "record matching", "unique constraints", "fuzzy matching", "deduplication algorithms", "data consistency", "automation", "validation"
    ]
  },
  {
    "topic": "data-cleaning",
    "questionText": "How do you standardize categorical variables for analysis?",
    "keywords": [
      "label encoding", "one-hot encoding", "case normalization", "category mapping", "consistency", "data transformation", "feature engineering"
    ]
  },
  {
    "topic": "data-cleaning",
    "questionText": "What techniques do you use to identify and handle outliers?",
    "keywords": [
      "statistical thresholds", "visualization", "z-score", "IQR", "domain knowledge", "impact assessment", "data correction"
    ]
  },
  {
    "topic": "data-cleaning",
    "questionText": "Describe the importance of data type consistency and how to enforce it.",
    "keywords": [
      "type casting", "schema validation", "parsing errors", "data integrity", "automation", "tool support", "error prevention"
    ]
  },
  {
    "topic": "data-cleaning",
    "questionText": "How do you clean and parse date and time fields in datasets?",
    "keywords": [
      "format normalization", "timezone handling", "missing timestamps", "string parsing", "feature extraction", "consistency", "automation"
    ]
  },
  {
    "topic": "data-cleaning",
    "questionText": "What is the role of regular expressions in data cleaning?",
    "keywords": [
      "pattern matching", "string extraction", "validation", "format enforcement", "data transformation", "automation", "error detection"
    ]
  },
  {
    "topic": "data-cleaning",
    "questionText": "How do you document and automate the data cleaning process?",
    "keywords": [
      "reproducibility", "pipeline automation", "code comments", "change tracking", "workflow management", "tool selection", "collaboration"
    ]
  },
  {
    "topic": "data-cleaning",
    "questionText": "Explain the impact of data cleaning on downstream analysis and modeling.",
    "keywords": [
      "model accuracy", "bias reduction", "feature quality", "interpretability", "data reliability", "error propagation", "decision making"
    ]
  },
  {
    "topic": "sql-queries",
    "questionText": "How do you write a query to join multiple tables and what are the performance considerations?",
    "keywords": [
      "INNER JOIN", "LEFT JOIN", "index usage", "query optimization", "execution plan", "data volume", "normalization"
    ]
  },
  {
    "topic": "sql-queries",
    "questionText": "Explain the use of window functions and their advantages.",
    "keywords": [
      "ROW_NUMBER", "RANK", "partitioning", "aggregation", "running totals", "advanced analytics", "performance"
    ]
  },
  {
    "topic": "sql-queries",
    "questionText": "How do you filter and aggregate data using GROUP BY and HAVING clauses?",
    "keywords": [
      "aggregation functions", "conditional filtering", "summarization", "subqueries", "performance", "data grouping", "reporting"
    ]
  },
  {
    "topic": "sql-queries",
    "questionText": "What are subqueries and how can they be used efficiently?",
    "keywords": [
      "nested queries", "correlated subquery", "IN/EXISTS", "performance impact", "readability", "alternatives", "optimization"
    ]
  },
  {
    "topic": "sql-queries",
    "questionText": "Describe the process of writing parameterized queries and their benefits.",
    "keywords": [
      "SQL injection prevention", "prepared statements", "security", "performance", "code maintainability", "dynamic queries", "best practices"
    ]
  },
  {
    "topic": "sql-queries",
    "questionText": "How do you handle NULL values in SQL queries?",
    "keywords": [
      "IS NULL", "COALESCE", "NULLIF", "conditional logic", "aggregation impact", "data integrity", "query correctness"
    ]
  },
  {
    "topic": "sql-queries",
    "questionText": "What are common indexing strategies and how do they affect query performance?",
    "keywords": [
      "B-tree", "hash index", "composite index", "covering index", "index scan", "write overhead", "query optimization"
    ]
  },
  {
    "topic": "sql-queries",
    "questionText": "Explain the difference between UNION and UNION ALL.",
    "keywords": [
      "duplicate removal", "set operations", "performance", "result set", "use cases", "query optimization", "data merging"
    ]
  },
  {
    "topic": "sql-queries",
    "questionText": "How do you write efficient queries for large datasets?",
    "keywords": [
      "index usage", "query planning", "partitioning", "batch processing", "pagination", "resource management", "performance tuning"
    ]
  },
  {
    "topic": "sql-queries",
    "questionText": "Describe the use of CTEs (Common Table Expressions) and their advantages.",
    "keywords": [
      "WITH clause", "recursive queries", "readability", "modularity", "complex query decomposition", "temporary result sets", "optimization"
    ]
  },
  {
    "topic": "data-visualization",
    "questionText": "What are the key principles of effective data visualization?",
    "keywords": [
      "clarity", "accuracy", "minimalism", "storytelling", "audience targeting", "visual hierarchy", "data-ink ratio"
    ]
  },
  {
    "topic": "data-visualization",
    "questionText": "How do you choose the right chart type for different data scenarios?",
    "keywords": [
      "categorical vs numerical", "trend analysis", "comparison", "distribution", "relationship", "chart selection", "misleading visuals"
    ]
  },
  {
    "topic": "data-visualization",
    "questionText": "Explain the importance of color theory in data visualization.",
    "keywords": [
      "color blindness", "contrast", "categorical palettes", "sequential palettes", "perceptual uniformity", "highlighting", "accessibility"
    ]
  },
  {
    "topic": "data-visualization",
    "questionText": "How do you handle large datasets in interactive dashboards?",
    "keywords": [
      "data aggregation", "sampling", "lazy loading", "performance optimization", "filtering", "drill-down", "user experience"
    ]
  },
  {
    "topic": "data-visualization",
    "questionText": "What are the best practices for labeling and annotating charts?",
    "keywords": [
      "axis labeling", "legends", "tooltips", "direct labeling", "contextual information", "readability", "interpretation"
    ]
  },
  {
    "topic": "data-visualization",
    "questionText": "Describe the role of interactivity in modern data visualization tools.",
    "keywords": [
      "user engagement", "dynamic filtering", "hover effects", "drill-down", "real-time updates", "exploratory analysis", "dashboard design"
    ]
  },
  {
    "topic": "data-visualization",
    "questionText": "How do you avoid common pitfalls and misleading visualizations?",
    "keywords": [
      "axis manipulation", "truncated scales", "cherry-picking", "visual distortion", "context omission", "bias", "ethical considerations"
    ]
  },
  {
    "topic": "data-visualization",
    "questionText": "What are the advantages of using open-source visualization libraries?",
    "keywords": [
      "customization", "community support", "integration", "cost efficiency", "flexibility", "scalability", "feature set"
    ]
  },
  {
    "topic": "data-visualization",
    "questionText": "How do you ensure accessibility in your data visualizations?",
    "keywords": [
      "alt text", "color contrast", "keyboard navigation", "screen reader support", "responsive design", "universal design", "compliance"
    ]
  },
  {
    "topic": "data-visualization",
    "questionText": "Explain the process of creating a data story using visualization.",
    "keywords": [
      "narrative flow", "insight highlighting", "contextualization", "visual sequencing", "call to action", "audience engagement", "impact"
    ]
  },
  {
    "topic": "python-data-analysis",
    "questionText": "What are the advantages of using pandas for data analysis in Python?",
    "keywords": [
      "DataFrame structure", "vectorized operations", "data cleaning", "aggregation", "groupby", "integration", "performance"
    ]
  },
  {
    "topic": "python-data-analysis",
    "questionText": "How do you handle missing data in pandas?",
    "keywords": [
      "isnull", "dropna", "fillna", "imputation", "forward/backward fill", "data integrity", "analysis impact"
    ]
  },
  {
    "topic": "python-data-analysis",
    "questionText": "Explain the process of merging and joining datasets in pandas.",
    "keywords": [
      "merge", "join", "concat", "keys", "index alignment", "many-to-many", "data integration"
    ]
  },
  {
    "topic": "python-data-analysis",
    "questionText": "How do you perform group-wise operations and aggregations in pandas?",
    "keywords": [
      "groupby", "aggregation functions", "custom aggregations", "multi-index", "pivot tables", "performance", "data summarization"
    ]
  },
  {
    "topic": "python-data-analysis",
    "questionText": "What are the best practices for handling large datasets in Python?",
    "keywords": [
      "chunking", "memory optimization", "dask", "efficient data types", "lazy evaluation", "parallel processing", "performance"
    ]
  },
  {
    "topic": "python-data-analysis",
    "questionText": "Describe the use of lambda functions and apply methods in data transformation.",
    "keywords": [
      "anonymous functions", "row/column operations", "custom logic", "vectorization", "performance", "readability", "flexibility"
    ]
  },
  {
    "topic": "python-data-analysis",
    "questionText": "How do you visualize data distributions using Python libraries?",
    "keywords": [
      "matplotlib", "seaborn", "histograms", "boxplots", "density plots", "customization", "insight extraction"
    ]
  },
  {
    "topic": "python-data-analysis",
    "questionText": "What is the role of NumPy in data analysis workflows?",
    "keywords": [
      "array operations", "broadcasting", "performance", "integration", "linear algebra", "random sampling", "data preprocessing"
    ]
  },
  {
    "topic": "python-data-analysis",
    "questionText": "How do you export and import data in various formats using pandas?",
    "keywords": [
      "read_csv", "to_excel", "read_json", "parquet", "data serialization", "I/O performance", "compatibility"
    ]
  },
  {
    "topic": "python-data-analysis",
    "questionText": "Explain the importance of reproducibility in data analysis scripts.",
    "keywords": [
      "random seeds", "notebooks", "version control", "documentation", "pipeline automation", "collaboration", "result validation"
    ]
  },
  {
    "topic": "exploratory-data-analysis",
    "questionText": "What are the main objectives of exploratory data analysis (EDA)?",
    "keywords": [
      "pattern discovery", "outlier detection", "data distribution", "hypothesis generation", "feature selection", "data quality", "insight extraction"
    ]
  },
  {
    "topic": "exploratory-data-analysis",
    "questionText": "How do you summarize and describe the central tendency and spread of data?",
    "keywords": [
      "mean", "median", "mode", "variance", "standard deviation", "range", "percentiles"
    ]
  },
  {
    "topic": "exploratory-data-analysis",
    "questionText": "Explain the use of visualizations in EDA.",
    "keywords": [
      "histograms", "scatter plots", "box plots", "correlation matrix", "trend analysis", "distribution analysis", "anomaly detection"
    ]
  },
  {
    "topic": "exploratory-data-analysis",
    "questionText": "How do you identify and handle outliers during EDA?",
    "keywords": [
      "visual inspection", "z-score", "IQR", "domain knowledge", "impact assessment", "data transformation", "robust statistics"
    ]
  },
  {
    "topic": "exploratory-data-analysis",
    "questionText": "What techniques do you use to analyze relationships between variables?",
    "keywords": [
      "correlation", "covariance", "scatter plots", "pair plots", "grouped analysis", "feature interaction", "multicollinearity"
    ]
  },
  {
    "topic": "exploratory-data-analysis",
    "questionText": "How do you deal with missing values during EDA?",
    "keywords": [
      "visualization", "imputation", "deletion", "pattern analysis", "impact on analysis", "data integrity", "documentation"
    ]
  },
  {
    "topic": "exploratory-data-analysis",
    "questionText": "Describe the process of feature engineering during EDA.",
    "keywords": [
      "feature creation", "transformation", "encoding", "scaling", "interaction terms", "domain knowledge", "model readiness"
    ]
  },
  {
    "topic": "exploratory-data-analysis",
    "questionText": "How do you document and communicate findings from EDA?",
    "keywords": [
      "notebooks", "visualizations", "summary statistics", "insight reporting", "stakeholder communication", "reproducibility", "presentation"
    ]
  },
  {
    "topic": "exploratory-data-analysis",
    "questionText": "What are the challenges of EDA with high-dimensional data?",
    "keywords": [
      "curse of dimensionality", "visualization limitations", "feature selection", "dimensionality reduction", "interpretability", "scalability", "noise"
    ]
  },
  {
    "topic": "exploratory-data-analysis",
    "questionText": "Explain the importance of iterative analysis in EDA.",
    "keywords": [
      "hypothesis refinement", "feedback loop", "progressive insight", "data-driven decisions", "flexibility", "continuous learning", "model improvement"
    ]
  }
 
];

async function insertQuestions() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Question.deleteMany({}); // Clear existing questions
    await Question.insertMany(sampleQuestions);
    console.log('✅ Sample questions inserted successfully');
    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Error inserting questions:', err);
    mongoose.disconnect();
  }
}

insertQuestions();
