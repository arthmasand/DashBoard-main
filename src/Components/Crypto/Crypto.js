import React, { useState } from 'react';
import './Crypto.css'; // Adjust the path if your CSS file is named differently or located elsewhere

function MeetingWidget() {
  const [meetingCode, setMeetingCode] = useState(''); // Initialize meeting code state

  const joinMeet = () => {
    if (meetingCode) {
      window.open(`https://meet.google.com/${meetingCode}`, '_blank');
    } else {
      alert('Please enter a valid Meet code.');
    }
  };

  return (
    <div className="widget crypto-card">
      <h2 className="crypto-heading">Join a Meeting</h2>
      <div className="widget-content">
        <div className="meeting-option">
          <p><a href="https://meet.google.com/your-meet-link" target="_blank" className="button btn-coin">Open Scheduled Meet</a></p>
        </div>
        <span style={{ alignSelf: 'center' }}>OR</span>
        <div className="meeting-code">
          <input
            type="text"
            id="gmeet-code"
            placeholder="Enter Meet Code"
            value={meetingCode}
            onChange={(e) => setMeetingCode(e.target.value.trim())} // Update meeting code state on input change
          />
          <button className="button btn-fetch" onClick={joinMeet}>Join</button>
        </div>
      </div>
    </div>
  );
}

export default MeetingWidget;
