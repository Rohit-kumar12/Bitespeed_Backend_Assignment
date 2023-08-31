import { Router } from "express";
import { identifyController } from "../controllers/identity.controller";

export const identityRouter: Router = Router();

identityRouter.post('/identify', identifyController)