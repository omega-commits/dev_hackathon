// Mock Data
const questions = [
    {
        id: "q1",
        question: "If α and β are the roots of the equation x² - 5x + 6 = 0, then the value of α² + β² is:",
        options: ["11", "13", "15", "17"],
        correctAnswer: 1,
        skillSet: "Algebra",
        difficulty: "Medium",
        frequency: 8,
        years: [2020, 2021, 2022, 2023, 2024, 2025],
        explanation: "Using α + β = 5 and αβ = 6, we get α² + β² = (α + β)² - 2αβ = 25 - 12 = 13"
    },
    {
        id: "q2",
        question: "The derivative of sin(x²) with respect to x is:",
        options: ["2x cos(x²)", "cos(x²)", "2x sin(x²)", "-2x cos(x²)"],
        correctAnswer: 0,
        skillSet: "Calculus",
        difficulty: "Easy",
        frequency: 12,
        years: [2020, 2021, 2022, 2023, 2024, 2025],
        explanation: "Using chain rule: d/dx[sin(x²)] = cos(x²) · 2x = 2x cos(x²)"
    },
    {
        id: "q3",
        question: "The value of sin 15° is:",
        options: ["(√6 - √2)/4", "(√6 + √2)/4", "(√3 - 1)/4", "(√3 + 1)/4"],
        correctAnswer: 0,
        skillSet: "Trigonometry",
        difficulty: "Medium",
        frequency: 6,
        years: [2021, 2022, 2024],
        explanation: "Using sin(45° - 30°) formula: sin 15° = (√6 - √2)/4"
    },
    {
        id: "q4",
        question: "A projectile is thrown at an angle of 45° with the horizontal. The ratio of its maximum height to its range is:",
        options: ["1:2", "1:4", "1:1", "2:1"],
        correctAnswer: 1,
        skillSet: "Mechanics",
        difficulty: "Medium",
        frequency: 9,
        years: [2020, 2021, 2023, 2024, 2025],
        explanation: "For 45° angle, H = u²/(4g) and R = u²/g, so H/R = 1/4"
    },
    {
        id: "q5",
        question: "The SI unit of capacitance is:",
        options: ["Ohm", "Farad", "Henry", "Tesla"],
        correctAnswer: 1,
        skillSet: "Electricity & Magnetism",
        difficulty: "Easy",
        frequency: 15,
        years: [2020, 2021, 2022, 2023, 2024, 2025],
        explanation: "Capacitance is measured in Farads (F), named after Michael Faraday"
    },
    {
        id: "q6",
        question: "In Young's double slit experiment, the fringe width is:",
        options: ["λD/d", "λd/D", "Dd/λ", "λ/Dd"],
        correctAnswer: 0,
        skillSet: "Optics",
        difficulty: "Medium",
        frequency: 7,
        years: [2021, 2022, 2023, 2025],
        explanation: "Fringe width β = λD/d where λ is wavelength, D is screen distance, d is slit separation"
    },
    {
        id: "q7",
        question: "The work function of a metal is 4.2 eV. What is the threshold frequency?",
        options: ["1.0 × 10¹⁵ Hz", "1.5 × 10¹⁵ Hz", "2.0 × 10¹⁵ Hz", "2.5 × 10¹⁵ Hz"],
        correctAnswer: 0,
        skillSet: "Modern Physics",
        difficulty: "Hard",
        frequency: 5,
        years: [2022, 2023, 2025],
        explanation: "Using E = hν, where E = 4.2 eV = 6.72 × 10⁻¹⁹ J and h = 6.63 × 10⁻³⁴ Js"
    },
    {
        id: "q8",
        question: "Which of the following is most acidic?",
        options: ["Phenol", "Ethanol", "Methanol", "Water"],
        correctAnswer: 0,
        skillSet: "Organic Chemistry",
        difficulty: "Easy",
        frequency: 10,
        years: [2020, 2021, 2022, 2024, 2025],
        explanation: "Phenol is most acidic due to resonance stabilization of phenoxide ion"
    },
    {
        id: "q9",
        question: "The hybridization of carbon in methane (CH₄) is:",
        options: ["sp", "sp²", "sp³", "sp³d"],
        correctAnswer: 2,
        skillSet: "Organic Chemistry",
        difficulty: "Easy",
        frequency: 14,
        years: [2020, 2021, 2022, 2023, 2024, 2025],
        explanation: "Methane has tetrahedral geometry with sp³ hybridization"
    },
    {
        id: "q10",
        question: "What is the oxidation state of Cr in K₂Cr₂O₇?",
        options: ["+4", "+5", "+6", "+7"],
        correctAnswer: 2,
        skillSet: "Inorganic Chemistry",
        difficulty: "Medium",
        frequency: 11,
        years: [2020, 2021, 2022, 2023, 2024, 2025],
        explanation: "2(+1) + 2x + 7(-2) = 0, solving gives x = +6"
    },
    {
        id: "q11",
        question: "The pH of a 0.01 M HCl solution is:",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        skillSet: "Physical Chemistry",
        difficulty: "Easy",
        frequency: 13,
        years: [2020, 2021, 2022, 2023, 2024, 2025],
        explanation: "pH = -log[H⁺] = -log(0.01) = 2"
    },
    {
        id: "q12",
        question: "The distance between the points (3, 4) and (7, 1) is:",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2,
        skillSet: "Coordinate Geometry",
        difficulty: "Easy",
        frequency: 8,
        years: [2021, 2022, 2023, 2024],
        explanation: "Using distance formula: √[(7-3)² + (1-4)²] = √[16 + 9] = 5"
    }
];

