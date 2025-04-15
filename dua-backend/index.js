const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// DB Setup
const dbPath = path.join(__dirname, "db", "dua_main.sqlite");
const db = new Database(dbPath, { readonly: true });

// Get All Categories
app.get("/api/categories", (req, res) => {
  const stmt = db.prepare("SELECT * FROM category");
  const rows = stmt.all();
  res.json(rows);
});

// Get Subcategories by Category ID
app.get("/api/subcategories/:catId", (req, res) => {
  const { catId } = req.params;
  const stmt = db.prepare("SELECT * FROM sub_category WHERE cat_id = ?");
  const rows = stmt.all(catId);
  res.json(rows);
});

// Get Duas by Subcategory ID
app.get("/api/duas/:subcatId", (req, res) => {
  const { subcatId } = req.params;
  const stmt = db.prepare("SELECT * FROM dua WHERE subcat_id = ?");
  const rows = stmt.all(subcatId);
  res.json(rows);
});

app.get("/api/subcategories-with-duas/:catId", (req, res) => {
  const { catId } = req.params;

  try {
    // Get all subcategories for this cat_id
    const subcategories = db
      .prepare("SELECT * FROM sub_category WHERE cat_id = ?")
      .all(catId);

    // Prepare statement to fetch duas for each subcategory
    const stmtDuas = db.prepare("SELECT * FROM dua WHERE subcat_id = ?");

    // Map each subcategory with its related duas
    const result = subcategories.map((subcat) => {
      const duas = stmtDuas.all(subcat.subcat_id);
      return {
        ...subcat,
        duas,
      };
    });

    res.json(result);
  } catch (error) {
    console.error("Error fetching subcategories with duas by catId:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
