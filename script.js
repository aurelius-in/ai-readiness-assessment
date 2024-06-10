document.getElementById('assessment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;
    const totalQuestions = 5;

    // Calculate the score based on user inputs
    for (let i = 1; i <= totalQuestions; i++) {
        score += parseInt(document.getElementById('q' + i).value);
    }

    // Generate the result text based on the score
    let resultText = '';
    if (score === totalQuestions) {
        resultText = 'Your company is fully ready to implement AI. You have all the necessary components in place!';
    } else if (score >= totalQuestions * 0.6) {
        resultText = 'Your company is moderately ready for AI implementation. Consider strengthening your AI strategy and team.';
    } else {
        resultText = 'Your company has some work to do before it is ready for AI. Focus on building a clear strategy and supporting infrastructure.';
    }

    // Display the result
    document.getElementById('result-text').textContent = resultText;
    document.getElementById('result').classList.remove('hidden');
});
