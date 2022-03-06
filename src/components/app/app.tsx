import React, {useEffect} from 'react';
import AOS from 'aos';
import '../../assets/libs/bootstrap-reboot.min.css'
import '../../assets/libs/bootstrap-grid.min.css'
import 'aos/src/sass/aos.scss';
import './app.scss';

import Routing from "../routing/routing";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Routing/>
  );
}

export default App;