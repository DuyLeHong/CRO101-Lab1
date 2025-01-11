console.log("Buổi 2 - Ôn tập JS cơ bản")

let a = 1
var b = 2

console.log(`Thương 2 số ${a} và ${b} = ${a / b}`)

function tich2So (a, b) {
    return a * b
}

console.log(`Tích 2 số ${a} và ${b} = ${tich2So(a,b)}`)

const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
];

let validPlayer = ({name, goals} = {}) => {
    let check = !!name && !!goals
    return check;
}

function displayPlayers () {
    // for (const player of players) {
        
    //     if (validPlayer(player)) {
    //         console.log(player.name + " - " + player.goals)
    //     }
    // }

    let arrPlayersHopLe  = players.filter(validPlayer)

    arrPlayersHopLe.forEach((player) => console.log(player))
    
}

displayPlayers()

