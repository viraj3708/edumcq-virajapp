// Educational Platform Data Structure

// User data storage
let currentUser = {
    name: '',
    email: '',
    selectedBoard: '',
    selectedClass: '',
    selectedSubject: '',
    selectedChapter: '',
    progress: {
        // Structure: { chapterId: { setId: { score, total, date } } }
    }
};

// Declare the mcqQuestions object to store all MCQ questions
const mcqQuestions = {};

// Educational boards data
const boards = {
    cbse: {
        name: 'CBSE',
        fullName: 'Central Board of Secondary Education',
        description: 'National curriculum with standardized syllabus',
        classes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    state: {
        name: 'State Board',
        fullName: 'State Board Education',
        description: 'State-specific curriculum and regional focus',
        classes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
};

// Subjects data for each class
const subjects = {
    3: [
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'hindi', name: 'Hindi', icon: 'fas fa-font', color: '#f39c12' },
        { id: 'evs', name: 'Environmental Studies', icon: 'fas fa-leaf', color: '#27ae60' },
        { id: 'science', name: 'Science', icon: 'fas fa-flask', color: '#9b59b6' },
        { id: 'social', name: 'Social Science', icon: 'fas fa-globe', color: '#1abc9c' }
    ],
    10: [
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'science', name: 'Science', icon: 'fas fa-flask', color: '#9b59b6' },
        { id: 'social', name: 'Social Science', icon: 'fas fa-globe', color: '#1abc9c' },
        { id: 'hindi', name: 'Hindi', icon: 'fas fa-font', color: '#f39c12' }
    ]
};

// Sample chapters for each subject
const chapters = {
    'math': {
        10: [
            {
                id: 'real-numbers',
                name: 'Real Numbers',
                description: 'Introduction to real numbers, rational and irrational numbers',
                difficulty: 'Easy',
                estimatedTime: '45 mins'
            },
            {
                id: 'polynomials',
                name: 'Polynomials',
                description: 'Algebraic expressions, degree of polynomials, zeros of polynomials',
                difficulty: 'Medium',
                estimatedTime: '60 mins'
            }
        ]
    },
    'social': {
        3: [
            {
                id: 'solar-system',
                name: 'Our Solar System',
                description: 'Learn about planets, sun, moon and our place in the solar system',
                difficulty: 'Easy',
                estimatedTime: '30 mins'
            }
        ]
    },
    'science': {
        3: [
            {
                id: 'living-nonliving',
                name: 'Living and Non-living Things',
                description: 'Understanding the differences between living and non-living things',
                difficulty: 'Easy',
                estimatedTime: '30 mins'
            },
            {
                id: 'parts-of-plants',
                name: 'Parts of Plants',
                description: 'Learn about different parts of plants and their functions',
                difficulty: 'Easy',
                estimatedTime: '30 mins'
            },
            {
                id: 'eating-habits-animals',
                name: 'Eating Habits of Animals',
                description: 'Learn about different eating habits of animals and their food chains',
                difficulty: 'Easy',
                estimatedTime: '30 mins'
            },
            {
                id: 'understanding-birds',
                name: 'Understanding Birds',
                description: 'Learn about different features of birds like beaks, claws, feathers and nesting habits',
                difficulty: 'Easy',
                estimatedTime: '30 mins'
            },
            {
                id: 'staying-safe',
                name: 'Staying Safe',
                description: 'Learn about safety rules at home, school, road and in parks',
                difficulty: 'Easy',
                estimatedTime: '30 mins'
            },
            {
                id: 'housing-clothing',
                name: 'Housing and Clothing',
                description: 'Learn about different types of houses and clothing materials',
                difficulty: 'Easy',
                estimatedTime: '30 mins'
            },
            {
                id: 'our-body',
                name: 'Our Body',
                description: 'Learn about the human body and its different systems',
                difficulty: 'Easy',
                estimatedTime: '30 mins'
            }
        ]
    }
};

// Add questions for Living and Non-living Things chapter
mcqQuestions['living-nonliving'] = {
    set1: [
        {
            id: 1,
            question: 'Which of the following is a living thing?',
            options: ['Chair', 'Puppy', 'Moon', 'Hat'],
            correctAnswer: 1,
            explanation: 'A puppy is a living thing because it shows all characteristics of living things like eating, growing, breathing, and responding to its environment.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'Non-living things are those which:',
            options: ['Eat and grow', 'Do not show any signs of life', 'Reproduce', 'Feel changes in the environment'],
            correctAnswer: 1,
            explanation: 'Non-living things do not show any signs of life such as eating, growing, breathing, or reproducing.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'Which of the following grows from a seed?',
            options: ['Plant', 'Chair', 'Table', 'Hat'],
            correctAnswer: 0,
            explanation: 'Plants grow from seeds. This is one of the characteristics of living things.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'Human beings grow from:',
            options: ['Seed to plant', 'Baby to adult', 'Egg to butterfly', 'None of these'],
            correctAnswer: 1,
            explanation: 'Human beings grow from baby to adult. This is a characteristic of all living things.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'Which of the following gives energy to living things?',
            options: ['Toys', 'Food', 'Paper', 'Clothes'],
            correctAnswer: 1,
            explanation: 'Food gives energy to all living things. Living things need food to grow and carry out life processes.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 6,
            question: 'Birds migrating in winter is an example of:',
            options: ['Breathing', 'Responding to environment', 'Reproduction', 'Non-living activity'],
            correctAnswer: 1,
            explanation: 'Birds migrating in winter is an example of living things responding to changes in their environment.',
            difficulty: 'Medium'
        },
        {
            id: 7,
            question: 'Which of these is a feature of living things?',
            options: ['Need food, air, water', 'Made by humans', 'Do not grow', 'Stay lifeless'],
            correctAnswer: 0,
            explanation: 'All living things need food, air, and water to survive. This is a basic characteristic of life.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'Which organ do fish use to breathe?',
            options: ['Nose', 'Gills', 'Skin', 'Lungs'],
            correctAnswer: 1,
            explanation: 'Fish use gills to breathe. Gills help them extract oxygen from water.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'Frogs breathe with the help of:',
            options: ['Lungs only', 'Nose only', 'Skin and lungs', 'Gills only'],
            correctAnswer: 2,
            explanation: 'Frogs can breathe with both their skin and lungs. This is a special feature that helps them survive in different environments.',
            difficulty: 'Medium'
        },
        {
            id: 10,
            question: 'Which of the following is not required by non-living things?',
            options: ['Air', 'Food', 'Water', 'All of these'],
            correctAnswer: 3,
            explanation: 'Non-living things do not require air, food, or water as they do not have life processes.',
            difficulty: 'Medium'
        }
    ],
    set3: [
        {
            id: 11,
            question: 'Harry the teddy bear is:',
            options: ['Living', 'Non-living', 'Growing', 'Breathing'],
            correctAnswer: 1,
            explanation: 'A teddy bear is non-living because it does not show any signs of life like eating, growing, or breathing.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'What do living things need to survive?',
            options: ['Food, water, air', 'Toys', 'Clothes', 'Chairs'],
            correctAnswer: 0,
            explanation: 'All living things need food, water, and air to survive. These are essential for carrying out life processes.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'Plants need __________ to prepare food.',
            options: ['Sunlight, water, carbon dioxide', 'Toys, air, biscuits', 'Moonlight, oil, soil', 'None of these'],
            correctAnswer: 0,
            explanation: 'Plants need sunlight, water, and carbon dioxide to prepare their food through the process of photosynthesis.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'Which of these is man-made?',
            options: ['Sun', 'Moon', 'Chair', 'River'],
            correctAnswer: 2,
            explanation: 'A chair is man-made, which means it is created by humans. Sun, moon, and river are natural things.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'Which of these is a natural non-living thing?',
            options: ['Hat', 'Paper', 'River', 'Chair'],
            correctAnswer: 2,
            explanation: 'A river is a natural non-living thing. It exists in nature but does not show signs of life.',
            difficulty: 'Medium'
        }
    ],
    set4: [
        {
            id: 16,
            question: 'Living things can:',
            options: ['Reproduce', 'Stay lifeless', 'Be made by humans', 'Never breathe'],
            correctAnswer: 0,
            explanation: 'One of the key characteristics of living things is that they can reproduce to produce young ones of their own kind.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'Which of these lays eggs?',
            options: ['Dogs', 'Cats', 'Birds', 'Humans'],
            correctAnswer: 2,
            explanation: 'Birds lay eggs as a method of reproduction. Dogs, cats, and humans give birth to live young ones.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'Humans breathe with the help of:',
            options: ['Gills', 'Lungs', 'Nose only', 'Skin'],
            correctAnswer: 1,
            explanation: 'Humans breathe with the help of lungs. Lungs help us take in oxygen and remove carbon dioxide from our body.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'A toy bone is:',
            options: ['Living', 'Non-living', 'Growing', 'Breathing'],
            correctAnswer: 1,
            explanation: 'A toy bone is non-living because it is made by humans and does not show any signs of life.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'Energy means:',
            options: ['Power to play only', 'Strength required to do something', 'Toys and biscuits', 'None of these'],
            correctAnswer: 1,
            explanation: 'Energy is the strength or power required to do work or carry out different activities.',
            difficulty: 'Medium'
        }
    ],
    set5: [
        {
            id: 21,
            question: 'Which of these can move on its own?',
            options: ['Puppy', 'Chair', 'Toy', 'Paper'],
            correctAnswer: 0,
            explanation: 'A puppy can move on its own because it is a living thing. Chairs, toys, and paper are non-living and cannot move by themselves.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'Which of these is not alive but still moves with air?',
            options: ['Dog', 'Cat', 'Windmill', 'Fish'],
            correctAnswer: 2,
            explanation: 'A windmill is not alive but moves when air (wind) blows on its blades. This is an example of movement in non-living things due to external force.',
            difficulty: 'Medium'
        },
        {
            id: 23,
            question: 'Which energy is obtained from wind?',
            options: ['Solar energy', 'Wind energy', 'Water energy', 'Fire energy'],
            correctAnswer: 1,
            explanation: 'Wind energy is obtained from wind. Wind can be used to generate electricity through windmills.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'Is wind natural or man-made?',
            options: ['Man-made', 'Natural', 'Artificial', 'None'],
            correctAnswer: 1,
            explanation: 'Wind is a natural phenomenon. It is not made by humans.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'Which of these can become pale and lifeless without sunlight?',
            options: ['Toy', 'Plant', 'Hat', 'River'],
            correctAnswer: 1,
            explanation: 'Plants can become pale and lifeless without sunlight because they need sunlight for photosynthesis to make food.',
            difficulty: 'Medium'
        }
    ],
    set6: [
        {
            id: 26,
            question: 'Which of these shows movement in plants?',
            options: ['Stem and leaves', 'Toys', 'Paper', 'Moon'],
            correctAnswer: 0,
            explanation: 'The stem and leaves of plants show movement. For example, sunflowers move to face the sun, and leaves move with the wind.',
            difficulty: 'Medium'
        },
        {
            id: 27,
            question: 'Non-living things can be grouped into:',
            options: ['Living and non-living', 'Natural and man-made', 'Big and small', 'Food and toys'],
            correctAnswer: 1,
            explanation: 'Non-living things can be grouped into natural (like rivers, mountains) and man-made (like chairs, buildings).',
            difficulty: 'Medium'
        },
        {
            id: 28,
            question: 'Which of these is affected by weather?',
            options: ['Living things only', 'Non-living things only', 'Both living and non-living things', 'None of these'],
            correctAnswer: 2,
            explanation: 'Both living and non-living things are affected by weather. For example, plants (living) grow with rain, and rocks (non-living) get eroded by wind.',
            difficulty: 'Hard'
        },
        {
            id: 29,
            question: 'Living things breathe in air with:',
            options: ['Food', 'Breathing organs', 'Toys', 'Non-living parts'],
            correctAnswer: 1,
            explanation: 'Living things breathe in air with the help of special breathing organs like lungs, gills, or nose.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'Which of these produces young ones of its own kind?',
            options: ['Humans', 'Plants', 'Birds', 'All of these'],
            correctAnswer: 3,
            explanation: 'All living things produce young ones of their own kind. This is called reproduction.',
            difficulty: 'Easy'
        }
    ],
    set7: [
        {
            id: 31,
            question: 'The Sun is a:',
            options: ['Natural living thing', 'Natural non-living thing', 'Man-made non-living thing', 'Living creature'],
            correctAnswer: 1,
            explanation: 'The Sun is a natural non-living thing. Although it gives heat and light, it does not show other characteristics of living things like eating or growing.',
            difficulty: 'Medium'
        },
        {
            id: 32,
            question: 'The Moon is a:',
            options: ['Man-made non-living thing', 'Natural non-living thing', 'Living thing', 'Plant'],
            correctAnswer: 1,
            explanation: 'The Moon is a natural non-living thing. It exists in nature but does not show signs of life.',
            difficulty: 'Medium'
        },
        {
            id: 33,
            question: 'A hat is a:',
            options: ['Natural living thing', 'Man-made non-living thing', 'Natural non-living thing', 'Living thing'],
            correctAnswer: 1,
            explanation: 'A hat is a man-made non-living thing. It is created by humans and does not show signs of life.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'A dog is a:',
            options: ['Non-living thing', 'Living thing', 'Natural non-living thing', 'Man-made thing'],
            correctAnswer: 1,
            explanation: 'A dog is a living thing because it shows all characteristics of living things like eating, growing, breathing, and reproducing.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: 'Which of these responds to seasons like spring and autumn?',
            options: ['Toys', 'Plants', 'Moon', 'Hat'],
            correctAnswer: 1,
            explanation: 'Plants respond to seasons. For example, they bloom in spring and shed leaves in autumn.',
            difficulty: 'Medium'
        }
    ],
    set8: [
        {
            id: 36,
            question: 'Birds migrate in response to:',
            options: ['Toys', 'Weather changes', 'Humans', 'Chairs'],
            correctAnswer: 1,
            explanation: 'Birds migrate in response to weather changes. This is an example of living things responding to their environment.',
            difficulty: 'Medium'
        },
        {
            id: 37,
            question: 'Which of these shows no signs of life?',
            options: ['Puppy', 'Teddy bear', 'Fish', 'Human'],
            correctAnswer: 1,
            explanation: 'A teddy bear shows no signs of life. It is a non-living thing.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: 'Living and non-living things both:',
            options: ['Occupy space and have weight', 'Eat and breathe', 'Reproduce', 'Grow'],
            correctAnswer: 0,
            explanation: 'Both living and non-living things occupy space and have weight. This is a common property of all matter.',
            difficulty: 'Hard'
        },
        {
            id: 39,
            question: 'Matter means:',
            options: ['Toys', 'Substances that make up all living and non-living things', 'Only living substances', 'Things made by humans only'],
            correctAnswer: 1,
            explanation: 'Matter means substances that make up all living and non-living things. Everything around us is made up of matter.',
            difficulty: 'Medium'
        },
        {
            id: 40,
            question: 'Living and non-living things are both:',
            options: ['Important for life', 'Useless for life', 'Toys', 'Chairs'],
            correctAnswer: 0,
            explanation: 'Both living and non-living things are important for life. Living things need non-living things like air, water, and soil to survive.',
            difficulty: 'Medium'
        }
    ]
};


