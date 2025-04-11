import React, { useState } from 'react';
import { CharacterStats } from "../interfaces/CharacterStats";
import CharacterStatsComponent from './CharacterStats';
import CharacterSkills from './CharacterSkills';
import './CharacterInformation.css';

interface CharacterInformationProps {
  characterStats: CharacterStats;
}

const CharacterInformation: React.FC<CharacterInformationProps> = ({ characterStats }) => {
  const [activeTab, setActiveTab] = useState<'stats' | 'skills'>('stats');

  return (
    <div className="character-info">
      <div className="character-header">
        <img
          src="/slime-hero.png"
          alt="Character"
          className="character-image"
        />
        <div className="character-basic-info">
          <h3>{characterStats.name}</h3>
          <p>Level: {characterStats.level}</p>
        </div>
      </div>

      <div className="character-resources">
        <div className="resource-bar">
          <div className="resource-label">
            <span>HP</span>
            <span>
              {characterStats.currentHP}/{characterStats.maxHP}
            </span>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-danger"
              style={{
                width: `${
                  (characterStats.currentHP / characterStats.maxHP) * 100
                }%`,
              }}
            ></div>
          </div>
          <small>+{characterStats.dependent_stat.hp_regen}/s</small>
        </div>

        <div className="resource-bar">
          <div className="resource-label">
            <span>MP</span>
            <span>
              {characterStats.currentMP}/{characterStats.maxMP}
            </span>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-primary"
              style={{
                width: `${
                  (characterStats.currentMP / characterStats.maxMP) * 100
                }%`,
              }}
            ></div>
          </div>
          <small>+{characterStats.dependent_stat.mp_regen}/s</small>
        </div>

        <div className="resource-bar">
          <div className="resource-label">
            <span>EXP</span>
            <span>
              {characterStats.currentExp}/{characterStats.maxExp}
            </span>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              style={{
                width: `${
                  (characterStats.currentExp / characterStats.maxExp) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>

        <div className="tab-buttons">
          <button 
            className={`tab-button ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            Chỉ số
          </button>
          <button 
            className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Kỹ năng
          </button>
        </div>
      </div>

      {activeTab === 'stats' ? (
        <CharacterStatsComponent stats={characterStats} />
      ) : (
        <CharacterSkills />
      )}
    </div>
  );
};

export default CharacterInformation;
