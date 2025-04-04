export interface Action {
    id: string;
    name: string;
    description: string;
    shortDescription: string;
    requiredLevel: number;
    expReward: number;
    isEnabled: boolean;
}

export interface ActionGroup {
    id: string;
    name: string;
    actions: Action[];
}

export const actionGroups: ActionGroup[] = [
    {
        id: "gathering",
        name: "Thu thập nguyên liệu",
        actions: [
            {
                id: "gather_wood",
                name: "Đốn gỗ",
                description: "Thu thập gỗ từ cây. Mỗi lần đốn gỗ nhận được 1-3 khúc gỗ.",
                shortDescription: "Đốn gỗ để thu thập nguyên liệu",
                requiredLevel: 1,
                expReward: 10,
                isEnabled: true
            },
            {
                id: "mine_ore",
                name: "Đào quặng",
                description: "Khai thác quặng từ mỏ. Mỗi lần đào nhận được 1-2 quặng.",
                shortDescription: "Đào quặng để thu thập nguyên liệu",
                requiredLevel: 3,
                expReward: 15,
                isEnabled: false
            },{
                id: "heal_grass",
                name: "tìm kiếm cỏ hồi phục",
                description: "Đi tìm cỏ hồi phục để chế tạo thuốc",
                shortDescription: "Đi tìm cỏ hồi phục để chế tạo thuốc",
                requiredLevel: 3,
                expReward: 15,
                isEnabled: false
            }
        ]
    },
    {
        id: "herbalism",
        name: "Thu thập thảo dược",
        actions: [
            {
                id: "gather_herbs",
                name: "Nhặt thảo dược",
                description: "Thu thập thảo dược từ cây cỏ. Mỗi lần nhặt nhận được 1-2 thảo dược.",
                shortDescription: "Nhặt thảo dược để thu thập nguyên liệu",
                requiredLevel: 2,
                expReward: 12,
                isEnabled: false
            },{
                id: "heal_grass",
                name: "tìm kiếm cỏ hồi phục",
                description: "Đi tìm cỏ hồi phục để chế tạo thuốc",
                shortDescription: "Đi tìm cỏ hồi phục để chế tạo thuốc",
                requiredLevel: 3,
                expReward: 15,
                isEnabled: false
            }
        ]
    },
    {
        id: "hunting",
        name: "Đi săn",
        actions: [
            {
                id: "hunt_rabbit",
                name: "Săn thỏ",
                description: "Săn thỏ để lấy thịt và da. Mỗi lần săn nhận được 1-2 thịt thỏ.",
                shortDescription: "Săn thỏ để lấy thịt và da",
                requiredLevel: 5,
                expReward: 20,
                isEnabled: false
            }
        ]
    },
    {
        id: "quests",
        name: "Làm nhiệm vụ",
        actions: [
            {
                id: "daily_quest",
                name: "Nhiệm vụ hằng ngày",
                description: "Hoàn thành nhiệm vụ hằng ngày để nhận phần thưởng.",
                shortDescription: "Hoàn thành nhiệm vụ hằng ngày",
                requiredLevel: 1,
                expReward: 30,
                isEnabled: true
            }
        ]
    },
    {
        id: "crafting",
        name: "Chế tạo",
        actions: [
            {
                id: "craft_weapon",
                name: "Chế tạo vũ khí",
                description: "Chế tạo vũ khí từ nguyên liệu thu thập được.",
                shortDescription: "Chế tạo vũ khí",
                requiredLevel: 4,
                expReward: 25,
                isEnabled: false
            }
        ]
    }
]; 