// MCQ questions for Parts of Plants chapter
mcqQuestions['parts-of-plants'] = {
    set1: [
        {
            id: 1,
            question: 'Which part of the plant fixes it into the soil?',
            options: ['Stem', 'Root', 'Leaf', 'Flower'],
            correctAnswer: 1,
            explanation: 'Roots fix the plant into the soil and absorb water and minerals from it.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'Roots absorb ________ from the soil.',
            options: ['Air and light', 'Water and minerals', 'Fruits and seeds', 'Oxygen only'],
            correctAnswer: 1,
            explanation: 'Roots absorb water and minerals from the soil which are essential for the plant\'s growth.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'Carrot is an example of:',
            options: ['Fibrous root', 'Taproot', 'Stem', 'Leaf'],
            correctAnswer: 1,
            explanation: 'Carrot is a taproot which grows straight down into the soil.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'Fibrous roots are found in:',
            options: ['Carrot', 'Radish', 'Wheat', 'Mustard'],
            correctAnswer: 2,
            explanation: 'Wheat has fibrous roots which consist of many thin branches arising from the base of the stem.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'Which of the following roots stores food?',
            options: ['Grass', 'Onion', 'Radish', 'Paddy'],
            correctAnswer: 2,
            explanation: 'Radish is a root that stores food for the plant.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 6,
            question: 'Taproot has:',
            options: ['Many small roots', 'One main root with small branches', 'No roots', 'Fibrous hairs only'],
            correctAnswer: 1,
            explanation: 'Taproot system has one main root with smaller branches growing from it.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'Fibrous roots are seen in:',
            options: ['Mango', 'Bean', 'Onion', 'Carrot'],
            correctAnswer: 2,
            explanation: 'Onion has fibrous roots which are thin and branch-like.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'Roots help plants by:',
            options: ['Preparing food', 'Transporting water', 'Fixing and absorbing nutrients', 'Producing flowers'],
            correctAnswer: 2,
            explanation: 'Roots help plants by fixing them to the ground and absorbing water and nutrients from the soil.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'Which part of a plant keeps it upright?',
            options: ['Root', 'Stem', 'Leaf', 'Flower'],
            correctAnswer: 1,
            explanation: 'The stem keeps the plant upright and supports the leaves, flowers and fruits.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'The stem carries _______ from roots to other parts.',
            options: ['Food', 'Water and minerals', 'Fruits', 'Seeds'],
            correctAnswer: 1,
            explanation: 'The stem carries water and minerals absorbed by roots to other parts of the plant.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 11,
            question: 'Which plant\'s stem stores food?',
            options: ['Mango', 'Sugarcane', 'Grass', 'Paddy'],
            correctAnswer: 1,
            explanation: 'Sugarcane stem stores food in the form of sugar.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'Cactus stem stores:',
            options: ['Air', 'Water', 'Fruits', 'Minerals only'],
            correctAnswer: 1,
            explanation: 'Cactus stem stores water to help the plant survive in dry conditions.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'Which part bears leaves, flowers and fruits?',
            options: ['Root', 'Stem', 'Leaf blade', 'Sepal'],
            correctAnswer: 1,
            explanation: 'The stem bears leaves, flowers and fruits.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'Which part is called the "kitchen of the plant"?',
            options: ['Flower', 'Leaf', 'Stem', 'Fruit'],
            correctAnswer: 1,
            explanation: 'Leaf is called the kitchen of the plant because it prepares food through photosynthesis.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'Which pigment helps leaves to absorb sunlight?',
            options: ['Hemoglobin', 'Chlorophyll', 'Oxygen', 'Water'],
            correctAnswer: 1,
            explanation: 'Chlorophyll is the green pigment in leaves that helps absorb sunlight for photosynthesis.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 16,
            question: 'The flat broad part of a leaf is called:',
            options: ['Midrib', 'Leaf blade (lamina)', 'Stalk', 'Vein'],
            correctAnswer: 1,
            explanation: 'The flat broad part of a leaf is called the leaf blade or lamina.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'The central thick line in a leaf is called:',
            options: ['Midrib', 'Veins', 'Stomata', 'Petiole'],
            correctAnswer: 0,
            explanation: 'The central thick line in a leaf is called the midrib.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'Tiny pores on the leaf surface are called:',
            options: ['Midrib', 'Stomata', 'Veins', 'Sepals'],
            correctAnswer: 1,
            explanation: 'Tiny pores on the leaf surface are called stomata which help in breathing and transpiration.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'The part that connects a leaf to the branch is:',
            options: ['Vein', 'Midrib', 'Petiole (leaf stalk)', 'Sepal'],
            correctAnswer: 2,
            explanation: 'The petiole or leaf stalk connects the leaf to the branch.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'Function of veins in leaves is:',
            options: ['Only decoration', 'Carrying water and food', 'Making flowers', 'None of these'],
            correctAnswer: 1,
            explanation: 'Veins in leaves carry water and food to different parts of the leaf.',
            difficulty: 'Easy'
        }
    ],
    set5: [
        {
            id: 21,
            question: 'Which part of the plant is brightly coloured?',
            options: ['Stem', 'Petal', 'Midrib', 'Seed'],
            correctAnswer: 1,
            explanation: 'Petals are the brightly coloured parts of a flower.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'Sepals protect the flower when it is in:',
            options: ['Leaf stage', 'Bud stage', 'Fruit stage', 'Seed stage'],
            correctAnswer: 1,
            explanation: 'Sepals protect the flower when it is in the bud stage.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'Flowers often change into:',
            options: ['Seeds directly', 'Fruits', 'Roots', 'Branches'],
            correctAnswer: 1,
            explanation: 'After fertilization, flowers develop into fruits.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'Which of these is an edible flower?',
            options: ['Mango flower', 'Broccoli', 'Apple flower', 'Guava flower'],
            correctAnswer: 1,
            explanation: 'Broccoli is an edible flower.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'Flowers attract bees and butterflies because:',
            options: ['They are green', 'They are colourful and sweet-smelling', 'They have roots', 'They are fibrous'],
            correctAnswer: 1,
            explanation: 'Flowers attract bees and butterflies with their bright colors and sweet smell.',
            difficulty: 'Easy'
        }
    ],
    set6: [
        {
            id: 26,
            question: 'The main function of fruit is to:',
            options: ['Prepare food', 'Protect seeds', 'Absorb water', 'Store minerals'],
            correctAnswer: 1,
            explanation: 'The main function of fruit is to protect the seeds inside it.',
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: 'Mango contains:',
            options: ['Many seeds', 'One seed', 'Two seeds', 'No seeds'],
            correctAnswer: 1,
            explanation: 'Mango contains one seed inside it.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'Pomegranate contains:',
            options: ['Many seeds', 'One seed', 'No seed', 'Few seeds only'],
            correctAnswer: 0,
            explanation: 'Pomegranate contains many seeds inside it.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: 'Apples usually have:',
            options: ['No seeds', 'A few seeds', 'One seed', 'Many seeds'],
            correctAnswer: 1,
            explanation: 'Apples usually have a few seeds inside them.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'Which of these is a fleshy fruit?',
            options: ['Mango', 'Orange', 'Apple', 'All of these'],
            correctAnswer: 3,
            explanation: 'All of these are fleshy fruits with soft pulp.',
            difficulty: 'Easy'
        }
    ],
    set7: [
        {
            id: 31,
            question: 'The process by which seeds grow into new plants is called:',
            options: ['Photosynthesis', 'Germination', 'Reproduction', 'Absorption'],
            correctAnswer: 1,
            explanation: 'Germination is the process by which seeds grow into new plants.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: 'Seeds need _______ to germinate.',
            options: ['Soil, water, sunlight', 'Toys and soil', 'Air only', 'Rain only'],
            correctAnswer: 0,
            explanation: 'Seeds need soil, water and sunlight to germinate properly.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'Which seed is edible?',
            options: ['Mango seed', 'Rice seed', 'Apple seed', 'Orange seed'],
            correctAnswer: 1,
            explanation: 'Rice seed is edible and is a major food source for many people.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'Seeds store:',
            options: ['Water for the plant', 'Food for the new plant', 'Flowers', 'Oxygen'],
            correctAnswer: 1,
            explanation: 'Seeds store food which nourishes the new plant when it germinates.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: 'Wheat and corn are examples of:',
            options: ['Roots', 'Leaves', 'Edible seeds', 'Fruits'],
            correctAnswer: 2,
            explanation: 'Wheat and corn are examples of edible seeds.',
            difficulty: 'Easy'
        }
    ],
    set8: [
        {
            id: 36,
            question: 'Which part of spinach is eaten?',
            options: ['Root', 'Stem', 'Leaf', 'Seed'],
            correctAnswer: 2,
            explanation: 'The leaf part of spinach is eaten as a vegetable.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: 'If roots of a sapling are cut, what happens?',
            options: ['It grows faster', 'It wilts', 'It flowers', 'It produces fruits'],
            correctAnswer: 1,
            explanation: 'If roots are cut, the plant cannot absorb water and nutrients, so it wilts.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: 'Which plant stores food in its stem?',
            options: ['Grass', 'Cactus', 'Mango', 'Paddy'],
            correctAnswer: 1,
            explanation: 'Cactus stores food in its stem to survive in dry conditions.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'Which gas is released by leaves during food making?',
            options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
            correctAnswer: 1,
            explanation: 'Oxygen is released by leaves during photosynthesis.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            question: 'The part of a plant that makes it look pretty and attractive is:',
            options: ['Root', 'Stem', 'Flower', 'Seed'],
            correctAnswer: 2,
            explanation: 'Flowers make the plant look pretty and attractive.',
            difficulty: 'Easy'
        }
    ]
};

