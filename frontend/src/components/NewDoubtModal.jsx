import { useState } from 'react';
import { createDoubt } from '../api';

export default function NewDoubtModal({ alias, onClose, onCreated }) {
  const [questionText, setQuestionText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showImgInput, setShowImgInput] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!questionText.trim()) {
      setError('Please describe your doubt.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      await createDoubt(alias, questionText.trim(), imageUrl.trim() || null);
      // Backend only returns boolean; caller triggers GET /doubts to refresh
      await onCreated();
    } catch (e) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">Raise a Doubt</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <label className="field-label">Your question</label>
          <textarea
            className="field-textarea"
            placeholder="Describe what you're confused about..."
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            rows={4}
            autoFocus
          />

          <button
            className="img-attach-toggle"
            onClick={() => setShowImgInput((s) => !s)}
          >
            {showImgInput ? '− Remove image' : '⊕ Attach image URL'}
          </button>

          {showImgInput && (
            <input
              type="text"
              className="field-input"
              placeholder="Paste an image URL (e.g. https://i.imgur.com/xyz.png)"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          )}

          {error && <p className="field-error">{error}</p>}
        </div>

        <div className="modal-footer">
          <span className="modal-posting-as">posting as <strong>{alias}</strong></span>
          <button
            className="modal-submit-btn"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? 'Posting...' : 'Post Doubt'}
          </button>
        </div>
      </div>
    </div>
  );
}
