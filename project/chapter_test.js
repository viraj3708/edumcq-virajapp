// Test script to verify chapter data structure
console.log('=== Chapter Data Test ===');

// Check if chapters object exists
if (typeof chapters === 'undefined') {
    console.log('ERROR: chapters object is not defined');
} else {
    console.log('✓ chapters object exists');
    
    // Check Science Class 3 chapters
    if (chapters['science'] && chapters['science'][3]) {
        console.log('✓ chapters.science[3] exists');
        
        const scienceChapters = chapters['science'][3];
        console.log(`Number of chapters: ${scienceChapters.length}`);
        
        // List all chapters
        scienceChapters.forEach((chapter, index) => {
            console.log(`Chapter ${index + 1}: ${chapter.name} (ID: ${chapter.id})`);
            
            // Check if this is our-body chapter
            if (chapter.id === 'our-body') {
                console.log('✓ "our-body" chapter found in data structure');
            }
        });
        
        // Check specifically for our-body chapter
        const ourBodyChapter = scienceChapters.find(ch => ch.id === 'our-body');
        if (ourBodyChapter) {
            console.log('✓ "our-body" chapter confirmed in chapters.science[3]');
        } else {
            console.log('ERROR: "our-body" chapter NOT found in chapters.science[3]');
        }
    } else {
        console.log('ERROR: chapters.science[3] does not exist');
    }
}

// Check MCQ questions
if (typeof mcqQuestions === 'undefined') {
    console.log('ERROR: mcqQuestions object is not defined');
} else {
    console.log('✓ mcqQuestions object exists');
    
    if (mcqQuestions['our-body']) {
        console.log('✓ mcqQuestions["our-body"] exists');
        
        const ourBodyQuestions = mcqQuestions['our-body'];
        const setCount = Object.keys(ourBodyQuestions).length;
        console.log(`Number of question sets: ${setCount}`);
        
        let totalQuestions = 0;
        Object.keys(ourBodyQuestions).forEach(setId => {
            totalQuestions += ourBodyQuestions[setId].length;
        });
        
        console.log(`Total questions: ${totalQuestions}`);
    } else {
        console.log('ERROR: mcqQuestions["our-body"] does not exist');
    }
}

console.log('=== End Test ===');