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

const getScoreLine = (game) => {
    let { homeTeam, awayTeam } = game

    let { team: hTeam, points: hPoints } = homeTeam
    let { team: aTeam, points: aPoints } = awayTeam

    var teamName = `${ aTeam } @ ${ hTeam }`
    var scoreLine

    if (aPoints > hPoints) {
        scoreLine = `<b>${ aPoints }</b>-${ hPoints }`
    } else {
        scoreLine = `${ aPoints }-<b>${ hPoints }</b>`
    }

    return `${ teamName } ${ scoreLine }`
}

const isWinner = (game, targetTeam) => {
    let { homeTeam, awayTeam } = game
    var target = homeTeam.team === targetTeam ? homeTeam : awayTeam

    return target.isWinner
}

const makeChart = (games, targetTeam) => {
    var ulParent = document.createElement('ul')

    for (let game of games) {
        let gameLi = document.createElement('li')
        gameLi.innerHTML = getScoreLine(game)

        let warriors = isWinner(game, targetTeam)
        gameLi.classList.add(warriors ? 'win' : 'loss')


        ulParent.appendChild(gameLi)
    }

    return ulParent
}

const ugSection = document.querySelector('#ug')
const csSection = document.querySelector('#cs')
const ugChart = makeChart(warriorsGames, 'УГМК')
const csChart = makeChart(warriorsGames, 'ПБК ЦСК')

ugSection.insertAdjacentElement('afterend', ugChart)
csSection.insertAdjacentElement('afterend', csChart)
