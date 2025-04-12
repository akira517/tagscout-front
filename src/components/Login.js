import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // フォーム送信時にギャラリーページに遷移
    window.location.href = '/gallery';
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <span className="material-icons">photo_camera</span>
          <h1>Photo Gallery</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <span className="material-icons">email</span>
            <input
              type="email"
              placeholder="メールアドレス"
            />
          </div>

          <div className="form-group">
            <span className="material-icons">lock</span>
            <input
              type="password"
              placeholder="パスワード"
            />
          </div>

          <button type="submit" className="login-button">
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 