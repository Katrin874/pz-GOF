import { Backend } from "./Backend";
export class WebBackend implements Backend {
  public getData() {
    return "WebBackend: Data from the backend";
  }
}