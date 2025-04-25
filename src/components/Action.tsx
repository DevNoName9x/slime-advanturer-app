import React, { useState } from 'react';
import { ActionGroup } from '../interfaces/Action';
import { Actions } from '../data/ActionData';
import { actionGroups } from '../data/ActionGroup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ActionItem from './ActionItem';

interface ActionProps {
    characterLevel: number;
    onActionComplete: (exp: number) => void;
}

const Action: React.FC<ActionProps> = ({ characterLevel, onActionComplete }) => {
    const [selectedGroup, setSelectedGroup] = useState<ActionGroup | null>(null);
    const [tooltip, setTooltip] = useState<{ show: boolean; content: string; x: number; y: number }>({
        show: false,
        content: '',
        x: 0,
        y: 0
    });

    const handleActionClick = (action: any) => {
        if (characterLevel >= action.requiredLevel) {
            onActionComplete(action.expReward);
            toast.success(`Thực hiện ${action.name} thành công!`);
        }
    };

    const handleMouseEnter = (e: React.MouseEvent, description: string) => {
        setTooltip({
            show: true,
            content: description,
            x: e.clientX,
            y: e.clientY
        });
    };

    const handleMouseLeave = () => {
        setTooltip({
            show: false,
            content: '',
            x: 0,
            y: 0
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        setTooltip(prev => ({
            ...prev,
            x: e.clientX,
            y: e.clientY
        }));
    };

    // Lọc các hành động theo nhóm đã chọn
    const filteredActions = selectedGroup 
        ? Actions.filter(action => action.group_id === selectedGroup.id).sort((a, b) => a.requiredLevel - b.requiredLevel)
        : [];

    return (
        <div className="action-container">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="action-groups">
                {actionGroups.sort((a, b) => a.name.localeCompare(b.name)).map((group: ActionGroup) => (
                    <div
                        key={group.id}
                        className={`action-group ${selectedGroup?.id === group.id ? 'active' : ''}`}
                        onClick={() => setSelectedGroup(group)}
                    > {group.name}
                    </div>
                ))}
            </div>

            <div className="actions-list">
                {selectedGroup ? (
                    <div className="actions">
                        <h4>{selectedGroup.name}</h4>
                        <div className="action-items">
                            {filteredActions.map(action => (
                                <ActionItem
                                    key={action.id}
                                    action={action}
                                    characterLevel={characterLevel}
                                    onActionClick={handleActionClick}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="select-group-message">
                        Chọn một nhóm hành động để bắt đầu
                    </div>
                )}
            </div>

            {tooltip.show && (
                <div
                    className="tooltip"
                    style={{
                        left: `${tooltip.x + 10}px`,
                        top: `${tooltip.y + 10}px`
                    }}
                >
                    {tooltip.content}
                </div>
            )}
        </div>
    );
};

export default Action;
