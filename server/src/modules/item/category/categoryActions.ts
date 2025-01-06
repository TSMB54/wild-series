// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  // Export them to import them somewhere else
  const parsedId = Number.parseInt(req.params.id);
  const categorie = categories.find((p) => p.id === parsedId);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.json(categories);
  }
};
export default { browse };
