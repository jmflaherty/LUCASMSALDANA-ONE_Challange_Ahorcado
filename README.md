# Ahorcado + Playwright Test

[![Playwright Tests](https://github.com/jmflaherty/LUCASMSALDANA-ONE_Challenge_Ahorcado/actions/workflows/playwright.yml/badge.svg)](https://github.com/jmflaherty/LUCASMSALDANA-ONE_Challenge_Ahorcado/actions/workflows/playwright.yml)

Sample project based on the [Ahorcado](https://github.com/LUCASMSALDANA/LUCASMSALDANA-ONE_Challange_Ahorcado) by my friend [Lucas Saldaña](https://github.com/LUCASMSALDANA), adding a Playwright test that always wins the game. Eventually.

## Setup

1. Install NodeJs 18.10.0.

   > Recommended to use [NVM](https://github.com/nvm-sh/nvm).
   >
   > After installing it, simply enter `nvm use` in the project's root folder.

1. Install the project's dependencies.

   `npm install`

1. Install Playwright's dependencies.

   `sudo npx playwright install-deps`

## How to use

### Serve website

`npm run serve`

### Run test

`npm run test`

### Show test report

`npm run report`
