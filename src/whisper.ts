import icon from "./icon";
import { WhisperOptions } from "./interfaces";
import { position } from "./types";

export class Whisper {
  private static readonly BASE_STYLES =
    "display:flex;align-items:center;gap:3px;z-index: 9999;position: fixed;padding: 18px;max-width: 280px;opacity: 0;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);overflow: hidden;font-size: 0.95em;color: black;background-color: rgb(226, 232, 240);border-radius: 0.7rem;transition: all 0.6s cubic-bezier(0.5, 1.5, 0.3, 1);";
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
    type: "ordinary",
    backgroundColor: "#ededed",
    textColor: "#000000",
  };
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
   * Creates a whisper element and appends it to the DOM.
   * @private
   * @param {string} message - The message to display in the notification.
   * @returns {HTMLElement | void} The created whisper
   */
  #createwhisper(message: string): HTMLElement | void {
    if (!message.trim()) throw new Error("whisper cannot be empty");
    const whisper = document.createElement("section") as HTMLElement;
    if (this.#options.id) whisper.classList.add(this.#options.id);
    whisper.innerHTML = `
    <span style="height:100%;display:flex;align-items:center;">
     ${this.#options.type !== "ordinary" ? icon[this.#options.type!] : ""}
    </span>
     <p style="text-align:${this.#options.textAlign}; color:${
      this.#options.textColor
    }; width:100%;word-break:break-all;">${message}</p> `;
    whisper.classList.add(Whisper.POSITION_CLASSES[this.#options.position!]);
    whisper.style.cssText = Whisper.POSITION_STYLES[this.#options.position!];
    whisper.style.backgroundColor = this.#options.backgroundColor!;
    document.body.prepend(whisper);
    this.#adjustWhisperPosition();
    setTimeout(() => {
      whisper.style.cssText += "opacity:1;";
    }, 10);
    return whisper;
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
   * Handles the removal of a whisper.
   * @private
   * @param {HTMLElement} whisper - The whisper to remove.
   */
  #removeHandler(whisper: HTMLElement) {
    whisper.style.cssText += "opacity:0;";
    setTimeout(() => {
      whisper.remove();
      this.#adjustWhisperPosition();
    }, 200);
  }

  /**
   * @private
   * Removes the whisper after the specified duration.
   */
  #removewhisper() {
    setTimeout(
      () => this.#removeHandler(this.#whisperNode),
      this.#options.duration as number
    );
  }

  /**
   * Constructs a new whisper instance.
   * @constructor
   * @param {string} message - The message to display in the whisper.
   * @param {NotifOptions} notifOptions - The options for the whisper.
   */
  constructor(message: string, whisperOptions: WhisperOptions) {
    this.#options = { ...this._defaultOptions, ...whisperOptions };
    this.#whisperNode = this.#createwhisper(message) as HTMLElement;
    if (this.#options.duration !== "infinite") this.#removewhisper(); // Set to destroy
  }

  /**
   * Dismisses whisper with the specified ID.
   * @public
   * @param {string} id - The ID of the whisper to dismiss.
   */
  dismiss(id: string) {
    const whispers = document.querySelectorAll<HTMLElement>(`.${id}`);
    whispers.forEach((whisper) => this.#removeHandler(whisper));
  }
}
