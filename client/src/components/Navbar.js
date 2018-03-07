import React from 'react';

export default props => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: 10,
      height: 70,
      backgroundColor: 'purple',
      color: 'white'
    },
    navItem: {
      margin: 10
    }
  }
  
  return (
    <div style={styles.container}>
      <div style={styles.navItem} onClick={() => props.onNavClick('products')}>
        products
      </div>
      <div style={styles.navItem} onClick={() => props.onNavClick('cart')}>
        cart
      </div>
    </div>
  )
}