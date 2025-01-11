type position = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
type duration = number | "infinite";
type type = "ordinary" | "success" | "error" | "warning" | "loading";

interface WhisperOptions {
    duration?: duration;
    position?: position;
    textAlign?: "left" | "center" | "right";
    id?: string | null;
    type?: type;
    backgroundColor?: string;
    textColor?: string;
}

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
    /**
     * Dismisses whisper with the specified ID.
     * @public
     * @param {string} id - The ID of the whisper to dismiss.
     */
    dismiss(id: string): void;
}

/**
 * Creates a new whisper.
 * @param {string} [message] - The message to display in the whisper.
 * @param {whisperOptions} [options] - The options for the whisper.
 * @returns {whisper} The created whisper instance.
 */
declare const whisper: (message?: string, options?: WhisperOptions) => Whisper;

export { whisper };
