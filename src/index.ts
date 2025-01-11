import { Whisper } from "./whisper";
import { WhisperOptions } from "./interfaces";

/**
 * Creates a new whisper.
 * @param {string} [message] - The message to display in the whisper.
 * @param {whisperOptions} [options] - The options for the whisper.
 * @returns {Whisper} The created whisper instance.
 */
const whisper = (message?: string, options?: WhisperOptions) =>
  new Whisper(message!, options!);

export default whisper;
