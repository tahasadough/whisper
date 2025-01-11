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
import whisper from "@tahasadough/whisper";

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

#### To dismiss one or more whisper you can simply do:

```js
whisper().dismiss("whisperID");
```
