// Create a function called superbowlWin
function superbowlWin(record) {
    const win = record.find(function(game) {
        return game.result === "W";
    });

    // Check if a win was found
    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}
