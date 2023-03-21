<!-- eslint-disable -->
<!-- eslint-disable-next-line eslint-config-prettier -->

# What's For Dinner - A recipe manager

## What is it? (Description)

Do you ever find yourself at a loss for what to eat? Maybe you're in the mood for a homemade meal but don't know where to start. Or perhaps you want to get creative with the ingredients in your pantry but need some inspiration. And who hasn't felt the urge to mix up their own delicious drinks from time to time? That's where the "What's for Dinner" app comes in - your ultimate solution to all of these dilemmas.

This project enables users to search for meal recipes based on their preferred main ingredient. The software generates a list of meal options, including the inputted main ingredient, the necessary accompanying ingredients, and preparation instructions.

Additionally, users can utilise the project to search for complementary beverages, such as margaritas, and receive a comprehensive list of available options and corresponding recipes.

## Table of Contents

    - Installation(#installation)
    - Contributing (#contributing)
    - License (#license)
    - Developer Infos (#developer-infos)

## How to use it (Installation)

This is a Typescipt React Application, bootstrapped with [Vite](https://vitejs.dev/).

To run the application, you need to have [Node.js](https://nodejs.org/en/) installed on your machine.

First, clone the repository to your local machine:

```bash
git clone
```

Then, install the dependencies:

```bash
npm install
```

Finally, run the application:

```bash
npm run dev
```

## Contributing

Contributions are always welcome!. Go through the following steps to contribute to this project:

- Go through the steps mentioned in the [Installation] (#installationsection) (Step 1)

- Create a new branch for your feature or bug fix: (Step 2)

  ```bash
  git checkout -b <branch-name>
  ```

  Example: `git checkout -b add-new-recipe`

- Make your changes and commit them: (Step 3)

```bash
  git add .
  git commit -m "commit message"
```

For better work flow, please make sure you are in the correct branch before pushing. To check the current branch, run the following command:

```bash
git branch
```

To push your changes, run the following command:

```bash
git push origin <branch-name>
```

Example: `git push origin add-new-recipe`

- Create a pull request to the main branch (Step 4): (Step 4)

  - Go to the repository on GitHub and click on the "Compare & pull request" button.

  - Add a title and description for your pull request

  - Click on "Create pull request"

  - Wait for your PR review and merge approval!

- Pull from the main branch (Step 5): (Step 5)

  - After your pull request has been merged, you can pull the changes from the main branch to your local repository and delete your extra branch.

  - To pull the changes, run the following commands:

    ```bash
    git checkout main
    git pull origin main
    ```

  - To delete the branch, run the following command:

    ```bash
    git branch -d <branch-name>
    ```

    Example: `git branch -d add-new-recipe`

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Developer Infos

This project was created by following devs:

- [bibilnababu] ( https://githb.com/bibilnababu)
- [cj-ruppp] ( https://githb.com/cj-ruppp)
- [DanielMurphy87] ( https://githb.com/DanielMurphy87)
- [adevash07] ( https://githb.com/adevash07)

## Acknowledgements

- [TheMealDB] ( https://www.themealdb.com/api.php)
- [TheCocktailDB] ( https://www.thecocktaildb.com/api.php)

## Project Status

- [x] 1.0.0 - MVP
