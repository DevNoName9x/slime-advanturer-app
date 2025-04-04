import React from 'react';
import './CharacterSkills.css';

interface Skill {
    name: string;
    level: number;
    currentExp: number;
    maxExp: number;
    description: string;
    cooldown?: number;
    type: 'active' | 'passive';
}

const CharacterSkills: React.FC = () => {
    const skills: Skill[] = [
        {
            name: "Đòn chí mạng",
            level: 1,
            currentExp: 25,
            maxExp: 100,
            description: "Tăng sát thương chí mạng lên 150%",
            cooldown: 30,
            type: 'active'
        },
        {
            name: "Hồi phục",
            level: 1,
            currentExp: 50,
            maxExp: 100,
            description: "Hồi phục 20% HP trong 5s",
            cooldown: 60,
            type: 'active'
        },
        {
            name: "Tăng tốc",
            level: 1,
            currentExp: 75,
            maxExp: 100,
            description: "Tăng tốc độ di chuyển thêm 10%",
            type: 'passive'
        },
        {
            name: "Hồi phục MP",
            level: 1,
            currentExp: 90,
            maxExp: 100,
            description: "Tăng tốc độ hồi phục MP thêm 5/s",
            type: 'passive'
        }
    ];

    const activeSkills = skills.filter(skill => skill.type === 'active');
    const passiveSkills = skills.filter(skill => skill.type === 'passive');

    return (
        <div className="skills-container">
            <div className="skills-section">
                <h5>Kỹ năng chủ động</h5>
                <div className="skills-list">
                    {activeSkills.map((skill, index) => (
                        <div key={index} className="skill-item active-skill">
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-level">Cấp {skill.level}</span>
                            </div>
                            <div className="skill-description">
                                {skill.description}
                            </div>
                            <div className="skill-progress">
                                <div className="progress">
                                    <div 
                                        className="progress-bar bg-primary" 
                                        style={{ width: `${(skill.currentExp / skill.maxExp) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="skill-exp">{skill.currentExp}/{skill.maxExp}</span>
                            </div>
                            <div className="skill-cooldown">
                                Hồi chiêu: {skill.cooldown}s
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-section">
                <h5>Kỹ năng bị động</h5>
                <div className="skills-list">
                    {passiveSkills.map((skill, index) => (
                        <div key={index} className="skill-item passive-skill">
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-level">Cấp {skill.level}</span>
                            </div>
                            <div className="skill-description">
                                {skill.description}
                            </div>
                            <div className="skill-progress">
                                <div className="progress">
                                    <div 
                                        className="progress-bar bg-success" 
                                        style={{ width: `${(skill.currentExp / skill.maxExp) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="skill-exp">{skill.currentExp}/{skill.maxExp}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharacterSkills; 