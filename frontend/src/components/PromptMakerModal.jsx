import { useState } from 'react';
import { generatePrompt } from '../api';

const RESPONSE_TYPES = ['Explanation', 'Step-by-step guide', 'Code example', 'Summary', 'Comparison'];
const LENGTHS = ['Brief', 'Medium', 'Detailed'];

export default function PromptMakerModal({ onClose }) {
  const [form, setForm] = useState({
    context: '',
    imageUrl: '',
    responseType: '',
    length: '',
    extraInstructions: '',
  });
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [showImgInput, setShowImgInput] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleGenerate = async () => {
    if (!form.context.trim()) {
      setError('Please describe the context or task.');
      return;
    }
    setError('');
    setGenerating(true);
    try {
      const result = await generatePrompt(form);
      setGeneratedPrompt(result);
    } catch (e) {
      setError('Failed to generate. Is the backend running?');
    } finally {
      setGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal modal--wide">
        <div className="modal-header">
          <h3 className="modal-title">Prompt Maker</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {!generatedPrompt ? (
          <>
            <div className="modal-body">
              <label className="field-label">Context / Task</label>
              <textarea
                className="field-textarea"
                placeholder="What do you need the AI to do? E.g. 'Explain binary search trees to a beginner'"
                value={form.context}
                onChange={update('context')}
                rows={3}
                autoFocus
              />

              <div className="field-row">
                <div className="field-group">
                  <label className="field-label">Response type</label>
                  <select className="field-select" value={form.responseType} onChange={update('responseType')}>
                    <option value="">— choose —</option>
                    {RESPONSE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="field-group">
                  <label className="field-label">Length</label>
                  <select className="field-select" value={form.length} onChange={update('length')}>
                    <option value="">— choose —</option>
                    {LENGTHS.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              <label className="field-label">Extra instructions</label>
              <input
                type="text"
                className="field-input"
                placeholder="e.g. Use analogies, avoid jargon..."
                value={form.extraInstructions}
                onChange={update('extraInstructions')}
              />

              <button
                className="img-attach-toggle"
                onClick={() => setShowImgInput((s) => !s)}
              >
                {showImgInput ? '− Remove image context' : '⊕ Add image URL for context'}
              </button>

              {showImgInput && (
                <input
                  type="text"
                  className="field-input"
                  placeholder="Paste an image URL..."
                  value={form.imageUrl}
                  onChange={update('imageUrl')}
                />
              )}

              {error && <p className="field-error">{error}</p>}
            </div>

            <div className="modal-footer">
              <button
                className="modal-submit-btn"
                onClick={handleGenerate}
                disabled={generating}
              >
                {generating ? 'Generating...' : '✓ Generate Prompt'}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="modal-body">
              <div className="generated-prompt-header">
                <span className="field-label">Here is your prompt!</span>
                <button className="copy-btn" onClick={handleCopy}>
                  {copied ? '✓ Copied' : '⧉ Copy'}
                </button>
              </div>
              <div className="generated-prompt-box">
                <pre className="generated-prompt-text">{generatedPrompt}</pre>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-ghost-btn" onClick={() => setGeneratedPrompt('')}>
                ← Make another
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
