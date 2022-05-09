import { BrowserRouter as Router, Route, Switch } from "react-router-dom" 
import Navbar from "../components/Navbar"
import AboutPage from "../pages/AboutPage"
import NoutFound from "../pages/NoutFound"
import PageHome from "../pages/PageHome"
import ProfilePage from "../components/ProfilePage"
import CatergoryPage from "../pages/CatergoryPage"
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

        <Route exact path="/categories" component={CatergoryPage}/>        <Route path="*">
            <NoutFound/>
        </Route>
    </Switch> 
    </Router>
  )
}
