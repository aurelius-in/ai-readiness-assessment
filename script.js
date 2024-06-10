document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');
    const result = document.getElementById('result');
    const resultText = document.getElementById('result-text');

    submitButton.addEventListener('click', function() {
        let score = 0;
        const totalQuestions = 10;
        let allAnswered = true;

        // Loop through each question and add the value to the score
        for (let i = 1; i <= totalQuestions; i++) {
            const answer = document.getElementById('q' + i).value;
            console.log(`Question ${i} answer: ${answer}`); // Debugging line
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

        console.log(`Total score: ${score}`); // Debugging line

        let resultMessage = '';
        if (score >= totalQuestions * 4) {
            resultMessage = 'Your company is fully ready to implement AI. You have all the necessary components in place!';
        } else if (score >= totalQuestions * 3) {
            resultMessage = 'Your company is moderately ready for AI implementation. Consider strengthening your AI strategy and team.';
        } else {
            resultMessage = 'Your company has some work to do before it is ready for AI. Focus on building a clear strategy and supporting infrastructure.';
        }

        console.log(`Result message: ${resultMessage}`); // Debugging line

        resultText.textContent = resultMessage;
        console.log(`Result text content: ${resultText.textContent}`); // Debugging line
        result.classList.remove('hidden');
        console.log(`Result class list: ${result.classList}`); // Debugging line
    });
});
