import { BrowserRouter as Router, Route, Switch } from "react-router-dom" 
import Navbar from "../components/Navbar"
import AboutPage from "../pages/AboutPage"
import NoutFound from "../pages/NoutFound"
import PageHome from "../pages/PageHome"
import ProfilePage from "../components/ProfilePage"
import CatergoryPage from "../pages/CatergoryPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import DashboardPage from '../pages/DashboardPage'
import PaymentsPage from "../pages/PaymentsPage"
import PrivateRoute from "./PrivateRoute"
import { Redirect } from "react-router-dom"
import PublicRoute from "./PublicRoute"
export default function AppRouter() {
  return (
    <Router>
    <Navbar/>
    <Switch>
        <Route path="/about">
            <AboutPage/>
        </Route>
        <Route path="/contact">
            <h1>contact</h1>
        </Route> 
        <Route exact path="/">
            <PageHome/>
        </Route>
        <Route exact path="/profile/:username" component={ProfilePage}/>
        <Route exact path="/categories" component={CatergoryPage}/>    
        <Route exact path="/signin">
                <Redirect to='login'/> 
        </Route>   
         <PublicRoute exact path="/login" component={LoginPage}/>
        <PublicRoute exact path="/registre" component={RegisterPage}/>
        
        <PrivateRoute exact path='/dashboard' component={DashboardPage}/>
        <PrivateRoute exact path='/payments' component={PaymentsPage}/>
        <Route path="*" component={NoutFound}/>

        
    </Switch> 
    </Router>
  )
}
