import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="maintenance-container">
      <div className="maintenance-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
          alt="Maintenance"
          className="maintenance-image"
        />

        <h1 className="maintenance-title">We'll Be Back Soon 🚧</h1>

        <p className="maintenance-text">
          Our website is currently undergoing scheduled maintenance.
          <br />
          We’re working hard to improve your experience.
        </p>

        <p className="maintenance-subtext">
          Please check back later. Thank you for your patience 🙏
        </p>

        <div className="maintenance-footer">
          © {new Date().getFullYear()} Novatrix Designs Pvt Ltd
        </div>
      </div>
    </div>
  );
}

export default App;
