import { useState, useEffect, useRef } from 'react';
import { getReplies, postReply, resolveDoubt } from '../api';

function timeAgo(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function ActiveThread({ doubt, alias, onClose, onResolved, refreshDoubts }) {
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [replyImg, setReplyImg] = useState('');
  const [showImgInput, setShowImgInput] = useState(false);
  const [sending, setSending] = useState(false);
  const [resolving, setResolving] = useState(false);
  const bottomRef = useRef(null);

  // Fetch replies immediately
  const fetchReplies = async () => {
    try {
      const r = await getReplies(doubt.doubtId);
      setReplies(r);
    } catch (e) {
      console.error(e);
    }
  };

  // Poll every 4 seconds while this thread is open
  useEffect(() => {
    fetchReplies();
    const interval = setInterval(fetchReplies, 4000);
    return () => clearInterval(interval); // cleanup on unmount
  }, [doubt.doubtId]);

  // Auto-scroll to bottom when replies update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [replies]);

  const handleSendReply = async () => {
    if (!replyText.trim()) return;
    setSending(true);
    try {
      await postReply(doubt.doubtId, alias, replyText.trim(), replyImg.trim() || null);
      setReplyText('');
      setReplyImg('');
      setShowImgInput(false);
      await fetchReplies();
    } catch (e) {
      console.error(e);
    } finally {
      setSending(false);
    }
  };

  const handleResolve = async () => {
    setResolving(true);
    try {
      await resolveDoubt(doubt.doubtId);
      const updated = { ...doubt, isResolved: true };
      onResolved(updated);
      await refreshDoubts();
    } catch (e) {
      console.error(e);
    } finally {
      setResolving(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };

  const isOwner = doubt.authorId === alias;

  return (
    <div className="thread-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="thread-panel">
        {/* Header */}
        <div className="thread-header">
          <div className="thread-header-left">
            <button className="thread-close-btn" onClick={onClose} title="Close thread">✕</button>
            <div>
              <span className="thread-author">{doubt.authorId}</span>
              {doubt.isResolved && <span className="thread-resolved-tag">✓ resolved</span>}
            </div>
          </div>
          {isOwner && !doubt.isResolved && (
            <button
              className="resolve-btn"
              onClick={handleResolve}
              disabled={resolving}
            >
              {resolving ? '...' : '✓ Mark Resolved'}
            </button>
          )}
        </div>

        {/* Original Question */}
        <div className="thread-question">
          <p className="thread-question-text">{doubt.questionText}</p>
          {doubt.imageUrl && (
            <img
              src={doubt.imageUrl}
              alt="attachment"
              className="thread-question-img"
              onError={(e) => e.target.style.display = 'none'}
            />
          )}
        </div>

        {/* Replies */}
        <div className="thread-replies">
          {replies.length === 0 ? (
            <p className="thread-no-replies">No replies yet. Be the first to help.</p>
          ) : (
            replies.map((r) => (
              <div
                key={r.replyID}
                className={`reply-bubble ${r.authorId === alias ? 'reply-bubble--mine' : ''}`}
              >
                <div className="reply-meta">
                  <span className="reply-author">{r.authorId}</span>
                  <span className="reply-time">{timeAgo(r.createdAt)}</span>
                </div>
                <p className="reply-text">{r.replyText}</p>
                {r.imageUrl && (
                  <img
                    src={r.imageUrl}
                    alt="reply attachment"
                    className="reply-img"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                )}
              </div>
            ))
          )}
          <div ref={bottomRef} />
        </div>

        {/* Reply input */}
        <div className="thread-reply-area">
          {showImgInput && (
            <input
              type="text"
              className="reply-img-input"
              placeholder="Paste an image URL (e.g. from imgur.com)..."
              value={replyImg}
              onChange={(e) => setReplyImg(e.target.value)}
            />
          )}
          <div className="reply-input-row">
            <textarea
              className="reply-textarea"
              placeholder="Write a reply... (Enter to send)"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={2}
            />
            <button
              className="img-toggle-btn"
              onClick={() => setShowImgInput((s) => !s)}
              title="Attach image URL"
            >
              ⊕
            </button>
            <button
              className="send-btn"
              onClick={handleSendReply}
              disabled={sending || !replyText.trim()}
            >
              {sending ? '...' : '↑'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
