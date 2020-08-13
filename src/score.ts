export const incrementScore = (score: number, numEaten: number, player: number) => {
    let scoreText = 'Player 1';
    let score_tag = document.getElementById('player1-score');
    if (player === 2) {
        scoreText = 'Player 2';
        score_tag = document.getElementById('player2-score');
    }
    score += (numEaten * 100);
    score_tag.innerText = `${scoreText}: ${score}`;
    return score;
}