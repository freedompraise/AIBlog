# Contributing Guidelines

Please take a moment to review the following guidelines before getting started.

## Table of Contents

- [Submitting Contributions](#submitting-contributions)
- [Testing](#testing)
- [Documentation](#documentation)
- [Issue Reporting](#issue-reporting)

## Getting Started

To contribute to our project, please follow these steps:

1. Clone the forked repository to your local machine.
2. Create a Supabase account, and a table called "posts" with the following columns:

   - id (type: uuid, primary key)
   - title (type: text)
   - content (type: text)
   - slug (type: text)
   - image (type: text)
   - category (type: text)

   Then create an enum called "categories".

   Get the API secrets from supabase required as seen in the [sample env](aiblogfrontend/sample.env) file.

3. Create an env.local file in the root of the project and add the secrets from the sample env file.

4. Create a new branch for your changes.
5. Make your desired changes and commit them.
6. Push your changes to your forked repository.
7. Submit a pull request to the main repository.

## Submitting Contributions

When submitting a contribution, please ensure the following:

- Your code is clear and consistent with existing code structure.
- Your changes are well-documented and include any necessary updates to the project's documentation.
- There are no tests yest, but when there is your changes pass all tests and do not introduce any new issues.
- The PR would be reviewed and might involve a conversation under it, so please ensure your notifications are ON

## Testing

Before submitting your changes, please confirm that the application is working as expected.

## Documentation

We value clear and concise documentation. If your contribution involves changes to the project's documentation, please make sure to update the relevant sections accordingly.

## Issue Reporting

If you encounter any issues or have suggestions for improvement, please open an issue on the repo. Provide as much detail as possible to help us understand and address the problem.

## Contact

If you have any questions or need further assistance, feel free to reach out to our boss @khrafts

We appreciate your contributions
