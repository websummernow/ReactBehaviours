import { useEffect, useState } from 'react';
import './App.css';

export default function Scrollup() {
  const [scrollUp, setScrollUp] = useState(false);

  return (<div className="container">
      <button type="button" onClick={() => setScrollUp(true)}>Scrollup</button>
      <Modal scrollUp={scrollUp} onDismiss={() => setScrollUp(false)} >
          <Menu />
      </Modal>
  </div>)
}

function Modal({ scrollUp, onDismiss, children }) {
  return scrollUp && (<div className="bgWrapper">
      <div className="bgOpacity" onClick={onDismiss} />
      {children}
  </div>)
}

function Menu() {
  useEffect(() => {
      var menu = document.getElementById("menu");
      menu.style.bottom = "0px";
  }, [])
  return (
      <div className="menu" id="menu">the menu</div>
  )
}

