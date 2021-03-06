## React Kit
A very simple react kit which includes styled components, airbnb linting with create-react-app.

### Usage
To use the kit please follow the instructions given below.

#### Installation
```bash
$ git clone https://github.com/sh4hids/react-kit.git
```
or
```bash
$ git clone git@github.com:sh4hids/react-kit.git
```

```bash
$ npm install
```

#### Configuration
- Editorconfig: Install [EditorConfig](http://editorconfig.org/#download) plugin to make it work. You can edit the configuration on [.editorconfig.json](https://github.com/sh4hids/react-kit/blob/master/.editorconfig) file.

- Linting: In this kit I am using `eslint` and [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript). You can edit the configuration on [.eslintrc.json](https://github.com/sh4hids/react-kit/blob/master/.eslintrc.json) file.

#### Lint
To lint your code run the following commands:

```bash
$ npm run lint
```
or to watch

```bash
$ npm run lint:w
```

#### Package Security
To check your project packages you have to have [nsp](https://github.com/nodesecurity/nsp) insalled globally.

```bash
$ npm insall -g nsp
```

Check your package security by following command:

```bash
$ npm run security-check
```
