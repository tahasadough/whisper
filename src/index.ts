import { Whisper } from "./whisper";
import { WhisperOptions } from "./interfaces";

/**
 * Creates a new whisper.
 * @param {string} [message] - The message to display in the whisper.
 * @param {whisperOptions} [options] - The options for the whisper.
 * @returns {whisper} The created whisper instance.
 */
export const whisper = (message?: string, options?: WhisperOptions) =>
  new Whisper(message!, options!);