// MCQ questions for Eating Habits of Animals chapter
mcqQuestions['eating-habits-animals'] = {
    set1: [
        {
            id: 1,
            question: 'Animals that eat green plants are called:',
            options: ['Carnivores', 'Herbivores', 'Omnivores', 'Scavengers'],
            correctAnswer: 1,
            explanation: 'Herbivores are animals that eat only plants or plant products.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'Which of these is a herbivore?',
            options: ['Tiger', 'Giraffe', 'Fox', 'Wolf'],
            correctAnswer: 1,
            explanation: 'Giraffe is a herbivore as it feeds on leaves and plants.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'Animals that eat flesh of other animals are called:',
            options: ['Carnivores', 'Herbivores', 'Omnivores', 'Scavengers'],
            correctAnswer: 0,
            explanation: 'Carnivores are animals that eat the flesh of other animals.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'Lion belongs to which category?',
            options: ['Herbivore', 'Carnivore', 'Omnivore', 'Scavenger'],
            correctAnswer: 1,
            explanation: 'Lion is a carnivore as it hunts and eats other animals.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'Animals that eat only dead animals are called:',
            options: ['Herbivores', 'Omnivores', 'Scavengers', 'Carnivores'],
            correctAnswer: 2,
            explanation: 'Scavengers feed on dead animals and decaying organic matter.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 6,
            question: 'Which of the following is a scavenger?',
            options: ['Cow', 'Vulture', 'Rat', 'Giraffe'],
            correctAnswer: 1,
            explanation: 'Vulture is a scavenger that feeds on dead animals.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'Animals that eat both plants and flesh of animals are called:',
            options: ['Scavengers', 'Carnivores', 'Herbivores', 'Omnivores'],
            correctAnswer: 3,
            explanation: 'Omnivores eat both plants and animals.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'Crow is an example of:',
            options: ['Herbivore', 'Carnivore', 'Omnivore', 'Scavenger'],
            correctAnswer: 2,
            explanation: 'Crow is an omnivore as it eats both grains and small insects.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'Which of the following animals chews cud?',
            options: ['Cow', 'Tiger', 'Snake', 'Fox'],
            correctAnswer: 0,
            explanation: 'Cows chew cud, which is the process of bringing back swallowed food to chew it again.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'The process in which animals bring back swallowed food to chew again is called:',
            options: ['Gnawing', 'Chewing the cud', 'Grinding', 'Swallowing'],
            correctAnswer: 1,
            explanation: 'Chewing the cud is the process where animals like cows bring back swallowed food to chew it again.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 11,
            question: 'Which animal is an example of a gnawer?',
            options: ['Elephant', 'Rat', 'Lion', 'Giraffe'],
            correctAnswer: 1,
            explanation: 'Rats are gnawers that constantly chew to keep their teeth sharp.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'Animals that swallow food whole include:',
            options: ['Snake', 'Lion', 'Cow', 'Fox'],
            correctAnswer: 0,
            explanation: 'Snakes swallow their prey whole as they don\'t have teeth for chewing.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'A frog captures insects using its:',
            options: ['Teeth', 'Tongue', 'Claws', 'Beak'],
            correctAnswer: 1,
            explanation: 'Frogs use their long sticky tongue to catch insects.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'Butterflies suck nectar using:',
            options: ['Teeth', 'Beak', 'Long sucking tube', 'Trunk'],
            correctAnswer: 2,
            explanation: 'Butterflies have a long sucking tube called proboscis to suck nectar from flowers.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'Bees and mosquitoes suck food using:',
            options: ['Trunk', 'Hollow tubes', 'Tongue', 'Beak'],
            correctAnswer: 1,
            explanation: 'Bees and mosquitoes have hollow tubes to suck nectar and blood respectively.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 16,
            question: 'Elephants eat leaves with the help of:',
            options: ['Teeth', 'Trunk', 'Tusks', 'Tongue'],
            correctAnswer: 1,
            explanation: 'Elephants use their trunk to grasp and bring leaves to their mouth.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'Earthworms swallow:',
            options: ['Flesh', 'Soil with dead plants and animals', 'Fruits', 'Nectar'],
            correctAnswer: 1,
            explanation: 'Earthworms eat soil containing dead plants and animals which helps in decomposition.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'Animals that tear and chew flesh have:',
            options: ['Sharp flat front teeth', 'Sharp pointed curved teeth', 'Hollow tubes', 'Trunk'],
            correctAnswer: 1,
            explanation: 'Carnivores have sharp pointed curved teeth called canines to tear flesh.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'Fox belongs to which category?',
            options: ['Herbivore', 'Omnivore', 'Scavenger', 'Carnivore'],
            correctAnswer: 3,
            explanation: 'Fox is a carnivore that hunts small animals for food.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'The chain that shows how plants are eaten by animals and animals eaten by other animals is called:',
            options: ['Food circle', 'Food pyramid', 'Food chain', 'Food group'],
            correctAnswer: 2,
            explanation: 'A food chain shows the sequence of who eats whom in an ecosystem.',
            difficulty: 'Easy'
        }
    ],
    set5: [
        {
            id: 21,
            question: 'Which of the following is the first in a food chain?',
            options: ['Lion', 'Snake', 'Plant', 'Eagle'],
            correctAnswer: 2,
            explanation: 'Plants are producers and form the beginning of every food chain.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'Which animal eats leaves, roots, and grass?',
            options: ['Tiger', 'Elephant', 'Fox', 'Wolf'],
            correctAnswer: 1,
            explanation: 'Elephants are herbivores that eat various plant parts including leaves, roots, and grass.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'Which animal can be both scavenger and carnivore sometimes?',
            options: ['Dog', 'Tiger', 'Jackal', 'Giraffe'],
            correctAnswer: 2,
            explanation: 'Jackals can act as both scavengers when feeding on dead animals and carnivores when hunting.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'Which animal swallows insects whole?',
            options: ['Cow', 'Frog', 'Leopard', 'Rat'],
            correctAnswer: 1,
            explanation: 'Frogs catch insects with their tongue and swallow them whole.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'Which of the following is an omnivore?',
            options: ['Cow', 'Squirrel', 'Leopard', 'Hyena'],
            correctAnswer: 1,
            explanation: 'Squirrels eat both nuts (plants) and insects (animals), making them omnivores.',
            difficulty: 'Easy'
        }
    ],
    set6: [
        {
            id: 26,
            question: 'Hyena eats mainly:',
            options: ['Grass', 'Dead animals', 'Fruits', 'Insects'],
            correctAnswer: 1,
            explanation: 'Hyenas are primarily scavengers that feed on dead animals.',
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: 'The eagle is placed at the ______ of the food chain.',
            options: ['Beginning', 'Middle', 'End', 'Nowhere'],
            correctAnswer: 2,
            explanation: 'Eagles are apex predators and are placed at the end of the food chain.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'Which of these has hollow sucking tubes?',
            options: ['Butterfly', 'Mosquito', 'Elephant', 'Rat'],
            correctAnswer: 1,
            explanation: 'Mosquitoes have hollow sucking tubes to suck blood from animals.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: 'Which animal gnaws nuts and seeds?',
            options: ['Cow', 'Squirrel', 'Tiger', 'Snake'],
            correctAnswer: 1,
            explanation: 'Squirrels gnaw nuts and seeds with their sharp front teeth.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'Leopard is an example of:',
            options: ['Herbivore', 'Omnivore', 'Carnivore', 'Scavenger'],
            correctAnswer: 2,
            explanation: 'Leopard is a carnivore that hunts and eats other animals.',
            difficulty: 'Easy'
        }
    ],
    set7: [
        {
            id: 31,
            question: 'Animals eat different food because of their:',
            options: ['Colour', 'Teeth and body structure', 'Habitat', 'Size'],
            correctAnswer: 1,
            explanation: 'The teeth and body structure of animals are adapted to their diet.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: 'The main source of food for all animals is:',
            options: ['Plants', 'Flesh', 'Soil', 'Air'],
            correctAnswer: 0,
            explanation: 'Plants are the primary source of food as they produce food through photosynthesis.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'A caterpillar is eaten by:',
            options: ['Snake', 'Eagle', 'Sparrow', 'Tiger'],
            correctAnswer: 2,
            explanation: 'Sparrows and other birds commonly eat caterpillars.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'Snake eats:',
            options: ['Plants', 'Fish', 'Sparrow', 'Grass'],
            correctAnswer: 2,
            explanation: 'Snakes are carnivores that eat birds, rats, and other small animals.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: 'Which is an example of scavenger bird?',
            options: ['Sparrow', 'Crow', 'Vulture', 'Pigeon'],
            correctAnswer: 2,
            explanation: 'Vultures are scavenger birds that feed on dead animals.',
            difficulty: 'Easy'
        }
    ],
    set8: [
        {
            id: 36,
            question: 'Which animal has flat back teeth to chew?',
            options: ['Cow', 'Snake', 'Tiger', 'Wolf'],
            correctAnswer: 0,
            explanation: 'Cows have flat back teeth called molars to grind plant material.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: 'Which animal uses its tusks for food?',
            options: ['Elephant', 'Lion', 'Fox', 'Deer'],
            correctAnswer: 0,
            explanation: 'Elephants use their tusks to uproot trees and dig for food.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: 'Which of these is NOT an omnivore?',
            options: ['Rat', 'Crow', 'Giraffe', 'Mouse'],
            correctAnswer: 2,
            explanation: 'Giraffes are herbivores that eat only plants, not animals.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'The role of plants in a food chain is to:',
            options: ['Produce food', 'Eat animals', 'Hunt', 'Decompose'],
            correctAnswer: 0,
            explanation: 'Plants are producers that make food through photosynthesis.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            question: 'Animals that depend on plants directly or indirectly are:',
            options: ['Only herbivores', 'Only carnivores', 'All animals', 'Only omnivores'],
            correctAnswer: 2,
            explanation: 'All animals depend on plants either directly (herbivores) or indirectly (carnivores and omnivores).',
            difficulty: 'Easy'
        }
    ]
};

