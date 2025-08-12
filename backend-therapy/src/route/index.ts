import { Application } from "express";
import questionRoute from "./questionRoute";
import reponseRoute from "./reponseRoute";
import historyRoute from "./historyRoute";
import UserRoute from "./UserRoute";

export default (app: Application) => {

      app.get("/", (req, res) => {
    res.json({ message: "API Running ! " });
  });

  app.use("/api/v1",[
    questionRoute,
    reponseRoute,
    historyRoute,
    UserRoute,
  ])
}