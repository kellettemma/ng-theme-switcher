# ComponentDetails

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##Notes

 

###Naming conventions

 

BEM with namespacing is used in this project. CSS classes follow a structure of 

 

.prefix-namespace-block__element—modifier.

 

The prefix removes conflicts with other libraries.The namespace helps identify what the class is doing e.g. c for component, u for utility. This helps the consumer identify what the class is doing and they can be easier to find classes as some IDEs will prompt the developer to matching classes. Class names can be verbose but gives clarity to user on how classes should be used. 

 

 

###CSS Architecture

ITCSS architecture (inverted triangle CSS) from Harry Clarke organises CSS into layers based on global reach through out the application. Layers are based on their level of specificity and importance, from generic styles to explicit ones, from low-specificity selectors to more specific ones, far-reaching to localized.  This means CSS is easier to scale and write as we're writing it in an order that only ever adds to what was written previously.  We don't waste time undoing or overriding styles that were written before.  Both modifying and adding styles is now much simpler, as everything has a consistent, predictable place to live, which is useful when you have a number of developers contributing to the same codebase.

 

###SVGs

I have used SVGs for some of the icons in order to change the colour with tokens. An icon font would be more ideal here for cleaner HTML code. 
