import React from 'react';
import SortedActionsJson from '../components/SortedActionsJson';

const SortedActionsPage: React.FC = () => {
    return (
        <div className="sorted-actions-page">
            <h1>Trang Hiển Thị Dữ Liệu Đã Sắp Xếp</h1>
            <p>Dưới đây là dữ liệu đã được sắp xếp theo nhóm và cấp độ yêu cầu.</p>
            
            <SortedActionsJson />
            
            <style >{`
                .sorted-actions-page {
                    padding: 20px;
                }
                
                h1 {
                    color: #333;
                    margin-bottom: 10px;
                }
                
                p {
                    color: #666;
                    margin-bottom: 20px;
                }
            `}</style>
        </div>
    );
};

export default SortedActionsPage; 