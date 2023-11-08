import React, { useState, useEffect } from 'react';
function LocalStorageUpdater() {
    const [selectedKey, setSelectedKey] = useState('');
    const [storedValue, setStoredValue] = useState('');
    const [newValue, setNewValue] = useState('');
    // Load the selected key's value from local storage on component mount
    useEffect(() => {
        const storedValue = localStorage.getItem(selectedKey);
        if (storedValue) {
            setStoredValue(storedValue);
        }
    }, [selectedKey]);
    // Function to update the selected key with a new value in local storage
    const updateLocalStorage = () => {
        if (selectedKey && newValue) {
            localStorage.setItem(selectedKey, newValue);
            setStoredValue(newValue);
        }
    };
    return (
        <div>
            <label htmlFor="keySelect">Select a Key:</label>
            <select id="keySelect" onChange={(e) => setSelectedKey(e.target.value)}>
                <option value="">Select a key</option>
                <option value="key1">Key 1</option>
                <option value="key2">Key 2</option>
                {/* Add more options for different keys */}
            </select>
            {storedValue && (
                <div>
                    <p>Stored Value: {storedValue}</p>
                    <label htmlFor="newValue">Enter new value:</label>
                    <input
                        type="text"
                        id="newValue"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                    />
                    <button onClick={updateLocalStorage}>Update Local Storage</button>
                </div>
            )}
        </div>
    );
}
export default LocalStorageUpdater;