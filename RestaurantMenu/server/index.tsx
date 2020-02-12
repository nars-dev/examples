import { Static } from "nars";
import { Server } from "ws";
import { default as express } from "express";
import { config } from "../config";
import { Menu } from "./Menu";

var app = express();
app.use('/static', express.static('static'))
app.listen(5000);

/* Define which component is rendered per given route */
const components = {
  Menu: Menu
};

/* Create a router. config and components have to match! */
const router = Static.createRouter(config, components);

/* Create a server */
const webSocketServer = new Server({ port: 9000 });

/* Start listening for incoming requests */
Static.attatchListener(webSocketServer, router);
