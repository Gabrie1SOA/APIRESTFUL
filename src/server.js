import express from "express";
import router from "./routers/tour_router.js";
import { getAllToursControllers } from "./controllers/tour_controller.js";

//Inicializaciones
const app = express();

//Variables
app.set("port", process.env.port || 3000); //Setea para app los valores de allí. Se puede acceder al valor de "port" llamándolo como "app.get("port")"
//const port = process.env.port || 3000

//Middlewares
app.use(express.json());   //Server rprocesará todas las peticiones en formato json

//Rutas
app.get("/", (req, res) => {
    res.send("Server on");
});

app.use("/api", router);

//Exportar variable app
export default app;