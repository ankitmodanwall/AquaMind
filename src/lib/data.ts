export type QuizQuestion = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
    educationalContent: string;
  };
  
  export const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the primary source of groundwater?",
      options: ["Oceans", "Rivers", "Rain and snowmelt", "Lakes"],
      correctAnswer: "Rain and snowmelt",
      educationalContent: "Groundwater is the water found underground in the cracks and spaces in soil, sand and rock. It is stored in and moves slowly through geologic formations of soil, sand and rocks called aquifers. It originates from rain and melting snow and ice that seeps into the ground.",
    },
    {
      id: 2,
      question: "Which of the following is a major threat to groundwater quality?",
      options: ["Over-pumping", "Agricultural runoff", "Natural filtration", "Evaporation"],
      correctAnswer: "Agricultural runoff",
      educationalContent: "Contamination of groundwater can occur from various sources, including agricultural runoff containing pesticides and fertilizers, leaking septic tanks, and industrial waste. This pollution can make water unsafe for human consumption and harm ecosystems.",
    },
    {
      id: 3,
      question: "What is an aquifer?",
      options: ["An underground layer of water-bearing permeable rock", "A type of water purification system", "A large surface reservoir", "A pipe for transporting water"],
      correctAnswer: "An underground layer of water-bearing permeable rock",
      educationalContent: "Aquifers are crucial natural resources. They act as vast underground reservoirs, holding significant amounts of freshwater that can be tapped by wells for drinking water, irrigation, and industrial uses. Protecting aquifers from depletion and contamination is vital.",
    },
    {
        id: 4,
        question: "Which of these is an effective way to conserve groundwater at home?",
        options: ["Watering your lawn daily", "Taking long showers", "Fixing leaky faucets", "Washing your car every day"],
        correctAnswer: "Fixing leaky faucets",
        educationalContent: "Water conservation at home plays a big role. A single leaky faucet can waste thousands of gallons of water per year. Simple actions like fixing leaks, installing water-efficient appliances, and watering plants only when necessary can collectively save a huge amount of groundwater.",
    },
    {
      id: 5,
      question: "What’s the best material to filter rainwater before storing it?",
      options: ["Sand and charcoal", "Plastic sheets", "Asphalt"],
      correctAnswer: "Sand and charcoal",
      educationalContent: "Using natural materials like sand and charcoal is an effective way to filter rainwater. These materials help remove impurities, making the water safer for storage and non-potable uses."
    },
    {
      id: 6,
      question: "How can we help rainwater reach underground aquifers?",
      options: ["By paving the ground", "By building recharge wells", "By building walls"],
      correctAnswer: "By building recharge wells",
      educationalContent: "Aquifer recharge is the process of allowing water to penetrate the ground and refill the aquifer. Building recharge wells and avoiding impermeable surfaces like pavement helps more rainwater seep into the ground."
    },
    {
      id: 7,
      question: "Which of these pollutes groundwater the most?",
      options: ["Broken septic tanks", "Rainwater", "Tree roots"],
      correctAnswer: "Broken septic tanks",
      educationalContent: "Broken or poorly maintained septic tanks can leak untreated sewage into the soil, which then contaminates groundwater, posing a significant health risk."
    },
    {
      id: 8,
      question: "Which crop uses the least water?",
      options: ["Rice", "Millets", "Sugarcane"],
      correctAnswer: "Millets",
      educationalContent: "Choosing water-efficient crops is crucial for sustainable agriculture. Millets are drought-resistant and require significantly less water compared to thirsty crops like rice and sugarcane."
    },
    {
      id: 9,
      question: "What is groundwater?",
      options: ["Water in lakes", "Water stored in underground rock layers", "Water from taps"],
      correctAnswer: "Water stored in underground rock layers",
      educationalContent: "Groundwater is the water present beneath Earth's surface in soil pore spaces and in the fractures of rock formations. It is a vital source of fresh water."
    },
    {
      id: 10,
      question: "Which practice helps conserve groundwater?",
      options: ["Flood irrigation", "Drip irrigation", "Leaving taps open"],
      correctAnswer: "Drip irrigation",
      educationalContent: "Drip irrigation is a highly efficient method that delivers water directly to the plant's roots, minimizing evaporation and water waste, which is a key practice for conserving groundwater."
    },
    {
      id: 11,
      question: "Why is groundwater important?",
      options: ["It causes floods", "It supplies a large portion of our drinking water", "It’s used only in deserts"],
      correctAnswer: "It supplies a large portion of our drinking water",
      educationalContent: "Groundwater is a critical component of the world's freshwater supply. It provides drinking water for a large percentage of the global population and is essential for agriculture and industry."
    }
  ];
  
  export const resources = [
    {
      id: 1,
      title: "The Journey of Groundwater",
      description: "An animated video explaining how water travels from the surface to become groundwater.",
      type: "Video",
      link: "#",
      imageId: "resource-1",
    },
    {
      id: 2,
      title: "Understanding Aquifers",
      description: "A detailed article on the different types of aquifers and their importance.",
      type: "Article",
      link: "#",
      imageId: "resource-2",
    },
    {
      id: 3,
      title: "10 Ways to Conserve Water at Home",
      description: "Practical tips and tricks to reduce your water consumption and protect groundwater resources.",
      type: "Article",
      link: "#",
      imageId: "resource-3",
    },
    {
      id: 4,
      title: "The Global Groundwater Crisis",
      description: "A short documentary on the challenges of groundwater depletion around the world.",
      type: "Video",
      link: "#",
      imageId: "resource-4",
    },
    {
        id: 5,
        title: "Groundwater Contamination Explained",
        description: "Learn about the common sources of groundwater pollution and how to prevent them.",
        type: "Article",
        link: "#",
        imageId: "resource-5",
    },
    {
        id: 6,
        title: "Interactive Water Cycle",
        description: "Explore an interactive simulation of the water cycle.",
        type: "Simulation",
        link: "#",
        imageId: "resource-6",
    },
  ];
  
  export const userProgress = {
    quizzesCompleted: 5,
    averageScore: 82,
    lessonsViewed: 12,
    quizHistory: [
      { session: 1, score: 75 },
      { session: 2, score: 50 },
      { session: 3, score: 100 },
      { session: 4, score: 75 },
      { session: 5, score: 100 },
    ],
  };
  
  export const achievements = [
    {
      id: 1,
      title: "Quiz Novice",
      description: "Complete your first quiz.",
      achieved: true,
    },
    {
      id: 2,
      title: "Perfect Score",
      description: "Get 100% on any quiz.",
      achieved: true,
    },
    {
      id: 3,
      title: "Resource Explorer",
      description: "View 5 items from the resource library.",
      achieved: true,
    },
    {
      id: 4,
      title: "Aqua Expert",
      description: "Complete all quizzes with an average score of 80% or higher.",
      achieved: false,
    },
    {
      id: 5,
      title: "Community Starter",
      description: "Start your first discussion in the community forum.",
      achieved: false,
    },
  ];
  
  export const communityThreads = [
    { id: 1, title: "What are your best water-saving tips for the garden?", author: "JaneDoe", replies: 12, lastPost: "2 hours ago" },
    { id: 2, title: "Just learned about aquifer depletion, it's scary!", author: "JohnSmith", replies: 8, lastPost: "5 hours ago" },
    { id: 3, title: "Local river cleanup event this weekend", author: "EcoWarrior", replies: 25, lastPost: "1 day ago" },
    { id: 4, title: "Question about rainwater harvesting systems", author: "NewbieGardener", replies: 5, lastPost: "3 days ago" },
  ];
  
