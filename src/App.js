import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing, Error, Home, Blogs, Account } from "./pages";
import { BlogDetails, NewBlog } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/blogs/new">
          <NewBlog />
        </Route>
        <Route exact path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
