import React from 'react';

const Background = ({ imageUrl }) => {
    const styles = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        zIndex: '-1'
    };

    return (
        <div style={styles}></div>
    );
};

export default Background;
