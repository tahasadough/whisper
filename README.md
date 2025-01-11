# Whisper

# a lightweight, framework-independent notification library

## Installation

#### With bun

```sh
bun add @tahasadough/whisper
```

#### With NPM

```sh
npm i @tahasadough/whisper
```

or anything you like

## Getting Started

```js
import { whisper } from "@tahasadough/whisper";

whisper("Hey buddy! Making progress?");
```

#### You can also pass an object for options:

```js
whisper("Hey buddy! Making progress?", {
  position: "top-center",
  duration: 2000,
  id: "whisperID",
  textAlign: "left",
  type: "ordinary",
  backgroundColor: "#ededed",
  textColor: "#000000",
});
// more options will be added
```

#### you can alse dismiss one or more whisper base on the id of it

```js
whisper().dismiss("whisperID");
```
