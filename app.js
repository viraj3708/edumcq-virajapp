// EduMCQ - Smart Learning Platform Main Application

class EduMCQApp {
    constructor() {
        this.currentScreen = 'login';
        this.currentQuestionIndex = 0;
        this.currentQuiz = null;
        this.userAnswers = [];
        this.score = 0;
        this.currentSetId = null;
        
        this.initializeApp();
        this.bindEvents();
        this.initDarkMode(); // Initialize dark mode
    }

    initializeApp() {
        console.log('EduMCQ App Initialized');
        this.showScreen('login-screen');
        this.updateBreadcrumb('Welcome');
    }

    // Initialize dark mode from localStorage
    initDarkMode() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            this.updateDarkModeIcon();
        }
    }

    // Toggle dark mode
    toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        this.updateDarkModeIcon();
    }

    // Update dark mode toggle icon
    updateDarkModeIcon() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const icon = darkModeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    // Event binding
    bindEvents() {
        // Login form
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                this.toggleDarkMode();
            });
        }

        // Board selection
        document.querySelectorAll('[data-board]').forEach(card => {
            card.addEventListener('click', (e) => {
                const board = e.currentTarget.dataset.board;
                this.selectBoard(board);
            });
        });

        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabId = e.currentTarget.dataset.tab;
                this.switchTab(tabId);
            });
        });

        // Navigation buttons
        document.getElementById('back-to-chapters').addEventListener('click', () => {
            this.showChapterSelection();
        });

        document.getElementById('logout-btn').addEventListener('click', () => {
            this.logout();
        });

        // Add Back and Home button functionality
        this.addNavigationButtons();

        // Quiz navigation
        document.getElementById('exit-quiz').addEventListener('click', () => {
            this.exitQuiz();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('prev-btn').addEventListener('click', () => {
            this.prevQuestion();
        });

        // Results buttons
        document.getElementById('restart-quiz-btn').addEventListener('click', () => {
            this.restartQuiz();
        });

        document.getElementById('review-answers-btn').addEventListener('click', () => {
            this.showReview();
        });

        document.getElementById('back-to-content-btn').addEventListener('click', () => {
            this.showContentScreen();
        });

        document.getElementById('close-review-btn').addEventListener('click', () => {
            this.showResults();
        });
    }

    // User authentication
    handleLogin() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;

        if (!username || !email) {
            alert('Please fill in all fields');
            return;
        }

        currentUser.name = username;
        currentUser.email = email;

        document.getElementById('user-name').textContent = username;
        document.getElementById('logout-btn').style.display = 'block';

        // Show success message instead of auto-navigation
        this.showLoginSuccess();
    }

    // Show login success with option to continue
    showLoginSuccess() {
        const loginForm = document.getElementById('login-form');
        
        // Replace the form with success message and continue button
        loginForm.innerHTML = `
            <div class="login-success">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Welcome, ${currentUser.name}!</h3>
                <p>Login successful! Ready to start learning?</p>
                <button type="button" class="btn btn-primary" id="continue-btn">
                    <i class="fas fa-arrow-right"></i> Continue to Board Selection
                </button>
                <button type="button" class="btn btn-secondary" id="stay-btn">
                    <i class="fas fa-user-edit"></i> Change Details
                </button>
            </div>
        `;

        // Add event listeners for the new buttons
        document.getElementById('continue-btn').addEventListener('click', () => {
            this.showBoardSelection();
        });

        document.getElementById('stay-btn').addEventListener('click', () => {
            this.resetLoginForm();
        });
    }

    // Reset login form to original state
    resetLoginForm() {
        const loginForm = document.getElementById('login-form');
        
        loginForm.innerHTML = `
            <div class="input-group">
                <i class="fas fa-user"></i>
                <input type="text" id="username" placeholder="Enter your name" required value="${currentUser.name}">
            </div>
            <div class="input-group">
                <i class="fas fa-envelope"></i>
                <input type="email" id="email" placeholder="Enter your email" required value="${currentUser.email}">
            </div>
            <button type="submit" class="btn btn-primary">
                <i class="fas fa-arrow-right"></i> Start Learning
            </button>
        `;

        // Re-bind the submit event
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
    }

    logout() {
        // Preserve progress data
        const userProgress = currentUser.progress;
        
        currentUser = {
            name: '',
            email: '',
            selectedBoard: '',
            selectedClass: '',
            selectedSubject: '',
            selectedChapter: '',
            progress: userProgress // Keep the progress data
        };

        document.getElementById('user-name').textContent = 'Guest';
        document.getElementById('logout-btn').style.display = 'none';
        
        // Reset the login form to original state
        this.resetLoginForm();

        this.showScreen('login-screen');
        this.updateBreadcrumb('Welcome');
    }

    // Board selection
    showBoardSelection() {
        this.showScreen('board-screen');
        this.updateBreadcrumb('Select Board');
    }

    selectBoard(boardId) {
        currentUser.selectedBoard = boardId;
        const boardInfo = boards[boardId];
        this.updateBreadcrumb(`${boardInfo.name} > Select Class`);
        this.showClassSelection();
    }

    // Class selection
    showClassSelection() {
        this.showScreen('class-screen');
        this.renderClassGrid();
    }

    renderClassGrid() {
        const classGrid = document.querySelector('.class-grid');
        classGrid.innerHTML = '';

        const selectedBoard = boards[currentUser.selectedBoard];
        
        selectedBoard.classes.forEach(classNum => {
            const classCard = document.createElement('div');
            classCard.className = 'selection-card class-card';
            classCard.innerHTML = `
                <div class="card-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <h3>Class ${classNum}</h3>
                <p>Grade ${classNum} curriculum</p>
                <span class="card-badge">Level ${classNum}</span>
            `;
            
            classCard.addEventListener('click', () => {
                this.selectClass(classNum);
            });
            
            classGrid.appendChild(classCard);
        });
    }

    selectClass(classNum) {
        console.log('Class selected:', classNum);
        currentUser.selectedClass = classNum;
        const boardInfo = boards[currentUser.selectedBoard];
        this.updateBreadcrumb(`${boardInfo.name} > Class ${classNum} > Select Subject`);
        this.showSubjectSelection();
    }

    // Subject selection
    showSubjectSelection() {
        this.showScreen('subject-screen');
        this.renderSubjectGrid();
    }

    renderSubjectGrid() {
        const subjectGrid = document.querySelector('.subject-grid');
        subjectGrid.innerHTML = '';

        const classSubjects = subjects[currentUser.selectedClass] || subjects[10];
        
        classSubjects.forEach(subject => {
            const subjectCard = document.createElement('div');
            subjectCard.className = 'selection-card subject-card';
            subjectCard.style.borderTop = `4px solid ${subject.color}`;
            subjectCard.innerHTML = `
                <div class="card-icon" style="color: ${subject.color}">
                    <i class="${subject.icon}"></i>
                </div>
                <h3>${subject.name}</h3>
                <p>Explore ${subject.name.toLowerCase()} concepts</p>
                <span class="card-badge" style="background-color: ${subject.color}">Start Learning</span>
            `;
            
            subjectCard.addEventListener('click', () => {
                this.selectSubject(subject.id);
            });
            
            subjectGrid.appendChild(subjectCard);
        });
    }

    selectSubject(subjectId) {
        console.log('Subject selected:', subjectId);
        console.log('Current class:', currentUser.selectedClass);
        console.log('All subjects data:', subjects);
        console.log('Available subjects for class:', subjects[currentUser.selectedClass]);
        
        currentUser.selectedSubject = subjectId;
        const boardInfo = boards[currentUser.selectedBoard];
        const subjectName = subjects[currentUser.selectedClass].find(s => s.id === subjectId).name;
        this.updateBreadcrumb(`${boardInfo.name} > Class ${currentUser.selectedClass} > ${subjectName} > Select Chapter`);
        this.showChapterSelection();
    }

    // Chapter selection
    showChapterSelection() {
        this.showScreen('chapter-screen');
        this.renderChapterGrid();
    }

    renderChapterGrid() {
        console.log('=== CHAPTER RENDERING DEBUG INFO ===');
        console.log('Current subject:', currentUser.selectedSubject);
        console.log('Current class:', currentUser.selectedClass);
        console.log('All chapters object:', chapters);
        
        const chapterGrid = document.querySelector('.chapter-grid');
        chapterGrid.innerHTML = '';

        const subjectChapters = chapters[currentUser.selectedSubject]?.[currentUser.selectedClass] || [];
        console.log('Subject chapters found:', subjectChapters);
        console.log('Number of chapters:', subjectChapters.length);
        
        // Log each chapter to verify our-body is there
        subjectChapters.forEach((chapter, index) => {
            console.log(`Chapter ${index + 1}:`, chapter);
        });
        
        if (subjectChapters.length === 0) {
            chapterGrid.innerHTML = '<p class="no-content">Chapters coming soon for this subject and class!</p>';
            console.log('No chapters found for this subject/class combination');
            return;
        }
        
        subjectChapters.forEach((chapter, index) => {
            console.log(`Rendering Chapter ${index + 1}:`, chapter);
            const chapterCard = document.createElement('div');
            chapterCard.className = 'selection-card chapter-card';
            
            let difficultyColor = '#27ae60';
            if (chapter.difficulty === 'Medium') difficultyColor = '#f39c12';
            if (chapter.difficulty === 'Hard') difficultyColor = '#e74c3c';
            
            chapterCard.innerHTML = `
                <div class="card-icon">
                    <i class="fas fa-book-open"></i>
                </div>
                <h3>Chapter ${index + 1}</h3>
                <h4>${chapter.name}</h4>
                <p>${chapter.description}</p>
                <div class="chapter-meta">
                    <span class="difficulty" style="background-color: ${difficultyColor}">${chapter.difficulty}</span>
                    <span class="time"><i class="fas fa-clock"></i> ${chapter.estimatedTime}</span>
                </div>
                <div class="chapter-debug">
                    <small>ID: ${chapter.id}</small>
                </div>
            `;
            
            chapterCard.addEventListener('click', () => {
                console.log('Chapter clicked:', chapter.id);
                console.log('Chapter index:', index);
                this.selectChapter(chapter.id);
            });
            
            chapterGrid.appendChild(chapterCard);
        });
        
        console.log('=== END CHAPTER RENDERING DEBUG INFO ===');
    }

    selectChapter(chapterId) {
        console.log('=== CHAPTER SELECTION DEBUG INFO ===');
        console.log('Chapter selected:', chapterId);
        console.log('Current user subject:', currentUser.selectedSubject);
        console.log('Current user class:', currentUser.selectedClass);
        console.log('Available chapters:', chapters[currentUser.selectedSubject]?.[currentUser.selectedClass]);
        
        const subjectChapters = chapters[currentUser.selectedSubject]?.[currentUser.selectedClass] || [];
        const chapterIndex = subjectChapters.findIndex(chapter => chapter.id === chapterId);
        console.log('Chapter index in array:', chapterIndex);
        
        currentUser.selectedChapter = chapterId;
        const boardInfo = boards[currentUser.selectedBoard];
        const subjectName = subjects[currentUser.selectedClass].find(s => s.id === currentUser.selectedSubject).name;
        const chapterInfo = subjectChapters.find(c => c.id === chapterId);
        
        console.log('Chapter info found:', chapterInfo);
        console.log('=== END CHAPTER SELECTION DEBUG INFO ===');
        
        this.updateBreadcrumb(`${boardInfo.name} > Class ${currentUser.selectedClass} > ${subjectName} > ${chapterInfo.name}`);
        this.showContentScreen();
    }

    // Content screen with tabs
    showContentScreen() {
        console.log('Showing content screen for chapter:', currentUser.selectedChapter);
        console.log('Chapter data:', chapters[currentUser.selectedSubject]?.[currentUser.selectedClass]);
        
        this.showScreen('content-screen');
        const chapterInfo = chapters[currentUser.selectedSubject][currentUser.selectedClass].find(c => c.id === currentUser.selectedChapter);
        console.log('Chapter info for content screen:', chapterInfo);
        document.getElementById('content-title').textContent = chapterInfo.name;
        
        // Ensure all tabs are reset first
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Default to MCQ tab and ensure it renders properly
        setTimeout(() => {
            this.switchTab('mcq-tab');
        }, 50); // Small delay to ensure DOM is ready
    }

    switchTab(tabId) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        const activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.classList.add('active');
        }

        console.log('Switched to tab:', tabId);

        // Load tab-specific content with a small delay to ensure DOM is ready
        setTimeout(() => {
            switch(tabId) {
                case 'mcq-tab':
                    this.renderMCQSets();
                    break;
                case 'video-tab':
                    this.renderVideoContent();
                    break;
                case 'summary-tab':
                    this.renderSummaryContent();
                    break;
                case 'ai-mcq-tab':
                    this.renderAIMCQContent();
                    break;
            }
        }, 100); // Small delay to ensure proper rendering
    }

    renderMCQSets() {
        console.log('renderMCQSets called');
        console.log('Current user selected chapter:', currentUser.selectedChapter);
        
        // Target the MCQ sets grid within the MCQ tab specifically
        const mcqGrid = document.querySelector('#mcq-tab .mcq-sets-grid');
        if (!mcqGrid) {
            console.error('MCQ sets grid container not found in MCQ tab');
            return;
        }
        
        // Clear any existing content
        mcqGrid.innerHTML = '';

        // Check if mcqQuestions object exists
        if (typeof mcqQuestions === 'undefined') {
            console.error('mcqQuestions object is not defined');
            mcqGrid.innerHTML = '<p class="no-content">MCQ system error. Please refresh the page.</p>';
            return;
        }

        const chapterQuestions = mcqQuestions[currentUser.selectedChapter];
        console.log('Chapter questions object:', chapterQuestions);
        
        if (!chapterQuestions) {
            mcqGrid.innerHTML = '<p class="no-content">MCQ sets coming soon for this chapter!</p>';
            return;
        }

        console.log('Rendering MCQ sets for chapter:', currentUser.selectedChapter);
        console.log('Number of sets:', Object.keys(chapterQuestions).length);

        Object.keys(chapterQuestions).forEach((setId, index) => {
            // Check if this set has been attempted before
            const hasAttempted = currentUser.progress[currentUser.selectedChapter] && 
                                currentUser.progress[currentUser.selectedChapter][setId];
            
            const setCard = document.createElement('div');
            setCard.className = 'mcq-set-card';
            
            // If attempted, show score information
            if (hasAttempted) {
                const attempt = currentUser.progress[currentUser.selectedChapter][setId];
                setCard.innerHTML = `
                    <div class="set-header">
                        <h3><i class="fas fa-question-circle"></i> Set ${index + 1}</h3>
                        <span class="question-count">${chapterQuestions[setId].length} Questions</span>
                    </div>
                    <div class="set-info">
                        <div class="difficulty-mix">
                            <span class="easy">Easy</span>
                            <span class="medium">Medium</span>
                            <span class="hard">Hard</span>
                        </div>
                        <div class="attempt-info">
                            <span class="attempted-badge">Attempted</span>
                            <div class="score-summary">
                                <span class="score-value">${attempt.score}/${attempt.total}</span>
                                <span class="percentage-value">${attempt.percentage}%</span>
                            </div>
                            <small class="attempt-date">Last attempt: ${new Date(attempt.date).toLocaleDateString()}</small>
                        </div>
                    </div>
                    <button class="btn btn-primary start-quiz-btn">
                        <i class="fas fa-redo"></i> Retry Quiz
                    </button>
                `;
            } else {
                // Not attempted yet
                setCard.innerHTML = `
                    <div class="set-header">
                        <h3><i class="fas fa-question-circle"></i> Set ${index + 1}</h3>
                        <span class="question-count">${chapterQuestions[setId].length} Questions</span>
                    </div>
                    <div class="set-info">
                        <div class="difficulty-mix">
                            <span class="easy">Easy</span>
                            <span class="medium">Medium</span>
                            <span class="hard">Hard</span>
                        </div>
                    </div>
                    <button class="btn btn-primary start-quiz-btn">
                        <i class="fas fa-play"></i> Start Quiz
                    </button>
                `;
            }
            
            setCard.querySelector('.start-quiz-btn').addEventListener('click', () => {
                this.startQuiz(setId);
            });
            
            // Ensure the card is properly appended to the MCQ grid
            mcqGrid.appendChild(setCard);
            console.log('MCQ set card appended:', setId);
        });
        
        console.log('MCQ sets rendering completed');
    }

    renderVideoContent() {
        const videoContainer = document.querySelector('.video-content');
        const chapterVideos = videoContent[currentUser.selectedChapter];
        
        if (!chapterVideos) {
            videoContainer.innerHTML = '<p class="no-content">Video content coming soon for this chapter!</p>';
            return;
        }

        videoContainer.innerHTML = chapterVideos.map(video => `
            <div class="video-card" ${video.url !== '#' ? `onclick="window.open('${video.url}', '_blank')" style="cursor: pointer;"` : ''}>
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='https://via.placeholder.com/300x200/1abc9c/white?text=Video'">
                    <div class="play-overlay">
                        <i class="fas fa-play"></i>
                    </div>
                    <span class="duration">${video.duration}</span>
                </div>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                    ${video.url !== '#' ? '<p class="video-link"><i class="fas fa-external-link-alt"></i> Click to watch on YouTube</p>' : ''}
                </div>
            </div>
        `).join('');
    }

    renderSummaryContent() {
        const summaryContainer = document.querySelector('.summary-content');
        const chapterSummary = summaryContent[currentUser.selectedChapter];
        
        if (!chapterSummary) {
            summaryContainer.innerHTML = '<p class="no-content">Summary coming soon for this chapter!</p>';
            return;
        }

        summaryContainer.innerHTML = `
            <div class="summary-section">
                <h3><i class="fas fa-lightbulb"></i> Key Points</h3>
                <ul class="key-points">
                    ${chapterSummary.keyPoints.map((point, index) => 
                        `<li data-number="${index + 1}">${point}</li>`
                    ).join('')}
                </ul>
            </div>
            
            <div class="summary-section">
                <h3><i class="fas fa-calculator"></i> Important Formulas</h3>
                <div class="formulas">
                    ${chapterSummary.formulas.map(formula => 
                        `<div class="formula">${formula}</div>`
                    ).join('')}
                </div>
            </div>
            
            <div class="summary-section">
                <h3><i class="fas fa-sticky-note"></i> Important Notes</h3>
                <ul class="important-notes">
                    ${chapterSummary.importantNotes.map((note, index) => 
                        `<li data-number="${index + 1}">${note}</li>`
                    ).join('')}
                </ul>
            </div>
        `;
    }

    renderAIMCQContent() {
        const aiContainer = document.querySelector('.ai-mcq-content');
        aiContainer.innerHTML = `
            <div class="ai-mcq-generator">
                <h3><i class="fas fa-robot"></i> AI-Generated MCQs</h3>
                <p>Generate custom MCQs based on your learning needs</p>
                
                <div class="ai-options">
                    <div class="option-group">
                        <label>Difficulty Level:</label>
                        <select id="ai-difficulty">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                            <option value="mixed">Mixed</option>
                        </select>
                    </div>
                    
                    <div class="option-group">
                        <label>Number of Questions:</label>
                        <select id="ai-question-count">
                            <option value="5">5 Questions</option>
                            <option value="10">10 Questions</option>
                            <option value="15">15 Questions</option>
                        </select>
                    </div>
                    
                    <div class="option-group">
                        <label>Focus Area:</label>
                        <input type="text" id="ai-focus" placeholder="e.g., algebraic operations, problem solving">
                    </div>
                </div>
                
                <button class="btn btn-primary ai-generate-btn">
                    <i class="fas fa-magic"></i> Generate AI MCQs
                </button>
                
                <div class="ai-status" style="display: none;">
                    <i class="fas fa-spinner fa-spin"></i> Generating questions...
                </div>
            </div>
        `;

        document.querySelector('.ai-generate-btn').addEventListener('click', () => {
            this.generateAIMCQs();
        });
    }

    generateAIMCQs() {
        const statusDiv = document.querySelector('.ai-status');
        statusDiv.style.display = 'block';
        
        // Simulate AI generation
        setTimeout(() => {
            statusDiv.style.display = 'none';
            alert('AI MCQ generation feature coming soon! This will create personalized questions based on your preferences.');
        }, 2000);
    }

    // Quiz functionality
    startQuiz(setId) {
        this.currentSetId = setId; // Store the current set ID
        this.currentQuiz = mcqQuestions[currentUser.selectedChapter][setId];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        
        this.showScreen('quiz-screen');
        this.updateQuizDisplay();
        this.showQuestion();
    }
    
    // Helper method to get current set ID
    getCurrentSetId() {
        return this.currentSetId;
    }

    showQuestion() {
        // Remove any existing explanation when showing a new question
        const existingExplanation = document.querySelector('.answer-explanation');
        if (existingExplanation) {
            existingExplanation.remove();
        }
        
        const question = this.currentQuiz[this.currentQuestionIndex];
        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = this.createOptionElement(option, index);
            optionsContainer.appendChild(optionElement);
        });

        // Restore previous selection with correct styling if it exists
        const previousAnswer = this.userAnswers[this.currentQuestionIndex];
        if (previousAnswer !== undefined) {
            this.selectOption(previousAnswer);
        }

        this.updateQuizNavigation();
        this.updateProgress();
    }

    createOptionElement(optionText, index) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.index = index;
        
        const letter = String.fromCharCode(65 + index);
        optionDiv.innerHTML = `
            <span class="option-letter">${letter}</span>
            <span class="option-text">${optionText}</span>
        `;
        
        optionDiv.addEventListener('click', () => this.selectOption(index));
        
        return optionDiv;
    }

    selectOption(selectedIndex) {
        // Remove any existing selection classes from all options
        const allOptions = document.querySelectorAll('.option');
        allOptions.forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
        });
        
        // Check if the selected answer is correct
        const currentQuestion = this.currentQuiz[this.currentQuestionIndex];
        const isCorrect = selectedIndex === currentQuestion.correctAnswer;
        
        // Add appropriate class based on correctness
        // Add selected class to the clicked option
        const selectedOption = document.querySelector(`[data-index="${selectedIndex}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
            
            if (isCorrect) {
                selectedOption.classList.add('correct');
            } else {
                selectedOption.classList.add('incorrect');
                
                // Show the correct answer when user selects wrong answer
                const correctOption = document.querySelector(`[data-index="${currentQuestion.correctAnswer}"]`);
                if (correctOption) {
                    // Add a visual indicator for the correct answer
                    correctOption.classList.add('correct');
                    
                    // Add explanation text below the options
                    const optionsContainer = document.getElementById('options-container');
                    const explanationDiv = document.createElement('div');
                    explanationDiv.className = 'answer-explanation';
                    explanationDiv.innerHTML = `
                        <div class="correct-answer-highlight">
                            <i class="fas fa-check-circle"></i> 
                            <strong>Correct Answer:</strong> ${String.fromCharCode(65 + currentQuestion.correctAnswer)}<br>
                            <strong>Explanation:</strong> ${currentQuestion.explanation}
                        </div>
                    `;
                    optionsContainer.parentNode.insertBefore(explanationDiv, optionsContainer.nextSibling);
                }
            }
        }
        
        // Store the user's answer
        this.userAnswers[this.currentQuestionIndex] = selectedIndex;
        
        document.getElementById('next-btn').disabled = false;
    }

    nextQuestion() {
        if (this.userAnswers[this.currentQuestionIndex] === undefined) {
            alert('Please select an answer before proceeding.');
            return;
        }

        // Remove any existing explanation when moving to next question
        const existingExplanation = document.querySelector('.answer-explanation');
        if (existingExplanation) {
            existingExplanation.remove();
        }

        if (this.currentQuestionIndex < this.currentQuiz.length - 1) {
            this.currentQuestionIndex++;
            this.showQuestion();
        } else {
            this.finishQuiz();
        }
    }

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            // Remove any existing explanation when moving to previous question
            const existingExplanation = document.querySelector('.answer-explanation');
            if (existingExplanation) {
                existingExplanation.remove();
            }
            
            this.currentQuestionIndex--;
            this.showQuestion();
        }
    }

    updateQuizNavigation() {
        document.getElementById('prev-btn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('next-btn').disabled = this.userAnswers[this.currentQuestionIndex] === undefined;
        
        const nextBtn = document.getElementById('next-btn');
        if (this.currentQuestionIndex === this.currentQuiz.length - 1) {
            nextBtn.innerHTML = 'Finish Quiz <i class="fas fa-flag-checkered"></i>';
        } else {
            nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
        }
    }

    updateQuizDisplay() {
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        document.getElementById('total-questions').textContent = this.currentQuiz.length;
        document.getElementById('current-score').textContent = this.score;
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuiz.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        this.updateQuizDisplay();
    }

    finishQuiz() {
        this.calculateScore();
        
        // Save quiz attempt to user progress
        const currentSetId = this.getCurrentSetId(); // We'll implement this method
        if (currentSetId) {
            if (!currentUser.progress[currentUser.selectedChapter]) {
                currentUser.progress[currentUser.selectedChapter] = {};
            }
            
            currentUser.progress[currentUser.selectedChapter][currentSetId] = {
                score: this.score,
                total: this.currentQuiz.length,
                percentage: Math.round((this.score / this.currentQuiz.length) * 100),
                date: new Date().toISOString()
            };
            
            console.log('Quiz progress saved:', currentUser.progress);
        }
        
        this.showResults();
    }

    calculateScore() {
        this.score = 0;
        this.currentQuiz.forEach((question, index) => {
            if (this.userAnswers[index] === question.correctAnswer) {
                this.score++;
            }
        });
    }

    showResults() {
        this.showScreen('results-screen');
        
        const percentage = Math.round((this.score / this.currentQuiz.length) * 100);
        const incorrectAnswers = this.currentQuiz.length - this.score;
        
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('final-total').textContent = this.currentQuiz.length;
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        document.getElementById('correct-count').textContent = this.score;
        document.getElementById('incorrect-count').textContent = incorrectAnswers;
        
        let message = '';
        if (percentage >= 90) {
            message = '🏆 Outstanding! You\'re a quiz master!';
        } else if (percentage >= 80) {
            message = '🎉 Excellent work! Great knowledge!';
        } else if (percentage >= 70) {
            message = '👍 Good job! You did well!';
        } else if (percentage >= 60) {
            message = '👌 Not bad! Keep studying!';
        } else {
            message = '📚 Keep learning! Practice makes perfect!';
        }
        
        document.getElementById('performance-message').textContent = message;
    }

    showReview() {
        this.showScreen('review-screen');
        this.generateReview();
    }

    generateReview() {
        const reviewContainer = document.getElementById('review-content');
        reviewContainer.innerHTML = '';
        
        this.currentQuiz.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correctAnswer;
            const isCorrect = userAnswer === correctAnswer;
            
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-question';
            
            reviewDiv.innerHTML = `
                <h3>Question ${index + 1}: ${question.question}</h3>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === correctAnswer) {
                            className += ' correct-answer';
                        }
                        if (optIndex === userAnswer && !isCorrect) {
                            className += ' wrong-answer';
                        }
                        if (optIndex === userAnswer) {
                            className += ' user-answer';
                        }
                        
                        const letter = String.fromCharCode(65 + optIndex);
                        let prefix = '';
                        if (optIndex === userAnswer) {
                            prefix = isCorrect ? '✅ Your answer: ' : '❌ Your answer: ';
                        } else if (optIndex === correctAnswer) {
                            prefix = '✅ Correct answer: ';
                        }
                        
                        return `<div class="${className}">${prefix}${letter}) ${option}</div>`;
                    }).join('')}
                </div>
                <div class="explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            `;
            
            reviewContainer.appendChild(reviewDiv);
        });
    }

    restartQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.showQuestion();
        this.showScreen('quiz-screen');
    }

    exitQuiz() {
        if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
            this.showContentScreen();
        }
    }

    // Utility functions
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
        this.currentScreen = screenId;
        this.updateNavigationButtons();
    }

    addNavigationButtons() {
        // Add navigation buttons to each screen (except login)
        const screens = ['board-screen', 'class-screen', 'subject-screen', 'chapter-screen', 'content-screen'];
        
        screens.forEach(screenId => {
            const screen = document.getElementById(screenId);
            if (screen && !screen.querySelector('.navigation-buttons')) {
                const navButtons = document.createElement('div');
                navButtons.className = 'navigation-buttons';
                navButtons.innerHTML = `
                    <button class="nav-btn back-btn" data-action="back">
                        <i class="fas fa-arrow-left"></i> Back
                    </button>
                    <button class="nav-btn home-btn" data-action="home">
                        <i class="fas fa-home"></i> Home
                    </button>
                    <button class="nav-btn logout-btn" data-action="logout">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </button>
                `;
                
                // Insert navigation buttons at the top of the screen
                screen.appendChild(navButtons);
                
                // Add event listeners
                navButtons.querySelector('.back-btn').addEventListener('click', () => {
                    this.goBack();
                });
                navButtons.querySelector('.home-btn').addEventListener('click', () => {
                    this.goHome();
                });
                navButtons.querySelector('.logout-btn').addEventListener('click', () => {
                    this.logout();
                });
            }
        });
    }

    updateNavigationButtons() {
        // Update back button visibility based on current screen
        const backButtons = document.querySelectorAll('.back-btn');
        backButtons.forEach(btn => {
            if (this.currentScreen === 'board-screen') {
                btn.style.display = 'none';
            } else {
                btn.style.display = 'flex';
            }
        });
    }

    goBack() {
        switch(this.currentScreen) {
            case 'class-screen':
                this.showBoardSelection();
                break;
            case 'subject-screen':
                this.showClassSelection();
                break;
            case 'chapter-screen':
                this.showSubjectSelection();
                break;
            case 'content-screen':
                this.showChapterSelection();
                break;
            default:
                this.showBoardSelection();
        }
    }

    goHome() {
        this.showBoardSelection();
        this.updateBreadcrumb('Select Board');
    }

    updateBreadcrumb(path) {
        document.getElementById('breadcrumb-path').textContent = path;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EduMCQApp();
});