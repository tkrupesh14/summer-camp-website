import logo from "./logo.svg";
import { BsCalendar2Event } from "react-icons/bs";
import "./App.css";

function App() {
  return (
    <section className="timer-container">
      <section className="timer">
        <div className="timer-body">
          <div className="timer-headStyle">
            <BsCalendar2Event className="timer-icon" />
            <h2 className="timer-heading">CountDown Timer</h2>
          </div>
          <p>
            Countdown to a really special date. One you could or would never
            imagine
          </p>
        </div>

        <div className="time-container">
          <section className="time">
            <p className="time-number">5</p>
            <p>
              <small className="time-text">Days</small>
            </p>
          </section>
          <span className="time-colon">:</span>
          <section className="time">
            <p className="time-number">13</p>
            <p>
              <small className="time-text">Hours</small>
            </p>
          </section>
          <span className="time-colon">:</span>
          <section className="time">
            <p className="time-number">23</p>
            <p>
              <small className="time-text">Minutes</small>
            </p>
          </section>
          <span className="time-colon">:</span>
          <section className="time">
            <p className="time-number">56</p>
            <p>
              <small className="time-text">Seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default App;
