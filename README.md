# Start 🎒
[![CircleCI](https://circleci.com/gh/davi-mbatista/start/tree/framework%2Flit.svg?style=svg)](https://circleci.com/gh/davi-mbatista/start/tree/framework%2Flit)

This is what I use to start my web applications. It's a fairly simple Webpack project structure that can be easily extended and customized. Simplicity is the goal here. Just plug your view library into the configs and build something.

You can use the framework branches to start preact or react applications.

```bash
git checkout framework/preact
```

or

```bash
git checkout framework/react
```

#### Starting:

```bash
npm run start
```

**_Note:_** This will start a local server and you'll see some message from `webpack-dev-server` that it was started on `yourIp:somePort`. That's OK. You can access it using your `localhost:port`. I did that in order to use the development server with other devices in the same network without much hasle and pain. If you don't like it, just change the dev server configurations under `webpack/utils/server`.

#### Building:

```bash
npm run build
```
