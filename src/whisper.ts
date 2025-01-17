import icon from "./icon";
import { WhisperOptions } from "./interfaces";
import { position } from "./types";
export class Whisper {
  private static readonly BASE_STYLES =
    "display:flex;align-items:center;gap:5px;z-index: 9999;position: fixed;padding: 0 10px;width:fit-content;max-width: 265px;opacity: 0;min-height:50px;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);overflow: hidden;font-size: 0.9em;border-radius: 0.8rem;transition: all 0.6s cubic-bezier(0.5, 1.5, 0.3, 1);";
  private static readonly POSITION_STYLES: Record<position, string> = {
    "top-left": `${Whisper.BASE_STYLES} top: 15px; left: 15px;`,
    "top-center": `${Whisper.BASE_STYLES} top: 15px; left: 0; right: 0; margin-right: auto; margin-left: auto;`,
    "top-right": `${Whisper.BASE_STYLES} top: 15px; right: 15px;`,
    "bottom-left": `${Whisper.BASE_STYLES} bottom: 15px; left: 15px;`,
    "bottom-center": `${Whisper.BASE_STYLES} bottom: 15px; left: 0; right: 0; margin-right: auto; margin-left: auto;`,
    "bottom-right": `${Whisper.BASE_STYLES} bottom: 15px; right: 15px;`,
  };
  private static readonly POSITION_CLASSES: Record<position, string> = {
    "top-left": "whisper-top-left",
    "top-center": "whisper-top-center",
    "top-right": "whisper-top-right",
    "bottom-left": "whisper-bottom-left",
    "bottom-center": "whisper-bottom-center",
    "bottom-right": "whisper-bottom-right",
  };
  /**
   * @protected
   * whisper's default options
   */
  _defaultOptions: WhisperOptions = {
    duration: 2000,
    position: "top-center",
    textAlign: "left",
    id: null,
    type: "default",
    backgroundColor: "#ffffff",
    textColor: "#000000",
  };
  /**
   * @protected
   * whisper's message
   */
  _message: string;
  /**
   * @private
   * whisper's options that will overwrite some of default options base on what you want :)
   */
  #options: WhisperOptions;
  /**
   * @private
   * whisper's node element
   */
  #whisperNode: HTMLElement;

  /**
   * Creates a whisper element
   * @private
   * @returns {HTMLElement} The created whisper
   */
  #createwhisper() {
    const whisper: HTMLElement = document.createElement("section");
    return whisper;
  }

  /**
   * @private
   * adjust whisper's styles and children
   */
  #adjustWhisper() {
    this.#adjustWhisperChildren();
    this.#adjustWhisperStyles();
  }

  /**
   * @private
   * adjust whisper's styles
   */
  #adjustWhisperStyles() {
    if (this.#options.id) this.#whisperNode.classList.add(this.#options.id);
    this.#whisperNode.classList.add(
      Whisper.POSITION_CLASSES[this.#options.position!]
    );
    this.#whisperNode.style.cssText =
      Whisper.POSITION_STYLES[this.#options.position!];
    this.#whisperNode.style.backgroundColor = this.#options.backgroundColor!;
    this.#adjustWhisperPosition();
    requestAnimationFrame(
      () => (this.#whisperNode.style.cssText += "opacity:1;")
    );
  }

  /**
   * @private
   * adjust whisper's children
   */
  #adjustWhisperChildren() {
    this.#whisperNode.innerHTML = `
    <span style="height:100%;display:flex;align-items:center;">
     ${this.#options.type !== "default" ? icon[this.#options.type!] : ""}
    </span>
     <p style="text-align:${this.#options.textAlign}; color:${
      this.#options.textColor
    }; width:100%;word-break:break-all;">${this._message}</p> `;
  }

  /**
   * @private
   * Adjusts the position of whisper
   */
  #adjustWhisperPosition() {
    const positionClass = Whisper.POSITION_CLASSES[this.#options.position!];
    const whispers = document.querySelectorAll<HTMLElement>(
      `.${positionClass}`
    );
    const notifIsOnTop = positionClass?.includes("top");

    let totalHeight = 0;
    whispers.forEach((whisper) => {
      const whisperHeight = whisper.offsetHeight;
      const pointY = notifIsOnTop ? totalHeight : -totalHeight;
      whisper.style.transform = `translateY(${pointY}px)`;
      totalHeight += whisperHeight + 16; // Add some spacing between notifications
    });
  }

  /**
   * @private
   * Removes the whisper after the specified duration.
   */
  #removewhisper() {
    const removeHandler = () => {
      this.#whisperNode.style.cssText += "opacity:0;";
      setTimeout(() => {
        this.#whisperNode.remove();
        this.#adjustWhisperPosition();
      }, 200);
    };

    setTimeout(() => removeHandler(), this.#options.duration as number);
  }

  /**
   * Constructs a new whisper instance.
   * @constructor
   * @param {string} message - The message to display in the whisper.
   * @param {NotifOptions} notifOptions - The options for the whisper.
   */
  constructor(message: string, whisperOptions: WhisperOptions) {
    if (!message.trim()) throw new Error("whisper cannot be empty");
    else this._message = message;
    this.#options = { ...this._defaultOptions, ...whisperOptions };
    this.#whisperNode = this.#createwhisper() as HTMLElement;
    document.body.prepend(this.#whisperNode);
    this.#adjustWhisper();
    if (this.#options.duration !== "infinite") this.#removewhisper(); // Set to destroy
  }
}
