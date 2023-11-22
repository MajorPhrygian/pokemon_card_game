import {Player} from "/ressources/javascripts/Player.js";
import { setupPhase } from "./setupPhase.js";
import { clearMain, displayHud, clearHeader} from "./cardDisplay.js";
import {Arctibax, Chien_Pao, Energy, Frigibax, Potion, Squawkabilly, UltraBall } from "./cardClasses.js";
import { matchManager } from "./matchManager.js";
 


const main = async () => {
    await setupPhase(player1,player2);
    clearMain();
    clearHeader();
    displayHud(player1, player2);

    // FOR TESTS
    // player2.active = new Squawkabilly(1000);
    // player1.active = new Frigibax(1001);
    // player2.active.addEnergy(new Energy(143, 'Fighting Energy', 'f'));
    // player2.active.addEnergy(new Energy(143, 'Fighting Energy', 'f'));
    // player2.active.addEnergy(new Energy(143, 'Fighting Energy', 'f'));
    // player1.active.addEnergy(new Energy(143, 'Water Energy', 'w'));
    // player1.active.addEnergy(new Energy(143, 'Water Energy', 'w'));
    // player1.active.addEnergy(new Energy(143, 'Water Energy', 'w'));
    // player2.addToHand(new Potion(388));
    // player2.addToHand(new Potion(388));
    // player2.addToHand(new Potion(388));
    // player1.active = new Chien_Pao(1000);
    // player1.active.addEnergy(new Energy(143, 'Water Energy', 'w'));
    // player1.active.addEnergy(new Energy(143, 'Water Energy', 'w'));
    // player1._hand = [];
    // player1.addToHand(new Arctibax(1292));
    // player1.hand[0].addEnergy(new Energy(143, 'Water Energy', 'w'));
    // player1.hand[0].addEnergy(new Energy(143, 'Water Energy', 'w'));

    matchManager(player1,player2)
}


// Keeping this commented for now as it is super annoying
// window.onbeforeunload = function () {
//     return "Data will be lost if you leave the page, are you sure?";
// };

let player1 = new Player(1);
let player2 = new Player(2);
main();


// TESTS:
// let testPlayer1 = new Player(1);
// let testPlayer2 = new Player(2);
// testPlayer1.deck = shuffleArray(deck1);
// testPlayer2.deck = shuffleArray(deck2);
// testPlayer1.gameSetup();
// testPlayer2.gameSetup();
// testPlayer1.active = new Lucario(100);
// testPlayer2.addToBench(new Chien_Pao(100));
// testPlayer2.active = new Lechonk(101);
// testPlayer1.active.addEnergy(new Energy(143, 'Water Energy', 'f'));
// testPlayer1.active.addEnergy(new Energy(143, 'Water Energy', 'f'));
// testPlayer1.active.addEnergy(new Energy(143, 'Water Energy', 'f'));
// testPlayer2.active.addEnergy(new Energy(143, 'Fighting Energy', 'f'));
// testPlayer2.active.addEnergy(new Energy(143, 'Fighting Energy', 'f'));
// testPlayer2.active.addEnergy(new Energy(143, 'Fighting Energy', 'f'));
// testPlayer2.bench[0].hpModifier(-200);
// matchManager(testPlayer1, testPlayer2)








// TO DO:
// Chien-Pao's ability can be used multiple times per turn


// POLISH

// Remove the card highlight when you hover over your opponent's card
// Comment out the resistance and weakness display, as they will not be needed for those decks
// Put some space around the buttons in the ticker
// Add a text feedback to turnBenchPokemon
// Change Option turnBenchPokemon to get click event from displayHud instead of re-displaying the pokemon in the header
// Sort Hand display
// Coin flip : add button
// ajouter des shuffle deck partout ou ce le demande
// Everywhere that HPModifier() is used, need to take into account invincibility. Maybe HPModifier() should return the value deducted and that is what should be used to display.
// 