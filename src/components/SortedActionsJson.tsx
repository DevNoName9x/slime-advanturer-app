import React, { useMemo } from "react";
import { Actions } from "../data/ActionData";
import { Action } from "../interfaces/Action";

const SortedActionsJson: React.FC = () => {
  // Sử dụng useMemo để sắp xếp dữ liệu chỉ khi Actions thay đổi
  const sortedActions = useMemo(() => {
    return [...Actions].sort((a, b) => {
      // Sắp xếp theo group_id trước
      if (a.group_id < b.group_id) return -1;
      if (a.group_id > b.group_id) return 1;

      // Nếu group_id giống nhau, sắp xếp theo requiredLevel
      return a.requiredLevel - b.requiredLevel;
    });
  }, []);

  // Tạo một đối tượng để nhóm các hành động theo group_id
  const groupedActions = useMemo(() => {
    const grouped: Record<string, Action[]> = {};

    sortedActions.forEach((action) => {
      if (!grouped[action.group_id]) {
        grouped[action.group_id] = [];
      }
      grouped[action.group_id].push(action);
    });

    return grouped;
  }, [sortedActions]);

  return (
    <div className="sorted-actions-json">
      <h2>Dữ Liệu Đã Sắp Xếp</h2>

      <div className="json-container">
        <h3>Dữ Liệu Theo Nhóm</h3>
        <pre className="json-display">
          {JSON.stringify(groupedActions, null, 2)}
        </pre>
      </div>

      <div className="json-container">
        <h3>Dữ Liệu Đã Sắp Xếp (Theo group_id và requiredLevel)</h3>
        <pre className="json-display">
          {JSON.stringify(sortedActions, null, 2)}
        </pre>
      </div>

      <style>{`
                .sorted-actions-json {
                    padding: 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .json-container {
                    margin-bottom: 30px;
                    background-color: #f5f5f5;
                    border-radius: 5px;
                    padding: 15px;
                }
                
                .json-display {
                    background-color: #2d2d2d;
                    color: #f8f8f2;
                    padding: 15px;
                    border-radius: 5px;
                    overflow: auto;
                    max-height: 500px;
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 14px;
                    line-height: 1.5;
                }
                
                h2 {
                    color: #333;
                    margin-bottom: 20px;
                }
                
                h3 {
                    color: #555;
                    margin-bottom: 10px;
                }
            `}</style>
    </div>
  );
};

export default SortedActionsJson;
