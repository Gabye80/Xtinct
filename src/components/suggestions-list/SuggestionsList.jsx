import "./SuggestionsList.css";

const SuggestionsList = ({ onEdit, onDelete, suggestions }) => {
  return (
    <div className="suggest-list">
      {Object.entries(suggestions).map(([type, items]) =>
        items.length > 0
          ? items.map(({ id, ...item }) => (
              <div className="suggest-card" key={id}>
                <p>
                  <strong>
                    {item.endangeredName || item.extinctName || item.newsDescription}
                  </strong>
                  <br />
                  <i>{item.scientificName || item.newsLink}</i>
                </p>
                <p>{item.comment}</p>
                <button className="edit-btn" onClick={() => onEdit(type, id, item)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => onDelete(type, id)}>
                  Delete
                </button>
              </div>
            ))
          : null
      )}
    </div>
  );
};

export default SuggestionsList;
