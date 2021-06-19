# React-StyledComponents-FirebaseAuth
 React and Styled Components Starter for Firebase and Firebase autentication for admin

**React Styled Component** _for Firebase_ is a project to start everything from the beginning without coding all the firebase autentication stuff with clean code. Forget about Bootstrap, Material Design or any other extra library, just use whatever you want. <br>
This project has:
- A public home page
- A login protected administrator page 
- A login page
- A password recovery page.
---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Original version with Boostrap and without styled components in [React-Firebase-Auth](https://github.com/WebDevSimplified/React-Firebase-Auth)

### Tech Stack

- Create React App for development
- Styled Components for CSSinJs with Atomic design pattern
- Firebase

Also, you need to be familiar with [HTML][html], [CSS][css], [JavaScript][js] ([ES2015][es2015]) and [React](https://reactjs.org/docs/).

### Directory Layout

```bash
├── build/
├── node_modules/                  # 3rd-party libraries and utilities
├── public/                        # Static files such as favicon.ico etc.
├── src/                           # Application source code
│   ├── components/                # Shared React components
│   │   ├── atoms/                 # The smaller components based on Atomic Design
│   │   │  ├── Form.js             # Form component with Styled Components
│   │   │  ├── Input.js            # Input component with Styled Components
│   │   │  ├── Label.js            # Label component with Styled Components
│   │   ├── PrivateRoute.js        # Redirect if not logged in component
│   ├── contexts/                  # Context providers
│   │   ├── AuthContext.js         # Firebase Autentication functions and user context
│   ├── pages/                     # Components used for router
│   │   ├── Admin.js               # Admin/Dashboard page (Login needed)
│   │   ├── ForgotPassword.js      # Password reset page (Public)
│   │   ├── Home.js                # Homepage (Public)
│   │   ├── Login.js               # Login Page (Public)
│   │   ├── Signup.js              # Signup Page (Public)
│   │   ├── UpdateProfile.js       # UpdateProfile page (Login needed)
│   ├── index.js                   # Client-side entry point, e.g. ReactDOM.render(<App />, container)
│   └── Theme.js                   # Colors, fonts, media queries
└── package.json                   # The list of project dependencies + NPM scripts
```

### Prerequisites

- [Node.js][nodejs] v10.15 or higher + [Yarn][yarn] v1.17 or higher &nbsp; (_HINT: On Mac install
  them via [Brew][brew]_)
- [VS Code][vc] editor (preferred) + [Project Snippets][vcsnippets], [EditorConfig][vceditconfig],
  [ESLint][vceslint], [Prettier][vcprettier], and [Babel JavaScript][vcjs] plug-ins

### Getting Started

Just clone the repo, update firebase APIs with yours, enable autentication en firebase and start

```bash
$ git clone https://github.com/javiermiz/React-StyledComponents-FirebaseAuth MyApp
$ cd MyApp
$ npm install                       # Installs dependencies
$ npm start                       # Compile the app and opens it in a browser with "live reload"
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
Or open [http://localhost:3000/admin](http://localhost:3000/admin) to be redirected to login page (or To Dashboard if logged in).<br>

