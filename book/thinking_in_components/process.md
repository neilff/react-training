# The Process


![](../../images/thinking-in-react-mock.png)

## Start with a Mock

- Break the UI into a hierarchy
- Single Responsibility Principle
- Think in terms of Information Architecture
- Atoms first, Molecules second


![](../../images/thinking-in-react-components.png)

## Component Hierarchy

1. <span style="background-color: orange; width: 0.8em; height: 0.8em; border-radius: 2px; display: inline-block;"></span> `FilterableProductTable`: contains the entirety of the example
2. <span style="background-color: blue; width: 0.8em; height: 0.8em; border-radius: 2px; display: inline-block;"></span> `SearchBar`: receives all user input
3. <span style="background-color: green; width: 0.8em; height: 0.8em; border-radius: 2px; display: inline-block;"></span> `ProductTable`: displays and filters the data collection based on user input
4. <span style="background-color: turquoise; width: 0.8em; height: 0.8em; border-radius: 2px; display: inline-block;"></span> `ProductCategoryRow`: displays a heading for each category
5. <span style="background-color: red; width: 0.8em; height: 0.8em; border-radius: 2px; display: inline-block;"></span> `ProductRow`: displays a row for each product
