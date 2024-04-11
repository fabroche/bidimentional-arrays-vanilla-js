/*
* Exercise Algorithmic Tournament Winner:
*
* An algorithmic tournament is
* underway, where team of
* programmers compete to solve
* algorithmic problems as quickly
* as possible.
*
* The competition follows a
* round-robin format, with each
* team facing off against all other
* teams.
*
* Only two teams compete
* against each other at a time,
* and in each competition, one team is
* designated as the home team,
* while the other is the way
* team.
*
* There is always a clear winner
* and loser in each competition with no ties.
* Teams earn 3 points for a win and
* 0 points for a loss.
* the overall winner of the tournament is the
* team with the highest total points.
*
* Your task is to write a function
* that determines the winner of
* the tournament based on the
* results of the competitions.
* The input consist of two arrays:
* competitions and results.
*
* The competitions array contains
* pairs of the teams represented as
* [homeTeam, awayTeam], where
* each team is a string of at most
* 30 characters.
*
* The results array indicates the
* winner of each corresponding
* competition in the competitions
* array.
*
* Specifically, results[i] denotes
* the winner of competitions[i],
* where a 1 in the results array
* means that the home team won,
* and a 0 means that the away
* team won.
*
* It is guaranteed that exactly one
* team will win the tournament,
* and each team will compete
* against all other teams exactly
* once.
*
* Additionally, the tournament
* will always have at least two
* teams.
*
* */


function main() {

    function tournamentWinner(competitions, results) {
        const scores = {}
        let winner = ''

        for (let i = 0; i < competitions.length; i++) {

            const [homeTeam, awayTeam] = competitions[i]

            const winningTeam = results[i] === 0 ? awayTeam : homeTeam

            console.log(`The winner team is ${winningTeam}`)

            scores[winningTeam] = (scores[winningTeam] || 0) + 3

            if (!winner || scores[winningTeam] > scores[winner]) {
                winner = winningTeam
            }
        }
        return winner
    }


    let programingLanguage = {
        js: 'Javascript',
        py: 'Python',
        c: 'C#'
    }

    const competitions = [
        [programingLanguage["js"], programingLanguage["c"]],
        [programingLanguage["c"], programingLanguage["py"]],
        [programingLanguage["py"], programingLanguage["js"]]
    ]

    const results = [1, 0, 0]

    console.log(`The winner of the Tournament is ${tournamentWinner(competitions, results)}`)
}

document.addEventListener('DOMContentLoaded', main)