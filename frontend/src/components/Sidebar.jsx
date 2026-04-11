export default function Sidebar({ view, setView, onRaiseDoubt, onPromptMaker }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-mark">✦</span>
        <span className="logo-text">SereneSpace</span>
      </div>

      <nav className="sidebar-nav">
        <button
          className={`nav-btn ${view === 'raise' ? 'nav-btn--active' : ''}`}
          onClick={onRaiseDoubt}
        >
          <span className="nav-icon">⊕</span>
          <span>Raise a Doubt</span>
        </button>

        <button
          className={`nav-btn ${view === 'mine' ? 'nav-btn--active' : ''}`}
          onClick={() => setView(view === 'mine' ? 'all' : 'mine')}
        >
          <span className="nav-icon">◈</span>
          <span>All Your Doubts</span>
          {view === 'mine' && <span className="nav-badge">on</span>}
        </button>

        <button
          className={`nav-btn ${view === 'prompt' ? 'nav-btn--active' : ''}`}
          onClick={onPromptMaker}
        >
          <span className="nav-icon">◎</span>
          <span>Prompt Maker</span>
        </button>
      </nav>

      <div className="sidebar-footer">
        <span className="sidebar-hint">collaborative learning</span>
      </div>
    </aside>
  );
}
