import React from 'react';
import Calendar from "./components/Calendar";
import './App.css';

class App extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
};

renderHeader() {}

  renderDays() {}

  renderCells() {}

  onDateClick = day => {};

  nextMonth = () => {};

  prevMonth = () => {};

  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              Wunjo<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}



export default App;