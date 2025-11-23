import { FantasyFactory } from "./factories/FantasyFactory.js";
import { SciFyFactory } from "./factories/SciFiFactory.js";

function playGame(factory) {
    const hero = factory.createHero()
    const monster = factory.createMonster()
    const weapon = factory.createWeapon()

    console.log(hero.attack());
    console.log(monster.roar());
    console.log(weapon.use());
    
}

console.log('\n');
console.log("=== Fantasy World ===");
playGame(new FantasyFactory())
console.log('\n');
console.log("=== Sci-Fi World ===");
playGame(new SciFyFactory())
console.log('\n');