import React, { useState } from 'react';

function FieldNotes() {
  const [notes, setNotes] = useState([
    { id: 1, date: '2024-01-15', title: 'Site Inspection', content: 'Foundation looks solid. No cracks visible.', tags: 'inspection' }
  ]);

  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    tags: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote(prev => ({ ...prev, [name]: value }));
  };

  const addNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      const date = new Date().toISOString().split('T')[0];
      setNotes([...notes, { id: Date.now(), date, ...newNote }]);
      setNewNote({ title: '', content: '', tags: '' });
    } else {
      alert('Please enter a title and content.');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const searchTags = (tag) => {
    return notes.filter(note => note.tags && note.tags.toLowerCase().includes(tag.toLowerCase()));
  };

  return (
    <div>
      <h3>Field Notes</h3>
      
      <div className="mb-3 p-3 border rounded">
        <h5>Add New Note</h5>
        <div className="mb-2">
          <label className="form-label">Title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Note title"
            value={newNote.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Content:</label>
          <textarea
            name="content"
            className="form-control"
            placeholder="Write your notes here..."
            value={newNote.content}
            onChange={handleInputChange}
            rows="4"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tags:</label>
          <input
            type="text"
            name="tags"
            className="form-control"
            placeholder="e.g., inspection, urgent, follow-up"
            value={newNote.tags}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={addNote} className="btn btn-primary">
          Save Note
        </button>
      </div>

      <hr />
      <h4>Notes List ({notes.length})</h4>
      
      {notes.length === 0 ? (
        <p className="text-muted">No notes yet. Create your first note!</p>
      ) : (
        <div className="notes-container">
          {notes.map((note) => (
            <div key={note.id} className="card mb-3">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="card-title mb-1">{note.title}</h5>
                    <small className="text-muted">Date: {note.date}</small>
                  </div>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">{note.content}</p>
                {note.tags && (
                  <div className="mt-2">
                    {note.tags.split(',').map((tag, idx) => (
                      <span key={idx} className="badge bg-secondary me-2">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FieldNotes;
