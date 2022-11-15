import express from "express";
import BeerModel from "../model/beer.model.js";

const beerRouter = express.Router();

beerRouter.get("/", async (req, res) => {
  try {
    const allBeers = await BeerModel.find();

    return res.status(200).json(allBeers);
  } catch (error) {
    return res.status(400).json({ msg: "Algo deu errado /" });
  }
});

beerRouter.get("/random", async (req, res) => {
  try {
    const allBeers = await BeerModel.find();

    const randomIndex = Math.floor(Math.random() * allBeers.length);

    return res.status(200).json(allBeers[randomIndex]);
  } catch (error) {
    return res.status(400).json({ msg: "Algo deu errado random" });
  }
});

beerRouter.get("/search", async (req, res) => {
  try {
    const { q } = req.query;

    const all = await BeerModel.find();

    const found = all.filter((beer) => beer.name.includes(q));

    return res.status(200).json(found);
  } catch (error) {
    return res.status(400).json({ msg: "Algo deu errado search" });
  }
});

beerRouter.post("/new", async (req, res) => {
  try {
    const newBeer = await BeerModel.create({ ...req.body });

    return res.status(200).json(newBeer);
  } catch (error) {
    return res.status(400).json({ msg: "Algo deu errado new" });
  }
});

beerRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneBeer = await BeerModel.findById(id);

    return res.status(200).json(oneBeer);
  } catch (error) {
    return res.status(400).json({ msg: "Algo deu errado :id" });
  }
});

beerRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const beerDeleted = await BeerModel.findByIdAndDelete(id);

    return res.status(200).json(beerDeleted);
  } catch (error) {
    return res.status(400).json({ msg: "Algo deu errado delete" });
  }
});

beerRouter.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const editedBeer = await BeerModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(editedBeer)
  } catch (error) {
    return res.status(400).json({ msg: "Algo deu errado EDIT" });
  }
});

export { beerRouter };
