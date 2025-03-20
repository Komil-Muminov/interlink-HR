import Router from "express";

import { createWorkingHours } from "./createWorkingHours";
import { upload } from "../../modules/multer/fileService";

const router = Router();

router.post("/", upload.array("files"), createWorkingHours);

export default router;