const skillSets = [
    "Algebra", "Calculus", "Trigonometry", "Coordinate Geometry",
    "Mechanics", "Electricity & Magnetism", "Optics", "Modern Physics",
    "Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"
];

// Navigation
function navigateTo(page) {
    // Update active states
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(page).classList.add('active');
    document.querySelector(`[data-page="${page}"]`).classList.add('active');
    
    // Initialize page-specific content
    if (page === 'dashboard') {
        initDashboard();
    } else if (page === 'questions') {
        initQuestions();
    } else if (page === 'analytics') {
        initAnalytics();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Setup navigation listeners
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        navigateTo(btn.dataset.page);
    });
});

// Dashboard
let skillDistributionChart = null;

function initDashboard() {
    if (skillDistributionChart) {
        skillDistributionChart.destroy();
    }
    
    const ctx = document.getElementById('skillDistributionChart');
    if (!ctx) return;
    
    skillDistributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: skillSets,
            datasets: [{
                label: 'Total Questions',
                data: [45, 52, 38, 35, 48, 42, 28, 32, 44, 40, 46],
                backgroundColor: '#3b82f6'
            }, {
                label: 'Avg Frequency',
                data: [8.2, 9.1, 6.8, 7.5, 8.9, 8.3, 6.2, 7.1, 8.7, 8.0, 8.5],
                backgroundColor: '#8b5cf6'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    ticks: {
                        autoSkip: false,
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// Questions Page
let filteredQuestions = [...questions];

function initQuestions() {
    // Populate skill filters
    const skillFiltersContainer = document.getElementById('skillFilters');
    skillFiltersContainer.innerHTML = '';
    
    skillSets.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'checkbox-item';
        div.innerHTML = `
            <input type="checkbox" id="skill-${skill}" value="${skill}">
            <label for="skill-${skill}">${skill}</label>
        `;
        skillFiltersContainer.appendChild(div);
    });
    
    // Add filter listeners
    document.getElementById('searchInput').addEventListener('input', filterQuestions);
    document.getElementById('difficultyFilter').addEventListener('change', filterQuestions);
    document.getElementById('frequencyFilter').addEventListener('change', filterQuestions);
    
    skillFiltersContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', filterQuestions);
    });
    
    displayQuestions();
}

function filterQuestions() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const difficulty = document.getElementById('difficultyFilter').value;
    const minFrequency = parseInt(document.getElementById('frequencyFilter').value);
    const selectedSkills = Array.from(document.querySelectorAll('#skillFilters input:checked'))
        .map(cb => cb.value);
    
    filteredQuestions = questions.filter(q => {
        if (searchQuery && !q.question.toLowerCase().includes(searchQuery)) return false;
        if (difficulty !== 'all' && q.difficulty !== difficulty) return false;
        if (q.frequency < minFrequency) return false;
        if (selectedSkills.length > 0 && !selectedSkills.includes(q.skillSet)) return false;
        return true;
    });
    
    displayQuestions();
}

