const warriorsGames = [
    {
        awayTeam: {
            team: 'УГМК',
            points: 119,
            isWinner: true
        },
        homeTeam: {
            team: 'ПБК ЦСК',
            points: 106,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'УГМК',
            points: 105,
            isWinner: false
        },
        homeTeam: {
            team: 'ПБК ЦСК',
            points: 127,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'УГМК',
            points: 126,
            isWinner: true
        },
        awayTeam: {
            team: 'ПБК ЦСК',
            points: 85,
            isWinner: false
        }
    },
    {
        homeTeam: {
            team: 'УГМК',
            points: 92,
            isWinner: false
        },
        awayTeam: {
            team: 'ПБК ЦСК',
            points: 95,
            isWinner: true
        }
    },
    {
        awayTeam: {
            team: 'УГМК',
            points: 94,
            isWinner: false
        },
        homeTeam: {
            team: 'ПБК ЦСК',
            points: 98,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'УГМК',
            points: 115,
            isWinner: true
        },
        awayTeam: {
            team: 'ПБК ЦСК',
            points: 86,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'УГМК',
            points: 101,
            isWinner: true
        },
        homeTeam: {
            team: 'ПБК ЦСК',
            points: 92,
            isWinner: false
        }
    }
]

// STEP 1

const makeChart = (games) => {
    var ulParent = document.createElement('ul')

    for (let game of games) {
        let { homeTeam, awayTeam } = game
        let gameLi = document.createElement('li')
        let { team: hTeam, points: hPoints } = homeTeam
        let { team: aTeam, points: aPoints } = awayTeam

        let teamName = `${ aTeam } @ ${ hTeam }`
        let scoreLine

        if (aPoints > hPoints) {
            scoreLine = `<b>${ aPoints }</b>-${ hPoints }`
        } else {
            scoreLine = `${ aPoints }-<b>${ hPoints }</b>`
        }

        let warriors = hTeam === 'УГМК' ? homeTeam : awayTeam
        gameLi.classList.add(warriors.isWinner ? 'win' : 'loss')

        gameLi.innerHTML = `${ teamName } ${ scoreLine }`

        ulParent.appendChild(gameLi)
    }

    return ulParent
}

const chart = makeChart(warriorsGames)

document.body.prepend(chart)
