import { AndroidUI } from "./Android";
import { MobileBackend } from "./MobileBackend";

import { WebBackend } from "./WebBackend";
import { WebUI } from "./WebUI";
const mobileBackend = new MobileBackend();
const androidUI = new AndroidUI(mobileBackend);
androidUI.render();

const webBackend = new WebBackend();
const webUI = new WebUI(webBackend);
webUI.render();

const androidBrowserUI = new AndroidUI(webBackend);
androidBrowserUI.render();