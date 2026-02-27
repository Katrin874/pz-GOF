import { Backend } from "./Backend";
import { AndroidUI } from "./Android";
export class MobileBackend implements Backend {
  public getData() {
    return "MobileBackend: Data from the backend";
  }
}
// const mobileBackend = new MobileBackend();
// const androidUI = new AndroidUI(mobileBackend);
// androidUI.render();