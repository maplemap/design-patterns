import { GameFactory } from './GameFactory.js'
import { FantasyHero } from '../products/Hero.js'
import { FantasyMonster } from '../products/Monster.js'
import { FantasyWeapon } from '../products/Weapon.js'


export class FantasyFactory extends GameFactory {
    createHero() {
        return new FantasyHero();
    }

    createMonster() {
        return new FantasyMonster();
    }

    createWeapon() {
        return new FantasyWeapon();
    }
}