function displayQuestions() {
    const container = document.getElementById('questionsList');
    document.getElementById('questionCount').textContent = filteredQuestions.length;
    
    if (filteredQuestions.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; background: white; border-radius: 0.75rem;">
                <p style="color: #6b7280; margin-bottom: 0.5rem;">No questions found</p>
                <p style="color: #9ca3af; font-size: 0.875rem;">Try adjusting your filters</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredQuestions.map(q => {
        const difficultyClass = q.difficulty.toLowerCase();
        return `
            <div class="question-item">
                <div class="question-header">
                    <div class="question-badges">
                        <span class="badge badge-skill">${q.skillSet}</span>
                        <span class="badge badge-${difficultyClass}">${q.difficulty}</span>
                        <span class="badge frequency">📈 ${q.frequency}x</span>
                    </div>
                    <h3 class="question-title">${q.question}</h3>
                    <p class="question-meta">Appeared in: ${q.years.join(', ')}</p>
                </div>
                
                <div class="question-options">
                    ${q.options.map((opt, idx) => `
                        <div class="option ${idx === q.correctAnswer ? 'correct' : ''}">
                            <strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}
                        </div>
                    `).join('')}
                </div>
                
                <div class="explanation-box">
                    <h4>⭐ Explanation</h4>
                    <p>${q.explanation}</p>
                </div>
            </div>
        `;
    }).join('');
}

function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('difficultyFilter').value = 'all';
    document.getElementById('frequencyFilter').value = '0';
    document.querySelectorAll('#skillFilters input[type="checkbox"]').forEach(cb => cb.checked = false);
    filterQuestions();
}

// Practice Mode
let practiceQuestions = [];
let currentQuestionIdx = 0;
let selectedOption = null;
let practiceAnswers = [];
let practiceTimer = null;
let practiceSeconds = 0;

function startPractice() {
    practiceQuestions = [...questions].slice(0, 10);
    currentQuestionIdx = 0;
    selectedOption = null;
    practiceAnswers = [];
    practiceSeconds = 0;
    
    document.getElementById('practiceStart').style.display = 'none';
    document.getElementById('practiceActive').style.display = 'block';
    document.getElementById('practiceResults').style.display = 'none';
    
    startTimer();
    showQuestion();
}

