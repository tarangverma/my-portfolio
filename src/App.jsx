import React from "react";
import Header from "./components/Header/header";
import Content from "./components/content/content";
import './App.css'
import About from "./components/About/About";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
export default function App() {
  return (
    <div>
      <Header />
      <Content />
      <About />
      <Timeline />
      <Contact />
    </div>
  );
}