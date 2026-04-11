export default function RightPanel({ alias, activeDoubt }) {
  // Generate a stable colour from the alias string
  const hue = alias
    ? alias.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360
    : 180;

  return (
    <aside className="right-panel">
      <div className="user-card">
        <div
          className="user-avatar"
          style={{ '--avatar-hue': hue }}
        >
          <span className="avatar-initial">
            {alias ? alias[0].toUpperCase() : '?'}
          </span>
        </div>
        <div className="user-alias">{alias || 'Loading...'}</div>
        <div className="user-label">your anonymous identity</div>
      </div>

      {activeDoubt && (
        <div className="thread-meta-card">
          <p className="thread-meta-label">Viewing thread</p>
          <p className="thread-meta-question">{activeDoubt.questionText}</p>
          <div className="thread-meta-status">
            {activeDoubt.isResolved
              ? <span className="status-resolved">✓ Resolved</span>
              : <span className="status-open">● Open</span>}
          </div>
        </div>
      )}
    </aside>
  );
}
