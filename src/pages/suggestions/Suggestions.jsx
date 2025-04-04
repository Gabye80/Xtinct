import { useState, useEffect, useRef } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import xtinctService from "../../services/xtinctService";
import "./Suggestions.css";
import SuggestionsList from "../../components/suggestions-list/SuggestionsList";

function Suggestions() {
  const [category, setCategory] = useState("Endangered Species");
  const [formData, setFormData] = useState({
    speciesName: "",
    scientificName: "",
    comment: "",
    shortDescription: "",
    link: "",
  });
  const [suggestions, setSuggestions] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingKey, setEditingKey] = useState(null);
  const formRef = useRef(null);

  const fetchSuggestions = async () => {
    const endangered = await xtinctService.getSuggestions(
      "endangeredSuggestion"
    );
    const extinct = await xtinctService.getSuggestions("extinctSuggestion");
    const news = await xtinctService.getSuggestions("newsSuggestion");
    setSuggestions({
      endangeredSuggestion: endangered,
      extinctSuggestion: extinct,
      newsSuggestion: news,
    });
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (catKey, key, item) => {
    setIsEditing(true);
    setEditingCategory(catKey);
    setEditingKey(key);
  
    if (catKey === "newsSuggestion") {
      setCategory("News Piece");
      setFormData({
        shortDescription: item.newsDescription,
        link: item.newsLink,
        comment: item.comment,
      });
    } else if (catKey === "endangeredSuggestion") {
      setCategory("Endangered Species");
      setFormData({
        speciesName: item.endangeredName,
        scientificName: item.scientificName,
        comment: item.comment,
      });
    } else {
      setCategory("Extinct Species");
      setFormData({
        speciesName: item.extinctName,
        scientificName: item.scientificName,
        comment: item.comment,
      });
    }
  
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  

  const handleDelete = async (catKey, key) => {
    await xtinctService.removeSuggestion(catKey, key);
    setSuggestions((prev) => ({
      ...prev,
      [catKey]: prev[catKey].filter((suggestion) => suggestion.id !== key),
    }));

    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data;
    let target;

    if (category === "News Piece") {
      data = {
        newsDescription: formData.shortDescription,
        newsLink: formData.link,
        comment: formData.comment,
      };
      target = "newsSuggestion";
    } else if (category === "Endangered Species") {
      data = {
        endangeredName: formData.speciesName,
        scientificName: formData.scientificName,
        comment: formData.comment,
      };
      target = "endangeredSuggestion";
    } else {
      data = {
        extinctName: formData.speciesName,
        scientificName: formData.scientificName,
        comment: formData.comment,
      };
      target = "extinctSuggestion";
    }

    if (isEditing) {
      await xtinctService.updateSuggestion(editingCategory, editingKey, data);
      setSuggestions((prev) => ({
        ...prev,
        [editingCategory]: prev[editingCategory].map((item) =>
          item.id === editingKey ? { id: editingKey, ...data } : item
        ),
      }));
      setIsEditing(false);
      setEditingCategory(null);
      setEditingKey(null);
    } else {
      const key = await xtinctService.addSuggestion(target, data);
      setSuggestions((prev) => ({
        ...prev,
        [target]: [...(prev[target] || []), { id: key, ...data }],
      }));
    }

    setFormData({
      speciesName: "",
      scientificName: "",
      comment: "",
      shortDescription: "",
      link: "",
    });
  };

  return (
    <>
      <div className="suggest-body">
        <Header />
        <div className="suggest-page">
          <div className="suggest-heading">
            <h2>Suggestions</h2>
            <p>Submit or edit your contributions</p>
          </div>
          <div
            ref={formRef}
            className={isEditing ? "suggestion-box-updating" : "suggestion-box"}
          >
            <h2>{isEditing ? "Update Suggestion" : "Submit a Suggestion!"}</h2>
            <form onSubmit={handleSubmit}>
              <label>Category:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                disabled={isEditing}
              >
                <option value="Endangered Species">Endangered Species</option>
                <option value="Extinct Species">Extinct Species</option>
                <option value="News Piece">News Piece</option>
              </select>

              {category !== "News Piece" && (
                <>
                  <label>Species Name:</label>
                  <input
                    type="text"
                    name="speciesName"
                    value={formData.speciesName}
                    onChange={handleChange}
                    required
                  />

                  <label>Scientific Name:</label>
                  <input
                    type="text"
                    name="scientificName"
                    value={formData.scientificName}
                    onChange={handleChange}
                    required
                  />

                  <label>Comment:</label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                  ></textarea>
                </>
              )}

              {category === "News Piece" && (
                <>
                  <label>Short Description:</label>
                  <input
                    type="text"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    required
                  />

                  <label>Link:</label>
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    required
                  />

                  <label>Comment:</label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                  ></textarea>
                </>
              )}

              <button type="submit">
                {isEditing ? "Update Suggestion" : "Submit"}
              </button>
            </form>
          </div>

          <SuggestionsList
            onEdit={handleEdit}
            onDelete={handleDelete}
            suggestions={suggestions}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Suggestions;
