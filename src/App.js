//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from "react";


// const App = () => {
//   const [items, setItems] = React.useState([]);
//   const [isDataLoaded, setIsDataLoaded] = React.useState(false);

//   React.useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((json) => {
//         setItems(json);
//         setIsDataLoaded(true);
//       });
//   }, []);

//   if (!isDataLoaded) {
//     return (
//       <div>
//         <h1> Please chill, data is still loading </h1>
//       </div>
//     );
//   }

//   return (
//     <div className="App">
//       <h1> Fetch data from an API in react </h1>
//       {items.map((item) => (
//         <ul key={item.id}>
//           <li>
//             User_Name: {item.username}
//             <br /> Full_Name: {item.name}
//             <br /> User_Email: {item.email}
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// };
//later?


const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);


// try {
// 	//const response = await fetch(url, options);
// 	//const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const StockData = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://tradestie.com/api/v1/apps/reddit');
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Loading, please wait...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((data) => (
          <li key={data.sentiment_score}>
            sentiment score: {data.sentiment_score}
            sentiment: {data.sentiment}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stock">StockData</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/stock" element={<StockData/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

//lllll
// import './App.css';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import React from "react";
// const Home = () => (
//   <div>
//     <h1>Home</h1>
//   </div>
// );

// const [users, setUsers] = React.useState([]);
//   const [isLoading, setIsLoading] = React.useState(true);

//   React.useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setUsers(data);
//       setIsLoading(false);
//     };

//     fetchUsers();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="App">
//         <h1>Loading, please wait...</h1>
//       </div>
//     );
//   }

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/users" component={Users} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };
// export default App;


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
//other

// const App = () => {
//   const [items, setItems] = React.useState([]);
//   const [isDataLoaded, setIsDataLoaded] = React.useState(false);

//   React.useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((json) => {
//         setItems(json);
//         setIsDataLoaded(true);
//       });
//   }, []);

//   if (!isDataLoaded) {
//     return (
//       <div>
//         <h1> Please chill, data is still loading </h1>
//       </div>
//     );
//   }

//   return (
//     <div className="App">
//       <h1> Fetch data from an API in react </h1>
//       {items.map((item) => (
//         <ul key={item.id}>
//           <li>
//             User_Name: {item.username}
//             <br /> Full_Name: {item.name}
//             <br /> User_Email: {item.email}
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// };
  // return (
  //   <div className="App">
  //     <h1>User List</h1>
  //     <ul>
  //       {users.map(user => (
  //         <li key={user.id}>
  //           Username: {user.username}<br />
  //           Full Name: {user.name}<br />
  //           Email: {user.email}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
