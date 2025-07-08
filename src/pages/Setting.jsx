import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/Authcontext';
import { auth, db, storage } from '../firebase';
import {
  updateProfile,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser,
} from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const Settings = () => {
  const { currentUser } = useAuth();

  const [profile, setProfile] = useState({
    username: '',
    email: '',
    notifications: true,
    theme: 'light',
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (currentUser) {
      setProfile((prev) => ({
        ...prev,
        username: currentUser.displayName || '',
        email: currentUser.email || '',
      }));

      // Load user preferences from Firestore
      const loadPreferences = async () => {
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProfile((prev) => ({
            ...prev,
            ...data,
          }));
        }
      };

      loadPreferences();
    }
  }, [currentUser]);

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

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file && currentUser) {
      const imageRef = ref(storage, `profileImages/${currentUser.uid}`);
      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);
      setProfileImage(url);
      await updateProfile(currentUser, { photoURL: url });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    alert("✅ Settings saved successfully!");

    try {
      // Update display name
      if (profile.username !== currentUser.displayName) {
        await updateProfile(currentUser, {
          displayName: profile.username,
        });
      }

      // Save preferences to Firestore
      await setDoc(doc(db, 'users', currentUser.uid), {
        notifications: profile.notifications,
        theme: profile.theme,
      });

      // Change password
      if (password.new && password.new === password.confirm) {
        const credential = EmailAuthProvider.credential(
          currentUser.email,
          password.current
        );
        await reauthenticateWithCredential(currentUser, credential);
        await updatePassword(currentUser, password.new);
        alert('Password updated!');
      }

      alert('Settings saved!');
    } catch (error) {
      alert('Error saving settings: ' + error.message);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your account?');
    if (confirmDelete) {
      try {
        await deleteUser(currentUser);
        alert('Account deleted');
      } catch (error) {
        alert('Error deleting account: ' + error.message);
      }
    }
  };

  return (
    <div>
      <h2 className="mb-4" style={{ color: 'white' }}>Settings</h2>

      <form onSubmit={handleSave}>
        <div className="mb-4" style={{ color: 'white' }}>
          <h5>Profile</h5>
          <div className="mb-3">
            <label className="form-label">Profile Image</label>
            <input type="file" className="form-control" onChange={handleImageChange} />
            {profileImage && (
              <img src={profileImage} alt="preview" className="mt-2" width="100" />
            )}
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
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={profile.email}
              disabled
            />
          </div>
        </div>

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

        <button type="submit" className="btn btn-success">Save Settings</button>
      </form>

      <div className="mt-5" style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRight: "1px solid rgba(255, 255, 255, 0.2)",
        margin: `5px`,
        padding: `10px`,
        borderRadius: `10px`
      }}>
        <h5 className="text-danger">Danger Zone</h5>
        <button className="btn btn-outline-danger" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
