// scripts/seedQuestions.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('../models/Question'); // path to your model

dotenv.config(); // Load MongoDB URI

const sampleQuestions = [
  // Data Structures
  {
    topic: "data-structures",
    questionText: "What is an array and how is it different from a linked list?",
    keywords: ["array", "linked list", "difference"]
  },
  {
    topic: "data-structures",
    questionText: "Explain the concept of a stack and its applications.",
    keywords: ["stack", "LIFO", "applications"]
  },
  {
    topic: "data-structures",
    questionText: "What is a queue? How does it differ from a stack?",
    keywords: ["queue", "FIFO", "stack", "difference"]
  },
  {
    topic: "data-structures",
    questionText: "Describe a binary tree and its properties.",
    keywords: ["binary tree", "properties"]
  },
  {
    topic: "data-structures",
    questionText: "What is a hash table and how does it work?",
    keywords: ["hash table", "hashing", "collision"]
  },
  {
    topic: "data-structures",
    questionText: "Explain the difference between a singly and doubly linked list.",
    keywords: ["singly linked list", "doubly linked list", "difference"]
  },
  {
    topic: "data-structures",
    questionText: "What is a circular linked list?",
    keywords: ["circular linked list"]
  },
  {
    topic: "data-structures",
    questionText: "Describe the structure and use cases of a heap.",
    keywords: ["heap", "priority queue", "use cases"]
  },
  {
    topic: "data-structures",
    questionText: "What is a graph? Name its types.",
    keywords: ["graph", "directed", "undirected", "types"]
  },
  {
    topic: "data-structures",
    questionText: "Explain the concept of a trie and its applications.",
    keywords: ["trie", "prefix tree", "applications"]
  },
  {
    topic: "data-structures",
    questionText: "What is a balanced binary search tree?",
    keywords: ["balanced", "binary search tree", "BST"]
  },
  {
    topic: "data-structures",
    questionText: "How does a set differ from an array?",
    keywords: ["set", "array", "difference"]
  },
  {
    topic: "data-structures",
    questionText: "What is a deque and where is it used?",
    keywords: ["deque", "double-ended queue", "use cases"]
  },
  {
    topic: "data-structures",
    questionText: "Explain the concept of adjacency matrix and adjacency list.",
    keywords: ["adjacency matrix", "adjacency list", "graph"]
  },
  {
    topic: "data-structures",
    questionText: "What is a self-balancing tree? Give examples.",
    keywords: ["self-balancing tree", "AVL", "Red-Black Tree"]
  },

  // Algorithms
  {
    topic: "algorithms",
    questionText: "What is bubble sort and how does it work?",
    keywords: ["bubble sort", "sorting", "algorithm"]
  },
  {
    topic: "algorithms",
    questionText: "Explain the quicksort algorithm.",
    keywords: ["quicksort", "sorting", "algorithm"]
  },
  {
    topic: "algorithms",
    questionText: "What is merge sort? Describe its time complexity.",
    keywords: ["merge sort", "sorting", "time complexity"]
  },
  {
    topic: "algorithms",
    questionText: "Describe the binary search algorithm.",
    keywords: ["binary search", "searching", "algorithm"]
  },
  {
    topic: "algorithms",
    questionText: "What is linear search and when is it used?",
    keywords: ["linear search", "searching", "algorithm"]
  },
  {
    topic: "algorithms",
    questionText: "Explain Dijkstra's algorithm.",
    keywords: ["Dijkstra", "shortest path", "graph"]
  },
  {
    topic: "algorithms",
    questionText: "What is dynamic programming? Give an example.",
    keywords: ["dynamic programming", "example"]
  },
  {
    topic: "algorithms",
    questionText: "Describe the concept of recursion with an example.",
    keywords: ["recursion", "example"]
  },
  {
    topic: "algorithms",
    questionText: "What is the difference between BFS and DFS?",
    keywords: ["BFS", "DFS", "difference", "graph traversal"]
  },
  {
    topic: "algorithms",
    questionText: "Explain the concept of backtracking.",
    keywords: ["backtracking", "algorithm"]
  },
  {
    topic: "algorithms",
    questionText: "What is a greedy algorithm? Provide an example.",
    keywords: ["greedy algorithm", "example"]
  },
  {
    topic: "algorithms",
    questionText: "Describe the time and space complexity of selection sort.",
    keywords: ["selection sort", "time complexity", "space complexity"]
  },
  {
    topic: "algorithms",
    questionText: "What is memoization in algorithms?",
    keywords: ["memoization", "dynamic programming"]
  },
  {
    topic: "algorithms",
    questionText: "Explain the concept of divide and conquer.",
    keywords: ["divide and conquer", "algorithm"]
  },
  {
    topic: "algorithms",
    questionText: "What is the traveling salesman problem?",
    keywords: ["traveling salesman problem", "TSP", "algorithm"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is Object-Oriented ?",
    "keywords": ["oop", "object-oriented", "programming"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What are the four main principles of OOP?",
    "keywords": ["principles", "oop", "encapsulation", "inheritance", "polymorphism", "abstraction"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "Explain the concept of a class in OOP.",
    "keywords": ["class", "oop", "object-oriented"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is an object in OOP?",
    "keywords": ["object", "oop", "instance"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is encapsulation?",
    "keywords": ["encapsulation", "oop", "data hiding"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "How Programmingdoes inheritance work in OOP?",
    "keywords": ["inheritance", "oop", "parent", "child", "base", "derived"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is polymorphism?",
    "keywords": ["polymorphism", "oop", "overriding", "overloading"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is abstraction in OOP?",
    "keywords": ["abstraction", "oop", "abstract", "details"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is the difference between a class and an object?",
    "keywords": ["class", "object", "difference", "oop"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is a constructor?",
    "keywords": ["constructor", "oop", "initialization"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is a destructor?",
    "keywords": ["destructor", "oop", "cleanup"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is method overloading?",
    "keywords": ["method overloading", "oop", "compile-time polymorphism"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is method overriding?",
    "keywords": ["method overriding", "oop", "runtime polymorphism"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is the difference between compile-time and run-time polymorphism?",
    "keywords": ["compile-time", "run-time", "polymorphism", "difference"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is an interface?",
    "keywords": ["interface", "oop", "contract"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is an abstract class?",
    "keywords": ["abstract class", "oop", "abstraction"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is the difference between an abstract class and an interface?",
    "keywords": ["abstract class", "interface", "difference"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is multiple inheritance? Is it supported in all OOP languages?",
    "keywords": ["multiple inheritance", "oop", "languages"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is a static member in a class?",
    "keywords": ["static member", "class", "oop"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is the difference between public, private, and protected access specifiers?",
    "keywords": ["public", "private", "protected", "access specifiers"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is the 'this' keyword?",
    "keywords": ["this", "keyword", "oop"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is the 'super' keyword?",
    "keywords": ["super", "keyword", "oop"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is a friend function (in C++)?",
    "keywords": ["friend function", "C++", "oop"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is the difference between association, aggregation, and composition?",
    "keywords": ["association", "aggregation", "composition", "difference"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is a virtual function?",
    "keywords": ["virtual function", "oop", "runtime polymorphism"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is dynamic binding?",
    "keywords": ["dynamic binding", "oop", "runtime"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is the SOLID principle in OOP?",
    "keywords": ["SOLID", "principle", "oop"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is dependency injection?",
    "keywords": ["dependency injection", "oop", "design pattern"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is the difference between shallow copy and deep copy?",
    "keywords": ["shallow copy", "deep copy", "difference"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What are design patterns? Name a few commonly used OOP design patterns.",
    "keywords": ["design patterns", "oop", "singleton", "factory", "observer"]
  },
  {
    "topic": "object-oriented-programming",
    "questionText": "What is object composition and how is it different from inheritance?",
    "keywords": ["object composition", "inheritance", "difference"]
  },
  {
    topic: "object-oriented-programming",
    questionText: "Tell me about yourself?",
    keywords: ["currently working", "good", "completed", "experience", "skills"]
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
