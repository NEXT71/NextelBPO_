import React, { useState, useEffect } from 'react';

// Jornaya LeadiD Verification Component
const JornayaVerifier = () => {
  const [leadId, setLeadId] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    // Monitor for lead ID generation
    const checkLeadId = () => {
      const leadidInput = document.getElementById('leadid_token');
      if (leadidInput && leadidInput.value) {
        const currentLeadId = leadidInput.value;
        setLeadId(currentLeadId);

        // Validate lead ID format (Jornaya IDs are typically 32-character hex strings)
        const isValidFormat = /^[A-F0-9]{32}$/i.test(currentLeadId);
        setIsValid(isValidFormat);

        // Collect debug information
        setDebugInfo({
          leadId: currentLeadId,
          length: currentLeadId.length,
          format: isValidFormat ? 'Valid' : 'Invalid',
          timestamp: new Date().toISOString(),
          scriptLoaded: !!document.getElementById('LeadiDscript_campaign'),
          noscriptPresent: !!document.querySelector('noscript img[src*="leadid.com"]')
        });
      }
    };

    // Check every second for 30 seconds
    const interval = setInterval(checkLeadId, 1000);
    const timeout = setTimeout(() => clearInterval(interval), 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.9)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <h4>Jornaya Debug Info</h4>
      <div>Lead ID: {leadId || 'Not generated'}</div>
      <div>Status: <span style={{color: isValid ? 'green' : 'red'}}>{isValid === null ? 'Checking...' : (isValid ? 'Valid' : 'Invalid')}</span></div>
      <div>Script Loaded: {debugInfo.scriptLoaded ? 'Yes' : 'No'}</div>
      <div>Noscript: {debugInfo.noscriptPresent ? 'Yes' : 'No'}</div>
      <div>Length: {debugInfo.length}</div>
    </div>
  );
};

export default JornayaVerifier;