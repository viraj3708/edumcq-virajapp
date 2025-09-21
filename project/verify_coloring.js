// Answer Coloring Logic Test
console.log('=== Answer Coloring Logic Test ===');

// Function to simulate the selectOption behavior
function testAnswerColoring(selectedIndex, correctAnswerIndex) {
    console.log(`\nTesting: Selected option ${String.fromCharCode(65 + selectedIndex)} (index ${selectedIndex})`);
    console.log(`Correct answer is option ${String.fromCharCode(65 + correctAnswerIndex)} (index ${correctAnswerIndex})`);
    
    const isCorrect = selectedIndex === correctAnswerIndex;
    
    if (isCorrect) {
        console.log('Result: ✓ CORRECT - Should be colored GREEN');
        return 'correct';
    } else {
        console.log('Result: ✗ INCORRECT - Should be colored RED');
        return 'incorrect';
    }
}

// Test all combinations for a question with correct answer at index 1 (option B)
console.log('Test Question: What is the smallest unit of the human body?');
console.log('Options: A) Tissue, B) Cell, C) Bone, D) Organ');
console.log('Correct Answer: B (index 1)');

// Test selecting each option
const correctAnswerIndex = 1; // B is correct

for (let i = 0; i < 4; i++) {
    testAnswerColoring(i, correctAnswerIndex);
}

console.log('\n=== Test Summary ===');
console.log('The app should show:');
console.log('- GREEN color for correct answers');
console.log('- RED color for incorrect answers');
console.log('\nIf you\'re seeing this message but not the colors in the app,');
console.log('there may be an issue with the CSS classes or DOM updates.');