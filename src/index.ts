import { Whisper } from "./whisper";
import { WhisperOptions, WhisperMap } from "./interfaces";

const createWhisper = (message?: string, options?: WhisperOptions): Whisper =>
  new Whisper(message!, options!);

const whisper = Object.assign(
  (message?: string, options?: WhisperOptions) =>
    createWhisper(message, options),
  {
    success: (message?: string, options?: WhisperOptions) =>
      createWhisper(message, { type: "success", ...options }),
    loading: (message?: string, options?: WhisperOptions) =>
      createWhisper(message, { type: "loading", ...options }),
    error: (message?: string, options?: WhisperOptions) =>
      createWhisper(message, { type: "error", ...options }),
    dismiss: (id: string) => {
      const whispers = document.querySelectorAll<HTMLElement>(`.${id}`);
      whispers.forEach((whisper) => {
        whisper.style.opacity = "0";
        setTimeout(() => {
          whisper.remove();
        }, 2000);
      });
    },
  }
) as WhisperMap;

export default whisper;
