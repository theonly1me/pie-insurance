# Pie Insurance - Modular Insurance Product

> This application was built as a part of Element Insurance AG's Frontend Coding Challenge.

#### How to Setup & Run

1. `npm install` on the root of the project.
2. `npm start` to run project.
3. `npm test` to run tests.

##### How to Use

1. Once on the header/hero sections of the website, click on `View Modules` button.
2. Select Coverage for modules from the dropdown.
3. Add one or more modules to cart.
4. Once at least one module has been added, click on the `CART` button on the sticky header to open the `Cart Summary` to view the individual modules selected and the total price.

#### Requirement

Imagine a modular insurance product. People can choose from four modules. Each module has a different selectable coverage and a different mathematical risk.
These are the modules:

- Bike (Coverage 0-3k, Risk 30%)
- Jewelry (Coverage 500-10k, Risk 5%)
- Electronics (Coverage 500-6k, Risk 35%)
- Sports Equipment (Coverage 0-20k, Risk 30%)

The user should be able to select the coverage for each module and see the calculated price. The price of the tariff, which is the individual configuration for each customer, should be calculated based on the risk: [price] = [coverage]\*[risk].

#### Technology Stack Used

- Create React App w/ Template TypeScript.
- Context API for Global State Management.
- React Portals for Cart & Checkout component modal.
- CSS Grid, Flexbox with CSS Modules for custom styling every layout, component.
- Jest w/ React Testing Library for tests.
- React Select from dropdowns.
- React Toastify for toast messages.

#### UX Design Choice

- Drafted rough UX in about 30 minutes.
- Designed a color, spacing schema (implementation can be found in the ./src/globals.css).
- Using CSS Grid for all primary layouts (all sections, checkout etc.).
- CSS Flexbox for minor adjustments.

##### Reasoning behind choice of technologies

- TypeScript with React makes development a lot easier by eliminating the need for having to worry about runtime errors like undefined values, type safety.
- Since this App is scaling vertically for the most part, and due to the scale of the application, Context API seemed like the best choice instead of using Redux Toolkit or a similar external store.
- Writing custom CSS instead of using a UI Component Library allows me to demonstrate my skill in terms of UI Design, Layouts and overall knowledge of UX design and styling.

> All assets used in this project are stock / free-to-use from https://drawkit.com by James Daly

> Developed by Atchyut Preetham Pulavarthi
> https://atchyut.dev
