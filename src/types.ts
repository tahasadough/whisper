import { WhisperOptions } from "./interfaces";
import { Whisper } from "./whisper";

export type WhisperHandler = (
  message?: string,
  options?: WhisperOptions
) => Whisper;

export type position =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type duration = number | "infinite";

export type type = "default" | "success" | "error" | "warning" | "loading";
