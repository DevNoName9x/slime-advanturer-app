export interface Action {
    id: string;
    name: string;
    group_id:string;
    description: string;
    shortDescription: string;
    requiredLevel: number;
    expReward: number;
    isEnabled: boolean;

}

export interface ActionGroup {
    id: string;
    name: string;
}

