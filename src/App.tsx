import "./App.css";
import React from "react";
import Header from "./Header";

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  return (
    <div className="app">
      <Header />
      <div className="page-content-container">
        <main
          style={{
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default App;
