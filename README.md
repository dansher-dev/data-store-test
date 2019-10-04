# StoreTest

Creates a store with 2 variables in state.
Initial state of them is -5 and 10 respectively.
Store have 3 actions:\
"change" action does nothing in a reducer.\
"increase" action should increase first variable by 1.\
"decrease" action should decrease second variable by 1.\

First component is responsible to display what it gets in an input property. It should display input always in a border. If value is lower than 0 its border and value should be some red. If greater then some blue.\
Second component renders variables from store by first component.

![Initial State](./src/assets/InitialState.png?raw=true "Initial State")
Initial State\
![App Started](./src/assets/App started.png?raw=true "App Started")\
App Started\
![Stop pressed](./src/assets/Stop pressed.png?raw=true "App stopped")\
App stopped
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
