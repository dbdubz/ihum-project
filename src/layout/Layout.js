import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Footer from './Footer';

function Layout({ children, myjson }) {
  return (
    <div className="flex flex-col">
      <Header data={myjson} />
      <div className="information">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;