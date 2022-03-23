import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
const HatsPage = () => (
  <div>
    <h1>hatspage</h1>
  </div>
)
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop" element={<ShopPage />} />
        {/* <Route path=":hatsId" element={<HatsPage />} /> */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
