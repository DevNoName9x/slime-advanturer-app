import React from 'react';
import { Action as ActionType } from '../interfaces/Action';

interface ActionItemProps {
    action: ActionType;
    characterLevel: number;
    onActionClick: (action: ActionType) => void;
    onMouseEnter: (e: React.MouseEvent, description: string) => void;
    onMouseLeave: () => void;
    onMouseMove: (e: React.MouseEvent) => void;
}

const ActionItem: React.FC<ActionItemProps> = ({
    action,
    characterLevel,
    onActionClick,
    onMouseEnter,
    onMouseLeave,
    onMouseMove
}) => {
    const isEnabled = characterLevel >= action.requiredLevel;

    return (
        <div
            className={`action-item ${isEnabled ? '' : 'disabled'}`}
            onClick={() => onActionClick(action)}
            onMouseEnter={(e) => onMouseEnter(e, action.description)}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
        >
            <div className="action-header">
                <span className="action-name">{action.name}</span>
                <span className="action-exp">+{action.expReward} EXP</span>
            </div>
            <div className="action-description">{action.shortDescription}</div>
            {!isEnabled && (
                <div className="action-requirement">
                    Yêu cầu Level {action.requiredLevel}
                </div>
            )}
        </div>
    );
};

export default ActionItem; 