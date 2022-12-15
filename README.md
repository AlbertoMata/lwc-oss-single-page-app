# LWC Single-Page App  

This project is an example of how to build a basic single-page app. In contrast
to multi-page apps, where you need to serve a new page whenever the client
fetches resources from a different URL on your domain, single-page apps provide
a way to serve resources dynamically while controlling the routing history of
the browser on the front-end application. The advantages of single-page
applications are that they can work seamlessly integrated with the browser
history and that we get better performance results while loading dynamic content. 

## Quickstart 

First, install all `dependencies` and `devdependencies` locally, we are using 
`--legacy-peer-deps` to avoid issues with the deprecated packages in this version:

```
npm install --legacy-peer-deps
```

Run a local server in port 5000:

```
npm run dev
```

## The Router Library 

There are multiple custom solutions for client-side routing with Lightning Web
Components, but we choose the application
[@lwce/router](https://github.com/LWC-Essentials/router) package.  This package
has received attention from the official Salesforce Developers group, and
although it hasn't been updated recently, we try to adhere to the community's
practices as much as possible. In the future, we might use a forked
package to update the dependency tree if the official package doesn't receive
new updates.

## The Example App

The application we are using here is a carbon copy of the one provided by the
[@lwce/router](https://github.com/LWC-Essentials/router) package. We just
bundled it using `rollup` to use the example as a reference for more complex
projects. The template we are using for the project setup comes from
[lwc-oss-minimal-rollup-setup](https://github.com/AlbertoMata/lwc-oss-minimal-rollup-setup).
