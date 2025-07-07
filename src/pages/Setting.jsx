import React, { useState } from 'react';

const Settings = () => {
  const [profile, setProfile] = useState({
    username: 'shravit123',
    email: 'shravit@example.com',
    notifications: true,
    theme: 'light',
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleProfileChange = (e) => {
    const { name, type, checked, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved!');
    // Send updated profile to backend
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
      alert("Account deleted");
      // Send delete request
    }
  };

  return (
    <div>
      <h2 className="mb-4" style={{ color: 'white' }}>Settings</h2>

      {/* Profile Section */}
      <form onSubmit={handleSave}>
        <div className="mb-4" style={{ color: 'white' }}>
          <h5>Profile</h5>
          <div className="mb-3">
            <label className="form-label">Profile Image</label>
            <input type="file" className="form-control" onChange={handleImageChange} />
            {profileImage && <img src={profileImage} alt="preview" className="mt-2" width="100" />}
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
            />
          </div>
        </div>

        {/* Password Section */}
        <div className="mb-4" style={{ color: 'white' }}>
          <h5>Change Password</h5>
          <div className="mb-3">
            <label className="form-label">Current Password</label>
            <input
              type="password"
              className="form-control"
              name="current"
              value={password.current}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              name="new"
              value={password.new}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              name="confirm"
              value={password.confirm}
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        {/* Preferences */}
        <div className="mb-4" style={{ color: 'white' }}>
          <h5>Preferences</h5>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="notifications"
              checked={profile.notifications}
              onChange={handleProfileChange}
            />
            <label className="form-check-label">Enable Notifications</label>
          </div>

          <div className="mb-3">
            <label className="form-label">Theme</label>
            <select
              className="form-select"
              name="theme"
              value={profile.theme}
              onChange={handleProfileChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>

        {/* Save Button */}
        <button type="submit" className="btn btn-success">
          Save Settings
        </button>
      </form>

      {/* Danger Zone */}
      <div className="mt-5" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderRight: "1px solid rgba(255, 255, 255, 0.2)", margin:`5px`,padding:`10px`, borderRadius:`10px`}}>
        <h5 className="text-danger">Danger Zone</h5>
        <button className="btn btn-outline-danger" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
