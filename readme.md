# Kenga skeleton application
This application is an initial Kenga project bootstrap.

## Build
This project is assembled with Rollup. To use npm scripts you should install rollup first.
Please take a look at https://rollupjs.org/guide/en/#installation for the details.
To build the project run `npm run build` on the command line.

## Tests
To run tests run `npm run test` on the command line.
At the moment of writing the configuration for testing was under construction. So don't judge seriously please.

## Kenga, Winnie and friends
Kenga here is the UI widgets library.
Winnie here is a WYSIWYG UI editor library and plugin for Atom, which is based on this library. It generates the code of a view and therefore doesn't introduce a dependency on itself in the application. The generated code uses widgets from Kenga library.
Friends here are Rollup.js, Es6 and TypeScript.
Es6 is here because it is the version of JavaScript which is used by Winnie for generation of views' code.
TypeScript is here because it is just nice to have type-safety while writing complex application logic. Feel free to use your language of choice instead of it.

Both Es6 and TypeScript are transpiled to JavaScript ES5 to reach the browser.

## Kenga notes
Kenga is a UI library with a key difference of other popular libraries in the field. It doesn't use templates at all. Angular for example uses some kind of templates engine to render the views and bind them to domain data. When I look at this process I recall that ancient and ugly times when browsers were able to do almost nothing but rendering basic HTML stuff. At that times server pages were popular. It was totally wrong approach just because server did UI stuff instead of its own work. Nowadays browsers can do almost everything, but the approach remain the same with the only exception, that the templates are processed on the client. It could be fine for the limited number of cases, but in general the approach is wrong. Kenga addresses this problem and it does not use templates at all. It just creates DOM based widgets and adds some logic to them. There are versions of those widgets, which are capable to bind to data. The most powerful widget among them is DataGrid.
So Kenga view is just a peace of code, which creates a set of widgets and assembles them into a view. Of course only proper technologies as CSS3, HTML5 and JavaScript/Es6 are used.

## Rollup notes
It is not absolutely necessary to use Rollup.js to bundle this project.
Feel free to use WebPack or something similar. Rollup is use here because it has very compact configuration and the configuration is just one another Es6 program.
It is like Gradle in Java/Kotlin world :)
