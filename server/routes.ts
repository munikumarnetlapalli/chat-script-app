import type { Express } from "express";
import { createServer, type Server } from "http";
import { Router } from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  const router = Router();

  // ✅ Test API route
  router.get("/api/test", (_req, res) => {
    res.json({ message: "Server and API are working!" });
  });

  // You can add more API routes here
  // Example:
  // router.get("/api/users", async (_req, res) => { ... });

  app.use(router);

  const httpServer = createServer(app);
  return httpServer;
}
