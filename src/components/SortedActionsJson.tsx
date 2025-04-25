import React, { useMemo, useState } from "react";
import { Actions } from "../data/ActionData";

const SortedActionsJson: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState<string>('');

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

  const copyToClipboard = () => {
    const jsonString = JSON.stringify(sortedActions, null, 2);
    navigator.clipboard.writeText(jsonString).then(
      () => {
        setCopySuccess('Đã sao chép!');
        setTimeout(() => setCopySuccess(''), 2000);
      },
      () => {
        setCopySuccess('Sao chép thất bại');
        setTimeout(() => setCopySuccess(''), 2000);
      }
    );
  };

  return (
    <div className="sorted-actions-json">
      <h2>Dữ Liệu Đã Sắp Xếp</h2>

      <div className="json-container">
        <div className="json-header">
          <h3>Dữ Liệu Đã Sắp Xếp (Theo group_id và requiredLevel)</h3>
          <button onClick={copyToClipboard} className="copy-button">
            {copySuccess || 'Sao chép JSON'}
          </button>
        </div>
        <pre className="json-display">
          {JSON.stringify(sortedActions, null, 2)}
        </pre>
      </div>

      <style>{`
        .sorted-actions-json {
          padding: 20px;
          margin: 0 auto;
          text-align: left;
        }
        
        .json-container {
          margin-bottom: 30px;
          background-color: #f5f5f5;
          border-radius: 5px;
          padding: 15px;
        }

        .json-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .json-display {
          background-color: #2d2d2d;
          color: #f8f8f2;
          padding: 15px;
          border-radius: 5px;
          overflow: auto;
          font-family: 'Courier New', Courier, monospace;
          font-size: 14px;
          line-height: 1.5;
          text-align: left;
        }
        
        h2 {
          color: #333;
          margin-bottom: 20px;
        }
        
        h3 {
          color: #555;
          margin: 0;
        }

        .copy-button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s;
        }

        .copy-button:hover {
          background-color: #45a049;
        }

        .copy-button:active {
          background-color: #3e8e41;
        }
      `}</style>
    </div>
  );
};

export default SortedActionsJson;
