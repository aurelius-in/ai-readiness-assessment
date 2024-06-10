document.addEventListener('DOMContentLoaded', function() {
    const assessmentForm = document.getElementById('assessment-form');
    const result = document.getElementById('result');
    const resultText = document.getElementById('result-text');

    assessmentForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        let score = 0;
        const totalQuestions = 10;
        let allAnswered = true;

        // Loop through each question and add the value to the score
        for (let i = 1; i <= totalQuestions; i++) {
            const answer = document.getElementById('q' + i).value;
            if (answer) {
                score += parseInt(answer);
            } else {
                allAnswered = false;
                break;
            }
        }

        if (!allAnswered) {
            alert("Please answer all questions before submitting.");
            return;
        }

        let resultMessage = '';
        if (score >= totalQuestions * 4) {
            resultMessage = 'Your company is fully ready to implement AI. You have all the necessary components in place!';
        } else if (score >= totalQuestions * 3) {
            resultMessage = 'Your company is moderately ready for AI implementation. Consider strengthening your AI strategy and team.';
        } else {
            resultMessage = 'Your company has some work to do before it is ready for AI. Focus on building a clear strategy and supporting infrastructure.';
        }

        resultText.textContent = resultMessage;
        result.classList.remove('hidden');
    });
});
