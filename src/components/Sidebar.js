import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const menuItems = [
    { id: 'home', icon: 'home', label: 'ホーム' },
    { id: 'explore', icon: 'explore', label: '探索' },
    { id: 'favorite', icon: 'favorite', label: 'お気に入り' },
    { id: 'collections', icon: 'photo_library', label: 'コレクション' },
    { id: 'upload', icon: 'cloud_upload', label: 'アップロード' },
    { id: 'settings', icon: 'settings', label: '設定' }
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // ここに検索ロジックを追加
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="material-icons">photo_camera</span>
        <h1>Gallery App</h1>
      </div>
      
      <div className="search-container">
        <div className="search-box">
          <span className="material-icons search-icon">search</span>
          <input
            type="text"
            placeholder="検索..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchQuery && (
            <button 
              className="clear-search"
              onClick={() => setSearchQuery('')}
            >
              <span className="material-icons">close</span>
            </button>
          )}
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => setActiveItem(item.id)}
          >
            <span className="material-icons">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="logout-button" onClick={handleLogout}>
          <span className="material-icons">logout</span>
          <span>ログアウト</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 