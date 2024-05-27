import express from 'express';
import { addFood, listFood, removeFood, updateFoodPrice } from '../controllers/foodController.js'; // Import the updateFoodPrice controller function
import multer from 'multer';

const foodRouter = express.Router();

// Image Storage Engine (Saving Image to uploads folder & rename it)
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

// Routes
foodRouter.get("/list", listFood);
foodRouter.post("/add", upload.single('image'), addFood);
foodRouter.post("/remove", removeFood);
foodRouter.post("/update-price", updateFoodPrice); // Add route for updating food price

export default foodRouter;
