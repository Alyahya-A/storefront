# MyStore Project - Frontend

<!-- TOC -->

- [MyStore Project - Frontend](#mystore-project---frontend)
    - [Overview](#overview)
        - [Fetures](#fetures)
    - [Let's start](#lets-start)
    - [Development server](#development-server)
    - [Build](#build)
    - [Environments](#environments)
    - [Preview](#preview)
    - [Running unit tests](#running-unit-tests)

<!-- /TOC -->

## Overview

It's an e-commerce site project built with Angular and based on [Storefront-API](../api/).

### Fetures

- View list of products.
- View product details.
- Add/remove products to/from cart.
- View cart including products & total amount.
- Update quantity of product from cart.
- Remove product from cart.
- Place order & Checkout products in cart.
- Confirmation page after order is placed
- Create new user
- Login to the site

## Let's start

Clone this repo then `cd` to the project directory.
Now we must install all packages and dependencies run the following command `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Environments

Currently there are two environments `dev` and `prod`.
Environments variables are:

| Variable   | Description                                          |
| ---------- | ---------------------------------------------------- |
| production | an `boolean` indicator if app running in prod or not |
| apiBaseUrl | The base URL of the REST API                         |

## Preview

Homepage
![Homepage](../../imgs/Homepage.PNG)

Create a new account
![Signup](../../imgs/CreateAccount.PNG)

Login to account
![Login](../../imgs/Login.PNG)

Cart page
![Cart](../../imgs/Cart.PNG)

Order Confirmation
![Confirmation](../../imgs/Confirmation.PNG)

Form Validations:

- Form 1
  ![Form](../../imgs/FormValidations1.PNG)

- Form 2
  ![From2](../../imgs/FormValidations2.PNG)
  Validation in `Api` level & frontend `web` level

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
