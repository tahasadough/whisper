import type { WhisperHandler, duration, position, type } from "./types";
import { Whisper } from "./whisper";

export interface WhisperMap {
  (message?: string, options?: WhisperOptions): Whisper;
  success: WhisperHandler;
  loading: WhisperHandler;
  error: WhisperHandler;
  dismiss: (id: string) => void;
}

export interface WhisperOptions {
  duration?: duration;
  position?: position;
  textAlign?: "left" | "center" | "right";
  id?: string | null;
  type?: type;
  backgroundColor?: string;
  textColor?: string;
}

export interface Icon {
  success: string;
  loading: string;
  error: string;
}
