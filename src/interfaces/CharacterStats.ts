export interface MainStat {
    strength: {
        physical_attack: number;
        physical_defense: number;
    };
    agility: {
        attack_speed: number;
        movement_speed: number;
    };
    intelligence: {
        magic_attack: number;
        magic_defense: number;
        mp_regen: number;
        mp: number;
    };
    endurance: {
        hp: number;
        hp_regen: number;
        physical_defense: number;
        magic_defense: number;
    };
}

export interface CharacterStats {
    name: string;
    level: number;
    currentHP: number;
    maxHP: number;
    currentMP: number;
    maxMP: number;
    currentExp: number;
    maxExp: number;
    main_stat: {
        strength: number;
        intelligence: number;
        agility: number;
        endurance: number;
    };
    dependent_stat: {
        physical_attack: number;
        magic_attack: number;
        physical_defense: number;
        magic_defense: number;
        attack_speed: number;
        hp_regen: number;
        mp_regen: number;
    };
    "sub-stat": {
        critical_rate: number;
        critical_damage: number;
        cooldown: number;
        movement_speed: number;
    };
} 