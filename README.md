## This is a starter app using create-react-app and includes the following:

### Bootstrap 4
### Font Awesome 5
### Unit Tests - `npm test`


### React Router Dom
Routing can be hash based (hashHistory based) or slash based (browserHistory based).
Which one to use depends on various factors and has a lot to do with the backend server rendering the web application. Routing and handling server side rendering can be done in below ways:
- Hash History - Ugly URLs but routing works fine. Not recommended for production use by React-Router. Also not good for SEO.
- Browser History with catch all at server - Good URLs, but the server rendering the web application needs to handle the refresh from browser by catching all requests from browser and returning back the index.html. Still not good enough for SEO as catch-all returns the same result always.
- Broser History with selective URL rendering. The routes at server end make selective rendering of same content.
- Isomorphic application rendering - React at server side which pre-compiles HTML and sends back to browser. Good SEO but may have bad UX as user may have to wait for sometime before getting back the page.
Some URLs which provide more depth into this issue:
- https://stackoverflow.com/questions/35181989/how-to-remove-the-hash-from-the-url-in-react-router
- https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
- https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38
- https://hackernoon.com/you-might-not-need-server-side-rendering-f2681e02e4e
- https://dev.to/sunnysingh/the-benefits-and-origins-of-server-side-rendering-4doh

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


1. Use of react-redux
2. How routing is achieved in this app? Using React Router: https://medium.com/octopus-wealth/authenticated-routing-with-react-react-router-redux-typescript-677ed49d4bd6
