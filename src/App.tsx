import { useState, useEffect } from "react";
import backgroundImage from "./assets/background.jpg";

interface Note {
  id: number;
  product: string;
  note: string;
}

function App() {
    const [product, setProduct] = useState("");
    const [note, setNote] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [savedNotes, setSavedNotes] = useState<Note[]>(() => {
      const storedNotes = localStorage.getItem("savedNotes");

      return storedNotes
        ? JSON.parse(storedNotes)
        : [];
    });

    useEffect(() => {
      localStorage.setItem(
        "savedNotes",
        JSON.stringify(savedNotes)
      );
    }, [savedNotes]);


  return (

        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            width: "100%",
          }}
        >


    <div
      style={{
        padding: "24px 20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "rgba(244,246,248,0.92)",
        minHeight: "100vh",
        boxSizing: "border-box"
      }}
    >

      <div
        style={{
          backgroundColor: "#1e3a8a",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      >
        <h1
          style={{
            margin: 0,
            marginBottom: "20px",
            color: "#f8fafc"
          }}
        >
          Inventory Insight
        </h1>

        <p
          style={{
            margin: 0,
            opacity: 0.9
          }}
        >
          Smarter Inventory • Better Decisions
        </p>
      </div>



      <div
        style={{
          backgroundColor: "white",
          padding: "18px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#475569",
            fontSize: "15px",
            lineHeight: "1.5"
          }}
        >
          Inventory Management Dashboard for E-Commerce Merchants
        </p>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}
      >
        <h3
          style={{
            marginTop: 0,
            marginBottom: "12px",
            color: "#1e293b"
          }}
        >
          Select Product
        </h3>

        <select
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
            width: "100%",
            boxSizing: "border-box",
            fontSize: "14px"
          }}
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        >
          <option value="">Choose a product</option>
          <option value="Blue T-Shirt">Blue T-Shirt</option>
          <option value="Black Shoes">Black Shoes</option>
          <option value="Red Hoodie">Red Hoodie</option>
        </select>

        {product && (
          <p
            style={{
              marginBottom: 0,
              marginTop: "12px",
              color: "#475569",
              fontSize: "14px"
            }}
          >
            Selected Product: <strong>{product}</strong>
          </p>
        )}
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}
      >
        <h3
          style={{
            marginTop: 0,
            marginBottom: "12px",
            color: "#1e293b"
          }}
        >
          Add Inventory Note
        </h3>

        <input
          type="text"
          placeholder="Enter a note about this product..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
            boxSizing: "border-box",
            fontSize: "14px"
          }}
        />

        {note && (
          <p
            style={{
              marginBottom: 0,
              marginTop: "12px",
              color: "#475569",
              fontSize: "14px"
            }}
          >
            Current Note: <strong>{note}</strong>
          </p>
        )}
      </div>


      <button
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          padding: "11px 18px",
          borderRadius: "7px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "600",
          width: "100%",
          boxShadow: "0 2px 5px rgba(37,99,235,0.25)"
        }}
        onClick={() => {
          if (!product || !note) return;

          setSavedNotes([
            ...savedNotes,
            {
              id: Date.now(),
              product,
              note
            }
          ]);

          setNote("");
          setProduct("");
        }}
      >
        Save Note
      </button>

      <br />
      <br />


      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px"
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            border: "1px solid #e2e8f0"
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "13px",
              fontWeight: "600"
            }}
          >
            TOTAL NOTES
          </p>

          <h2
            style={{
              margin: "8px 0 0",
              color: "#1e293b",
              fontSize: "28px"
            }}
          >
            {savedNotes.length}
          </h2>

          <p
            style={{
              margin: "5px 0 0",
              color: "#94a3b8",
              fontSize: "13px"
            }}
          >
            Saved inventory notes
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            border: "1px solid #e2e8f0"
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "13px",
              fontWeight: "600"
            }}
          >
            PRODUCTS TRACKED
          </p>

          <h2
            style={{
              margin: "8px 0 0",
              color: "#1e293b",
              fontSize: "28px"
            }}
          >
            {new Set(savedNotes.map(n => n.product)).size}
          </h2>

          <p
            style={{
              margin: "5px 0 0",
              color: "#94a3b8",
              fontSize: "13px"
            }}
          >
            Unique products
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          border: "1px solid #e2e8f0"
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: "12px",
            color: "#1e293b",
            fontSize: "20px"
          }}
        >
          Saved Notes
        </h2>

        <input
          type="text"
          placeholder="Search by product or note..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
            boxSizing: "border-box",
            fontSize: "14px"
          }}
        />
      </div>

      {savedNotes.length === 0 && (
        <p>No notes saved yet.</p>
      )}

      {savedNotes
        .filter((savedNote) =>
          savedNote.product
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          savedNote.note
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
        .map((savedNote) => (

        <div
          key={savedNote.id}
          style={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            padding: "18px",
            marginTop: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px"
            }}
          >
            <strong
              style={{
                color: "#1e293b",
                fontSize: "15px"
              }}
            >
              {savedNote.product}
            </strong>

            <span
              style={{
                backgroundColor: "#eff6ff",
                color: "#2563eb",
                padding: "4px 8px",
                borderRadius: "5px",
                fontSize: "12px",
                fontWeight: "600"
              }}
            >
              Inventory Note
            </span>
          </div>

          <p
            style={{
              margin: "0 0 16px",
              color: "#475569",
              fontSize: "14px",
              lineHeight: "1.5"
            }}
          >
            {savedNote.note}
          </p>

          <div
            style={{
              display: "flex",
              gap: "8px"
            }}
          >
            <button
              style={{
                backgroundColor: "#f59e0b",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "600"
              }}
              onClick={() => {
                const updatedText = prompt(
                  "Edit note:",
                  savedNote.note
                );

                if (!updatedText) return;

                const updatedNotes = savedNotes.map((note) =>
                  note.id === savedNote.id
                    ? { ...note, note: updatedText }
                    : note
                );

                setSavedNotes(updatedNotes);
              }}
            >
              Edit
            </button>

            <button
              style={{
                backgroundColor: "#dc2626",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "600"
              }}
              onClick={() => {
                const updatedNotes = savedNotes.filter(
                  (note) => note.id !== savedNote.id
                );

                setSavedNotes(updatedNotes);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}


    </div>
  );
      </div>
    );
}

export default App;