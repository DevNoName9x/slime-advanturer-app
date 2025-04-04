import React from 'react';
import { CharacterStats as CharacterStatsType } from '../types/CharacterStats';
import './CharacterStats.css';

interface CharacterStatsProps {
    stats: CharacterStatsType;
}

const CharacterStats: React.FC<CharacterStatsProps> = ({ stats }) => {
    return (
        <div className="stats-container">
            <div className="main-stats">
                <h5>Chỉ số chính</h5>
                <div className="stat-row">
                    <div className="stat-item">
                        <span>Sức mạnh</span>
                        <span className="stat-value">{stats.main_stat.strength}</span>
                    </div>
                    <div className="stat-item">
                        <span>Thông minh</span>
                        <span className="stat-value">{stats.main_stat.intelligence}</span>
                    </div>
                </div>
                <div className="stat-row">
                    <div className="stat-item">
                        <span>Nhanh nhẹn</span>
                        <span className="stat-value">{stats.main_stat.agility}</span>
                    </div>
                    <div className="stat-item">
                        <span>Sức chịu đựng</span>
                        <span className="stat-value">{stats.main_stat.endurance}</span>
                    </div>
                </div>
            </div>

            <div className="dependent-stats">
                <h5>Chỉ số phụ</h5>
                <div className="stat-grid">
                    <div className="stat-item">
                        <span>Tấn công vật lý</span>
                        <span className="stat-value">{stats.dependent_stat.physical_attack}</span>
                    </div>
                    <div className="stat-item">
                        <span>Tấn công phép</span>
                        <span className="stat-value">{stats.dependent_stat.magic_attack}</span>
                    </div>
                    <div className="stat-item">
                        <span>Phòng thủ vật lý</span>
                        <span className="stat-value">{stats.dependent_stat.physical_defense}</span>
                    </div>
                    <div className="stat-item">
                        <span>Phòng thủ phép</span>
                        <span className="stat-value">{stats.dependent_stat.magic_defense}</span>
                    </div>
                    <div className="stat-item">
                        <span>Tốc độ tấn công</span>
                        <span className="stat-value">{stats.dependent_stat.attack_speed}</span>
                    </div>
                    <div className="stat-item">
                        <span>Tốc độ di chuyển</span>
                        <span className="stat-value">{stats["sub-stat"].movement_speed}</span>
                    </div>
                    <div className="stat-item">
                        <span>Tỷ lệ chí mạng</span>
                        <span className="stat-value">{stats["sub-stat"].critical_rate}%</span>
                    </div>
                    <div className="stat-item">
                        <span>Sát thương chí mạng</span>
                        <span className="stat-value">{stats["sub-stat"].critical_damage}%</span>
                    </div>
                    <div className="stat-item">
                        <span>Giảm thời gian hồi chiêu</span>
                        <span className="stat-value">{stats["sub-stat"].cooldown}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterStats; 