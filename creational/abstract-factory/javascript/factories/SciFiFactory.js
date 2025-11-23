import { GameFactory } from './GameFactory.js'
import { SciFyHero } from '../products/Hero.js'
import { SciFiMonster } from '../products/Monster.js'
import { SciFyWeapon } from '../products/Weapon.js'


export class SciFyFactory extends GameFactory {
    createHero() {
        return new SciFyHero();
    }

    createMonster() {
        return new SciFiMonster();
    }

    createWeapon() {
        return new SciFyWeapon();
    }
}