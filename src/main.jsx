import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App';
// import Women from './components/Women';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children: [{
//       path: "/MEN",
//       element : <Men/>
//     },
//   // {
//   //   path:"/WOMEN",
//   //   element:<Women/>
//   // }
// ]
  
//   },
// ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
)
