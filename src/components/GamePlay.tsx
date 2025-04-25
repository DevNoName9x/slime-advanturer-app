import React, { useState } from "react";
import CharacterInformation from "./CharacterInformation";
import Action from "./Action";
import { characterData } from "../data/CharacterData";
import { CharacterStats } from "../interfaces/CharacterStats";

const GamePlay: React.FC = () => {
  const [characterStats, setCharacterStats] =
    useState<CharacterStats>(characterData);

  const handleActionComplete = (exp: number) => {
    setCharacterStats((prevStats) => {
      const newExp = prevStats.currentExp + exp;
      let newLevel = prevStats.level;
      let newMaxExp = prevStats.maxExp;
      let remainingExp = newExp;

      // Kiểm tra level up
      while (remainingExp >= newMaxExp) {
        newLevel += 1;
        remainingExp -= newMaxExp;
        newMaxExp = Math.floor(newMaxExp * 1.5); // Tăng exp cần thiết lên 50%
      }

      return {
        ...prevStats,
        currentExp: remainingExp,
        maxExp: newMaxExp,
        level: newLevel,
        // Cập nhật các chỉ số dựa trên level mới
        main_stat: {
          ...prevStats.main_stat,
          strength: 10 + newLevel,
          agility: 10 + newLevel,
          intelligence: 10 + newLevel,
          endurance: 10 + newLevel,
        },
        dependent_stat: {
          physical_attack: 10 + (10 + newLevel) * 2,
          magic_attack: 10 + (10 + newLevel) * 2,
          physical_defense: 10 + (10 + newLevel) * 1 + (10 + newLevel) * 2,
          magic_defense: 10 + (10 + newLevel) * 1 + (10 + newLevel) * 2,
          attack_speed: 10 + (10 + newLevel) * 2,
          hp_regen: 1 + (10 + newLevel) * 0.1,
          mp_regen: 1 + (10 + newLevel) * 0.1,
        },
      };
    });
  };

  return (    
        <div className="row">
          <div className="col-3">
            <CharacterInformation characterStats={characterStats} />
          </div>
          <div className="col-9">
            <Action
              characterLevel={characterStats.level}
              onActionComplete={handleActionComplete}
            />
          </div>
        </div>
  );
};

export default GamePlay;
