function timeAgo(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function DoubtCard({ doubt, isActive, onClick, currentAlias }) {
  const isMine = doubt.authorId === currentAlias;

  return (
    <div
      className={`doubt-card ${isActive ? 'doubt-card--active' : ''} ${doubt.isResolved ? 'doubt-card--resolved' : ''}`}
      onClick={onClick}
    >
      <div className="card-top">
        <div className="card-meta">
          <span className="card-author">{doubt.authorId}</span>
          {isMine && <span className="card-mine-badge">you</span>}
          {doubt.isResolved && <span className="card-resolved-badge">✓ resolved</span>}
        </div>
        <span className="card-time">{timeAgo(doubt.createdAt)}</span>
      </div>

      <p className="card-question">{doubt.questionText}</p>

      {doubt.imageUrl && (
        <div className="card-img-preview">
          <img src={doubt.imageUrl} alt="doubt attachment" onError={(e) => e.target.style.display = 'none'} />
        </div>
      )}

      <div className="card-footer">
        <span className="card-open-hint">{isActive ? '↑ close thread' : '↓ open thread'}</span>
      </div>
    </div>
  );
}