// MCQ questions for Staying Safe chapter
mcqQuestions['staying-safe'] = {
    set1: [
        {
            id: 1,
            question: 'What should you avoid touching with wet hands?',
            options: ['Books', 'Electrical appliances', 'Toys', 'Clothes'],
            correctAnswer: 1,
            explanation: 'Electrical appliances should never be touched with wet hands as water conducts electricity and can cause electric shock.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'Why should we not run on wet floors?',
            options: ['We may get tired', 'We could slip and get hurt', 'It makes the floor dirty', 'Teachers scold us'],
            correctAnswer: 1,
            explanation: 'Wet floors are slippery and running on them can cause you to slip and fall, resulting in injuries.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'Where should we keep bags and toys to avoid tripping?',
            options: ['On the bed', 'On the chair', 'Off the floor', 'Near the door'],
            correctAnswer: 2,
            explanation: 'Keeping bags and toys off the floor prevents tripping hazards that could cause falls and injuries.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'Playing with fire is __________.',
            options: ['Fun', 'Dangerous', 'Safe', 'Necessary'],
            correctAnswer: 1,
            explanation: 'Playing with fire is extremely dangerous and can cause severe burns and injuries.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'Which of these objects is not safe to play with?',
            options: ['Ball', 'Knife', 'Doll', 'Toy car'],
            correctAnswer: 1,
            explanation: 'Knives are sharp objects that can cause cuts and injuries if played with.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 6,
            question: 'Why should we not take medicine without advice?',
            options: ['It may be too costly', 'It may be harmful', 'It tastes bad', 'It is unnecessary'],
            correctAnswer: 1,
            explanation: 'Medicines can be harmful if taken without proper guidance as they may have side effects or interact with other medicines.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'What may happen if you walk barefoot on an electric wire?',
            options: ['Nothing happens', 'Electric shock', 'Slip and fall', 'Medicine needed'],
            correctAnswer: 1,
            explanation: 'Walking barefoot on electric wires can cause severe electric shock which can be life-threatening.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'Why should you not wander in the dark during power cuts?',
            options: ['You might get lost', 'You may trip over furniture', 'It is fun', 'Parents allow it'],
            correctAnswer: 1,
            explanation: 'In the dark, you may not see obstacles like furniture, stairs, or other items which can cause you to trip and get hurt.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'How should students board a bus?',
            options: ['By pushing others', 'By running fast', 'In a queue', 'By climbing windows'],
            correctAnswer: 2,
            explanation: 'Students should board a bus in a queue to ensure everyone gets in safely without pushing or rushing.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'What should you avoid while waiting on stairs?',
            options: ['Standing still', 'Pushing others', 'Holding railing', 'Talking'],
            correctAnswer: 1,
            explanation: 'Pushing others on stairs is dangerous and can cause falls and injuries to yourself and others.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 11,
            question: 'What should you not climb on in the classroom?',
            options: ['Chair', 'Furniture', 'Stairs', 'Playground'],
            correctAnswer: 1,
            explanation: 'Climbing on furniture in the classroom is dangerous and can cause falls and injuries.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'Why should we not hit others at school?',
            options: ['Teacher scolds', 'They might get hurt', 'It is not fun', 'Parents stop us'],
            correctAnswer: 1,
            explanation: 'Hitting others can cause them physical harm and emotional distress. We should always treat others with kindness and respect.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'Which is unsafe near school gates?',
            options: ['Waiting in line', 'Rushing through the gate', 'Standing calmly', 'Walking slowly'],
            correctAnswer: 1,
            explanation: 'Rushing through school gates can lead to accidents and injuries. Always enter and exit the school calmly and orderly.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'Throwing things at classmates is __________.',
            options: ['Safe', 'Unsafe', 'Fun', 'Rewarded'],
            correctAnswer: 1,
            explanation: 'Throwing things at classmates can hurt them and cause accidents. It is important to be respectful and careful with objects.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'Why should we not run in corridors?',
            options: ['It looks bad', 'Someone may fall', 'Teachers forbid running', 'It is noisy'],
            correctAnswer: 1,
            explanation: 'Running in corridors increases the risk of falling and colliding with others, which can cause injuries to yourself and others.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 16,
            question: 'Where should children walk on the road?',
            options: ['Middle of the road', 'On pavement/footpath', 'On zebra crossing only', 'Anywhere'],
            correctAnswer: 1,
            explanation: 'Children should always walk on the pavement or footpath to stay safe from traffic. If there is no pavement, they should walk facing traffic.',
            difficulty: 'Easy'
        },
        {
            id:17,
            question: 'What should you do before crossing the road?',
            options: ['Look left and right', 'Run quickly', 'Ignore traffic', 'Wait for no reason'],
            correctAnswer: 0,
            explanation: 'Before crossing the road, always look left and right to check for any approaching vehicles. Continue looking while crossing.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'What is the purpose of zebra crossing?',
            options: ['To decorate roads', 'Safe crossing', 'Car parking', 'Playing games'],
            correctAnswer: 1,
            explanation: 'Zebra crossings are marked areas on roads where pedestrians can safely cross. Drivers are expected to stop for pedestrians at these crossings.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'If you ride a bicycle, on which side should you keep?',
            options: ['Middle', 'Right', 'Left', 'Anywhere'],
            correctAnswer: 2,
            explanation: 'When riding a bicycle, you should keep to the left side of the road (in countries where vehicles drive on the left) to stay safe and follow traffic rules.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'What should you never do in a moving vehicle?',
            options: ['Sit inside', 'Stick out arms/head', 'Wear seatbelt', 'Hold railing'],
            correctAnswer: 1,
            explanation: 'Never stick your arms or head out of a moving vehicle as you could be seriously injured by passing objects or falling out.',
            difficulty: 'Easy'
        }
    ]
};

