import express from "express";
import os from "os";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
    res.send("Hello World");
});

app.get("/cpu", (_req, res) => {
    for (let i = 0; i < 1_000_000_000; i++) {
        Math.random();
    }
    res.send("CPU Intensive Task Done");
});

app.get("/host", (_req, res) => {
    res.send(os.hostname());
});

export default app;