function startTimer() {
    if (practiceTimer) clearInterval(practiceTimer);
    practiceTimer = setInterval(() => {
        practiceSeconds++;
        const mins = Math.floor(practiceSeconds / 60);
        const secs = practiceSeconds % 60;
        document.getElementById('timer').textContent = 
            `${mins}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

function showQuestion() {
    const q = practiceQuestions[currentQuestionIdx];
    
    // Update progress
    document.getElementById('questionProgress').textContent = 
        `Question ${currentQuestionIdx + 1} of ${practiceQuestions.length}`;
    document.getElementById('progressFill').style.width = 
        `${((currentQuestionIdx + 1) / practiceQuestions.length) * 100}%`;
    
    // Update stats
    const correct = practiceAnswers.filter(a => a.isCorrect).length;
    const incorrect = practiceAnswers.length - correct;
    document.getElementById('practiceScore').textContent = 
        `${correct} correct • ${incorrect} incorrect`;
    
    // Update question
    document.getElementById('currentSkill').textContent = q.skillSet;
    document.getElementById('currentDifficulty').textContent = q.difficulty;
    document.getElementById('currentDifficulty').className = `badge badge-${q.difficulty.toLowerCase()}`;
    document.getElementById('currentFrequency').textContent = `${q.frequency}x`;
    document.getElementById('currentQuestion').textContent = q.question;
    
    // Update options
    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = q.options.map((opt, idx) => `
        <button class="option-btn" onclick="selectOption(${idx})">
            <strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}
        </button>
    `).join('');
    
    // Reset state
    selectedOption = null;
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('submitBtn').textContent = 'Submit Answer';
}

function selectOption(idx) {
    if (practiceAnswers.length > currentQuestionIdx) return; // Already answered
    
    selectedOption = idx;
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.toggle('selected', i === idx);
    });
}

function submitAnswer() {
    if (selectedOption === null) return;
    if (practiceAnswers.length > currentQuestionIdx) return; // Already answered
    
    const q = practiceQuestions[currentQuestionIdx];
    const isCorrect = selectedOption === q.correctAnswer;
    
    practiceAnswers.push({
        questionId: q.id,
        selectedAnswer: selectedOption,
        isCorrect
    });
    
    // Show result
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correctAnswer) {
            btn.classList.add('correct');
        } else if (i === selectedOption && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Show explanation
    document.getElementById('explanation').style.display = 'block';
    document.getElementById('explanationText').textContent = q.explanation;
    
    // Update button
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('submitBtn').textContent = 'Moving to next question...';
    
    // Move to next question or show results
    setTimeout(() => {
        if (currentQuestionIdx < practiceQuestions.length - 1) {
            currentQuestionIdx++;
            showQuestion();
        } else {
            showResults();
        }
    }, 2000);
}

function showResults() {
    if (practiceTimer) {
        clearInterval(practiceTimer);
        practiceTimer = null;
    }
    
    document.getElementById('practiceActive').style.display = 'none';
    document.getElementById('practiceResults').style.display = 'block';
    
    const correct = practiceAnswers.filter(a => a.isCorrect).length;
    const accuracy = Math.round((correct / practiceQuestions.length) * 100);
    const mins = Math.floor(practiceSeconds / 60);
    const secs = practiceSeconds % 60;
    
    document.getElementById('finalCorrect').textContent = `${correct}/${practiceQuestions.length}`;
    document.getElementById('finalAccuracy').textContent = `${accuracy}%`;
    document.getElementById('finalTime').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    
    // Show review
    const reviewContainer = document.getElementById('resultsReview');
    reviewContainer.innerHTML = '<h3>Question Review</h3>' + 
        practiceQuestions.map((q, idx) => {
            const answer = practiceAnswers[idx];
            const isCorrect = answer.isCorrect;
            return `
                <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="review-icon">${isCorrect ? '✓' : '✗'}</div>
                    <div class="review-content">
                        <div class="review-skill">${q.skillSet}</div>
                        <div class="review-question">${q.question}</div>
                    </div>
                    <span class="badge badge-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
                </div>
            `;
        }).join('');
}

function resetPractice() {
    document.getElementById('practiceStart').style.display = 'block';
    document.getElementById('practiceActive').style.display = 'none';
    document.getElementById('practiceResults').style.display = 'none';
    
    if (practiceTimer) {
        clearInterval(practiceTimer);
        practiceTimer = null;
    }
}

// Analytics
let performanceChart = null;
let skillAccuracyChart = null;
let frequencyChart = null;

function initAnalytics() {
    // Initialize on performance tab by default
    switchTab('performance');
}

function switchTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event?.target?.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tab + 'Tab').classList.add('active');
    
    // Initialize charts
    if (tab === 'performance') {
        initPerformanceChart();
    } else if (tab === 'skills') {
        initSkillAccuracyChart();
    } else if (tab === 'frequency') {
        initFrequencyChart();
    }
}

function initPerformanceChart() {
    if (performanceChart) {
        performanceChart.destroy();
    }
    
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Accuracy (%)',
                data: [65, 68, 72, 75, 78, 78],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                yAxisID: 'y'
            }, {
                label: 'Questions Attempted',
                data: [120, 145, 168, 189, 210, 225],
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                tension: 0.4,
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    type: 'linear',
                    position: 'left',
                    min: 0,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Accuracy (%)'
                    }
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    title: {
                        display: true,
                        text: 'Questions'
                    }
                }
            }
        }
    });
}

function initSkillAccuracyChart() {
    if (skillAccuracyChart) {
        skillAccuracyChart.destroy();
    }
    
    const ctx = document.getElementById('skillAccuracyChart');
    if (!ctx) return;
    
    skillAccuracyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: skillSets,
            datasets: [{
                label: 'Accuracy (%)',
                data: [82, 79, 75, 77, 81, 74, 65, 70, 85, 80, 83],
                backgroundColor: '#3b82f6'
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    min: 0,
                    max: 100
                }
            }
        }
    });
}

function initFrequencyChart() {
    if (frequencyChart) {
        frequencyChart.destroy();
    }
    
    const ctx = document.getElementById('frequencyChart');
    if (!ctx) return;
    
    frequencyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['10+ times', '7-9 times', '4-6 times', '1-3 times'],
            datasets: [{
                label: 'Number of Questions',
                data: [145, 98, 112, 73],
                backgroundColor: '#3b82f6'
            }, {
                label: 'Percentage',
                data: [34, 23, 26, 17],
                backgroundColor: '#10b981'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true
        }
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Set home as active page
    navigateTo('home');
});