// MCQ questions for Housing and Clothing chapter
const housingClothingQuestions = {
    set1: [
        {
            id: 1,
            question: 'Which of these is a temporary house?',
            options: ['House boat', 'Apartment', 'Bungalow', 'Farm house'],
            correctAnswer: 0,
            explanation: 'House boats are temporary houses that can be moved from one place to another as per requirement.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'Tents are made of:',
            options: ['Cotton', 'Silk', 'Canvas', 'Wool'],
            correctAnswer: 2,
            explanation: 'Tents are usually made of canvas or synthetic materials that are waterproof and lightweight.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'Which house is built on poles high above the ground?',
            options: ['House boat', 'Stilt house', 'Caravan', 'Igloo'],
            correctAnswer: 1,
            explanation: 'Stilt houses are built on poles high above the ground to protect from floods and wild animals.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'Igloos are made of:',
            options: ['Wood', 'Ice and snow', 'Mud', 'Bricks'],
            correctAnswer: 1,
            explanation: 'Igloos are temporary houses made of ice and snow by the Eskimos in extremely cold regions.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'Which type of house has thick walls and small windows?',
            options: ['Houses in hot areas', 'Houses in cold areas', 'Houses in moderate climate', 'House boats'],
            correctAnswer: 1,
            explanation: 'Houses in cold areas have thick walls and small windows to keep the house warm inside.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 6,
            question: 'Houses in hot areas have:',
            options: ['Thick walls and small windows', 'Thin walls and large windows', 'No windows', 'Only doors'],
            correctAnswer: 1,
            explanation: 'Houses in hot areas have thin walls and large windows to allow air circulation and keep the house cool.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'Caravans are:',
            options: ['Permanent houses', 'Temporary houses on wheels', 'Houses made of ice', 'Houses on stilts'],
            correctAnswer: 1,
            explanation: 'Caravans are temporary houses built on wheels that can be moved from one place to another.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'Which material is commonly used for making tents?',
            options: ['Cement', 'Canvas', 'Glass', 'Steel'],
            correctAnswer: 1,
            explanation: 'Canvas is a strong, durable fabric that is commonly used for making tents as it is waterproof and lightweight.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'Eskimos live in:',
            options: ['Stilt houses', 'House boats', 'Igloos', 'Caravans'],
            correctAnswer: 2,
            explanation: 'Eskimos live in igloos which are houses made of ice and snow in extremely cold regions.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'Houses in coastal areas are built with:',
            options: ['Wood and bamboo', 'Only bricks', 'Only cement', 'Glass only'],
            correctAnswer: 0,
            explanation: 'Houses in coastal areas are often built with wood and bamboo as these materials can withstand humid conditions.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 11,
            question: 'What is the main purpose of having thick walls in cold climate houses?',
            options: ['To make the house look beautiful', 'To keep the house warm', 'To save money', 'To make the house heavy'],
            correctAnswer: 1,
            explanation: 'Thick walls in cold climate houses help to insulate the house and keep it warm by preventing heat loss.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'Which of these is NOT a natural material for clothing?',
            options: ['Cotton', 'Silk', 'Polyester', 'Wool'],
            correctAnswer: 2,
            explanation: 'Polyester is a synthetic material made in factories, while cotton, silk, and wool are natural materials.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'Cotton clothes are preferred in:',
            options: ['Winter', 'Summer', 'Rainy season', 'All seasons'],
            correctAnswer: 1,
            explanation: 'Cotton clothes are preferred in summer as they absorb sweat and allow air to pass through, keeping us cool.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'Wool is obtained from:',
            options: ['Plants', 'Animals', 'Insects', 'Rocks'],
            correctAnswer: 1,
            explanation: 'Wool is obtained from animals like sheep, goats, and yaks.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'Silk is obtained from:',
            options: ['Cotton plants', 'Silkworms', 'Sheep', 'Cows'],
            correctAnswer: 1,
            explanation: 'Silk is obtained from silkworms. The cocoons of silkworms are used to make silk fibers.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 16,
            question: 'Which fabric is best for cold weather?',
            options: ['Cotton', 'Silk', 'Wool', 'Nylon'],
            correctAnswer: 2,
            explanation: 'Wool is the best fabric for cold weather as it traps air and provides insulation, keeping the body warm.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'Raincoats are usually made of:',
            options: ['Cotton', 'Wool', 'Waterproof material', 'Silk'],
            correctAnswer: 2,
            explanation: 'Raincoats are made of waterproof materials like plastic or treated fabrics to protect from rain.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'Jute is a _______ fiber.',
            options: ['Synthetic', 'Animal', 'Plant', 'Mineral'],
            correctAnswer: 2,
            explanation: 'Jute is a plant fiber obtained from the jute plant. It is used to make burlap, hessian, or gunny cloth.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'Which of these is a synthetic fiber?',
            options: ['Cotton', 'Silk', 'Nylon', 'Wool'],
            correctAnswer: 2,
            explanation: 'Nylon is a synthetic fiber made in factories, while cotton, silk, and wool are natural fibers.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'People in deserts prefer to wear:',
            options: ['Heavy woolen clothes', 'Light cotton clothes', 'Silk clothes', 'Synthetic clothes'],
            correctAnswer: 1,
            explanation: 'People in deserts prefer light cotton clothes as they absorb sweat and help to keep the body cool.',
            difficulty: 'Easy'
        }
    ],
    set5: [
        {
            id: 21,
            question: 'Which of these clothes is best for rainy season?',
            options: ['Cotton', 'Silk', 'Waterproof', 'Wool'],
            correctAnswer: 2,
            explanation: 'Waterproof clothes are best for rainy season as they do not allow water to pass through and keep us dry.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'We wear woolen clothes in winter because they:',
            options: ['Look beautiful', 'Are expensive', 'Keep us warm', 'Are soft'],
            correctAnswer: 2,
            explanation: 'Woolen clothes keep us warm in winter because wool traps air which acts as an insulator.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'Which of these is a plant fiber?',
            options: ['Wool', 'Silk', 'Cotton', 'Nylon'],
            correctAnswer: 2,
            explanation: 'Cotton is a plant fiber obtained from the cotton plant. Wool and silk are animal fibers, nylon is synthetic.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'We wear light colored clothes in summer because:',
            options: ['They are cheaper', 'They reflect heat', 'They look nice', 'They are easy to wash'],
            correctAnswer: 1,
            explanation: 'Light colored clothes reflect heat and keep us cool in summer, while dark colors absorb heat.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'Houses in hilly areas are often made of:',
            options: ['Bricks only', 'Wood and stone', 'Glass', 'Plastic'],
            correctAnswer: 1,
            explanation: 'Houses in hilly areas are often made of wood and stone as these materials are readily available and can withstand the climate.',
            difficulty: 'Easy'
        }
    ],
    set6: [
        {
            id: 26,
            question: 'Which of these is NOT a synthetic fiber?',
            options: ['Polyester', 'Nylon', 'Acrylic', 'Silk'],
            correctAnswer: 3,
            explanation: 'Silk is a natural fiber obtained from silkworms, while polyester, nylon, and acrylic are synthetic fibers.',
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: 'The process of making cloth from fibers is called:',
            options: ['Weaving', 'Spinning', 'Knitting', 'All of these'],
            correctAnswer: 3,
            explanation: 'Making cloth from fibers involves both spinning (making yarn from fibers) and weaving/knitting (making fabric from yarn).',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'People in cold regions wear:',
            options: ['Light cotton clothes', 'Heavy woolen clothes', 'Silk clothes', 'Synthetic clothes'],
            correctAnswer: 1,
            explanation: 'People in cold regions wear heavy woolen clothes as wool provides insulation and keeps the body warm.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: 'Which of these is used to make tents?',
            options: ['Cotton', 'Canvas', 'Silk', 'Wool'],
            correctAnswer: 1,
            explanation: 'Canvas is a strong, durable fabric that is commonly used for making tents as it is waterproof and lightweight.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'Houses in areas with heavy rainfall have:',
            options: ['Slanting roofs', 'Flat roofs', 'No roofs', 'Glass roofs'],
            correctAnswer: 0,
            explanation: 'Houses in areas with heavy rainfall have slanting roofs so that rainwater can easily slide off.',
            difficulty: 'Easy'
        }
    ],
    set7: [
        {
            id: 31,
            question: 'Which of these clothes absorbs sweat?',
            options: ['Silk', 'Nylon', 'Cotton', 'Polyester'],
            correctAnswer: 2,
            explanation: 'Cotton clothes absorb sweat and allow air to pass through, making them comfortable to wear in hot weather.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: 'Houses in plains are usually made of:',
            options: ['Ice', 'Wood only', 'Bricks and cement', 'Leaves'],
            correctAnswer: 2,
            explanation: 'Houses in plains are usually made of bricks and cement as these materials are strong and readily available.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'Which of these is a temporary shelter?',
            options: ['Apartment', 'Bungalow', 'Tent', 'Skyscraper'],
            correctAnswer: 2,
            explanation: 'Tents are temporary shelters that can be easily set up and taken down as needed.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'The material used to make houses depends on:',
            options: ['Climate and availability of materials', 'Color preference', 'Size of family', 'Height of people'],
            correctAnswer: 0,
            explanation: 'The material used to make houses depends on the climate of the region and availability of local materials.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: 'We wear different clothes for different seasons because:',
            options: ['To look fashionable', 'Different clothes suit different weather conditions', 'Teachers tell us to', 'It is a tradition'],
            correctAnswer: 1,
            explanation: 'We wear different clothes for different seasons because different types of clothes are suitable for different weather conditions.',
            difficulty: 'Easy'
        }
    ],
    set8: [
        {
            id: 36,
            question: 'Which of these is a natural fiber?',
            options: ['Rayon', 'Acrylic', 'Cotton', 'Polyester'],
            correctAnswer: 2,
            explanation: 'Cotton is a natural fiber obtained from the cotton plant, while rayon, acrylic, and polyester are synthetic fibers.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: 'Houses in hot and dry areas have:',
            options: ['Thick walls', 'White or light colored walls', 'Small windows', 'No windows'],
            correctAnswer: 1,
            explanation: 'Houses in hot and dry areas have white or light colored walls as they reflect heat and keep the house cool.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: 'What should you not climb on in the classroom?',
            options: ['Chair', 'Furniture', 'Stairs', 'Playground'],
            correctAnswer: 1,
            explanation: 'Climbing on furniture in the classroom is dangerous and can cause falls and injuries.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'Which of these is a temporary house?',
            options: ['Igloo', 'Skyscraper', 'Bungalow', 'Apartment'],
            correctAnswer: 0,
            explanation: 'Igloos are temporary houses made of ice and snow by the Eskimos which can be built quickly and are useful in extreme cold.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            question: 'The process of making yarn from fibers is called:',
            options: ['Weaving', 'Spinning', 'Knitting', 'Dyeing'],
            correctAnswer: 1,
            explanation: 'The process of making yarn from fibers is called spinning. Weaving is the process of making fabric from yarn.',
            difficulty: 'Easy'
        }
    ],
    set9: [
        {
            id: 41,
            question: 'What is a house?',
            options: ['A place to play', 'A place to live with family', 'A market', 'A garden'],
            correctAnswer: 1,
            explanation: 'A house is a place where we live with our family members and feel safe and secure.',
            difficulty: 'Easy'
        },
        {
            id: 42,
            question: 'A house keeps us safe from:',
            options: ['Weather and dangers', 'Shops', 'School', 'Vehicles'],
            correctAnswer: 0,
            explanation: 'A house protects us from various weather conditions like heat, cold, rain and also from dangers like thieves and wild animals.',
            difficulty: 'Easy'
        },
        {
            id: 43,
            question: 'What are the two main types of houses?',
            options: ['Large and small', 'Permanent and temporary', 'Rural and urban', 'Stone and wood'],
            correctAnswer: 1,
            explanation: 'Houses are mainly of two types: Permanent houses (pukka houses) which are strong and built to last long, and Temporary houses (kutcha houses) which are not very strong and are built for short periods.',
            difficulty: 'Easy'
        },
        {
            id: 44,
            question: 'Permanent houses are also called:',
            options: ['Kutcha houses', 'Pukka houses', 'Mobile houses', 'Tents'],
            correctAnswer: 1,
            explanation: 'Permanent houses are also known as pukka houses. They are strong, durable and built with materials like bricks, cement, concrete, etc.',
            difficulty: 'Easy'
        },
        {
            id: 45,
            question: 'Which material is NOT used in permanent houses?',
            options: ['Bricks', 'Cement', 'Straw', 'Steel'],
            correctAnswer: 2,
            explanation: 'Straw is not used in permanent houses. It is generally used in temporary houses. Permanent houses are built with strong materials like bricks, cement, steel, concrete, etc.',
            difficulty: 'Easy'
        },
        {
            id: 46,
            question: 'Which of these is a permanent house?',
            options: ['Tent', 'Bungalow', 'Hut', 'Caravan'],
            correctAnswer: 1,
            explanation: 'A bungalow is a permanent house. Tents, huts and caravans are examples of temporary houses.',
            difficulty: 'Easy'
        },
        {
            id: 47,
            question: 'Temporary houses are usually made of:',
            options: ['Mud and bamboo', 'Cement and iron', 'Concrete and steel', 'Glass and tiles'],
            correctAnswer: 0,
            explanation: 'Temporary houses are usually made of locally available materials like mud, bamboo, straw, etc. which are not very strong but are cheap and easy to build.',
            difficulty: 'Easy'
        },
        {
            id: 48,
            question: 'Another name for temporary houses is:',
            options: ['Strong houses', 'Kutcha houses', 'City houses', 'Flats'],
            correctAnswer: 1,
            explanation: 'Temporary houses are also called kutcha houses. They are not very strong and are built for short periods.',
            difficulty: 'Easy'
        },
        {
            id: 49,
            question: 'Which of these is a temporary house?',
            options: ['Hut', 'Multi-storey building', 'Bungalow', 'Apartment'],
            correctAnswer: 0,
            explanation: 'A hut is a temporary house. Multi-storey buildings, bungalows and apartments are permanent houses.',
            difficulty: 'Easy'
        },
        {
            id: 50,
            question: 'What is a caravan?',
            options: ['House made of snow', 'House on wheels', 'House on water', 'Tent house'],
            correctAnswer: 1,
            explanation: 'A caravan is a temporary house built on wheels that can be moved from one place to another as per our needs.',
            difficulty: 'Easy'
        },
        {
            id: 51,
            question: 'What is a tent house made of?',
            options: ['Cement', 'Canvas', 'Mud', 'Bricks'],
            correctAnswer: 1,
            explanation: 'A tent house is made of canvas which is a strong fabric that can be folded and carried easily.',
            difficulty: 'Easy'
        },
        {
            id: 52,
            question: 'A houseboat is made of:',
            options: ['Stone', 'Wood', 'Bricks', 'Steel'],
            correctAnswer: 1,
            explanation: 'A houseboat is a house made of wood that floats on water. It is found in places with rivers or lakes.',
            difficulty: 'Easy'
        },
        {
            id: 53,
            question: 'Where can we find houseboats in India?',
            options: ['Rajasthan & Gujarat', 'Kashmir & Kerala', 'Punjab & Haryana', 'Goa & Delhi'],
            correctAnswer: 1,
            explanation: 'Houseboats are commonly found in Kashmir (on Dal Lake) and Kerala (on backwaters).',
            difficulty: 'Easy'
        },
        {
            id: 54,
            question: 'What are igloos made of?',
            options: ['Ice/snow blocks', 'Bricks', 'Mud', 'Canvas'],
            correctAnswer: 0,
            explanation: 'Igloos are temporary houses made of ice and snow blocks. They are built by Eskimos in extremely cold regions.',
            difficulty: 'Easy'
        },
        {
            id: 55,
            question: 'Who usually lives in igloos?',
            options: ['Campers', 'Eskimos', 'Nomads', 'Soldiers'],
            correctAnswer: 1,
            explanation: 'Eskimos, who live in extremely cold regions, build and live in igloos made of ice and snow.',
            difficulty: 'Easy'
        },
        {
            id: 56,
            question: 'Stilt houses are built on:',
            options: ['Trees', 'Wooden or metal poles', 'Boats', 'Hills'],
            correctAnswer: 1,
            explanation: 'Stilt houses are built on wooden or metal poles that raise them above the ground level.',
            difficulty: 'Easy'
        },
        {
            id: 57,
            question: 'Why are stilt houses built high?',
            options: ['For decoration', 'To avoid floodwaters', 'To keep animals out', 'To save money'],
            correctAnswer: 1,
            explanation: 'Stilt houses are built high to protect the people living in them from floodwaters during heavy rains.',
            difficulty: 'Easy'
        },
        {
            id: 58,
            question: 'Houses in hilly areas often have:',
            options: ['Flat roofs', 'Sloped roofs', 'Round roofs', 'No roofs'],
            correctAnswer: 1,
            explanation: 'Houses in hilly areas often have sloped roofs so that snow and rainwater can easily slide off.',
            difficulty: 'Easy'
        },
        {
            id: 59,
            question: 'A good house should have:',
            options: ['Sunlight and fresh air', 'Darkness', 'Dust', 'Noise'],
            correctAnswer: 0,
            explanation: 'A good house should have proper sunlight and fresh air circulation to keep the environment healthy.',
            difficulty: 'Easy'
        },
        {
            id: 60,
            question: 'Mesh screens on windows keep out:',
            options: ['Birds', 'Insects', 'Dust', 'Rain'],
            correctAnswer: 1,
            explanation: 'Mesh screens on windows and doors help to keep insects like mosquitoes, flies, etc. out of the house.',
            difficulty: 'Easy'
        }
    ],
    set10: [
        {
            id: 61,
            question: 'A clean house helps us stay free from:',
            options: ['Games', 'Germs', 'Furniture', 'Noise'],
            correctAnswer: 1,
            explanation: 'A clean house helps to prevent the growth of germs and bacteria which can cause diseases.',
            difficulty: 'Easy'
        },
        {
            id: 62,
            question: 'What makes a house secure?',
            options: ['Locks', 'Toys', 'Windows', 'Curtains'],
            correctAnswer: 0,
            explanation: 'Locks on doors and windows make our house secure by preventing unauthorized entry.',
            difficulty: 'Easy'
        },
        {
            id: 63,
            question: 'Where should trash be thrown?',
            options: ['On the road', 'In dustbins', 'In rooms', 'In cupboards'],
            correctAnswer: 1,
            explanation: 'Trash should always be thrown in dustbins to keep the surroundings clean and prevent the growth of germs.',
            difficulty: 'Easy'
        },
        {
            id: 64,
            question: 'Why should dustbins be covered?',
            options: ['To look neat', 'To keep insects out', 'To save space', 'To decorate'],
            correctAnswer: 1,
            explanation: 'Dustbins should be covered to prevent insects like flies and mosquitoes from sitting on the waste and spreading diseases.',
            difficulty: 'Easy'
        },
        {
            id: 65,
            question: 'What should be cleaned regularly?',
            options: ['Bedrooms only', 'Bathrooms and toilets', 'Bookshelves only', 'Garden only'],
            correctAnswer: 1,
            explanation: 'Bathrooms and toilets should be cleaned regularly as they can easily become breeding grounds for germs and bacteria.',
            difficulty: 'Easy'
        },
        {
            id: 66,
            question: 'Drains in kitchens and bathrooms should be:',
            options: ['Open', 'Covered', 'Broken', 'Ignored'],
            correctAnswer: 1,
            explanation: 'Drains in kitchens and bathrooms should be covered to prevent insects from entering the house.',
            difficulty: 'Easy'
        },
        {
            id: 67,
            question: 'Clothes protect us from:',
            options: ['Only cold', 'Only rain', 'Cold, heat, rain, dust and insects', 'Nothing'],
            correctAnswer: 2,
            explanation: 'Clothes protect us from various weather conditions like cold, heat, rain and also from dust and insects.',
            difficulty: 'Easy'
        },
        {
            id: 68,
            question: 'In summer we wear:',
            options: ['Woollen clothes', 'Cotton clothes', 'Raincoats', 'Jackets'],
            correctAnswer: 1,
            explanation: 'In summer, we wear cotton clothes as they absorb sweat and allow air to pass through, keeping us cool.',
            difficulty: 'Easy'
        },
        {
            id: 69,
            question: 'In winter we wear:',
            options: ['Cotton clothes', 'Wool or fur clothes', 'Nylon clothes', 'Raincoats'],
            correctAnswer: 1,
            explanation: 'In winter, we wear woollen or fur clothes as they trap air and provide insulation, keeping us warm.',
            difficulty: 'Easy'
        },
        {
            id: 70,
            question: 'What do we use in the rainy season?',
            options: ['Sweaters', 'Jackets', 'Raincoats and umbrellas', 'Woollen caps'],
            correctAnswer: 2,
            explanation: 'In the rainy season, we use raincoats and umbrellas to protect ourselves from getting wet.',
            difficulty: 'Easy'
        },
        {
            id: 71,
            question: 'Fibres are:',
            options: ['Stones', 'Thread-like structures used to make clothes', 'Toys', 'Paintings'],
            correctAnswer: 1,
            explanation: 'Fibres are thread-like structures which are spun into yarns and then woven or knitted to make clothes.',
            difficulty: 'Easy'
        },
        {
            id: 72,
            question: 'Fibres are of how many types?',
            options: ['One', 'Two', 'Three', 'Four'],
            correctAnswer: 1,
            explanation: 'Fibres are of two types: Natural fibres (obtained from plants and animals) and Synthetic fibres (made by humans in factories).',
            difficulty: 'Easy'
        },
        {
            id: 73,
            question: 'Cotton, jute and flax are:',
            options: ['Man-made fibres', 'Plant fibres', 'Animal fibres', 'Synthetic fibres'],
            correctAnswer: 1,
            explanation: 'Cotton, jute and flax are plant fibres obtained from different parts of plants.',
            difficulty: 'Easy'
        },
        {
            id: 74,
            question: 'Wool and silk are obtained from:',
            options: ['Plants', 'Animals', 'Factories', 'Soil'],
            correctAnswer: 1,
            explanation: 'Wool is obtained from the fleece of sheep and silk is obtained from the cocoons of silkworms, both of which are animals.',
            difficulty: 'Easy'
        },
        {
            id: 75,
            question: 'Which of these is a man-made fibre?',
            options: ['Cotton', 'Wool', 'Polyester', 'Silk'],
            correctAnswer: 2,
            explanation: 'Polyester is a man-made or synthetic fibre produced in factories. Cotton, wool and silk are natural fibres.',
            difficulty: 'Easy'
        },
        {
            id: 76,
            question: 'Nylon and terrycotton are:',
            options: ['Natural fibres', 'Man-made fibres', 'Plant fibres', 'Animal fibres'],
            correctAnswer: 1,
            explanation: 'Nylon and terrycotton are man-made or synthetic fibres produced in factories.',
            difficulty: 'Easy'
        },
        {
            id: 77,
            question: 'Why should clothes be ironed?',
            options: ['To change colour', 'To look neat and tidy', 'To dry them', 'To make them heavy'],
            correctAnswer: 1,
            explanation: 'Ironing clothes removes wrinkles and makes them look neat and tidy.',
            difficulty: 'Easy'
        },
        {
            id: 78,
            question: 'Why should we wear clean clothes?',
            options: ['To stay healthy and look smart', 'To play outside', 'To waste time', 'To save money'],
            correctAnswer: 0,
            explanation: 'We should wear clean clothes to stay healthy by preventing germs and to look smart and presentable.',
            difficulty: 'Easy'
        },
        {
            id: 79,
            question: 'Dressing should match:',
            options: ['Weather and place', 'Only colour', 'Only style', 'Nothing'],
            correctAnswer: 0,
            explanation: 'Our dressing should match the weather conditions and the place we are going to.',
            difficulty: 'Easy'
        },
        {
            id: 80,
            question: 'Clothes help us:',
            options: ['Look smart and tidy', 'Fall sick', 'Work less', 'Become lazy'],
            correctAnswer: 0,
            explanation: 'Clothes help us look smart and tidy, and also protect us from various weather conditions and harmful elements.',
            difficulty: 'Easy'
        }
    ]
};

