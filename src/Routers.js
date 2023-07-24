import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const routes =[{
  path:'/',
  component: "HomePage",
  exact:true,
}]
export const Routes1 = () => (
  <Router>
    <Routes>
      {routes.map((route, index)=>(
        <Route
        key={index}
        path={route.path}
        exact={route.exact}>
        <route.commponent />
        </Route>
      ))}
    </Routes>
  </Router>
)
