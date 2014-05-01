Important stuff

1. Everything in a module is organized by functionality, not function. This means that views and templates that serve the same purpose (for example: Navigation) are placed inside the same folder. They are not split into separate foldes for views and templates. This is done so that working on a piece of functionality, as developers often do, is restrained to a single area of the app, rather than jumping around to find dependencies.

2. RequireJS is used instead of Marionette's module system for Module Definition. Require is far superior in every way save for module starting/stopping.

3. Controllers do dual-duty as "modules" and "controllers". Every modular bit of code made here should have a controller at its front. This pulls all event driven logic out of views and models and places it into the C part of MVC (yay for actually being an MVC framework now).

4. Where possible, I put configuration into JSON. For content, this pulls out a huge huge huge chunk of non-logical stuff from your programs and allows you to keep content (whose contents the app should not care about) and the logic (the actual engine of the app) separate. For configuration, this allows dynamic module loading, environment specific configurations and dynamic routing to exist. This also makes permission based delivery and administrative duties (such as modifying the content) much easier to implement down the road.

5. Separation of concerns. No one module (outside of the global 'framework' modules) should be able to hinder the app. There should be no inter-module dependencies. And all communication should be to an App level module (which must work for the app to run) or via events that the servicing module must bind to.