// Add the new questions to the main mcqQuestions object
mcqQuestions['housing-clothing'] = housingClothingQuestions;

// MCQ questions for Our Body chapter
const ourBodyQuestions = {
    set1: [
        {
            id: 1,
            question: 'The smallest unit of the body is:',
            options: ['Tissue', 'Cell', 'Bone', 'Organ'],
            correctAnswer: 1,
            explanation: 'Cells are the smallest unit of the body. They are the building blocks of all living organisms.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'Cells with similar features form:',
            options: ['Organs', 'Tissues', 'Systems', 'Blood'],
            correctAnswer: 1,
            explanation: 'Cells with similar features group together to form tissues. For example, muscle cells form muscle tissue.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'A group of tissues performing a task forms an:',
            options: ['Organ', 'Bone', 'Cell', 'Joint'],
            correctAnswer: 0,
            explanation: 'An organ is formed when different tissues work together to perform a specific function. For example, the heart is an organ made of different tissues.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'A group of organs working together is called:',
            options: ['Tissue', 'Organ system', 'Muscle', 'Bone'],
            correctAnswer: 1,
            explanation: 'An organ system consists of multiple organs that work together to perform a complex function. For example, the digestive system includes the stomach, intestines, liver, etc.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'How many bones are in the human skeleton?',
            options: ['106', '206', '300', '506'],
            correctAnswer: 1,
            explanation: 'The human skeleton consists of 206 bones. These bones provide structure, protect organs, and allow movement.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 6,
            question: 'The skeleton provides:',
            options: ['Energy', 'Shape and support', 'Digestion', 'Breathing'],
            correctAnswer: 1,
            explanation: 'The skeleton provides shape and support to our body. It acts as a framework that maintains our body structure.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'Where two or more bones meet is called:',
            options: ['Muscle', 'Joint', 'Nerve', 'Organ'],
            correctAnswer: 1,
            explanation: 'A joint is the place where two or more bones meet. Joints allow movement of body parts.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'Muscles help in:',
            options: ['Breathing only', 'Movement of body parts', 'Digesting food', 'Thinking'],
            correctAnswer: 1,
            explanation: 'Muscles help in the movement of body parts. They contract and relax to produce movement.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'Our body has about:',
            options: ['60 muscles', '600 muscles', '6 muscles', '6,000 muscles'],
            correctAnswer: 1,
            explanation: 'The human body has approximately 600 muscles that help in various movements and functions.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'The circulatory system includes:',
            options: ['Heart, blood and blood vessels', 'Lungs and nose', 'Bones and joints', 'Brain and nerves'],
            correctAnswer: 0,
            explanation: 'The circulatory system consists of the heart, blood, and blood vessels. It transports nutrients, oxygen, and waste products throughout the body.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 11,
            question: 'The main function of the heart is:',
            options: ['Breathing', 'Pumping blood', 'Thinking', 'Digesting food'],
            correctAnswer: 1,
            explanation: 'The main function of the heart is to pump blood throughout the body. It ensures that oxygen and nutrients reach all parts of the body.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'Blood carries:',
            options: ['Only water', 'Nutrients, oxygen and carbon dioxide', 'Only oxygen', 'Only waste'],
            correctAnswer: 1,
            explanation: 'Blood carries nutrients, oxygen, and carbon dioxide. It transports oxygen to cells and removes carbon dioxide, a waste product.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'Which organs form the respiratory system?',
            options: ['Heart, blood', 'Nose, windpipe and lungs', 'Brain, nerves', 'Bones, joints'],
            correctAnswer: 1,
            explanation: 'The respiratory system consists of the nose, windpipe (trachea), and lungs. It helps in breathing by bringing oxygen into the body and removing carbon dioxide.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'We inhale:',
            options: ['Carbon dioxide', 'Oxygen-rich air', 'Dust', 'Smoke'],
            correctAnswer: 1,
            explanation: 'When we inhale, we breathe in oxygen-rich air. This oxygen is needed by our cells to produce energy.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'We exhale:',
            options: ['Oxygen', 'Carbon dioxide-rich air', 'Water vapour', 'Nitrogen'],
            correctAnswer: 1,
            explanation: 'When we exhale, we breathe out carbon dioxide-rich air. Carbon dioxide is a waste product produced by our cells.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 16,
            question: 'Nose hair prevents:',
            options: ['Breathing', 'Dust and germs from entering', 'Airflow', 'Smiling'],
            correctAnswer: 1,
            explanation: 'Nose hair filters the air we breathe by trapping dust and germs, preventing them from entering our respiratory system.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'Digestion begins in the:',
            options: ['Lungs', 'Mouth', 'Stomach', 'Intestine'],
            correctAnswer: 1,
            explanation: 'Digestion begins in the mouth where saliva breaks down food and teeth chew it into smaller pieces.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'Which substance softens food in the mouth?',
            options: ['Water', 'Saliva', 'Blood', 'Oxygen'],
            correctAnswer: 1,
            explanation: 'Saliva is secreted by salivary glands in the mouth and helps to soften food, making it easier to chew and swallow.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'Nutrients are absorbed in the:',
            options: ['Large intestine', 'Small intestine', 'Stomach', 'Liver'],
            correctAnswer: 1,
            explanation: 'Most nutrients from digested food are absorbed in the small intestine, which has finger-like projections called villi to increase surface area for absorption.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'Waste food leaves the body through the:',
            options: ['Nose', 'Anus', 'Kidney', 'Skin'],
            correctAnswer: 1,
            explanation: 'Undigested waste food leaves the body through the anus as feces during defecation.',
            difficulty: 'Easy'
        }
    ],
    set5: [
        {
            id: 21,
            question: 'The process of removing waste is called:',
            options: ['Digestion', 'Excretion', 'Circulation', 'Respiration'],
            correctAnswer: 1,
            explanation: 'Excretion is the process of removing waste products from the body. These waste products are produced by various metabolic activities.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'The main organs of the excretory system are:',
            options: ['Lungs', 'Kidneys', 'Brain', 'Bones'],
            correctAnswer: 1,
            explanation: 'The kidneys are the main organs of the excretory system. They filter waste products from the blood and produce urine.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'Kidneys produce:',
            options: ['Sweat', 'Urine', 'Saliva', 'Blood'],
            correctAnswer: 1,
            explanation: 'The kidneys produce urine by filtering waste products and excess water from the blood.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'Which organ removes carbon dioxide?',
            options: ['Kidneys', 'Lungs', 'Brain', 'Heart'],
            correctAnswer: 1,
            explanation: 'The lungs remove carbon dioxide from the body during exhalation. This is a part of the respiratory system.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'The nervous system includes:',
            options: ['Heart, blood', 'Brain, spinal cord and nerves', 'Nose, lungs', 'Bones, joints'],
            correctAnswer: 1,
            explanation: 'The nervous system consists of the brain, spinal cord, and nerves. It controls and coordinates all body functions.',
            difficulty: 'Easy'
        }
    ],
    set6: [
        {
            id: 26,
            question: 'The brain helps us to:',
            options: ['Breathe', 'Think, feel and react', 'Pump blood', 'Digest food'],
            correctAnswer: 1,
            explanation: 'The brain is the control center of the body. It helps us think, feel emotions, and react to our environment.',
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: 'Which carries messages to and from the brain?',
            options: ['Bones', 'Nerves', 'Muscles', 'Blood'],
            correctAnswer: 1,
            explanation: 'Nerves carry messages to and from the brain. They form a communication network throughout the body.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'The reproductive system helps in:',
            options: ['Circulation of blood', 'Producing young ones', 'Digestion of food', 'Removing waste'],
            correctAnswer: 1,
            explanation: 'The reproductive system is responsible for producing offspring or young ones, ensuring the continuation of the species.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: 'The correct body position is called:',
            options: ['Exercise', 'Posture', 'Movement', 'Balance'],
            correctAnswer: 1,
            explanation: 'Posture refers to the correct body position. Good posture helps prevent back pain and other health issues.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'To prevent back pain, we should wear our school bag:',
            options: ['On one shoulder', 'On the upper back', 'On the lower back', 'In the hand'],
            correctAnswer: 1,
            explanation: 'To prevent back pain, we should wear our school bag on the upper back with both straps to distribute the weight evenly.',
            difficulty: 'Easy'
        }
    ],
    set7: [
        {
            id: 31,
            question: 'How many hours of sleep are needed daily?',
            options: ['4', '6', '8', '10'],
            correctAnswer: 2,
            explanation: 'Children need about 8 hours of sleep daily for proper growth and development. Sleep helps the body to rest and recover.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: 'Which is NOT a good habit?',
            options: ['Eating chips often', 'Drinking water', 'Exercising', 'Eating fruits'],
            correctAnswer: 0,
            explanation: 'Eating chips often is not a good habit as they are high in salt and unhealthy fats. Regular consumption can lead to health problems.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'A diet containing all nutrients is called:',
            options: ['Fast food', 'Balanced diet', 'Junk food', 'Fatty diet'],
            correctAnswer: 1,
            explanation: 'A balanced diet contains all the essential nutrients in the right proportions needed for proper growth and health.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'Why should food be chewed properly?',
            options: ['For fun', 'To help digestion', 'To waste time', 'To drink water'],
            correctAnswer: 1,
            explanation: 'Food should be chewed properly to help digestion. Chewing breaks down food into smaller pieces, making it easier for the stomach to digest.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: 'Why should we drink plenty of water?',
            options: ['To stay hydrated', 'To avoid sleep', 'To skip meals', 'To lose height'],
            correctAnswer: 0,
            explanation: 'We should drink plenty of water to stay hydrated. Water helps in various body functions including temperature regulation and waste removal.',
            difficulty: 'Easy'
        }
    ],
    set8: [
        {
            id: 36,
            question: 'Which of these is NOT exercise?',
            options: ['Jogging', 'Yoga', 'Walking', 'Watching TV'],
            correctAnswer: 3,
            explanation: 'Watching TV is not exercise. Exercise involves physical activity that helps keep the body fit and healthy.',
            difficulty: 'Easy'
        }
    ]
};

