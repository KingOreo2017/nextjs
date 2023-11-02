import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0
    }}>
      <h1 style={{ textAlign: 'center' }}>Hello World</h1>
    </div>
  );
}

export default MyComponent;
