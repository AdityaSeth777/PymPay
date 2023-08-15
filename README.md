# Welcome to PymPay: Your Financial Universe 🌌

Introducing PymPay, where the world of finance meets the marvel of technology! Seamlessly blending the innovative spirit of Hank Pym (aka Ant-Man) with the convenience of modern online banking, PymPay is your gateway to effortless transactions, secure payments, and financial empowerment.

## Why Choose PymPay?

🔒 **Security**: Just as Pym's suit offers protection, PymPay ensures your transactions are shielded by cutting-edge security measures.

⚡ **Speed**: Experience swift transactions that rival Ant-Man's lightning-fast movements, making managing your finances a breeze.

💰 **Simplicity**: Navigating the PymPay universe is as simple as Hank Pym's famous catchphrase, "Pym Particles!" Enjoy an intuitive interface for all your financial needs.

🌐 **Global Reach**: With PymPay, your financial universe knows no bounds. Send and receive funds across galaxies with ease.

📈 **Growth and Control**: Like Pym's research, PymPay empowers you to control and grow your financial journey, unlocking opportunities as you go.

## Join the PymPay Movement

Become a part of the PymPay revolution and step into a world where finance and technology intertwine like never before. Unleash your financial potential with PymPay, the future of online banking.

> *PymPay: Where Marvel meets money.*

## Description

- This React application is built using [webpack](https://webpack.js.org/).
- It uses [Tailwind CSS](https://tailwindcss.com/)
- The application is generated in JavaScript.

## Pre-requisites

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - v16 or greater
- [npm](https://www.npmjs.com/) - v6 or greater

## Running in dev environment

1.  `cd YOUR_APPLICATION`
2.  `npm install`
3.  `npm start`

## .env file

This file contains various environment variables that you can configure.

**PORT** - Port to run your frontend.

# Running the storybook

We have detected common components and have generated possible variants of it.To check the documentation of generated common components by integrating storybook, Please follow below steps.

## Install and Initializes

      npx storybook init

## Run the Storybook

      npm run storybook

## Folder Structure

```
.
├── package.json
├── postcss.config.js
├── webpack.config.development.js
├── webpack.config.production.js
├── public
│   ├── assets
│   │   └── images --------- All Project Images
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── fonts ---------- Project fonts
│   ├── components --------- UI and Detected Common Components
│   ├── constants ---------- Project constants, eg: string consts
│   ├── hooks -------------- Helpful Hooks
│   ├── index.jsx
│   ├── pages -------------- All route pages
│   ├── Routes.jsx ---------- Routing
│   ├── styles
│   │   ├── index.css ------ Other Global Styles
│   │   └── tailwind.css --- Default Tailwind modules
│   └── util
│       └── index.jsx ------- Helpful utils
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.jsx` is the JavaScript entry point.

You may create subdirectories inside src.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.

## Installing a Dependency

You can install any dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router
```

Alternatively you may use `yarn`:

```sh
yarn add react-router
```

## License

MIT License

Copyright (c) Aditya Seth

Permission is hereby granted, to any person obtaining a copy of this software and associated documentation files (the "Software"),to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

