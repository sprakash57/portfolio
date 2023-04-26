import React, { useId } from 'react';

const styles: Record<string, React.CSSProperties> = {
 layout: {
  width: '29rem',
  maxWidth: '100%',
 },
 divider: {
  border: 'none',
  borderRadius: '0.5rem',
  background: 'linear-gradient(66deg, rgba(232, 107, 77, 1) 40%, rgba(227, 162, 100, 1) 100%)',
  height: '4px',
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.5)',
  margin: '4rem 0',
 },
};

const Layout = ({ children }: { children: React.ReactElement[] }) => {
 return (
  <div style={styles.layout}>
   {children.map((child) => (
    <React.Fragment key={useId()}>
     {child}
     <hr style={styles.divider} />
    </React.Fragment>
   ))}
  </div>
 );
};

export default Layout;
