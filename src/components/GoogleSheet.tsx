import React, { useState, useEffect } from 'react';
import '../styles/GoogleSheet.css';

interface SheetData {
  id: string;
  name: string;
  level: number;
  exp: number;
  timestamp: string;
}

const GoogleSheet: React.FC = () => {
  const [data, setData] = useState<SheetData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [newData, setNewData] = useState<Omit<SheetData, 'id' | 'timestamp'>>({
    name: '',
    level: 0,
    exp: 0
  });

  // Thay thế bằng thông tin xác thực của bạn
  const SPREADSHEET_ID = '18Q6UdAI_GoyW9i6weTGSYfL8ZH5ADN3m9WOk3ohKz04';
  const RANGE = 'Data!A:E';
  const API_KEY = 'AIzaSyAVV7tnvtSvTEwVdp9xM4LuOz95gJ2FMn8';

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Không thể tải dữ liệu');
      }

      const result = await response.json();
      const rows = result.values;

      if (rows) {
        const formattedData = rows.slice(1).map((row: any[], index: number) => ({
          id: index.toString(),
          name: row[0],
          level: parseInt(row[1]),
          exp: parseInt(row[2]),
          timestamp: row[3]
        }));
        setData(formattedData);
      }
    } catch (err) {
      setError('Không thể tải dữ liệu từ Google Sheets');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addData = async () => {
    try {
      setLoading(true);
      const timestamp = new Date().toISOString();
      const values = [[
        newData.name,
        newData.level,
        newData.exp,
        timestamp
      ]];

      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=RAW&key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values,
            majorDimension: 'ROWS'
          })
        }
      );

      if (!response.ok) {
        throw new Error('Không thể thêm dữ liệu');
      }

      // Hiển thị thông báo thành công
      setError('Thêm dữ liệu thành công!');
      setTimeout(() => setError(''), 3000);

      // Reset form
      setNewData({ name: '', level: 0, exp: 0 });
      
      // Cập nhật lại dữ liệu
      fetchData();
    } catch (err) {
      setError('Không thể thêm dữ liệu vào Google Sheets');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewData(prev => ({
      ...prev,
      [name]: name === 'level' || name === 'exp' ? parseInt(value) || 0 : value
    }));
  };

  return (
    <div className="google-sheet-container">
      <h2>Quản lý dữ liệu Google Sheets</h2>

      <div className="add-data-form">
        <h3>Thêm dữ liệu mới</h3>
        <div className="form-group">
          <label>Tên:</label>
          <input
            type="text"
            name="name"
            value={newData.name}
            onChange={handleInputChange}
            placeholder="Nhập tên"
            required
          />
        </div>
        <div className="form-group">
          <label>Level:</label>
          <input
            type="number"
            name="level"
            value={newData.level}
            onChange={handleInputChange}
            placeholder="Nhập level"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label>EXP:</label>
          <input
            type="number"
            name="exp"
            value={newData.exp}
            onChange={handleInputChange}
            placeholder="Nhập EXP"
            min="0"
            required
          />
        </div>
        <button 
          onClick={addData} 
          disabled={loading || !newData.name}
          className="add-button"
        >
          {loading ? 'Đang thêm...' : 'Thêm dữ liệu'}
        </button>
      </div>

      {error && (
        <div className={`message ${error.includes('thành công') ? 'success-message' : 'error-message'}`}>
          {error}
        </div>
      )}

      <div className="data-table">
        <h3>Dữ liệu hiện tại</h3>
        <table>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Level</th>
              <th>EXP</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.level}</td>
                <td>{item.exp}</td>
                <td>{new Date(item.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoogleSheet; 