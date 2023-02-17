import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/homeicon.png`} alt="" />
      </Link>
      <header>
        <h2>Ivy Yu</h2>
        <p><a href="yuyiwei@berkeley.edu">yuyiwei@berkeley.edu</a></p>
      </header>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ivy Yu<Link to="/"> YiweiIvy.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
