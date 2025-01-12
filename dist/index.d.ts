declare class Whisper {
    #private;
    private static readonly BASE_STYLES;
    private static readonly POSITION_STYLES;
    private static readonly POSITION_CLASSES;
    /**
     * @protected
     * whisper's default options
     */
    _defaultOptions: WhisperOptions;
    /**
     * Constructs a new whisper instance.
     * @constructor
     * @param {string} message - The message to display in the whisper.
     * @param {NotifOptions} notifOptions - The options for the whisper.
     */
    constructor(message: string, whisperOptions: WhisperOptions);
}

type WhisperHandler = (message?: string, options?: WhisperOptions) => Whisper;
type position = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
type duration = number | "infinite";
type type = "default" | "success" | "error" | "warning" | "loading";

interface WhisperMap {
    (message?: string, options?: WhisperOptions): Whisper;
    success: WhisperHandler;
    loading: WhisperHandler;
    error: WhisperHandler;
    dismiss: (id: string) => void;
}
interface WhisperOptions {
    duration?: duration;
    position?: position;
    textAlign?: "left" | "center" | "right";
    id?: string | null;
    type?: type;
    backgroundColor?: string;
    textColor?: string;
}

declare const whisper: WhisperMap;

export { whisper as default };
