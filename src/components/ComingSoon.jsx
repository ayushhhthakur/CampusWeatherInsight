import React from 'react';

const ComingSoon = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Coming Soon</h1>
      <p style={styles.subtitle}>We're working hard to bring you something amazing!</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#666',
  },
};

export default ComingSoon;
