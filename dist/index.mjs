// src/icon.ts
var succesIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
<linearGradient id="ONeHyQPNLkwGmj04dE6Soa_2Tv2g4T4Wtu0_gr1" x1="16" x2="16" y1="2.888" y2="29.012" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#36eb69"></stop><stop offset="1" stop-color="#1bbd49"></stop></linearGradient><circle cx="16" cy="16" r="13" fill="url(#ONeHyQPNLkwGmj04dE6Soa_2Tv2g4T4Wtu0_gr1)"></circle><linearGradient id="ONeHyQPNLkwGmj04dE6Sob_2Tv2g4T4Wtu0_gr2" x1="16" x2="16" y1="3" y2="29" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".02"></stop><stop offset="1" stop-opacity=".15"></stop></linearGradient><path fill="url(#ONeHyQPNLkwGmj04dE6Sob_2Tv2g4T4Wtu0_gr2)" d="M16,3.25c7.03,0,12.75,5.72,12.75,12.75 S23.03,28.75,16,28.75S3.25,23.03,3.25,16S8.97,3.25,16,3.25 M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13s13-5.82,13-13S23.18,3,16,3 L16,3z"></path><g opacity=".2"><linearGradient id="ONeHyQPNLkwGmj04dE6Soc_2Tv2g4T4Wtu0_gr3" x1="16.502" x2="16.502" y1="11.26" y2="20.743" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".1"></stop><stop offset="1" stop-opacity=".7"></stop></linearGradient><path fill="url(#ONeHyQPNLkwGmj04dE6Soc_2Tv2g4T4Wtu0_gr3)" d="M21.929,11.26 c-0.35,0-0.679,0.136-0.927,0.384L15,17.646l-2.998-2.998c-0.248-0.248-0.577-0.384-0.927-0.384c-0.35,0-0.679,0.136-0.927,0.384 c-0.248,0.248-0.384,0.577-0.384,0.927c0,0.35,0.136,0.679,0.384,0.927l3.809,3.809c0.279,0.279,0.649,0.432,1.043,0.432 c0.394,0,0.764-0.153,1.043-0.432l6.813-6.813c0.248-0.248,0.384-0.577,0.384-0.927c0-0.35-0.136-0.679-0.384-0.927 C22.608,11.396,22.279,11.26,21.929,11.26L21.929,11.26z"></path></g><path fill="#fff" d="M10.325,14.825L10.325,14.825c0.414-0.414,1.086-0.414,1.5,0L15,18l6.179-6.179	c0.414-0.414,1.086-0.414,1.5,0l0,0c0.414,0.414,0.414,1.086,0,1.5l-6.813,6.813c-0.478,0.478-1.254,0.478-1.732,0l-3.809-3.809	C9.911,15.911,9.911,15.239,10.325,14.825z"></path>
</svg>
`;
var loadingIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="shape-rendering: auto; display: block;" width="20" height="20" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="164.93361431346415 56.97787143782138" r="35" stroke-width="10" stroke="#9b9b9b" fill="none" cy="50" cx="50">
  <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="1s" repeatCount="indefinite" type="rotate" attributeName="transform"/>
</circle><g/></g></svg>
`;
var errorIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
<linearGradient id="1rsYkBQg--ZOjOQk1rj-Wa_nTkpTS1GZpkb_gr1" x1="16" x2="16" y1="2.888" y2="29.012" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff624a"></stop><stop offset=".247" stop-color="#ff5940"></stop><stop offset=".672" stop-color="#fd4224"></stop><stop offset="1" stop-color="#fc2c0a"></stop></linearGradient><circle cx="16" cy="16" r="13" fill="url(#1rsYkBQg--ZOjOQk1rj-Wa_nTkpTS1GZpkb_gr1)"></circle><g opacity=".2"><linearGradient id="1rsYkBQg--ZOjOQk1rj-Wb_nTkpTS1GZpkb_gr2" x1="16" x2="16" y1="10.755" y2="21.245" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".1"></stop><stop offset="1" stop-opacity=".7"></stop></linearGradient><path fill="url(#1rsYkBQg--ZOjOQk1rj-Wb_nTkpTS1GZpkb_gr2)" d="M19.995,10.755 c-0.334,0-0.648,0.13-0.884,0.366L16,14.232l-3.111-3.111c-0.236-0.236-0.55-0.366-0.884-0.366c-0.334,0-0.648,0.13-0.884,0.366 c-0.487,0.487-0.487,1.28,0,1.768L14.232,16l-3.111,3.111c-0.487,0.487-0.487,1.28,0,1.768c0.236,0.236,0.55,0.366,0.884,0.366 c0.334,0,0.648-0.13,0.884-0.366L16,17.768l3.111,3.111c0.236,0.236,0.55,0.366,0.884,0.366s0.648-0.13,0.884-0.366 c0.487-0.487,0.487-1.28,0-1.768L17.768,16l3.111-3.111c0.487-0.487,0.487-1.28,0-1.768C20.643,10.885,20.329,10.755,19.995,10.755 L19.995,10.755z"></path></g><linearGradient id="1rsYkBQg--ZOjOQk1rj-Wc_nTkpTS1GZpkb_gr3" x1="16" x2="16" y1="3" y2="29" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".02"></stop><stop offset="1" stop-opacity=".15"></stop></linearGradient><path fill="url(#1rsYkBQg--ZOjOQk1rj-Wc_nTkpTS1GZpkb_gr3)" d="M16,3.25c7.03,0,12.75,5.72,12.75,12.75 S23.03,28.75,16,28.75S3.25,23.03,3.25,16S8.97,3.25,16,3.25 M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13s13-5.82,13-13S23.18,3,16,3 L16,3z"></path><path fill="#fff" d="M17.414,16l3.288-3.288c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0L16,14.586	l-3.288-3.288c-0.391-0.391-1.024-0.391-1.414,0c-0.391,0.391-0.391,1.024,0,1.414L14.586,16l-3.288,3.288	c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.391,1.024,0.391,1.414,0L16,17.414l3.288,3.288c0.391,0.391,1.024,0.391,1.414,0	c0.391-0.391,0.391-1.024,0-1.414L17.414,16z"></path>
</svg>
`;
var Icon = {
  success: succesIcon,
  loading: loadingIcon,
  error: errorIcon
};
var icon_default = Icon;

// src/whisper.ts
var Whisper = class _Whisper {
  static BASE_STYLES = "display:flex;align-items:center;gap:3px;z-index: 9999;position: fixed;padding: 18px;max-width: 280px;opacity: 0;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);overflow: hidden;font-size: 0.95em;color: black;background-color: rgb(226, 232, 240);border-radius: 0.7rem;transition: all 0.6s cubic-bezier(0.5, 1.5, 0.3, 1);";
  static POSITION_STYLES = {
    "top-left": `${_Whisper.BASE_STYLES} top: 15px; left: 15px;`,
    "top-center": `${_Whisper.BASE_STYLES} top: 15px; left: 0; right: 0; margin-right: auto; margin-left: auto;`,
    "top-right": `${_Whisper.BASE_STYLES} top: 15px; right: 15px;`,
    "bottom-left": `${_Whisper.BASE_STYLES} bottom: 15px; left: 15px;`,
    "bottom-center": `${_Whisper.BASE_STYLES} bottom: 15px; left: 0; right: 0; margin-right: auto; margin-left: auto;`,
    "bottom-right": `${_Whisper.BASE_STYLES} bottom: 15px; right: 15px;`
  };
  static POSITION_CLASSES = {
    "top-left": "whisper-top-left",
    "top-center": "whisper-top-center",
    "top-right": "whisper-top-right",
    "bottom-left": "whisper-bottom-left",
    "bottom-center": "whisper-bottom-center",
    "bottom-right": "whisper-bottom-right"
  };
  /**
   * @protected
   * whisper's default options
   */
  _defaultOptions = {
    duration: 2e3,
    position: "top-center",
    textAlign: "left",
    id: null,
    type: "ordinary",
    backgroundColor: "#ededed",
    textColor: "#000000"
  };
  /**
   * @private
   * whisper's options that will overwrite some of default options base on what you want :)
   */
  #options;
  /**
   * @private
   * whisper's node element
   */
  #whisperNode;
  /**
   * Creates a whisper element and appends it to the DOM.
   * @private
   * @param {string} message - The message to display in the notification.
   * @returns {HTMLElement | void} The created whisper
   */
  #createwhisper(message) {
    if (!message.trim()) throw new Error("whisper cannot be empty");
    const whisper2 = document.createElement("section");
    if (this.#options.id) whisper2.classList.add(this.#options.id);
    whisper2.innerHTML = `
    <span style="height:100%;display:flex;align-items:center;">
     ${this.#options.type !== "ordinary" ? icon_default[this.#options.type] : ""}
    </span>
     <p style="text-align:${this.#options.textAlign}; color:${this.#options.textColor}; width:100%;word-break:break-all;">${message}</p> `;
    whisper2.classList.add(_Whisper.POSITION_CLASSES[this.#options.position]);
    whisper2.style.cssText = _Whisper.POSITION_STYLES[this.#options.position];
    whisper2.style.backgroundColor = this.#options.backgroundColor;
    document.body.prepend(whisper2);
    this.#adjustWhisperPosition();
    setTimeout(() => {
      whisper2.style.cssText += "opacity:1;";
    }, 10);
    return whisper2;
  }
  /**
   * @private
   * Adjusts the position of whisper
   */
  #adjustWhisperPosition() {
    const positionClass = _Whisper.POSITION_CLASSES[this.#options.position];
    const whispers = document.querySelectorAll(
      `.${positionClass}`
    );
    const notifIsOnTop = positionClass?.includes("top");
    let totalHeight = 0;
    whispers.forEach((whisper2) => {
      const whisperHeight = whisper2.offsetHeight;
      const pointY = notifIsOnTop ? totalHeight : -totalHeight;
      whisper2.style.transform = `translateY(${pointY}px)`;
      totalHeight += whisperHeight + 16;
    });
  }
  /**
   * Handles the removal of a whisper.
   * @private
   * @param {HTMLElement} whisper - The whisper to remove.
   */
  #removeHandler(whisper2) {
    whisper2.style.cssText += "opacity:0;";
    setTimeout(() => {
      whisper2.remove();
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
      this.#options.duration
    );
  }
  /**
   * Constructs a new whisper instance.
   * @constructor
   * @param {string} message - The message to display in the whisper.
   * @param {NotifOptions} notifOptions - The options for the whisper.
   */
  constructor(message, whisperOptions) {
    this.#options = { ...this._defaultOptions, ...whisperOptions };
    this.#whisperNode = this.#createwhisper(message);
    if (this.#options.duration !== "infinite") this.#removewhisper();
  }
  /**
   * Dismisses whisper with the specified ID.
   * @public
   * @param {string} id - The ID of the whisper to dismiss.
   */
  dismiss(id) {
    const whispers = document.querySelectorAll(`.${id}`);
    whispers.forEach((whisper2) => this.#removeHandler(whisper2));
  }
};

// src/index.ts
var whisper = (message, options) => new Whisper(message, options);
var index_default = whisper;
export {
  index_default as default
};
