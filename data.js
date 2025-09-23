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
                id: 'the universe',
                name: 'the universe',
                description: 'Learn about planets, sun, moon and our place in the solar system',
                difficulty: 'Easy',
                estimatedTime: '30 mins'
            },
	    {
    		id: 'the-earth',
    		name: 'The Earth',
    		description: 'Understanding Earth’s shape, movements, continents, oceans, landforms and natural features',
    		difficulty: 'Easy',
    		estimatedTime: '45 mins'
	    },
	    {
    		id: 'globe-map-direction',
    		name: 'Globe, Map and Direction',
    		description: 'Understanding globes, maps, directions, compass, sketches and landmarks',
    		difficulty: 'Easy',
    		estimatedTime: '45 mins'
	    },
	    {
    		id: 'basic-features-india',
    		name: 'Basic features of India',
    		description: 'Learn about India’s location, political divisions, physical features, rivers, deserts and plateaus',
    		difficulty: 'Easy',
    		estimatedTime: '50 mins'
	    },
	    {
    		id: 'food-cloth-festival',
    		name: 'Food, Cloth and Festival of India',
    		description: 'Understanding food crops, clothing styles, and festivals celebrated across India',
    		difficulty: 'Easy',
    		estimatedTime: '45 mins'
	   },
	   {
    		id: 'northern-cities',
    		name: 'Northern Cities of India',
    		description: 'Explore the geography, culture, and landmarks of major northern Indian cities',
    		difficulty: 'Medium',
    		estimatedTime: '50 mins'
	   },
	   {
    		id: 'eastern-cities',
    		name: 'Eastern Cities of India',
    		description: 'Learn about Kolkata, Bhubaneswar, Guwahati, Raipur, and Ranchi – their culture, food, crafts, and landmarks.',
    		difficulty: 'Medium',
    		estimatedTime: '50 mins'
	   },
	   {
    		id: 'western-cities',
    		name: 'Western Cities of India',
    		description: 'Learn about Mumbai, Ahmedabad, Jaipur, Panaji, and Daman – their culture, food, climate, crafts, and famous places.',
    		difficulty: 'Medium',
    		estimatedTime: '50 mins'
	   },
	   {
    		id: 'southern-cities',
    		name: 'Southern Cities of India',
    		description: 'Explore Chennai, Bengaluru, Hyderabad, Thiruvananthapuram, and Amaravati – their culture, food, monuments, and traditions.',
    		difficulty: 'Medium',
    		estimatedTime: '50 mins'
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
            question: 'A clean house helps us stay free from:',
            options: ['Games', 'Germs', 'Furniture', 'Noise'],
            correctAnswer: 1,
            explanation: 'A clean house helps to prevent the growth of germs and bacteria which can cause diseases.',
            difficulty: 'Easy'
        },
        {
            id: 42,
            question: 'What makes a house secure?',
            options: ['Locks', 'Toys', 'Windows', 'Curtains'],
            correctAnswer: 0,
            explanation: 'Locks on doors and windows make our house secure by preventing unauthorized entry.',
            difficulty: 'Easy'
        },
        {
            id: 43,
            question: 'Where should trash be thrown?',
            options: ['On the road', 'In dustbins', 'In rooms', 'In cupboards'],
            correctAnswer: 1,
            explanation: 'Trash should always be thrown in dustbins to keep the surroundings clean and prevent the growth of germs.',
            difficulty: 'Easy'
        },
        {
            id: 44,
            question: 'Why should dustbins be covered?',
            options: ['To look neat', 'To keep insects out', 'To save space', 'To decorate'],
            correctAnswer: 1,
            explanation: 'Dustbins should be covered to prevent insects like flies and mosquitoes from sitting on the waste and spreading diseases.',
            difficulty: 'Easy'
        },
        {
            id: 45,
            question: 'What should be cleaned regularly?',
            options: ['Bedrooms only', 'Bathrooms and toilets', 'Bookshelves only', 'Garden only'],
            correctAnswer: 1,
            explanation: 'Bathrooms and toilets should be cleaned regularly as they can easily become breeding grounds for germs and bacteria.',
            difficulty: 'Easy'
        },
        {
            id: 46,
            question: 'Drains in kitchens and bathrooms should be:',
            options: ['Open', 'Covered', 'Broken', 'Ignored'],
            correctAnswer: 1,
            explanation: 'Drains in kitchens and bathrooms should be covered to prevent insects from entering the house.',
            difficulty: 'Easy'
        },
        {
            id: 47,
            question: 'Clothes protect us from:',
            options: ['Only cold', 'Only rain', 'Cold, heat, rain, dust and insects', 'Nothing'],
            correctAnswer: 2,
            explanation: 'Clothes protect us from various weather conditions like cold, heat, rain and also from dust and insects.',
            difficulty: 'Easy'
        },
        {
            id: 48,
            question: 'In summer we wear:',
            options: ['Woollen clothes', 'Cotton clothes', 'Raincoats', 'Jackets'],
            correctAnswer: 1,
            explanation: 'In summer, we wear cotton clothes as they absorb sweat and allow air to pass through, keeping us cool.',
            difficulty: 'Easy'
        },
        {
            id: 49,
            question: 'In winter we wear:',
            options: ['Cotton clothes', 'Wool or fur clothes', 'Nylon clothes', 'Raincoats'],
            correctAnswer: 1,
            explanation: 'In winter, we wear woollen or fur clothes as they trap air and provide insulation, keeping us warm.',
            difficulty: 'Easy'
        },
        {
            id: 50,
            question: 'What do we use in the rainy season?',
            options: ['Sweaters', 'Jackets', 'Raincoats and umbrellas', 'Woollen caps'],
            correctAnswer: 2,
            explanation: 'In the rainy season, we use raincoats and umbrellas to protect ourselves from getting wet.',
            difficulty: 'Easy'
        },
        {
            id: 51,
            question: 'Fibres are:',
            options: ['Stones', 'Thread-like structures used to make clothes', 'Toys', 'Paintings'],
            correctAnswer: 1,
            explanation: 'Fibres are thread-like structures which are spun into yarns and then woven or knitted to make clothes.',
            difficulty: 'Easy'
        },
        {
            id: 52,
            question: 'Fibres are of how many types?',
            options: ['One', 'Two', 'Three', 'Four'],
            correctAnswer: 1,
            explanation: 'Fibres are of two types: Natural fibres (obtained from plants and animals) and Synthetic fibres (made by humans in factories).',
            difficulty: 'Easy'
        },
        {
            id: 53,
            question: 'Cotton, jute and flax are:',
            options: ['Man-made fibres', 'Plant fibres', 'Animal fibres', 'Synthetic fibres'],
            correctAnswer: 1,
            explanation: 'Cotton, jute and flax are plant fibres obtained from different parts of plants.',
            difficulty: 'Easy'
        },
        {
            id: 54,
            question: 'Wool and silk are obtained from:',
            options: ['Plants', 'Animals', 'Factories', 'Soil'],
            correctAnswer: 1,
            explanation: 'Wool is obtained from the fleece of sheep and silk is obtained from the cocoons of silkworms, both of which are animals.',
            difficulty: 'Easy'
        },
        {
            id: 55,
            question: 'Which of these is a man-made fibre?',
            options: ['Cotton', 'Wool', 'Polyester', 'Silk'],
            correctAnswer: 2,
            explanation: 'Polyester is a man-made or synthetic fibre produced in factories. Cotton, wool and silk are natural fibres.',
            difficulty: 'Easy'
        },
        {
            id: 56,
            question: 'Nylon and terrycotton are:',
            options: ['Natural fibres', 'Man-made fibres', 'Plant fibres', 'Animal fibres'],
            correctAnswer: 1,
            explanation: 'Nylon and terrycotton are man-made or synthetic fibres produced in factories.',
            difficulty: 'Easy'
        },
        {
            id: 57,
            question: 'Why should clothes be ironed?',
            options: ['To change colour', 'To look neat and tidy', 'To dry them', 'To make them heavy'],
            correctAnswer: 1,
            explanation: 'Ironing clothes removes wrinkles and makes them look neat and tidy.',
            difficulty: 'Easy'
        },
        {
            id: 58,
            question: 'Why should we wear clean clothes?',
            options: ['To stay healthy and look smart', 'To play outside', 'To waste time', 'To save money'],
            correctAnswer: 0,
            explanation: 'We should wear clean clothes to stay healthy by preventing germs and to look smart and presentable.',
            difficulty: 'Easy'
        },
        {
            id: 59,
            question: 'Dressing should match:',
            options: ['Weather and place', 'Only colour', 'Only style', 'Nothing'],
            correctAnswer: 0,
            explanation: 'Our dressing should match the weather conditions and the place we are going to.',
            difficulty: 'Easy'
        },
        {
            id: 60,
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
// Add The Universe chapter for Class 3 Social Science
chapters['social'][3].push({
    id: 'the-universe',
    name: 'The Universe',
    description: 'Introduction to the universe, galaxies, stars, planets and other celestial bodies',
    difficulty: 'Easy',
    estimatedTime: '40 mins'
});
// MCQ questions for The Universe chapter
mcqQuestions['the-universe'] = {
    set1: [
        {
            id: 1,
            question: 'What is the universe described as?',
            options: [
                'A large collection of stars',
                'The vast space which includes everything that exists',
                'A group of planets',
                'A specific galaxy'
            ],
            correctAnswer: 1,
            explanation: 'The universe is the vast space which includes everything that exists.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'Which of the following is not mentioned as part of the universe?',
            options: ['Stars', 'Moon', 'Our planet Earth', 'Black holes'],
            correctAnswer: 3,
            explanation: 'Black holes are not mentioned as part of the universe in this chapter.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'What is a galaxy defined as?',
            options: [
                'A single star system',
                'A huge group of stars, planets and other heavenly bodies',
                'A collection of comets and asteroids',
                'The path planets take around the sun'
            ],
            correctAnswer: 1,
            explanation: 'A galaxy is a huge group of stars, planets and other heavenly bodies bound by gravity.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'Which galaxy is Earth a part of?',
            options: ['Andromeda', 'Orion', 'Ursa Major', 'Milky Way'],
            correctAnswer: 3,
            explanation: 'Earth is part of the Milky Way galaxy.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'What are stars described as?',
            options: [
                'Small rocky objects',
                'Cold, dark bodies',
                'Big balls of fire that give out heat and light',
                'Heavenly bodies that reflect sunlight'
            ],
            correctAnswer: 2,
            explanation: 'Stars are big balls of fire that give out heat and light.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 6,
            question: 'Why do many stars appear smaller than the Sun, even if they are bigger?',
            options: [
                'They are made of different materials',
                'They lie very far from the Earth',
                'They do not produce as much light',
                'They are surrounded by dust'
            ],
            correctAnswer: 1,
            explanation: 'Many stars appear smaller because they are very far from the Earth.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'What are constellations?',
            options: [
                'Individual bright stars',
                'Groups of stars which appear to form a particular pattern',
                'Distant galaxies',
                'Rocky objects orbiting the Sun'
            ],
            correctAnswer: 1,
            explanation: 'Constellations are groups of stars which appear to form a particular pattern.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'Which of these is an example of a constellation mentioned in the text?',
            options: ['Milky Way', 'Andromeda', 'Orion', 'Solar System'],
            correctAnswer: 2,
            explanation: 'Orion is an example of a constellation mentioned in the text.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'What celestial bodies together form the solar system?',
            options: [
                'The sun and the stars',
                'The sun, the eight planets and their satellites, and other heavenly bodies like comets and asteroids',
                'Galaxies and constellations',
                'Only the sun and the planets'
            ],
            correctAnswer: 1,
            explanation: 'The solar system consists of the sun, eight planets, their satellites, and other bodies like comets and asteroids.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: "What is the Sun's role in the solar system?",
            options: [
                'It is a planet that revolves around Earth',
                'It is a star at the centre of the solar system',
                'It is a satellite of Jupiter',
                'It reflects light from other stars'
            ],
            correctAnswer: 1,
            explanation: 'The Sun is a star at the centre of the solar system.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 11,
            question: 'Why is the Sun essential for life on Earth?',
            options: [
                'It keeps the Earth rotating',
                'It provides the heat and light necessary for life',
                'It protects Earth from asteroids',
                'It holds the moon in its orbit'
            ],
            correctAnswer: 1,
            explanation: 'The Sun provides the heat and light necessary for life on Earth.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: "What is the fixed elliptical path called that planets revolve around the sun in?",
            options: ['Galaxy', 'Constellation', 'Orbit', 'Satellite'],
            correctAnswer: 2,
            explanation: 'Planets revolve around the sun in a fixed elliptical path called an orbit.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'Do planets produce their own heat and light?',
            options: [
                'Yes, all planets produce heat and light',
                'No, they only reflect the light of the sun',
                'Only gas giants produce heat',
                'Only Earth produces light'
            ],
            correctAnswer: 1,
            explanation: 'Planets do not produce their own heat and light; they only reflect the Sun’s light.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'Which is the smallest planet and closest to the sun?',
            options: ['Earth', 'Mercury', 'Mars', 'Venus'],
            correctAnswer: 1,
            explanation: 'Mercury is the smallest planet and closest to the sun.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: "Which planet is known as 'Earth's twin planet'?",
            options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
            correctAnswer: 2,
            explanation: 'Venus is known as Earth’s twin planet because of its similar size and composition.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 16,
            question: "Why is Earth known as the 'blue planet'?",
            options: [
                'Its atmosphere is blue',
                'It reflects the blue color of space',
                'Three-fourths of the Earth is covered with water',
                'It has blue-colored rocks'
            ],
            correctAnswer: 2,
            explanation: 'Earth is known as the blue planet because about three-fourths of its surface is covered with water.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'How many moons does Mars have?',
            options: ['One', 'Two', 'Many', 'None'],
            correctAnswer: 1,
            explanation: 'Mars has two moons: Phobos and Deimos.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'Which is the largest planet in our solar system?',
            options: ['Saturn', 'Uranus', 'Neptune', 'Jupiter'],
            correctAnswer: 3,
            explanation: 'Jupiter is the largest planet in our solar system.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: "Which planet is known as the 'ringed planet'?",
            options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
            correctAnswer: 1,
            explanation: 'Saturn is known as the ringed planet because of its bright rings.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: "What is unique about Uranus's rotation?",
            options: [
                'It rotates very slowly',
                'It rotates in a different direction',
                'It rotates on its side',
                'It rotates faster than any other planet'
            ],
            correctAnswer: 2,
            explanation: 'Uranus is unique because it rotates on its side.',
            difficulty: 'Medium'
        }
    ],
    set5: [
        {
            id: 21,
            question: 'Which is the farthest planet from the sun?',
            options: ['Uranus', 'Saturn', 'Neptune', 'Mars'],
            correctAnswer: 2,
            explanation: 'Neptune is the farthest planet from the sun.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'What are natural satellites or moons?',
            options: [
                'Heavenly bodies that produce their own light and heat',
                'Heavenly bodies that revolve around planets',
                'Small rocky objects orbiting the sun',
                'Man-made objects sent into space'
            ],
            correctAnswer: 1,
            explanation: 'Natural satellites are heavenly bodies that revolve around planets, like Earth’s Moon.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: "What is Earth's natural satellite?",
            options: ['Sun', 'Mars', 'Moon', 'Venus'],
            correctAnswer: 2,
            explanation: 'Earth’s natural satellite is the Moon.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'What are artificial satellites?',
            options: [
                'Natural moons of other planets',
                'Man-made satellites orbiting the Earth',
                'Asteroids in the asteroid belt',
                'Comets near the sun'
            ],
            correctAnswer: 1,
            explanation: 'Artificial satellites are man-made satellites orbiting the Earth.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'What are asteroids?',
            options: [
                'Bright objects with long tails',
                'Huge groups of stars',
                'Small rocky objects which move around the sun',
                'Gas giants with rings'
            ],
            correctAnswer: 2,
            explanation: 'Asteroids are small rocky objects that move around the sun.',
            difficulty: 'Easy'
        }
    ],
    set6: [
        {
            id: 26,
            question: 'Where are most asteroids found?',
            options: [
                'Between the orbits of Earth and Mars',
                'Between the orbits of Mars and Jupiter',
                'Beyond Neptune',
                'Near the Sun'
            ],
            correctAnswer: 1,
            explanation: 'Most asteroids are found in the asteroid belt between Mars and Jupiter.',
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: 'What are comets made up of?',
            options: ['Only rock', 'Only ice', 'Rock, ice and dust', 'Gases only'],
            correctAnswer: 2,
            explanation: 'Comets are made of rock, ice, and dust.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'What happens when a comet is near the sun?',
            options: [
                'It breaks apart',
                'It appears as a bright head with a long tail',
                'It freezes completely',
                'It becomes invisible'
            ],
            correctAnswer: 1,
            explanation: 'When a comet is near the sun, it appears as a bright head with a long tail.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: 'The term "freeze" is explained as meaning:',
            options: [
                'To reflect light',
                'To become extremely cold',
                'To give out heat',
                'To revolve around a planet'
            ],
            correctAnswer: 1,
            explanation: '"Freeze" means to become extremely cold.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'What does "reflect" mean as explained?',
            options: ['To absorb light', 'To give back light', 'To produce light', 'To orbit'],
            correctAnswer: 1,
            explanation: '"Reflect" means to give back light.',
            difficulty: 'Easy'
        }
    ],
    set7: [
        {
            id: 31,
            question: 'What is the "Explore More" section related to on Page 1?',
            options: [
                'Learning about stars',
                'Understanding the universe',
                'Drawing constellations',
                'Finding out about planets'
            ],
            correctAnswer: 1,
            explanation: 'The Explore More section is related to understanding the universe.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: 'The "Active Brain" section asks the reader to imagine a scenario. What is it?',
            options: [
                'Imagining a new constellation',
                'Imagining no sun for a few days',
                'Imagining a trip to Mars',
                'Imagining a new galaxy'
            ],
            correctAnswer: 1,
            explanation: 'It asks the reader to imagine what would happen if there was no sun for a few days.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'Which planet is the second closest to the sun?',
            options: ['Mercury', 'Earth', 'Venus', 'Mars'],
            correctAnswer: 2,
            explanation: 'Venus is the second closest planet to the sun.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'How many moons does Earth have?',
            options: ['None', 'One', 'Two', 'Many'],
            correctAnswer: 1,
            explanation: 'Earth has one natural satellite, the Moon.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: 'What is the name given to the path that planets take to move around the sun?',
            options: ['Galaxy', 'Orbit', 'Constellation', 'Moon'],
            correctAnswer: 1,
            explanation: 'The path planets take around the sun is called an orbit.',
            difficulty: 'Easy'
        }
    ],
    set8: [
        {
            id: 36,
            question: 'What are comets made up of?',
            options: [
                'Gases and dust',
                'Rocks, ice, and dust',
                'Only rocks',
                'Only ice'
            ],
            correctAnswer: 1,
            explanation: 'Comets are made of rocks, ice, and dust.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: 'Which of these constellations is not mentioned?',
            options: ['Ursa Major', 'Orion', 'Ursa Minor', 'Gemini'],
            correctAnswer: 3,
            explanation: 'Gemini is not mentioned as a constellation in the chapter.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: 'The sun is a star, and many stars are bigger than the sun. Why does the sun appear so large from Earth?',
            options: [
                "It's the hottest star",
                "It's the closest star to Earth",
                'It produces the most light',
                'It has the strongest gravitational pull'
            ],
            correctAnswer: 1,
            explanation: 'The sun appears large because it is the closest star to Earth.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'What is the "Learning Outcomes" section primarily about?',
            options: [
                'Activities related to space',
                'What learners will be able to understand after studying the topic',
                'Interesting facts about the universe',
                'Names of different constellations'
            ],
            correctAnswer: 1,
            explanation: 'The Learning Outcomes section describes what learners will understand after studying the topic.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            question: 'What is an "artificial" satellite defined as?',
            options: [
                'A moon of another planet',
                "A natural satellite like Earth's moon",
                'Something made by humans, not natural',
                'A comet in orbit'
            ],
            correctAnswer: 2,
            explanation: 'Artificial means something made by humans, not natural. Artificial satellites are man-made.',
            difficulty: 'Easy'
        }
    ]
};
// MCQ quetions for The Earth
mcqQuestions['the-earth'] = {
    set1: [
        {
            id: 1,
            question: 'Why is life possible only on Earth?',
            options: [
                'It is the largest planet',
                'It has air, water, and suitable temperature',
                'It is round in shape',
                'It is surrounded by other planets'
            ],
            correctAnswer: 1,
            explanation: 'Life is possible on Earth because it has air, water, and suitable temperature.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'What is the shape of the Earth?',
            options: ['Flat', 'Square', 'Spherical', 'Rectangular'],
            correctAnswer: 2,
            explanation: 'The Earth is spherical in shape.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'Which of these is not considered an essential element for life on Earth?',
            options: ['Air', 'Water', 'Rocks', 'Sunlight'],
            correctAnswer: 2,
            explanation: 'Rocks are not considered an essential element for life.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'What is the layer of air surrounding the Earth called?',
            options: ['Hydrosphere', 'Lithosphere', 'Atmosphere', 'Biosphere'],
            correctAnswer: 2,
            explanation: 'The atmosphere is the layer of air surrounding the Earth.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'What are the two types of movements the Earth has?',
            options: ['Spinning and orbiting', 'Rotation and revolution', 'Shaking and turning', 'Tilting and wobbling'],
            correctAnswer: 1,
            explanation: 'The Earth has two movements: rotation and revolution.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 6,
            question: 'How long does it take for the Earth to rotate on its axis?',
            options: ['12 hours', '1 day', '7 days', '365 days'],
            correctAnswer: 1,
            explanation: 'The Earth rotates once on its axis in 1 day (24 hours).',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'What is the spinning movement of the Earth around an imaginary line called axis known as?',
            options: ['Revolution', 'Orbit', 'Rotation', 'Tilting'],
            correctAnswer: 2,
            explanation: 'The spinning movement is called rotation.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'What is the movement of the Earth around the sun on a fixed path called?',
            options: ['Rotation', 'Revolution', 'Axis', 'Orbit'],
            correctAnswer: 1,
            explanation: 'The movement of the Earth around the Sun is called revolution.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'How long does it take for the Earth to complete one revolution around the sun?',
            options: ['24 hours', '1 week', '365 ¼ days', '30 days'],
            correctAnswer: 2,
            explanation: 'The Earth completes one revolution in 365 ¼ days.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'What are the large landmasses on the Earth known as?',
            options: ['Oceans', 'Continents', 'Islands', 'Plateaus'],
            correctAnswer: 1,
            explanation: 'Large landmasses are called continents.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 11,
            question: 'How many continents are there in the world?',
            options: ['Five', 'Six', 'Seven', 'Eight'],
            correctAnswer: 2,
            explanation: 'There are seven continents in the world.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'Which is the largest continent on Earth, of which India is a part?',
            options: ['Africa', 'North America', 'Asia', 'Europe'],
            correctAnswer: 2,
            explanation: 'Asia is the largest continent and India is part of it.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'What are very large and deep salty water bodies called?',
            options: ['Seas', 'Lakes', 'Rivers', 'Oceans'],
            correctAnswer: 3,
            explanation: 'Very large and deep salty water bodies are called oceans.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'How many oceans are there in the world?',
            options: ['Three', 'Four', 'Five', 'Six'],
            correctAnswer: 2,
            explanation: 'There are five oceans in the world.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'Which ocean is named after India?',
            options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Southern Ocean'],
            correctAnswer: 2,
            explanation: 'The Indian Ocean is named after India.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 16,
            question: 'What are the various natural features on the surface of the Earth called?',
            options: ['Water bodies', 'Landforms', 'Continents', 'Landscapes'],
            correctAnswer: 1,
            explanation: 'Natural features like mountains, plains and valleys are called landforms.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'What is a high land with steep slopes and a sharp peak called?',
            options: ['Hill', 'Valley', 'Mountain', 'Plateau'],
            correctAnswer: 2,
            explanation: 'A high land with steep slopes and a sharp peak is called a mountain.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'What is a chain of mountains known as?',
            options: ['Mountain range', 'Plateau', 'Valley', 'Peak'],
            correctAnswer: 0,
            explanation: 'A chain of mountains is called a mountain range.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'What is a low area lying between two mountains or two hills known as?',
            options: ['Plain', 'Valley', 'Desert', 'Plateau'],
            correctAnswer: 1,
            explanation: 'The low area between mountains is called a valley.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'What is a high land with a flat top, also known as a tableland?',
            options: ['Mountain', 'Hill', 'Plateau', 'Plain'],
            correctAnswer: 2,
            explanation: 'A plateau is a high land with a flat top.',
            difficulty: 'Easy'
        }
    ],
    set5: [
        {
            id: 21,
            question: 'Which Indian plateau is mentioned as an example of a tableland?',
            options: ['Malwa Plateau', 'Chota Nagpur Plateau', 'Deccan Plateau', 'Tibetan Plateau'],
            correctAnswer: 2,
            explanation: 'The Deccan Plateau is mentioned as an example of a tableland.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'What is an area which receives less rainfall and has sparse vegetation called?',
            options: ['Plain', 'Forest', 'Desert', 'Valley'],
            correctAnswer: 2,
            explanation: 'A desert receives little rainfall and has sparse vegetation.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'Which Indian desert is mentioned as an example?',
            options: ['Thar Desert', 'Sahara Desert', 'Gobi Desert', 'Arabian Desert'],
            correctAnswer: 0,
            explanation: 'The Thar Desert is mentioned as an example.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'What is a vast stretch of flat land called, often made fertile by rivers?',
            options: ['Desert', 'Valley', 'Plateau', 'Plain'],
            correctAnswer: 3,
            explanation: 'A plain is a vast stretch of flat fertile land.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'What is a large salty water body surrounded in whole or in parts by land, smaller than an ocean?',
            options: ['River', 'Lake', 'Sea', 'Pond'],
            correctAnswer: 2,
            explanation: 'A sea is a large salty water body smaller than an ocean.',
            difficulty: 'Easy'
        }
    ],
    set6: [
        {
            id: 26,
            question: 'Which of these is an example of a sea mentioned?',
            options: ['Caspian Sea', 'Arabian Sea', 'Black Sea', 'Dead Sea'],
            correctAnswer: 1,
            explanation: 'The Arabian Sea is mentioned as an example.',
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: 'What is a water body that flows from the mountain into the plains?',
            options: ['Lake', 'Sea', 'River', 'Ocean'],
            correctAnswer: 2,
            explanation: 'A river flows from mountains into plains.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'Which Indian river is mentioned as an example?',
            options: ['River Yamuna', 'River Brahmaputra', 'River Ganga', 'River Godavari'],
            correctAnswer: 2,
            explanation: 'River Ganga is mentioned as an example.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: 'What is a water body surrounded by land on all sides?',
            options: ['Sea', 'River', 'Lake', 'Ocean'],
            correctAnswer: 2,
            explanation: 'A lake is a water body surrounded by land.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'Which of these Indian lakes is mentioned as an example?',
            options: ['Wular Lake', 'Dal Lake', 'Sambhar Lake', 'Pulicat Lake'],
            correctAnswer: 1,
            explanation: 'Dal Lake is mentioned as an example.',
            difficulty: 'Easy'
        }
    ],
    set7: [
        {
            id: 31,
            question: 'Who was the great Spanish sailor who stated that Earth is spherical?',
            options: ['Christopher Columbus', 'Vasco da Gama', 'Ferdinand Magellan', 'James Cook'],
            correctAnswer: 2,
            explanation: 'Ferdinand Magellan proved the Earth is spherical.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: "What confirmed the spherical shape of the Earth after Magellan's voyage?",
            options: [
                'Scientific experiments',
                'Maps from ancient civilizations',
                'Photographs taken from space by astronauts',
                'Calculations by astronomers'
            ],
            correctAnswer: 2,
            explanation: 'Photographs from space confirmed Earth’s spherical shape.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'Which continent is located to the south of Asia?',
            options: ['Africa', 'Australia', 'Antarctica', 'Europe'],
            correctAnswer: 2,
            explanation: 'Antarctica is located to the south of Asia.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'Which ocean lies to the south of Asia?',
            options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Southern Ocean'],
            correctAnswer: 2,
            explanation: 'The Indian Ocean lies to the south of Asia.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: "What percentage of the world's land area is covered by plains?",
            options: ['Less than one-fourth', 'More than one-third', 'Exactly half', 'Less than one-fifth'],
            correctAnswer: 1,
            explanation: 'More than one-third of the world’s land area is plains.',
            difficulty: 'Easy'
        }
    ],
    set8: [
        {
            id: 36,
            question: 'Humans and animals need air to:',
            options: ['Grow', 'Breathe', 'Drink', 'Stay warm'],
            correctAnswer: 1,
            explanation: 'Humans and animals need air to breathe.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: 'What keeps the temperature of the Earth suitable for all living beings?',
            options: ['Air', 'Water', 'Sunlight', 'The moon'],
            correctAnswer: 2,
            explanation: 'Sunlight keeps Earth’s temperature suitable.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: 'What is the approximate shape of the Earth compared to?',
            options: ['A ball', 'An egg', 'An orange', 'A disc'],
            correctAnswer: 2,
            explanation: 'Earth’s shape is approximately like an orange.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'What is the large piece of land that existed long ago and broke into the seven continents known as?',
            options: ['Pangaea', 'Gondwana', 'Laurasia', 'Atlantis'],
            correctAnswer: 0,
            explanation: 'The supercontinent was called Pangaea.',
            difficulty: 'Medium'
        },
        {
            id: 40,
            question: 'What is an astronaut?',
            options: [
                'A person who studies stars',
                'A person who draws maps',
                'A person who travels in space',
                'A person who explores mountains'
            ],
            correctAnswer: 2,
            explanation: 'An astronaut is a person who travels in space.',
            difficulty: 'Easy'
        }
    ]
};

mcqQuestions['globe-map-direction'] = {
    set1: [
        {
            id: 1,
            question: 'What is a globe?',
            options: [
                'A large ball used for games',
                'A small model of the Earth',
                'A collection of maps',
                'A tool to find directions'
            ],
            correctAnswer: 1,
            explanation: 'A globe is a small model of the Earth.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'Why was the globe created?',
            options: [
                'To show all places in detail',
                'To make maps easier to carry',
                'To study the Earth when it cannot be seen as a whole',
                'To help people find landmarks'
            ],
            correctAnswer: 2,
            explanation: 'The globe was created to study the Earth when it cannot be seen as a whole.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'What is a characteristic feature of a globe?',
            options: [
                'It is flat and foldable',
                'It shows a small part of the Earth in detail',
                'It is spherical in shape and fixed to a tilted stand',
                'It always points towards the north direction'
            ],
            correctAnswer: 2,
            explanation: 'A globe is spherical in shape and fixed to a tilted stand.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'What does the spinning of a globe help to understand?',
            options: [
                'The revolution of the Earth around the sun',
                'The rotation of the Earth on its axis',
                'The different types of landforms',
                'The formation of constellations'
            ],
            correctAnswer: 1,
            explanation: 'Spinning a globe helps understand the rotation of the Earth.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'What can be shown on a globe?',
            options: [
                'Individual houses and shops in a city',
                'Continents, countries, important cities, oceans, and seas',
                'Detailed weather patterns',
                'Specific walking paths from one house to another'
            ],
            correctAnswer: 1,
            explanation: 'A globe shows continents, countries, important cities, oceans and seas.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 6,
            question: 'What is a map?',
            options: [
                'A three-dimensional model of the Earth',
                'A drawing of the whole Earth or a part of it on a flat surface',
                'An instrument used to find directions',
                'A book containing stories about exploration'
            ],
            correctAnswer: 1,
            explanation: 'A map is a drawing of the whole Earth or a part of it on a flat surface.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'What can maps show in detail that a globe cannot?',
            options: [
                'Continents and oceans',
                'Political divisions and physical features',
                "The Earth's rotation",
                'The spherical shape of the Earth'
            ],
            correctAnswer: 1,
            explanation: 'Maps can show political divisions and physical features in detail.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'What is an atlas?',
            options: [
                'A single, large map',
                'A collection of globes',
                'A book or collection of maps',
                'A device for measuring distances'
            ],
            correctAnswer: 2,
            explanation: 'An atlas is a book or collection of maps.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'What are people who make maps called?',
            options: ['Geographers', 'Explorers', 'Cartographers', 'Astronomers'],
            correctAnswer: 2,
            explanation: 'People who make maps are called cartographers.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'Which of these is a key difference between a globe and a map?',
            options: [
                'A globe is a drawing, while a map is a model.',
                'A globe represents the whole Earth, while a map may represent a part or the whole.',
                'A globe can be folded and carried easily, while a map is difficult to carry.',
                'A globe shows places in detail, while a map does not.'
            ],
            correctAnswer: 1,
            explanation: 'A globe represents the whole Earth, while a map may represent part or the whole.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 11,
            question: 'What is needed along with maps or globes to locate places effectively?',
            options: [
                'Knowledge of different languages',
                'Knowledge of directions',
                'A magnifying glass',
                'A ruler for measurements'
            ],
            correctAnswer: 1,
            explanation: 'Knowledge of directions is needed along with maps or globes.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'What are the four main directions?',
            options: [
                'Up, Down, Left, Right',
                'Near, Far, Front, Back',
                'North, South, East, West',
                'Corner, Center, Edge, Middle'
            ],
            correctAnswer: 2,
            explanation: 'The four main directions are North, South, East, and West.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'If you face the rising sun, which direction is to your left hand?',
            options: ['East', 'South', 'North', 'West'],
            correctAnswer: 2,
            explanation: 'If you face east (rising sun), north is on your left hand.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'Where does the sun set?',
            options: ['North', 'South', 'East', 'West'],
            correctAnswer: 3,
            explanation: 'The sun sets in the west.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'What is the direction between north and east called?',
            options: ['South-west', 'North-west', 'North-east', 'South-east'],
            correctAnswer: 2,
            explanation: 'The direction between north and east is called north-east.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 16,
            question: 'What is the direction between south and west called?',
            options: ['North-west', 'North-east', 'South-east', 'South-west'],
            correctAnswer: 3,
            explanation: 'The direction between south and west is called south-west.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'What is a compass?',
            options: [
                'A type of map',
                'A tool used to find directions',
                'A book of maps',
                'A device for drawing circles'
            ],
            correctAnswer: 1,
            explanation: 'A compass is a tool used to find directions.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'What is the distinguishing feature of a compass needle?',
            options: [
                'It always points towards the south',
                'It always points towards the north',
                'It indicates temperature',
                'It measures distance'
            ],
            correctAnswer: 1,
            explanation: 'A compass needle always points towards the north.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'What is a sketch?',
            options: [
                'A precisely measured drawing of a place',
                'A photograph of a landmark',
                'A rough drawing of a place, not exact in measurement',
                'A detailed map of a city'
            ],
            correctAnswer: 2,
            explanation: 'A sketch is a rough drawing of a place, not exact in measurement.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'What are landmarks used for in a sketch?',
            options: [
                'To add artistic value',
                'To show exact measurements',
                'To help know exactly where you are and can be seen clearly from a distance',
                'To indicate weather conditions'
            ],
            correctAnswer: 2,
            explanation: 'Landmarks help to know exactly where you are, visible from a distance.',
            difficulty: 'Easy'
        }
    ],
    set5: [
        {
            id: 21,
            question: 'Which of these can be shown as a landmark in a sketch?',
            options: [
                'The current wind speed',
                'A park, a tall or famous building',
                'The exact latitude and longitude',
                'The depth of a valley'
            ],
            correctAnswer: 1,
            explanation: 'A park or a tall/famous building can be a landmark.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'What is Gaurav doing at the beginning of the story?',
            options: [
                'Playing with a ball',
                'Shopping for stationery items',
                'Drawing a map',
                'Asking about directions to his house'
            ],
            correctAnswer: 1,
            explanation: 'Gaurav is shopping for stationery items.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'What does Gaurav initially mistake the globe for?',
            options: ['A large toy', 'A map', 'A ball', 'A spinning top'],
            correctAnswer: 2,
            explanation: 'He initially mistakes the globe for a ball.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'What information does the mother give about an atlas?',
            options: [
                'It is a type of compass',
                'It is a collection of maps',
                'It shows only physical features',
                'It is a device for studying stars'
            ],
            correctAnswer: 1,
            explanation: 'The mother says an atlas is a collection of maps.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'Can important places of a city be found in detail on a globe?',
            options: [
                'Yes, all details are present',
                'No, maps are needed for detailed information',
                'Only very large cities are shown',
                'Only oceans are clearly visible'
            ],
            correctAnswer: 1,
            explanation: 'Important places of a city need maps, not a globe.',
            difficulty: 'Easy'
        }
    ],
    set6: [
        {
            id: 26,
            question: "What does 'spherical' mean?",
            options: [
                'Flat and square',
                'Round like a ball',
                'Shaped like a pyramid',
                'Irregular in shape'
            ],
            correctAnswer: 1,
            explanation: "'Spherical' means round like a ball.",
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: 'If your back faces west, and your left hand points north, which direction are you facing?',
            options: ['North', 'South', 'East', 'West'],
            correctAnswer: 2,
            explanation: 'You would be facing east.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'What is the direction between the north and the west called?',
            options: ['North-east', 'South-east', 'South-west', 'North-west'],
            correctAnswer: 3,
            explanation: 'The direction between north and west is north-west.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: "What is the purpose of the 'Explore More' section mentioned at the bottom of Page 1?",
            options: [
                'To buy more stationery',
                'To find out about globes, maps, and directions',
                'To learn about constellations',
                'To draw a sketch of the local market'
            ],
            correctAnswer: 1,
            explanation: "The 'Explore More' section is to find out about globes, maps, and directions.",
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'Which of these is not a main direction?',
            options: ['North', 'South', 'Middle', 'East'],
            correctAnswer: 2,
            explanation: 'Middle is not a main direction.',
            difficulty: 'Easy'
        }
    ],
    set7: [
        {
            id: 31,
            question: 'What makes a map easier to carry around than a globe?',
            options: [
                'It is more colorful',
                'It can be folded',
                'It is made of different material',
                'It shows fewer details'
            ],
            correctAnswer: 1,
            explanation: 'A map can be folded, which makes it easy to carry.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: 'What is a direction described as?',
            options: [
                'A fixed measurement',
                'An indication leading to a place or point',
                'A type of drawing',
                'A detailed description of an area'
            ],
            correctAnswer: 1,
            explanation: 'A direction is an indication leading to a place or point.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'When using a compass, what must you know to find the other directions easily?',
            options: [
                'The exact time of day',
                'The position of the sun',
                'The north direction',
                'The nearest landmark'
            ],
            correctAnswer: 2,
            explanation: 'Knowing the north direction helps to find other directions.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'Which section likely contains instructions for observing landmarks on the way to school?',
            options: [
                'Learning Outcomes',
                'Highlights',
                'Everyday Life',
                'Knowledge Check'
            ],
            correctAnswer: 2,
            explanation: 'Everyday Life section likely has instructions for observing landmarks.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: "What does the 'Active Brain' section suggest drawing?",
            options: [
                'A detailed map of the city',
                'The path from home to the neighborhood market',
                'A sketch of the school building',
                'A diagram of the solar system'
            ],
            correctAnswer: 1,
            explanation: "The 'Active Brain' section suggests drawing the path from home to the market.",
            difficulty: 'Easy'
        }
    ],
    set8: [
        {
            id: 36,
            question: 'A book of maps is called an ______.',
            options: ['Globe', 'Compass', 'Atlas', 'Sketch'],
            correctAnswer: 2,
            explanation: 'A book of maps is called an atlas.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: 'What helps us to locate a place easily on a sketch?',
            options: ['Precise measurements', 'Landmarks', 'Use of colors', 'Advanced technology'],
            correctAnswer: 1,
            explanation: 'Landmarks help us locate a place easily on a sketch.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: "What is the purpose of the 'Prompt Response' question given as an example?",
            options: [
                'To test knowledge about folding globes',
                'To identify which item is difficult to carry',
                'To practice drawing maps',
                'To understand different types of directions'
            ],
            correctAnswer: 1,
            explanation: "Its purpose is to identify which item is difficult to carry.",
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'Which of these cannot be folded and carried easily?',
            options: ['Map', 'Globe', 'Sketch', 'Atlas'],
            correctAnswer: 1,
            explanation: 'A globe cannot be folded and carried easily.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            question: 'What concept helps in understanding the rotation of the Earth on its axis when using a globe?',
            options: [
                'The tilt of the stand',
                'The spinning of the globe at a point',
                'The details of continents shown',
                'The different colors used on the globe'
            ],
            correctAnswer: 1,
            explanation: 'The spinning of the globe helps understand Earth’s rotation.',
            difficulty: 'Easy'
        }
    ]
};
mcqQuestions['basic-features-india'] = {
    set1: [
        {
            id: 1,
            question: 'Where is India located within the continent of Asia?',
            options: ['Northern part','Eastern part','Southern part','Western part'],
            correctAnswer: 2,
            explanation: 'India lies in the southern part of Asia.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: "What is India's position in the world based on land area?",
            options: ['Fourth largest','First largest','Seventh largest','Third largest'],
            correctAnswer: 2,
            explanation: 'India is the seventh largest country in the world by land area.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: "What is India's position in the world based on population?",
            options: ['Fourth most populated','First most populated','Seventh most populated','Third most populated'],
            correctAnswer: 1,
            explanation: 'India is the most populated country in the world.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'Which of these is a neighboring country of India that shares a land boundary?',
            options: ['Sri Lanka','Maldives','Turkey','Nepal'],
            correctAnswer: 3,
            explanation: 'Nepal shares a land boundary with India.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'How many states is India politically divided into?',
            options: ['24','28','7','8'],
            correctAnswer: 1,
            explanation: 'India has 28 states.',
            difficulty: 'Easy'
        },
        {
            id: 6,
            question: 'How many Union Territories does India have?',
            options: ['28','6','8','5'],
            correctAnswer: 2,
            explanation: 'India has 8 Union Territories.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'What is the National Capital Territory of Delhi also considered?',
            options: ['A state','A union territory','A city-state','An independent region'],
            correctAnswer: 1,
            explanation: 'Delhi is a Union Territory with special status.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'Which physical feature describes India being surrounded by water on three sides?',
            options: ['Island','Continent','Peninsula','Isthmus'],
            correctAnswer: 2,
            explanation: 'India is a peninsula as it is surrounded by water on three sides.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: "Which body of water is to India's east?",
            options: ['Arabian Sea','Indian Ocean','Bay of Bengal','Pacific Ocean'],
            correctAnswer: 2,
            explanation: 'Bay of Bengal lies to the east of India.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: "Which body of water is to India's west?",
            options: ['Bay of Bengal','Indian Ocean','Arabian Sea','Red Sea'],
            correctAnswer: 2,
            explanation: 'The Arabian Sea lies to the west of India.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 11,
            question: "Which body of water is to India's south?",
            options: ['Arabian Sea','Bay of Bengal','Arctic Ocean','Indian Ocean'],
            correctAnswer: 3,
            explanation: 'The Indian Ocean lies to the south of India.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'Which mountain range runs across the north of India?',
            options: ['Aravallis','Himalayas','Western Ghats','Eastern Ghats'],
            correctAnswer: 1,
            explanation: 'The Himalayas form the northern boundary of India.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'Which direction do the Himalayas run from?',
            options: ['North to South','East to West','West to East','North-West to South-East'],
            correctAnswer: 2,
            explanation: 'The Himalayas run from west to east across northern India.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'Which of these rivers originates in the Himalayan Mountains?',
            options: ['Godavari','Krishna','Ganga','Narmada'],
            correctAnswer: 2,
            explanation: 'The River Ganga originates in the Himalayas.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'Where are the Northern Plains located in relation to the Himalayas?',
            options: ['North','East','South','West'],
            correctAnswer: 2,
            explanation: 'The Northern Plains lie to the south of the Himalayas.',
            difficulty: 'Easy'
        },
        {
            id: 16,
            question: 'Why are the Northern Plains suitable for growing crops?',
            options: ['They receive less rainfall','The land is very fertile due to rivers','They are near the coast','The region is very hot and dry'],
            correctAnswer: 1,
            explanation: 'Rivers deposit fertile soil in the Northern Plains.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'What is another name for the Great Indian Desert?',
            options: ['Gobi Desert','Sahara Desert','Thar Desert','Atacama Desert'],
            correctAnswer: 2,
            explanation: 'The Great Indian Desert is also called the Thar Desert.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'Where is the Thar Desert located in India?',
            options: ['North-eastern','South-western','North-western','South-eastern'],
            correctAnswer: 2,
            explanation: 'The Thar Desert is in north-western India.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'Which type of vegetation is characteristic of the Thar Desert?',
            options: ['Coniferous forests','Deciduous trees','Cacti and date palms','Mangrove swamps'],
            correctAnswer: 2,
            explanation: 'The Thar Desert has cacti and date palms.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'What is the Southern Plateau also known as?',
            options: ['Deccan Plateau','Peninsular Plateau','Tibetan Plateau','Chota Nagpur Plateau'],
            correctAnswer: 1,
            explanation: 'It is also called the Peninsular Plateau.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 21,
            question: 'How are the Coastal Plains described?',
            options: ['Vast stretches of flat land','High rocky land with flat tops','Narrow stretches of plains along the sea','High snow-covered mountains'],
            correctAnswer: 2,
            explanation: 'Coastal Plains are narrow stretches of land along the sea.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'Where are the Andaman and Nicobar Islands located?',
            options: ['Arabian Sea','Indian Ocean','Bay of Bengal','Pacific Ocean'],
            correctAnswer: 2,
            explanation: 'Andaman and Nicobar Islands lie in the Bay of Bengal.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'Where are the Lakshadweep Islands located?',
            options: ['Bay of Bengal','Arabian Sea','Indian Ocean','Andaman Sea'],
            correctAnswer: 1,
            explanation: 'The Lakshadweep Islands are in the Arabian Sea.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'What are the Indian Islands made up of?',
            options: ['Large singular islands','Volcanic rock formations','Many small islands','Continental shelves'],
            correctAnswer: 2,
            explanation: 'Indian islands are made up of many small islands.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'Maria and her family are visiting India for the first time from where?',
            options: ['United Kingdom','United States of America','Australia','Canada'],
            correctAnswer: 1,
            explanation: 'They are from the United States of America.',
            difficulty: 'Easy'
        },
        {
            id: 26,
            question: 'Which of the following is not a physical division of India?',
            options: ['The Himalayas','The Northern Plains','The Central Highlands','The Thar Desert'],
            correctAnswer: 2,
            explanation: 'The Central Highlands are not listed as one of the six main divisions.',
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: 'The National Capital Territory of Delhi is located in which region of India?',
            options: ['Southern','Western','Northern','Eastern'],
            correctAnswer: 2,
            explanation: 'Delhi is in the northern region of India.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'What type of landform is a plateau described as?',
            options: ['High land with steep slopes and a sharp peak','Vast stretch of flat land','High rocky land with slopes and a flat top','Low area between two mountains'],
            correctAnswer: 2,
            explanation: 'Plateaus are high rocky lands with slopes and flat tops.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: 'What is a key feature of the region where the Thar Desert lies?',
            options: ['Very cold and snowy','Very hot and dry','Moderately humid with forests','Mild temperature with abundant water'],
            correctAnswer: 1,
            explanation: 'The Thar Desert region is very hot and dry.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'The learning outcomes include understanding about:',
            options: ['The history of ancient India','The location and political divisions of India','The economic system of India','The different languages spoken in India'],
            correctAnswer: 1,
            explanation: 'Students learn about India’s location and political divisions.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 31,
            question: 'How many physical divisions is India categorized as having?',
            options: ['Four','Five','Six','Seven'],
            correctAnswer: 2,
            explanation: 'India has six physical divisions.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: 'What features can be found in India\'s varied physical landscape?',
            options: ['Only plains and deserts','Only mountains and valleys','Mountains, valleys, rivers, waterfalls, hills, plateaus, plains, sea coasts and islands','Primarily urban areas'],
            correctAnswer: 2,
            explanation: 'India has all these varied features in its landscape.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'Which continent has India as its southern part?',
            options: ['Africa','Europe','Asia','Australia'],
            correctAnswer: 2,
            explanation: 'India is in the southern part of Asia.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'What is the significance of rivers originating in the Himalayas?',
            options: ['They cause floods','They make the Northern Plains fertile for agriculture','They are mainly used for power','They form state boundaries'],
            correctAnswer: 1,
            explanation: 'Himalayan rivers make the plains fertile for crops.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: "The term 'peninsula' implies land is surrounded by water on how many sides?",
            options: ['One','Two','Three','Four'],
            correctAnswer: 2,
            explanation: 'A peninsula is surrounded by water on three sides.',
            difficulty: 'Easy'
        },
        {
            id: 36,
            question: 'Which of these is a Union Territory?',
            options: ['Punjab','Gujarat','Ladakh','Rajasthan'],
            correctAnswer: 2,
            explanation: 'Ladakh is a Union Territory.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: 'What plant is mentioned as growing in the Thar Desert?',
            options: ['Banana trees','Apple trees','Date palms','Coconut trees'],
            correctAnswer: 2,
            explanation: 'Date palms grow in the Thar Desert.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: "What type of land feature is 'a high rocky land with slopes and a flat top'?",
            options: ['Valley','Plain','Desert','Plateau'],
            correctAnswer: 3,
            explanation: 'This is the definition of a plateau.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'What type of boundary does the "Do and Learn" section ask to investigate regarding Maldives and Sri Lanka?',
            options: ['Aerial boundary','Maritime boundary','Land boundary','Economic boundary'],
            correctAnswer: 2,
            explanation: 'It asks about the maritime boundary of Maldives and Sri Lanka.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            question: 'What would an observer do to understand political divisions in India?',
            options: ['Read a history book','Observe the political map of India','Listen to news reports','Visit all states'],
            correctAnswer: 1,
            explanation: 'The political map of India shows all states and UTs.',
            difficulty: 'Easy'
        }
    ]
};
mcqQuestions['food-cloth-festival'] = {
    set1: [
        {
            id: 1,
            question: 'Why might someone need to wait a few months for fresh peas?',
            options: ['They are imported from other countries.','They are only available during certain seasons.','They are difficult to transport fresh.','Farmers prefer to grow other vegetables.'],
            correctAnswer: 1,
            explanation: 'Fresh peas are seasonal crops, available only in certain months.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'What is the main staple food grain in the northern parts of India?',
            options: ['Rice','Maize','Wheat','Bajra'],
            correctAnswer: 2,
            explanation: 'Wheat is the staple grain in North India.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'People in the eastern and southern states primarily consume which food grain?',
            options: ['Jowar','Rice','Wheat','Ragi'],
            correctAnswer: 1,
            explanation: 'Rice is the staple food in East and South India.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'Which factor is crucial in determining the type of crops grown in an Indian region?',
            options: ['Availability of labor','Market demand','Soil and climate conditions','Government subsidies'],
            correctAnswer: 2,
            explanation: 'Soil and climate conditions decide the crops suitable for an area.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'Which environmental condition is most suitable for growing rice?',
            options: ['Hot and dry weather','Moderate temperatures with low humidity','Heavy rainfall','Sandy soil'],
            correctAnswer: 2,
            explanation: 'Rice needs heavy rainfall and standing water.',
            difficulty: 'Easy'
        },
        {
            id: 6,
            question: 'Which of these items is classified as a pulse?',
            options: ['Watermelon','Mustard seeds','Kidney beans','Cauliflowers'],
            correctAnswer: 2,
            explanation: 'Kidney beans are pulses.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'Mangoes and watermelons are examples of fruits typically available in which season?',
            options: ['Winter','Rainy','Summer','Autumn'],
            correctAnswer: 2,
            explanation: 'These fruits are summer seasonal.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'Which of these vegetables can be found throughout the year?',
            options: ['Peas','Carrots','Tomatoes','Bottle gourds'],
            correctAnswer: 2,
            explanation: 'Tomatoes are available year-round.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'What is the primary purpose of oilseeds?',
            options: ['To be eaten raw','To extract oil for cooking','To add aroma','To serve as protein'],
            correctAnswer: 1,
            explanation: 'Oilseeds are grown mainly for cooking oil.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'Which spice is known for its high cost and is used to add flavour and colour?',
            options: ['Cardamom','Pepper','Saffron','Turmeric'],
            correctAnswer: 2,
            explanation: 'Saffron is the most expensive spice used in India.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 11,
            question: "What is a famous dish from North India, often paired with 'sarson ka saag'?",
            options: ['Idli Sambar','Makki ki roti','Litti Chokha','Biryani'],
            correctAnswer: 1,
            explanation: 'Makki ki roti is a traditional North Indian dish.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'Which famous Indian sweet dish is associated with South India?',
            options: ['Rasogulla','Kheer','Payasam','Jalebi'],
            correctAnswer: 2,
            explanation: 'Payasam is a popular South Indian sweet.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'After crops are harvested in the fields, where are they first taken by farmers?',
            options: ['Local grocery stores','Wholesale markets (mandis)','Factories for processing','Export warehouses'],
            correctAnswer: 1,
            explanation: 'Farmers first sell crops at mandis.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'What happens after food items are bought from the local market?',
            options: ['They are processed','They are sent back','They are taken home','They are delivered to restaurants'],
            correctAnswer: 2,
            explanation: 'Food bought from markets is consumed at home.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'What type of clothing is generally preferred in hot climates?',
            options: ['Woollen clothes','Leather jackets','Light cotton clothes','Silk garments'],
            correctAnswer: 2,
            explanation: 'Cotton clothes are best for hot weather.',
            difficulty: 'Easy'
        },
        {
            id: 16,
            question: 'Which traditional dress is worn by men in Kerala and Tamil Nadu?',
            options: ['Phiran','Dhoti-kurta','Lungi (Mundu/Veshti)','Salwar Kameez'],
            correctAnswer: 2,
            explanation: 'Lungi is common in Kerala and Tamil Nadu.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'What is a turban?',
            options: ['A long coat','Footwear','A long piece of cloth for the head','Jewelry'],
            correctAnswer: 2,
            explanation: 'A turban is cloth wrapped on the head.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: "In which state would you typically find a woman wearing 'Mekhela chador'?",
            options: ['Kashmir','Assam','Rajasthan','Punjab'],
            correctAnswer: 1,
            explanation: 'Mekhela chador is traditional in Assam.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'Why are National Festivals celebrated?',
            options: ['To honor leaders','To mark seasons','To remember important days','To celebrate harvests'],
            correctAnswer: 2,
            explanation: 'National Festivals mark important events in history.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'The Prime Minister hoists the national flag at the Red Fort on which occasion?',
            options: ['Republic Day','Gandhi Jayanti','Independence Day','Diwali'],
            correctAnswer: 2,
            explanation: 'The PM hoists the flag on Independence Day.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 21,
            question: 'A grand parade is held at Kartavya Path in New Delhi on which national festival?',
            options: ['Independence Day','Republic Day','Gandhi Jayanti','Eid al-Fitr'],
            correctAnswer: 1,
            explanation: 'Republic Day is marked by a grand parade.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'What significant event is celebrated on 2 October each year?',
            options: ['India becoming a Republic','Mahatma Gandhi birth anniversary','India\'s independence','The birth of Jesus'],
            correctAnswer: 1,
            explanation: '2nd October is Gandhi Jayanti.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'People decorate their houses with diyas and lights during which festival?',
            options: ['Eid al-Fitr','Christmas','Gurpurab','Diwali'],
            correctAnswer: 3,
            explanation: 'Diwali is the festival of lights.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'What marks the end of the holy month of Ramzan?',
            options: ['Diwali','Eid al-Fitr','Christmas','Gurpurab'],
            correctAnswer: 1,
            explanation: 'Eid al-Fitr ends the fasting month of Ramzan.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'What is a central activity during Christmas celebrations?',
            options: ['Immersing idols','Prayers at mosques','Decorating Christmas trees','Holding langars'],
            correctAnswer: 2,
            explanation: 'Christmas is celebrated with trees and gifts.',
            difficulty: 'Easy'
        },
        {
            id: 26,
            question: 'Buddha Purnima commemorates the birthday of which religious figure?',
            options: ['Jesus Christ','Guru Nanak Dev','Lord Buddha','Lord Mahavira'],
            correctAnswer: 2,
            explanation: 'It celebrates Lord Buddha’s birth.',
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: "Special prayers and 'langars' are features of which festival?",
            options: ['Mahavir Jayanti','Gurpurab','Ganesh Chaturthi','Onam'],
            correctAnswer: 1,
            explanation: 'Gurpurab is celebrated with langars.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'Which festival is associated with bringing idols of a deity to immerse in water?',
            options: ['Pongal','Baisakhi','Ganesh Chaturthi','Diwali'],
            correctAnswer: 2,
            explanation: 'Ganesh Chaturthi involves immersion of idols.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: 'Onam is a harvest festival primarily celebrated in which state?',
            options: ['Punjab','Kerala','Tamil Nadu','Rajasthan'],
            correctAnswer: 1,
            explanation: 'Onam is Kerala’s biggest festival.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'Which harvest festival involves worshipping the Sun God and cows?',
            options: ['Baisakhi','Onam','Pongal','Ganesh Chaturthi'],
            correctAnswer: 2,
            explanation: 'Pongal is a Tamil Nadu harvest festival.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 31,
            question: 'What is the traditional attire worn by women in Rajasthan?',
            options: ['Phiran-salwar','Mekhela chador','Ghaghra-choli','Pattu-pavadai'],
            correctAnswer: 2,
            explanation: 'Women in Rajasthan wear Ghaghra-choli.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: 'What is prepared on Eid al-Fitr as a sweet dish?',
            options: ['Modak','Ladoos','Sewain','Shrikhand'],
            correctAnswer: 2,
            explanation: 'Sewain is cooked on Eid al-Fitr.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'When celebrating Diwali, people pray to which deities?',
            options: ['Lord Rama and Sita','Goddess Lakshmi and Lord Ganesha','Lord Shiva and Parvati','Lord Vishnu and Saraswati'],
            correctAnswer: 1,
            explanation: 'Lakshmi and Ganesha are worshipped during Diwali.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'Pilgrims from around the world visit Bodh Gaya during which festival?',
            options: ['Mahavir Jayanti','Gurpurab','Buddha Purnima','Christmas'],
            correctAnswer: 2,
            explanation: 'Bodh Gaya is important during Buddha Purnima.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: "What defines 'pulses' in food?",
            options: ['Grains for flour','Seeds for oil','Seeds people cook and eat','Fruits on trees'],
            correctAnswer: 2,
            explanation: 'Pulses are edible seeds like beans and lentils.',
            difficulty: 'Easy'
        },
        {
            id: 36,
            question: 'Which region in India is famous for growing saffron?',
            options: ['Southern states','Western deserts','Kashmir mountains','Eastern plains'],
            correctAnswer: 2,
            explanation: 'Saffron is mainly grown in Kashmir.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: 'What type of clothes are worn on special occasions like festivals or marriages?',
            options: ['Everyday cotton wear','Plain clothes','Traditional colourful clothes','Sports attire'],
            correctAnswer: 2,
            explanation: 'Silk saris, lehengas, sherwanis are worn on festivals/marriages.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: 'What activity is suggested to understand wholesale market locations?',
            options: ['Searching online','Reading a book','Talking to an elder','Visiting a farm'],
            correctAnswer: 2,
            explanation: 'Elders guide kids about local wholesale markets.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'What is a key characteristic of the dresses worn by people from Punjab?',
            options: ['Very light','Animal skin','Traditional dresses','Similar to Western clothes'],
            correctAnswer: 2,
            explanation: 'Punjabi dresses are traditional and colourful.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            question: 'What is a skirt?',
            options: ['Headwear','Garment worn by women','Male garment','Foot covering'],
            correctAnswer: 1,
            explanation: 'A skirt is worn around the waist by women and girls.',
            difficulty: 'Easy'
        }
    ]
};
mcqQuestions['northern-cities'] = {
    set1: [
        {
            id: 1,
            question: 'What is the climate of Delhi characterized by?',
            options: ['Moderate temperatures all year round','Very hot summers and very cold winters','Mild winters and humid summers','Heavy rainfall throughout the year'],
            correctAnswer: 1,
            explanation: 'Delhi has extreme weather—hot summers and cold winters.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'Which river flows alongside Delhi?',
            options: ['Ganga','Gomti','Jhelum','Yamuna'],
            correctAnswer: 3,
            explanation: 'The Yamuna River flows near Delhi.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'With which state does Delhi share its eastern border?',
            options: ['Haryana','Punjab','Uttar Pradesh','Rajasthan'],
            correctAnswer: 2,
            explanation: 'Delhi shares its eastern border with Uttar Pradesh.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'Delhi is divided into how many main parts?',
            options: ['One','Two','Three','Four'],
            correctAnswer: 1,
            explanation: 'Delhi is divided into two main parts—Old Delhi and New Delhi.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'Where does the President of India reside?',
            options: ['Red Fort','Rashtrapati Bhavan','Parliament House','Qutb Minar'],
            correctAnswer: 1,
            explanation: 'Rashtrapati Bhavan is the residence of the President of India.',
            difficulty: 'Easy'
        },
        {
            id: 6,
            question: 'What is the local hot and dry wind that blows in Delhi during May and June called?',
            options: ['Monsoon','Cyclone','Loo','Storm'],
            correctAnswer: 2,
            explanation: 'The Loo is a hot dry wind in summer.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: "Why is Delhi sometimes referred to as 'Mini India'?",
            options: ['It is a small city.','It has diverse cultures, languages, and religions.','It has many small monuments.','It is a replica of ancient India.'],
            correctAnswer: 1,
            explanation: 'Delhi is called Mini India due to its diversity.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'Which famous monument in Delhi was built by Shah Jahan?',
            options: ['Qutb Minar','India Gate','Red Fort','Humayun\'s Tomb'],
            correctAnswer: 2,
            explanation: 'The Red Fort was built by Shah Jahan.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'What happens at the Red Fort on Independence Day?',
            options: ['A parade is held.','The President addresses the nation.','The Prime Minister hoists the national flag.','A cultural festival takes place.'],
            correctAnswer: 2,
            explanation: 'The PM hoists the flag every Independence Day.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'What is the height of the Qutb Minar?',
            options: ['52.7 metres','72.5 metres','92.5 metres','102.7 metres'],
            correctAnswer: 1,
            explanation: 'The Qutb Minar is 72.5 metres tall.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 11,
            question: 'Who started the construction of Qutb Minar?',
            options: ['Iltutmish','Qutb ud-din Aibak','Shah Jahan','Akbar'],
            correctAnswer: 1,
            explanation: 'Qutb ud-din Aibak began constructing the Qutb Minar.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'In which year was the Akshardham Temple built?',
            options: ['1991','2001','2005','2010'],
            correctAnswer: 2,
            explanation: 'The Akshardham Temple was completed in 2005.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'What is Raj Ghat famous for?',
            options: ['Its architectural beauty.','Memorial of Mahatma Gandhi.','Association with ancient rulers.','Shopping destination.'],
            correctAnswer: 1,
            explanation: 'Raj Ghat is the memorial of Mahatma Gandhi.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'Who designed India Gate?',
            options: ['Shah Jahan','Qutb ud-din Aibak','Sir Edwin Lutyens','Robert Tor Russell'],
            correctAnswer: 2,
            explanation: 'Sir Edwin Lutyens designed India Gate.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'What is Patna famous for as an artwork?',
            options: ['Chikan embroidery','Madhubani paintings','Wood work','Paper mache'],
            correctAnswer: 1,
            explanation: 'Patna is famous for Madhubani paintings.',
            difficulty: 'Easy'
        },
        {
            id: 16,
            question: 'Which river flows through Patna?',
            options: ['Yamuna','Gomti','Ganga','Jhelum'],
            correctAnswer: 2,
            explanation: 'The Ganga River flows through Patna.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'What is Lucknow famously known as?',
            options: ['The City of Lakes','The Pink City','The City of Nawabs','The City of Joy'],
            correctAnswer: 2,
            explanation: 'Lucknow is called the City of Nawabs.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'What is Lucknow famous for in terms of craft?',
            options: ['Wood carving','Carpet weaving','Chikan embroidery','Pottery'],
            correctAnswer: 2,
            explanation: 'Lucknow is famous for Chikan embroidery.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'Which river flows through Lucknow?',
            options: ['Yamuna','Gomti','Ganga','Jhelum'],
            correctAnswer: 1,
            explanation: 'The Gomti River flows through Lucknow.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'Which two states share Chandigarh as their capital?',
            options: ['Uttar Pradesh and Haryana','Punjab and Haryana','Himachal Pradesh and Punjab','Uttarakhand and Haryana'],
            correctAnswer: 1,
            explanation: 'Punjab and Haryana share Chandigarh as their capital.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 21,
            question: 'What is Chandigarh known as, being the first city of its kind in India?',
            options: ['The oldest city','The first planned city','The most populated city','The highest city'],
            correctAnswer: 1,
            explanation: 'Chandigarh is India’s first planned city.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'Which famous garden in Chandigarh is made from recycled objects?',
            options: ['Mughal Gardens','Rose Garden','Rock Garden','Tulip Garden'],
            correctAnswer: 2,
            explanation: 'Rock Garden is made from recycled materials.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'Which famous food dish is particularly associated with Patna?',
            options: ['Kebabs','Butter chicken','Litti chokha','Rogan josh'],
            correctAnswer: 2,
            explanation: 'Litti Chokha is a traditional food of Patna.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'Srinagar is the summer capital of which union territory?',
            options: ['Ladakh','Himachal Pradesh','Jammu and Kashmir','Uttarakhand'],
            correctAnswer: 2,
            explanation: 'Srinagar is the summer capital of Jammu and Kashmir.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'Which river flows alongside Srinagar?',
            options: ['Ganga','Indus','Jhelum','Chenab'],
            correctAnswer: 2,
            explanation: 'The Jhelum River flows through Srinagar.',
            difficulty: 'Easy'
        },
        {
            id: 26,
            question: 'What are Kashmiri, Dogri, Urdu, and Hindi in Srinagar?',
            options: ['Famous dishes','Spoken languages','Types of crafts','Names of lakes'],
            correctAnswer: 1,
            explanation: 'These are languages spoken in Srinagar.',
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: 'What is a famous food dish from Srinagar?',
            options: ['Choley bhature','Mutton rogan josh','Papri chaat','Dal makhani'],
            correctAnswer: 1,
            explanation: 'Mutton Rogan Josh is a Kashmiri specialty.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'Which lake is a prominent tourist attraction in Srinagar?',
            options: ['Sukhna Lake','Dal Lake','Wular Lake','Mansar Lake'],
            correctAnswer: 1,
            explanation: 'Dal Lake is famous for houseboats.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: 'What type of crafts are Srinagar and Kashmir famous for?',
            options: ['Pottery and weaving','Dried fruits, carpets, shawls, woodwork, paper mache','Jewellery','Stone carving'],
            correctAnswer: 1,
            explanation: 'Kashmir is known for carpets, shawls, paper mache, etc.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'What kind of items are people of Delhi known for their love of?',
            options: ['Books','Food','Clothes','Art'],
            correctAnswer: 1,
            explanation: 'Delhi is famous for its street food culture.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 31,
            question: 'Which historical fort in Delhi is also known as Purana Qila?',
            options: ['Tughlaqabad Fort','Old Fort','Red Fort','Humayun\'s Tomb'],
            correctAnswer: 1,
            explanation: 'Purana Qila means Old Fort.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: "The 'Loo' winds are associated with which season in Delhi?",
            options: ['Winter','Monsoon','Summer','Autumn'],
            correctAnswer: 2,
            explanation: 'The Loo blows in peak summer.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'Which monument in Delhi is a memorial site for soldiers of World War I?',
            options: ['Qutb Minar','India Gate','Red Fort','Jama Masjid'],
            correctAnswer: 1,
            explanation: 'India Gate honors soldiers who died in WWI.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'Which building is home to the main offices of the Government of India?',
            options: ['Akshardham Temple','Red Fort','Rashtrapati Bhavan','Parliament House'],
            correctAnswer: 3,
            explanation: 'The Parliament House contains main offices of Government.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: 'The Bara Imambara in Lucknow contains which famous architectural feature?',
            options: ['Rumi Darwaza','Bhool Bhulaiya','Chattar Manzil','Shaheed Smarak'],
            correctAnswer: 1,
            explanation: 'Bhool Bhulaiya is inside Bara Imambara.',
            difficulty: 'Easy'
        },
        {
            id: 36,
            question: 'According to the Learning Outcomes, what will learners be able to identify?',
            options: ['Economic status','Places of interest in northern cities','Agricultural products','Battles fought'],
            correctAnswer: 1,
            explanation: 'Learners will identify places of interest in northern cities.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: 'What is a traditional Kashmiri beverage mentioned as famous?',
            options: ['Lassi','Chai','Kahwa','Sharbat'],
            correctAnswer: 2,
            explanation: 'Kahwa is a traditional Kashmiri tea.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: 'Why might people of Kashmir be skilled in woodwork?',
            options: ['Because of availability of wood.','It is traditional craft.','Climate demands it.','It is easy skill.'],
            correctAnswer: 0,
            explanation: 'Wood is abundant in Kashmir, hence woodwork is common.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'What is a well-known street food item popular in Delhi?',
            options: ['Idli','Chaat','Pizza','Noodles'],
            correctAnswer: 1,
            explanation: 'Chaat is Delhi’s most loved street food.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            question: 'Which famous Mughal Emperor was responsible for building the Red Fort?',
            options: ['Akbar','Humayun','Shah Jahan','Jahangir'],
            correctAnswer: 2,
            explanation: 'The Red Fort was built by Shah Jahan.',
            difficulty: 'Easy'
        }
    ]
};
mcqQuestions['eastern-cities'] = {
    set1: [
        {
            id: 1,
            question: 'Which city is the capital of West Bengal?',
            options: ['Bhubaneswar','Guwahati','Kolkata','Ranchi'],
            correctAnswer: 2,
            explanation: 'Kolkata is the capital of West Bengal.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'What was Kolkata previously known as?',
            options: ['Bombay','Madras','Calcutta','Delhi'],
            correctAnswer: 2,
            explanation: 'Kolkata was earlier called Calcutta.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'Kolkata is located along the banks of which river?',
            options: ['Ganga','Yamuna','Brahmaputra','Hooghly'],
            correctAnswer: 3,
            explanation: 'Kolkata lies along the Hooghly River.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'What is the climate of Kolkata generally described as?',
            options: ['Extreme','Moderate','Hot and dry','Very cold'],
            correctAnswer: 1,
            explanation: 'Kolkata has a moderate climate.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'Between which months does Kolkata receive heavy rainfall?',
            options: ['March-May','June-September','October-November','December-February'],
            correctAnswer: 1,
            explanation: 'The city receives heavy monsoon rains between June and September.',
            difficulty: 'Easy'
        },
        {
            id: 6,
            question: 'What is the main language spoken in Kolkata?',
            options: ['Hindi','English','Bangla','Oriya'],
            correctAnswer: 2,
            explanation: 'Bangla is the main language in Kolkata.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'Which of these is a famous sweet dish of Kolkata?',
            options: ['Litti chokha','Machha jholo','Rasogulla','Sewain'],
            correctAnswer: 2,
            explanation: 'Kolkata is world-famous for Rasogulla.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'What are the main festivals celebrated in Kolkata?',
            options: ['Eid and Christmas','Diwali and Holi','Durga Puja and Kali Puja','Pongal and Onam'],
            correctAnswer: 2,
            explanation: 'Durga Puja and Kali Puja are celebrated widely in Kolkata.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'Which famous cricket stadium is located in Kolkata?',
            options: ['Feroz Shah Kotla','Wankhede Stadium','Eden Gardens','M. Chinnaswamy Stadium'],
            correctAnswer: 2,
            explanation: 'Eden Gardens is a world-renowned cricket stadium in Kolkata.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'The Victoria Memorial was built in memory of whom?',
            options: ['Queen Elizabeth','Queen Victoria','King George V','Mahatma Gandhi'],
            correctAnswer: 1,
            explanation: 'The Victoria Memorial was built in memory of Queen Victoria.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 11,
            question: 'What is Rabindra Setu also known as?',
            options: ['Vidyasagar Setu','Howrah Bridge','Second Hooghly Bridge','Nivedita Setu'],
            correctAnswer: 1,
            explanation: 'Rabindra Setu is popularly called Howrah Bridge.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: "Which city is known as the 'City of Temples'?",
            options: ['Kolkata','Guwahati','Bhubaneswar','Ranchi'],
            correctAnswer: 2,
            explanation: 'Bhubaneswar is called the City of Temples.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'Bhubaneswar is the capital city of which state?',
            options: ['West Bengal','Assam','Odisha','Jharkhand'],
            correctAnswer: 2,
            explanation: 'Bhubaneswar is the capital of Odisha.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: "What are 'pattachitra paintings' famous for in Bhubaneswar?",
            options: ['Fabric design','Stone work','Bell metal work','Wood carvings'],
            correctAnswer: 1,
            explanation: 'Pattachitra paintings are known for detailed stone work in Odisha.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'Which of these is a famous food dish from Bhubaneswar?',
            options: ['Fish curry','Machha jholo','Duck meat','Litti chokha'],
            correctAnswer: 1,
            explanation: 'Machha Jhola is a famous dish from Odisha.',
            difficulty: 'Easy'
        },
        {
            id: 16,
            question: 'Guwahati is the largest city of which state?',
            options: ['Odisha','Assam','Chhattisgarh','Jharkhand'],
            correctAnswer: 1,
            explanation: 'Guwahati is the largest city in Assam.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'Guwahati is situated on the banks of which river?',
            options: ['Hooghly','Mahanadi','Brahmaputra','Jhelum'],
            correctAnswer: 2,
            explanation: 'The Brahmaputra River flows through Guwahati.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'What is Guwahati also known as?',
            options: ['City of Joy','City of Waterfalls','Gateway to the North-east India','City of Temples'],
            correctAnswer: 2,
            explanation: 'Guwahati is called the Gateway to the North-east.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'Which of these crafts is Guwahati famous for?',
            options: ['Stone work','Chikan embroidery','Silk mekhela chador','Paitkar paintings'],
            correctAnswer: 2,
            explanation: 'Silk Mekhela Chador is famous in Assam.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'What is a famous food dish from Guwahati?',
            options: ['Rasogulla','Litti chokha','Khurma','Duck meat'],
            correctAnswer: 3,
            explanation: 'Duck meat is a delicacy in Guwahati.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 21,
            question: 'Raipur is the capital city of which state?',
            options: ['Odisha','Assam','Chhattisgarh','Jharkhand'],
            correctAnswer: 2,
            explanation: 'Raipur is the capital of Chhattisgarh.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'Raipur is situated near which river?',
            options: ['Brahmaputra','Mahanadi','Hooghly','Ganga'],
            correctAnswer: 1,
            explanation: 'Raipur lies near the Mahanadi River.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'Which industries are prominent in Raipur?',
            options: ['Tea and coffee','Coal, steel and aluminium','Textiles and spices','Software and IT'],
            correctAnswer: 1,
            explanation: 'Raipur is an industrial hub for coal, steel, and aluminium.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'What is a famous handicraft of Chhattisgarh mentioned in relation to Raipur?',
            options: ['Pattachitra paintings','Bell metal work','Paper mache','Woollen shawls'],
            correctAnswer: 1,
            explanation: 'Bell metal work is a famous handicraft of Raipur.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'What is a famous food dish from Raipur?',
            options: ['Sewain','Machha jholo','Khurma','Rogan josh'],
            correctAnswer: 2,
            explanation: 'Khurma is a special sweet from Raipur.',
            difficulty: 'Easy'
        },
        {
            id: 26,
            question: 'Ranchi is the capital city of which state?',
            options: ['Odisha','Assam','Chhattisgarh','Jharkhand'],
            correctAnswer: 3,
            explanation: 'Ranchi is the capital of Jharkhand.',
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: 'What is Ranchi nicknamed as?',
            options: ['City of Joy','City of Temples','City of Waterfalls','Gateway to North-east India'],
            correctAnswer: 2,
            explanation: 'Ranchi is called the City of Waterfalls.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'Which of these is a famous craft of Ranchi?',
            options: ['Stone work','Bell metal work','Paitkar paintings','Silk mekhela chador'],
            correctAnswer: 2,
            explanation: 'Ranchi is known for its Paitkar paintings.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: 'Which of these is a famous food dish from Ranchi?',
            options: ['Rasogulla','Litti chokha','Khurma','Gupchup'],
            correctAnswer: 1,
            explanation: 'Litti Chokha is eaten widely in Ranchi.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'Which of these is a famous waterfall near Ranchi?',
            options: ['Jog Falls','Hundru Falls','Athirappilly Falls','Kempty Falls'],
            correctAnswer: 1,
            explanation: 'Hundru Falls is located near Ranchi.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 31,
            question: 'Mohun Bagan is a famous club associated with which sport in Kolkata?',
            options: ['Cricket','Hockey','Football','Tennis'],
            correctAnswer: 2,
            explanation: 'Mohun Bagan is one of the oldest football clubs.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: 'Calcutta University, the first modern Indian university, was established in which year?',
            options: ['1772','1857','1911','2005'],
            correctAnswer: 1,
            explanation: 'Calcutta University was founded in 1857.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'What is a traditional item of clothing for men in Kolkata?',
            options: ['Turban','Lungi','Dhoti and kurta','Western suits'],
            correctAnswer: 2,
            explanation: 'Dhoti and Kurta are traditional attire in Kolkata.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'Which of these is a sweet dish famous in Kolkata?',
            options: ['Mishti doi','Sewain','Pitha','Malpua'],
            correctAnswer: 0,
            explanation: 'Mishti Doi is a special Bengali dessert.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: 'Which of these is a famous place to visit in Bhubaneswar?',
            options: ['Kamakhya Temple','Khandagiri and Udayagiri Caves','Hundru Falls','Red Fort'],
            correctAnswer: 1,
            explanation: 'The caves are a famous tourist attraction in Bhubaneswar.',
            difficulty: 'Easy'
        },
        {
            id: 36,
            question: 'Which language is commonly spoken in Bhubaneswar, alongside Bangla, Hindi, and English?',
            options: ['Assamese','Chhattisgarhi','Oriya','Nagpuri'],
            correctAnswer: 2,
            explanation: 'Oriya (Odia) is the main language in Odisha.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: 'Which of these is a famous place to visit in Guwahati?',
            options: ['Victoria Memorial','Kamakhya Temple','Akshardham Temple','Sun Temple'],
            correctAnswer: 1,
            explanation: 'The Kamakhya Temple is in Guwahati.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: 'Which of these is a famous place to visit in Ranchi?',
            options: ['State Museum','Mahant Ghasidas Memorial Museum','Sun Temple','Rabindra Sarobar'],
            correctAnswer: 2,
            explanation: 'The Sun Temple is a major attraction in Ranchi.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'Amar and his father saw a TV program about which bridge?',
            options: ['Howrah Bridge','Pamban Bridge','Bandra-Worli Sea Link','Golden Gate Bridge'],
            correctAnswer: 0,
            explanation: 'They were watching about Howrah Bridge.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            question: 'What is a traditional craft from Ranchi known for its metal work?',
            options: ['Wood carvings','Bamboo products','Paitkar paintings','Bell metal work'],
            correctAnswer: 1,
            explanation: 'Bamboo products are a well-known craft of Ranchi.',
            difficulty: 'Easy'
        }
    ]
};
mcqQuestions['western-cities'] = {
    set1: [
        {
            id: 1,
            question: 'Which city is the capital of Maharashtra?',
            options: ['Ahmedabad','Jaipur','Mumbai','Panaji'],
            correctAnswer: 2,
            explanation: 'Mumbai is the capital of Maharashtra.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'Mumbai lies along the coast of which sea?',
            options: ['Bay of Bengal','Indian Ocean','Arabian Sea','Pacific Ocean'],
            correctAnswer: 2,
            explanation: 'Mumbai lies along the Arabian Sea.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'What is Mumbai also famously known for in the context of entertainment?',
            options: ['Tollywood','Hollywood','Bollywood','Kollywood'],
            correctAnswer: 2,
            explanation: 'Mumbai is home to Bollywood.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: 'Which of these is a popular food item of Mumbai?',
            options: ['Dal-bati churma','Dhokla','Vada pao','Goan fish curry'],
            correctAnswer: 2,
            explanation: 'Vada Pao is a popular Mumbai street food.',
            difficulty: 'Easy'
        },
        {
            id: 5,
            question: 'What kind of climate does Mumbai experience during the summer months?',
            options: ['Cold and dry','Warm and humid','Mild and breezy','Extremely hot and rainy'],
            correctAnswer: 1,
            explanation: 'Mumbai has a warm and humid climate.',
            difficulty: 'Easy'
        },
        {
            id: 6,
            question: 'Which is the most popular festival celebrated in Mumbai?',
            options: ['Diwali','Holi','Ganesh Chaturthi','Eid'],
            correctAnswer: 2,
            explanation: 'Ganesh Chaturthi is the most popular festival in Mumbai.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'The Gateway of India was built to commemorate the visit of which dignitaries?',
            options: ['Indian Prime Minister and President','British King and Queen','Portuguese Viceroy','Mughal Emperor'],
            correctAnswer: 1,
            explanation: 'It was built to honor the British King and Queen.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'What is Marine Drive famous for?',
            options: ['Its historic fort','Its bustling market','Its sea-facing road that curves along the coast','Its ancient temples'],
            correctAnswer: 2,
            explanation: 'Marine Drive is a sea-facing curved road in Mumbai.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'Which is the most popular beach in Mumbai?',
            options: ['Chowpatty Beach','Miramar Beach','Juhu Beach','Jampore Beach'],
            correctAnswer: 2,
            explanation: 'Juhu Beach is the most famous in Mumbai.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'Which city is known as the commercial capital of India?',
            options: ['Ahmedabad','Jaipur','Mumbai','Panaji'],
            correctAnswer: 2,
            explanation: 'Mumbai is called the commercial capital of India.',
            difficulty: 'Easy'
        }
    ],
    set2: [
        {
            id: 11,
            question: 'Ahmedabad is the largest city of which state?',
            options: ['Maharashtra','Rajasthan','Gujarat','Goa'],
            correctAnswer: 2,
            explanation: 'Ahmedabad is the largest city in Gujarat.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'Ahmedabad is located on the banks of which river?',
            options: ['Mandovi','Damanganga','Sabarmati','Hooghly'],
            correctAnswer: 2,
            explanation: 'Ahmedabad lies on the banks of the Sabarmati River.',
            difficulty: 'Easy'
        },
        {
            id: 13,
            question: 'Which industries are Ahmedabad famous for?',
            options: ['Film and petrochemical','Textile mills and diamonds','Leather products and bamboo','IT and software'],
            correctAnswer: 1,
            explanation: 'Ahmedabad is known for its textile mills and diamond cutting industry.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'Which of these is a famous food dish from Ahmedabad?',
            options: ['Vada pao','Dal-bati churma','Dhokla','Goan fish curry'],
            correctAnswer: 2,
            explanation: 'Dhokla is a traditional dish of Ahmedabad.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'What is the Sabarmati Ashram famous for?',
            options: ['Its textile mills','Its diamond industry','Its association with Mahatma Gandhi','Its modern architecture'],
            correctAnswer: 2,
            explanation: 'Sabarmati Ashram was Mahatma Gandhi’s residence.',
            difficulty: 'Easy'
        },
        {
            id: 16,
            question: "Which city is known as the 'Pink City'?",
            options: ['Ahmedabad','Jaipur','Panaji','Daman'],
            correctAnswer: 1,
            explanation: 'Jaipur is called the Pink City.',
            difficulty: 'Easy'
        },
        {
            id: 17,
            question: 'Jaipur is the capital of which state?',
            options: ['Maharashtra','Gujarat','Rajasthan','Goa'],
            correctAnswer: 2,
            explanation: 'Jaipur is the capital of Rajasthan.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'What is Jaipur famous for?',
            options: ['Beaches and churches','Textile mills and diamonds','Forts, palaces, temples, museums','Sea beaches and heritage places'],
            correctAnswer: 2,
            explanation: 'Jaipur is famous for its forts, palaces, and museums.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'Which of these is a famous food dish from Jaipur?',
            options: ['Dhokla','Goan fish curry','Dal-bati churma','Prawn cutlets'],
            correctAnswer: 2,
            explanation: 'Dal-Bati Churma is a traditional Rajasthani dish.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'Hawa Mahal is a famous place to visit in which city?',
            options: ['Mumbai','Ahmedabad','Jaipur','Panaji'],
            correctAnswer: 2,
            explanation: 'Hawa Mahal is a landmark of Jaipur.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 21,
            question: 'Panaji is the capital of which state?',
            options: ['Maharashtra','Rajasthan','Gujarat','Goa'],
            correctAnswer: 3,
            explanation: 'Panaji is the capital city of Goa.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'Panaji is situated on the banks of which river?',
            options: ['Sabarmati','Mandovi','Damanganga','Hooghly'],
            correctAnswer: 1,
            explanation: 'Panaji is located on the Mandovi River.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'What is Panaji famous for?',
            options: ['Forts and palaces','Textile mills and diamonds','Beaches, churches, natural beauty','Sea beaches and heritage places'],
            correctAnswer: 2,
            explanation: 'Panaji is known for its beaches and Portuguese churches.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'Which of these is a famous food dish from Panaji?',
            options: ['Dal-bati churma','Goan fish curry','Shrikhand','Khakra'],
            correctAnswer: 1,
            explanation: 'Goan Fish Curry is a famous dish from Panaji.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'Miramar Beach is a famous place to visit in which city?',
            options: ['Mumbai','Jaipur','Panaji','Daman'],
            correctAnswer: 2,
            explanation: 'Miramar Beach is located in Panaji.',
            difficulty: 'Easy'
        },
        {
            id: 26,
            question: 'Daman is the capital city of which Union Territory?',
            options: ['Puducherry','Lakshadweep','Andaman and Nicobar Islands','Dadra and Nagar Haveli and Daman and Diu'],
            correctAnswer: 3,
            explanation: 'Daman is the capital of Dadra and Nagar Haveli and Daman and Diu.',
            difficulty: 'Easy'
        },
        {
            id: 27,
            question: 'Daman is situated along the coast of which body of water?',
            options: ['Bay of Bengal','Indian Ocean','Arabian Sea','Red Sea'],
            correctAnswer: 2,
            explanation: 'Daman lies along the Arabian Sea.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'What is Daman famous for?',
            options: ['Forts and palaces','Film industry and educational institutes','Sea beaches, heritage places, bamboo, leather products','Textile mills and diamond cutting'],
            correctAnswer: 2,
            explanation: 'Daman is famous for its beaches and crafts.',
            difficulty: 'Easy'
        },
        {
            id: 29,
            question: 'Which of these is a famous food dish from Daman?',
            options: ['Dhokla','Chicken xacuti','Pyaaz kochori','Vada pao'],
            correctAnswer: 1,
            explanation: 'Chicken Xacuti is popular in Daman.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'Moti Daman Fort is a famous place to visit in which region?',
            options: ['Ahmedabad','Jaipur','Panaji','Daman'],
            correctAnswer: 3,
            explanation: 'Moti Daman Fort is a landmark in Daman.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 31,
            question: 'What did Mumbai used to be known as?',
            options: ['Calcutta','Madras','Bombay','Delhi'],
            correctAnswer: 2,
            explanation: 'Mumbai was earlier known as Bombay.',
            difficulty: 'Easy'
        },
        {
            id: 32,
            question: "The 'Loo' is a local hot and dry wind mentioned in relation to the climate of which region?",
            options: ['Ahmedabad','Daman','Mumbai','Jaipur'],
            correctAnswer: 2,
            explanation: "The 'Loo' winds are associated with Mumbai's summer.",
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'Which monument in Mumbai was completed in 1924?',
            options: ['Chhatrapati Shivaji Maharaj Terminus','Gateway of India','Elephanta Caves','Haji Ali Dargah'],
            correctAnswer: 1,
            explanation: 'Gateway of India was completed in 1924.',
            difficulty: 'Easy'
        },
        {
            id: 34,
            question: 'Which lake is a famous place to visit in Ahmedabad?',
            options: ['Kankaria Lake','Mirasol Lake','Dal Lake','Wular Lake'],
            correctAnswer: 0,
            explanation: 'Kankaria Lake is a famous tourist spot in Ahmedabad.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: 'The Jantar Mantar, an astronomical observatory, is located in which city?',
            options: ['Mumbai','Ahmedabad','Jaipur','Panaji'],
            correctAnswer: 2,
            explanation: 'The Jantar Mantar is in Jaipur.',
            difficulty: 'Easy'
        },
        {
            id: 36,
            question: 'Immaculate Conception Church is a famous place of worship in which city?',
            options: ['Mumbai','Panaji','Daman','Jaipur'],
            correctAnswer: 1,
            explanation: 'The Immaculate Conception Church is in Panaji, Goa.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: 'Which city is famous for its chikan embroidery?',
            options: ['Jaipur','Mumbai','Ahmedabad','Not these cities'],
            correctAnswer: 3,
            explanation: 'Chikan embroidery is not associated with these cities, but with Lucknow.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: 'According to the text, which language is commonly spoken in Daman, besides Hindi and English?',
            options: ['Konkani','Marathi','Gujarati','Rajasthani'],
            correctAnswer: 2,
            explanation: 'Gujarati is commonly spoken in Daman.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'What type of items are bamboo and leather products mentioned as famous for in Daman?',
            options: ['Food dishes','Crafts','Tourist attractions','Natural resources'],
            correctAnswer: 1,
            explanation: 'Daman is known for its crafts made of bamboo and leather.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            question: "Which famous place in Mumbai is associated with the surname 'Nehru'?",
            options: ['Kamala Nehru Park','Nehru Science Centre','Jawaharlal Nehru Port','Nehru Planetarium'],
            correctAnswer: 0,
            explanation: 'Kamala Nehru Park is a famous landmark in Mumbai.',
            difficulty: 'Easy'
        }
    ]
};
mcqQuestions['southern-cities'] = {
    set1: [
        {
            id: 1,
            question: 'Which city is the capital of Tamil Nadu?',
            options: ['Bengaluru','Chennai','Hyderabad','Thiruvananthapuram'],
            correctAnswer: 1,
            explanation: 'Chennai is the capital city of Tamil Nadu.',
            difficulty: 'Easy'
        },
        {
            id: 2,
            question: 'Chennai lies on the east coast along which body of water?',
            options: ['Arabian Sea','Indian Ocean','Bay of Bengal','Pacific Ocean'],
            correctAnswer: 2,
            explanation: 'Chennai lies along the Bay of Bengal.',
            difficulty: 'Easy'
        },
        {
            id: 3,
            question: 'What was Chennai known as until 1996?',
            options: ['Madras','Bangalore','Hyderabad','Trivandrum'],
            correctAnswer: 0,
            explanation: 'Chennai was earlier known as Madras.',
            difficulty: 'Easy'
        },
        {
            id: 4,
            question: "Which industry has led Chennai to be called the 'Detroit of India'?",
            options: ['Cotton and textile','Leather goods','Film industry','Automobile industry'],
            correctAnswer: 3,
            explanation: 'Chennai is called Detroit of India because of its automobile industry.',
            difficulty: 'Medium'
        },
        {
            id: 5,
            question: 'What kind of climate does Chennai experience throughout the year?',
            options: ['Cold and dry','Moderate and rainy','Warm and humid','Mild and breezy'],
            correctAnswer: 2,
            explanation: 'Chennai has a warm and humid climate.',
            difficulty: 'Easy'
        },
        {
            id: 6,
            question: 'Which classical dance form is famous in Chennai?',
            options: ['Kathak','Odissi','Bharatanatyam','Kathakali'],
            correctAnswer: 2,
            explanation: 'Bharatanatyam is the most famous classical dance form of Chennai.',
            difficulty: 'Easy'
        },
        {
            id: 7,
            question: 'Which festival is the most famous in Chennai?',
            options: ['Diwali','Pongal','Christmas','Eid'],
            correctAnswer: 1,
            explanation: 'Pongal is the most famous festival in Chennai.',
            difficulty: 'Easy'
        },
        {
            id: 8,
            question: 'What is the staple food in Chennai?',
            options: ['Wheat','Maize','Rice','Ragi'],
            correctAnswer: 2,
            explanation: 'Rice is the staple food in Chennai.',
            difficulty: 'Easy'
        },
        {
            id: 9,
            question: 'Which is one of the longest beaches in the world, located in Chennai?',
            options: ['Golden Beach','Marina Beach','Kovalam Beach','Juhu Beach'],
            correctAnswer: 1,
            explanation: 'Marina Beach is one of the longest beaches in the world.',
            difficulty: 'Easy'
        },
        {
            id: 10,
            question: 'Fort St George was the first fort built by which colonial power in India?',
            options: ['Portuguese','French','British','Dutch'],
            correctAnswer: 2,
            explanation: 'Fort St George was built by the British.',
            difficulty: 'Medium'
        }
    ],
    set2: [
        {
            id: 11,
            question: 'Which city is the capital of Karnataka?',
            options: ['Hyderabad','Thiruvananthapuram','Bengaluru','Chennai'],
            correctAnswer: 2,
            explanation: 'Bengaluru is the capital of Karnataka.',
            difficulty: 'Easy'
        },
        {
            id: 12,
            question: 'What is Bengaluru called due to its high-tech industries?',
            options: ['City of Pearls','Silicon Valley of India','City of Temples','Gateway to South India'],
            correctAnswer: 1,
            explanation: 'Bengaluru is called the Silicon Valley of India.',
            difficulty: 'Medium'
        },
        {
            id: 13,
            question: 'Which of these is a famous food dish from Bengaluru?',
            options: ['Hyderabadi biryani','Puttu','Masala dosa','Fish molee'],
            correctAnswer: 2,
            explanation: 'Masala Dosa is famous in Bengaluru.',
            difficulty: 'Easy'
        },
        {
            id: 14,
            question: 'Which famous place to visit in Bengaluru contains a vast collection of plants?',
            options: ['Lal Bagh','Tipu Sultan\'s Summer Palace','Vidhana Soudha','HAL Aerospace Museum'],
            correctAnswer: 0,
            explanation: 'Lal Bagh is famous for its collection of plants.',
            difficulty: 'Easy'
        },
        {
            id: 15,
            question: 'Which city is the capital of Telangana?',
            options: ['Bengaluru','Chennai','Hyderabad','Amaravati'],
            correctAnswer: 2,
            explanation: 'Hyderabad is the capital of Telangana.',
            difficulty: 'Easy'
        },
        {
            id: 16,
            question: "Why is Hyderabad known as the 'City of Pearls'?",
            options: ['Its beautiful lakes','Its trade in rare diamonds, emeralds, and natural pearls','Its architecture','Its film industry'],
            correctAnswer: 1,
            explanation: 'Hyderabad is called City of Pearls due to pearl trade.',
            difficulty: 'Medium'
        },
        {
            id: 17,
            question: 'Which of these is a famous food dish from Hyderabad?',
            options: ['Pesarattu','Hyderabadi biryani','Dosa','Fish molee'],
            correctAnswer: 1,
            explanation: 'Hyderabadi Biryani is world-famous.',
            difficulty: 'Easy'
        },
        {
            id: 18,
            question: 'Which famous monument in Hyderabad is a symbol of the city?',
            options: ['Charminar','Golconda Fort','Salar Jung Museum','Chowmahalla Palace'],
            correctAnswer: 0,
            explanation: 'Charminar is the symbol of Hyderabad.',
            difficulty: 'Easy'
        },
        {
            id: 19,
            question: 'Which city is the capital of Kerala?',
            options: ['Hyderabad','Amaravati','Bengaluru','Thiruvananthapuram'],
            correctAnswer: 3,
            explanation: 'Thiruvananthapuram is the capital of Kerala.',
            difficulty: 'Easy'
        },
        {
            id: 20,
            question: 'What was Thiruvananthapuram previously known as?',
            options: ['Trivandrum','Bangalore','Madras','Vijayawada'],
            correctAnswer: 0,
            explanation: 'Thiruvananthapuram was earlier known as Trivandrum.',
            difficulty: 'Easy'
        }
    ],
    set3: [
        {
            id: 21,
            question: 'What is Thiruvananthapuram famous for?',
            options: ['IT industry and pearls','Beaches, backwaters, and ancient temples','Automobile industry and textiles','Stupas and caves'],
            correctAnswer: 1,
            explanation: 'Thiruvananthapuram is famous for its beaches, backwaters, and temples.',
            difficulty: 'Easy'
        },
        {
            id: 22,
            question: 'Which of these is a famous food dish from Thiruvananthapuram?',
            options: ['Tamarind flavoured rice','Boti kebab','Puttu','Phirni'],
            correctAnswer: 2,
            explanation: 'Puttu is a traditional Kerala dish.',
            difficulty: 'Easy'
        },
        {
            id: 23,
            question: 'Which famous beach is located near Thiruvananthapuram?',
            options: ['Marina Beach','Golden Beach','Kovalam Beach','Juhu Beach'],
            correctAnswer: 2,
            explanation: 'Kovalam Beach is near Thiruvananthapuram.',
            difficulty: 'Easy'
        },
        {
            id: 24,
            question: 'Which city is the capital of Andhra Pradesh?',
            options: ['Hyderabad','Thiruvananthapuram','Amaravati','Chennai'],
            correctAnswer: 2,
            explanation: 'Amaravati is the capital of Andhra Pradesh.',
            difficulty: 'Easy'
        },
        {
            id: 25,
            question: 'Amaravati is situated on the banks of which river?',
            options: ['Kaveri','Godavari','Krishna','Vaigai'],
            correctAnswer: 2,
            explanation: 'Amaravati lies on the banks of the Krishna River.',
            difficulty: 'Easy'
        },
        {
            id: 26,
            question: 'What is Amaravati primarily famous for?',
            options: ['Automobile industry','Beaches and backwaters','Temples and stupas','Pearls and diamonds'],
            correctAnswer: 2,
            explanation: 'Amaravati is famous for its temples and stupas.',
            difficulty: 'Medium'
        },
        {
            id: 27,
            question: 'Which of these is a famous food dish from Amaravati?',
            options: ['Hyderabadi biryani','Pesarattu','Idiyappam','Irani chai'],
            correctAnswer: 1,
            explanation: 'Pesarattu is a famous food of Amaravati.',
            difficulty: 'Easy'
        },
        {
            id: 28,
            question: 'Which famous ancient caves are located near Amaravati?',
            options: ['Ajanta Caves','Ellora Caves','Undavalli Caves','Elephanta Caves'],
            correctAnswer: 2,
            explanation: 'Undavalli Caves are near Amaravati.',
            difficulty: 'Medium'
        },
        {
            id: 29,
            question: "What type of music is popular in Chennai's rich culture?",
            options: ['Hindustani classical','Carnatic music','Western classical','Folk music'],
            correctAnswer: 1,
            explanation: 'Carnatic music is famous in Chennai.',
            difficulty: 'Easy'
        },
        {
            id: 30,
            question: 'Besides Tamil, which other languages are commonly spoken in Chennai?',
            options: ['Kannada, English, Hindi','Malayalam, English, Hindi','Telugu, Urdu, Hindi','Oriya, Bengali, English'],
            correctAnswer: 1,
            explanation: 'Malayalam, English, and Hindi are spoken in Chennai.',
            difficulty: 'Easy'
        }
    ],
    set4: [
        {
            id: 31,
            question: 'Which place in Chennai is a large recreational spot and also a site for wildlife conservation?',
            options: ['Fort St George','Guindy National Park','Government Museum','Parthasarathy Temple'],
            correctAnswer: 1,
            explanation: 'Guindy National Park is a recreational and conservation area.',
            difficulty: 'Medium'
        },
        {
            id: 32,
            question: "The 'HAL Aerospace Museum' is a famous place to visit in which city?",
            options: ['Chennai','Hyderabad','Bengaluru','Thiruvananthapuram'],
            correctAnswer: 2,
            explanation: 'HAL Aerospace Museum is in Bengaluru.',
            difficulty: 'Easy'
        },
        {
            id: 33,
            question: 'Which famous museum in Hyderabad houses a vast collection of art and artifacts?',
            options: ['Government Museum','Napier Museum','Salar Jung Museum','Sri Chitra Art Gallery'],
            correctAnswer: 2,
            explanation: 'Salar Jung Museum is in Hyderabad.',
            difficulty: 'Medium'
        },
        {
            id: 34,
            question: 'Thiruvananthapuram is famous for its beaches, backwaters, and also for its:',
            options: ['Rare diamonds','IT industry','Ancient temples','Automobile manufacturing'],
            correctAnswer: 2,
            explanation: 'Thiruvananthapuram is also famous for ancient temples.',
            difficulty: 'Easy'
        },
        {
            id: 35,
            question: "The 'Dhyana Buddha' statue is a famous place to visit in which city?",
            options: ['Chennai','Bengaluru','Thiruvananthapuram','Amaravati'],
            correctAnswer: 3,
            explanation: 'The Dhyana Buddha statue is in Amaravati.',
            difficulty: 'Medium'
        },
        {
            id: 36,
            question: 'In Bengaluru, besides Kannada, Tamil, and Hindi, which other language is commonly spoken?',
            options: ['Telugu','Malayalam','English','Urdu'],
            correctAnswer: 2,
            explanation: 'English is also widely spoken in Bengaluru.',
            difficulty: 'Easy'
        },
        {
            id: 37,
            question: "The 'Irani chai' and 'boti kebab' are famous food items associated with which city?",
            options: ['Chennai','Hyderabad','Bengaluru','Amaravati'],
            correctAnswer: 1,
            explanation: 'Irani Chai and Boti Kebab are associated with Hyderabad.',
            difficulty: 'Easy'
        },
        {
            id: 38,
            question: "The 'Reptile House' is a famous place to visit in which city?",
            options: ['Bengaluru','Thiruvananthapuram','Hyderabad','Chennai'],
            correctAnswer: 1,
            explanation: 'The Reptile House is in Thiruvananthapuram.',
            difficulty: 'Easy'
        },
        {
            id: 39,
            question: 'What type of bangles are famous in Hyderabad?',
            options: ['Glass bangles','Lac bangles','Metal bangles','Wooden bangles'],
            correctAnswer: 1,
            explanation: 'Hyderabad is famous for Lac bangles.',
            difficulty: 'Easy'
        },
        {
            id: 40,
            question: 'What can visitors enjoy when visiting Thiruvananthapuram, as mentioned by one of the children?',
            options: ['The temples','The food','The beaches','The museums'],
            correctAnswer: 2,
            explanation: 'Visitors enjoy the beaches in Thiruvananthapuram.',
            difficulty: 'Easy'
        }
    ]
};



// Sample MCQ questions

// End of data file
