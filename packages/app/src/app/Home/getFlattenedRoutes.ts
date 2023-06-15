const routeHasChildren = route => route.children && route.children.length;

export const getFlattenedRoutes = routes =>
  routes.reduce((acc, route) => {
    if (routeHasChildren(route)) {
      return [...acc, ...getFlattenedRoutes(route.children)];
    }

    if (route.component) {
      return [...acc, route];
    }

    return acc;
  }, []);
