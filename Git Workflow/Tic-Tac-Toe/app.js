// STATE
let state = {};

const gameState = () => {
    state.players = ['x', 'o'];
    state.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
}