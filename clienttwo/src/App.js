import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import User from './User/User';

const router = createBrowserRouter([
  { path: '/user', element: (<User />) },
  { path: '/', element: (<Dashboard />) },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
