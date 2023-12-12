import { join } from "path";
import { Configuration, Inject } from "@tsed/di";
import { PlatformApplication } from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import "@tsed/ajv";
import { config } from "./config/index";
import * as rest from "./controllers/index";
import cors from "cors"

@Configuration({
  ...config,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpServer: { cors: true },
  httpsPort: false, // CHANGE
  disableComponentsScan: true,
  mount: {
    "/api": [...Object.values(rest)],
  },
  middlewares: [
    "cors",
    "cookie-parser",
    "compression",
    "method-override",
    "json-parser",
    { use: "urlencoded-parser", options: { extended: true } }
  ],
  views: {
    root: join(process.cwd(), "../views"),
    extensions: {
      ejs: "ejs"
    }
  },
  exclude: [
    "**/*.spec.ts"
  ]
})



export class Server {
  @Inject()
  protected app: PlatformApplication;

  $beforeRoutesInit() {
    this.app
      .use(cors({
        origin: ['http://amoldevops.xyz', 'http://localhost:4321'],
        allowedHeaders: "*"
      }))
    return null;
  }

  @Configuration()
  protected settings: Configuration;
}
