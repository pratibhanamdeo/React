// import React from 'react';
// import Header from "./Component/Portal"; // Assuming the Header component is in a file named Header.js
// import './App.css';

// function App() {
//   return (
//     <div>
//       <Header title="Attendance  Management" />
//       {/* Other components */}
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import Attendance from './Component/Attendance';
// // import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

// const App = () => {
//   return (
//     <div>
//       <Attendance />
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Attendance from './Component/Attendance';
// import StaffPage from './Component/StaffPage'; // Update the path as per your project structure

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Attendance} />
//           <Route path="/staff" component={StaffPage} />
//           {/* Add more routes as needed */}
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import Attendance from './Component/Student';
// import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Attendance />
    </div>
  );
};

export default App;

// for Staff

// import React from 'react';
// import Attendance from './Component/Staff';
// // import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

// const App = () => {
//   return (
//     <div>
//       <Attendance />
//     </div>
//   );
// };

// export default App;


// // For Admin

// import React from 'react';
// import Attendance from './Component/Admin';
// // import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

// const App = () => {
//   return (
//     <div>
//       <Attendance />
//     </div>
//   );
// };

// export default App;

// For Fill Attendance 

// import React from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Attendance from './Component/FillAttendance';
// // import PreviousPage from './Component/Staff';
// const App = () => {
//   return (
//     <div>
//       <Attendance />
//     </div>
//   );
// };

// export default App;
