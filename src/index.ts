import { Whisper } from './whisper';
import { WhisperOptions, WhisperMap } from './interfaces';

const whisper: WhisperMap = (message?: string, options?: WhisperOptions) =>
  new Whisper(message!, options!);

whisper.success = (message?: string, options?: WhisperOptions) =>
  whisper(message, { ...options, type: 'success' });

whisper.loading = (message?: string, options?: WhisperOptions) =>
  whisper(message, { ...options, type: 'loading' });

whisper.error = (message?: string, options?: WhisperOptions) =>
  whisper(message, { type: 'error', ...options });

whisper.dismiss = (id: string) => {
  if (typeof id === 'string') {
    const whispers = document.querySelectorAll<HTMLElement>(`.${id}`);
    whispers.forEach((whisper) => {
      whisper.style.opacity = '0';
      setTimeout(() => {
        whisper.remove();
      }, 2000);
    });
  }
};

export default whisper;
