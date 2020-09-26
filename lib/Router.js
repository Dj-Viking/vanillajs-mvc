class Router {
  constructor(app) {
    this.app = app;
    this.routes = [];
    //need to prebind this function in the context of the window and not the class
    //because listening for the event 'DOMContentLoaded' executes in the context of window
    this.hashChange = this.hashChange.bind(this);
    window.addEventListener('hashchange', this.hashChange);
    window.addEventListener('DOMContentLoaded', this.hashChange);
  }
  addRoute(name, path) {
    this.routes.push(
      {
        name, 
        path
      }
    );
  }
  hashChange() {
    // console.log(window.location.hash);
    const { hash } = window.location;
    const route = this.routes.find(route => {
      return hash.match(new RegExp(route.path));
    });
    console.log(route);

    if (route) {
      const params = new RegExp(route.path).exec(hash);
      // console.log(params);
      this.params = params;
      this.app.showComponent(route.name);
    }
  }
}

export default Router;