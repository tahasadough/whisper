# Whisper

# a lightweight, framework-independent notification library

## Installation or Update

#### bun

```sh
bun add @tahasadough/whisper@latest
```

#### npm

```sh
npm i @tahasadough/whisper@latest
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
  backgroundColor: "#ededed",
  textColor: "#000000",
});
// more options will be added
```

#### Success whisper:
```js
whisper.success("This is a success whisper");
```

#### Loading whisper:
```js
whisper.loading("This is a loading whisper");
```

#### Error whisper:
```js
whisper.error("This is a error whisper")
```

#### To dismiss one or more whisper you can simply do:

```js
whisper.dismiss("whisperID");
```