// Add the new questions to the main mcqQuestions object
mcqQuestions['our-body'] = ourBodyQuestions;

// Chapter summaries

// Chapter summaries
const summaryContent = {
    'real-numbers': {
        keyPoints: [
            'Real numbers include both rational and irrational numbers',
            'Rational numbers can be expressed as p/q where p, q are integers and q ≠ 0',
            'Irrational numbers cannot be expressed as fractions',
            'Euclid division algorithm helps find HCF of two positive integers',
            'Decimal expansion of rational numbers is either terminating or non-terminating repeating'
        ],
        formulas: [
            'Euclid Division Lemma: a = bq + r, where 0 ≤ r < b',
            'For positive integers a and b: a × b = HCF(a,b) × LCM(a,b)',
            'If p is a prime and p divides a², then p divides a'
        ],
        importantNotes: [
            'Every integer is a rational number but not every rational number is an integer',
            'The sum, difference, and product of two rational numbers is always rational',
            'The sum or difference of a rational and irrational number is always irrational'
        ]
    },
    'solar-system': {
        keyPoints: [
            'The Solar System has the Sun at the center and 8 planets orbiting around it',
            'The Sun is the biggest object in our Solar System and gives us light and heat',
            'Earth is the only planet known to have life',
            'The Moon is Earth\'s only natural satellite',
            'Each planet has special features that make it unique'
        ],
        formulas: [
            'Order of planets from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune',
            'Earth is the 3rd planet from the Sun',
            'Jupiter is the largest planet, Mercury is the smallest'
        ],
        importantNotes: [
            'Mars is called the Red Planet because of its reddish color',
            'Earth is called the Blue Planet because of its water',
            'Saturn has beautiful rings made of ice and rock',
            'The Moon changes its shape as we see it from Earth (phases of the Moon)'
        ]
    },
    'housing-clothing': {
        keyPoints: [
            'Houses are built according to the climate of the region',
            'Materials used for houses depend on availability in the region',
            'Temporary houses can be moved from one place to another',
            'Clothes are chosen based on weather conditions',
            'Natural fibers come from plants and animals while synthetic fibers are made in factories'
        ],
        formulas: [
            'Thick walls + Small windows = Warm house (cold climates)',
            'Thin walls + Large windows = Cool house (hot climates)',
            'Light colors = Heat reflection (summer)',
            'Dark colors = Heat absorption (winter)'
        ],
        importantNotes: [
            'Houses in flood-prone areas are built on stilts',
            'Houses in extremely cold regions are made of ice (igloos)',
            'Cotton is best for summer as it absorbs sweat',
            'Wool is best for winter as it provides insulation',
            'Waterproof clothes are ideal for rainy season'
        ]
    }
};

// Sample MCQ questions

// End of data file