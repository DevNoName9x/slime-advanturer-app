import { CharacterStats } from '../types/CharacterStats';

export const characterData: CharacterStats = {
    name: "Slime Hero",
    level: 1,
    currentHP: 100,
    maxHP: 100,
    currentMP: 50,
    maxMP: 50,
    currentExp: 0,
    maxExp: 100,
    main_stat: {
        strength: 10,
        agility: 10,
        intelligence: 10,
        endurance: 10
    },
    dependent_stat: {
        physical_attack: 10 + 10 * 2, // base + strength * 2
        magic_attack: 10 + 10 * 2, // base + intelligence * 2
        physical_defense: 10 + 10 * 1 + 10 * 2, // base + strength * 1 + endurance * 2
        magic_defense: 10 + 10 * 1 + 10 * 2, // base + intelligence * 1 + endurance * 2
        attack_speed: 10 + 10 * 2, // base + agility * 2
        hp_regen: 1 + 10 * 0.1, // base + endurance * 0.1
        mp_regen: 1 + 10 * 0.1 // base + intelligence * 0.1
    },
    "sub-stat": {
        critical_rate: 5,
        critical_damage: 150,
        cooldown: 0,
        movement_speed: 10
    }
}; 