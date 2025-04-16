const questions = [
    {
      category: "programming",
      questions: [
        {
          question: "Which data structure is needed to convert infix notation to postfix notation?",
          options: ["Tree", "Stack", "Queue", "Array"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is a correct way to declare a variable in JavaScript?",
          options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
          correctAnswer: 0,
        },
        {
          question: "The prefix form of A - B / (C * D ^ E) is?",
          options: ["-A/B*C^DE", "-A/BC*^DE", "-ABCD*^DE", "<-/*^ACBDE"],
          correctAnswer: 0,
        },
        {
          question: "What is the advantage of a hash table as a data structure?",
          options: ["Easy to implement", "Faster access of data", "Exhibit good locality of reference", "Very efficient for less number of entries"],
          correctAnswer: 1,
        },
        {
          question: "In JavaScript, how do you create a function?",
          options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
          correctAnswer: 3,
        },
        {
          question: "What does the 'typeof' operator do in JavaScript?",
          options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
          correctAnswer: 0,
        },
        {
          question: "Which is valid C expression?",
          options: ["int my_num = 100,000;", "int my_num = 100000;", "int my num = 1000;", " int $my_num = 10000;"],
          correctAnswer: 1,
        },
        {
          question: "Which of following is not accepted in C?",
          options: ["static a = 10;", "static int func (int);", "static static int a;", "all of the mentioned"],
          correctAnswer: 2,
        },
        {
          question: "scanf() is a predefined function in which header file?",
          options: ["stdlib.h", "stdio.h", "ctype.h", "stdarg.h"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the 'forEach()' method in JavaScript?",
          options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
          correctAnswer: 3,
        },
        {
          question: "What does the 'return' keyword do in a function?",
          options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a semantic HTML element?",
          options: ["<header>", "<footer>", "<div>", "<article>"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following type is provided by C++ but not C?",
          options: ["double", "float", "int", "bool"],
          correctAnswer: 3,
        },
        {
          question: "Which data structure is ideal for LIFO (Last In First Out)?",
          options: ["Queue", "Stack", "Linked list", "Array"],
          correctAnswer: 1,
        },
        {
          question: "Which command is used in Git to store changes in the repository?",
          options: ["git commit", "git push", "git pull", "git add"],
          correctAnswer: 0,
        },
        {
          question: "What does the 'map()' function do in JavaScript?",
          options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
          correctAnswer: 2,
        },
        {
          question: "What is an IDE?",
          options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is a feature of object-oriented programming?",
          options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
          correctAnswer: 0,
        },
        {
          question: "What does SQL stand for?",
          options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
          correctAnswer: 3,
        },
        {
          question: "Which of these is an example of a non-relational database?",
          options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
          correctAnswer: 0,
        },
        {
          question: "Which of these keywords are used for the block to be examined for exceptions?",
          options: ["check", "throw", "catch", "try"],
          correctAnswer: 3,
        },
        {
          question: "Which of the following algorithms is used to sort an array by comparing elements?",
          options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
          correctAnswer: 0,
        },
        {
          question: "What does the 'finally' block in Java do?",
          options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
          correctAnswer: 2,
        },
        {
          question: "Which data structure is best for searching elements quickly?",
          options: ["Linked list", "Array", "Binary search tree", "Queue"],
          correctAnswer: 2,
        },
        {
          question: "What is the correct syntax for a JavaScript if statement?",
          options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
          correctAnswer: 0,
        },
      ],
    },
  
    {
      category: "entertainment",
      questions: [
        {
          question: "Who won the Academy Award for Best Actor in 2022?",
          options: ["Leonardo DiCaprio", "Will Smith", "Joaquin Phoenix", "Matthew McConaughey"],
          correctAnswer: 1,
        },
        {
          question: "Which movie won the ‘Best Film’ award at 20th IIFA Awards in 2019?",
          options: ["Dhadak", "Padmaavat", "Raazi", "Sanju"],
          correctAnswer: 2,
        },
        {
          question: "Who played the character of Jack Dawson in the movie Titanic?",
          options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
          correctAnswer: 0,
        },
        {
          question: "Which movie has been declared the best Indian film of all time by the International Federation of Film Critics?",
          options: ["Mughal-E-Azam", "Anand", "Aparajito", "Pather Panchali"],
          correctAnswer: 3,
        },
        {
          question: "Who is known as the 'King of Pop'?",
          options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Presley"],
          correctAnswer: 0,
        },
        {
          question: "Who was honoured for film and television achievements at the MTV Movie & TV Awards 2022?",
          options: ["Tom Cruise", "Angelina Jolie", "Jennifer Lopez", "Will Smith"],
          correctAnswer: 2,
        },
        {
          question: "Which movie franchise includes a character named Luke Skywalker?",
          options: ["Guardians of the Galaxy", "Star Wars", "The Matrix", "Star Trek"],
          correctAnswer: 1,
        },
        {
          question: "Who played the character of Hermione Granger in the Harry Potter film series?",
          options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
          correctAnswer: 0,
        },
        {
          question: "Who directed the movie 'Inception'?",
          options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
          correctAnswer: 2,
        },
        {
          question: "Which artist released the album 'Lover' in 2019?",
          options: ["Billie Eilish", "Ariana Grande", "Ed Sheeran", "Taylor Swift"],
          correctAnswer: 3,
        },
        {
          question: "What was the first video game to feature Mario?",
          options: ["Mario Kart", "Super Mario Bros.", "Donkey Kong", "The Legend of Zelda"],
          correctAnswer: 2,
        },
        {
          question: "Who is often considered the Father of Indian Cinema? ",
          options: ["Satyajit Ray ", "Dadasaheb Phalke ", "Bimal Roy", "Raj Kapoor"],
          correctAnswer: 1,
        },
        {
          question: "Which country won the FIFA World Cup in 2018?",
          options: ["France", "Germany", "Argentina", "Brazil"],
          correctAnswer: 0,
        },
        {
          question: "Who created the comic book character Spider-Man?",
          options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
          correctAnswer: 1,
        },
        {
          question: "Which Bollywood actor has won the National Film Award for Best Actor the most number of times?",
          options: ["Amitabh Bachchan", "Anil Kapoor", "Shah Rukh Khan", "Aamir Khan"],
          correctAnswer: 0,
        },
        {
          question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
          options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
          correctAnswer: 2,
        },
        {
          question: "Who is the first Telugu actor to win National Film Award For Best Actor?",
          options: ["Mahesh Babu", "Ram Charan", "Allu Arjun", "Prabhas"],
          correctAnswer: 2,
        },
        {
          question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
          options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
          correctAnswer: 2,
        },
        {
          question: "Which Disney animated film features the song 'A Whole New World'?",
          options: ["Cinderella", "Aladdin", "Beauty and the Beast", "The Little Mermaid"],
          correctAnswer: 1,
        },
        {
          question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
          options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
          correctAnswer: 3,
        },
        {
          question: "Who sang the hit song 'Shape of You'?",
          options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
          correctAnswer: 3,
        },
        {
          question: "In which film does the main character wear a green hat and oversized black sunglasses while riding around on a tapori-style bike?",
          options: ["Amar Akbar Anthony", "Bunty Aur Babli", "Munna Bhai M.B.B.S.", "Golmaal"],
          correctAnswer: 2,
        },
        {
          question: "What year did the movie 'The Matrix' release?",
          options: ["1997", "1998", "2000", "1999"],
          correctAnswer: 3,
        },
        {
          question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
          options: ["Mark Ruffalo", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
          correctAnswer: 2,
        },
        {
          question: "Which singer is known as the 'Queen of Pop'?",
          options: ["Mariah Carey", "Lady Gaga", "Whitney Houston", "Madonna"],
          correctAnswer: 3,
        },
      ],
    },

    {
      category: "mathematics",
      questions: [
        {
          question: "What is the next number in the sequence: 3, 7, 15, 31, ?",
          options: ["63", "47", "72", "58"],
          correctAnswer: 0,
        },
        {
          question: "If 30% of a number is 18, what is 150% of that number?",
          options: ["54", "60", "90", "150"],
          correctAnswer: 2,
        },
        {
          question: "Given the equation y²+4=20, what are the values of y?",
          options: ["4 only", "4 or -4", "-4 only", "16"],
          correctAnswer: 1,
        },
        {
          question: "The ratio of girls to boys in a school is 5:7. If there are 525 girls, how many boys are there?",
          options: ["375", "625", "735", "325"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 3 + 5 × 4?",
          options: ["20", "22", "24", "23"],
          correctAnswer: 3,
        },
        {
          question: "What is the value of 4*4-2*(-3)+6= ?",
          options: ["17", "28", "-36", "-18"],
          correctAnswer: 1,
        },
        {
          question: "What is the perimeter of a square with a side length of 4 cm?",
          options: ["12 cm", "16 cm", "20 cm", "24 cm"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of x in the equation 4(x+2)=24?",
          options: ["11/2", "-4", "4", "16"],
          correctAnswer: 2,
        },
        {
          question: "The gradient of the line joining (-4,-1) and (4,2) is?",
          options: ["3/8", "-3/8", "-8/3", "8/3"],
          correctAnswer: 0,
        },
        {
          question: "Change 36 km/h to meters per second:",
          options: ["20", "10", "36", "None"],
          correctAnswer: 1,
        },
        {
          question: "What is 25% of 200?",
          options: ["30", "40", "50", "60"],
          correctAnswer: 2,
        },
        {
          question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
          options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 ÷ 2 + 3?",
          options: ["6", "7", "9", "8"],
          correctAnswer: 3,
        },
        {
          question: "How many vertices are present in a cube?",
          options: ["6", "8", "10", "14"],
          correctAnswer: 1,
        },
        {
          question: "What is the greatest common divisor (GCD) of 24 and 36?",
          options: ["4", "6", "8", "12"],
          correctAnswer: 3,
        },
        {
          question: "What is the least common multiple (LCM) of 6 and 8?",
          options: ["24", "32", "48", "56"],
          correctAnswer: 0,
        },
        {
          question: "The graph of x = 3 is a line :-",
          options: ["Makes an intercept 3 on x-axis", "Makes an intercept 3 on y-axis", "Parallel to x-axis at a distance of 3 units from the origin", "Parallel to y-axis at a distance of 3 units from the origin"],
          correctAnswer: 3,
        },
        {
          question: "What is the value of 10 × (5 + 3)?",
          options: ["80", "70", "60", "50"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 14 × 14?",
          options: ["186", "196", "206", "216"],
          correctAnswer: 1,
        },
        {
          question: "What is the sum of the first 10 positive integers?",
          options: ["50", "55", "60", "65"],
          correctAnswer: 1,
        },
        {
          question: "Abscissa of a point is positive in:",
          options: ["I and IV quadrants", "II quadrant only", "I and II quadrants", "I quadrant only"],
          correctAnswer: 0,
        },
        {
          question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
          options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
          correctAnswer: 0,
        },
        {
          question: "If the coordinates of a point are (0, -4), then it lies in:",
          options: ["X-axis", "At Origin", "Y-axis", "Between x-axis and y-axis"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 50% of 80?",
          options: ["30", "35", "40", "45"],
          correctAnswer: 2,
        },
        {
          question: "36 - [18 - {14 - (15 – 4 ÷ 2 x 2)}]",
          options: ["36", "21", "42", "18"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "geography",
      questions: [
        {
          question: "Which is the longest river in the world?",
          options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "South Korea", "Japan", "Thailand"],
          correctAnswer: 2,
        },
        {
          question: "What is the largest ocean in the world?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          correctAnswer: 3,
        },
        {
          question: "Which country has the largest population in the world?",
          options: ["India", "China", "United States", "Indonesia"],
          correctAnswer: 0,
        },
        {
          question: "Which country is known for the Great Barrier Reef?",
          options: ["Australia", "United States", "South Africa", "New Zealand"],
          correctAnswer: 0,
        },
        {
          question: "Which is the smallest country in the world?",
          options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
          correctAnswer: 2,
        },
        {
          question: "Which is the tallest mountain in the world?",
          options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
          correctAnswer: 2,
        },
        {
          question: "What is the capital of Canada?",
          options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
          correctAnswer: 0,
        },
        {
          question: "Which desert is the largest hot desert in the world?",
          options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
          correctAnswer: 2,
        },
        {
          question: "Which country is known as the Land of the Midnight Sun?",
          options: ["Sweden", "Finland", "Norway", "Denmark"],
          correctAnswer: 2,
        },
        {
          question: "What is the longest mountain range in the world?",
          options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
          correctAnswer: 2,
        },
        {
          question: "Which river flows through Egypt?",
          options: ["Amazon River", "Yangtze River", "Nile River", "Ganges River"],
          correctAnswer: 2,
        },
        {
          question: "Which is the largest island in the world?",
          options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
          correctAnswer: 0,
        },
        {
          question: "What is the capital of Japan?",
          options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most time zones?",
          options: ["United States", "Russia", "France", "Australia"],
          correctAnswer: 2,
        },
        {
          question: "Which country is known for the Eiffel Tower?",
          options: ["Germany", "Italy", "Spain", "France"],
          correctAnswer: 3,
        },
        {
          question: "Which is the most populous city in the world?",
          options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
          correctAnswer: 0,
        },
        {
          question: "Which mountain range is located in South America?",
          options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
          correctAnswer: 3,
        },
        {
          question: "Which continent is known as the 'Dark Continent'?",
          options: ["Asia", "Africa", "South America", "Europe"],
          correctAnswer: 1,
        },
        {
          question: "What is the capital of Brazil?",
          options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
          correctAnswer: 2,
        },
        {
          question: "What is the official language of Brazil?",
          options: ["Spanish", "English", "Portuguese", "French"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most volcanoes?",
          options: ["Japan", "Indonesia", "United States", "Italy"],
          correctAnswer: 1,
        },
        {
          question: "Which city is known as the Big Apple?",
          options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
          correctAnswer: 1,
        },
        {
          question: "Which ocean is located to the east of Africa?",
          options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
          correctAnswer: 0,
        },
        {
          question: "Which is the second largest continent by area?",
          options: ["Asia", "Africa", "North America", "Europe"],
          correctAnswer: 1,
        },
      ],
    },
   
  ];