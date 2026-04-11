import DoubtCard from './DoubtCard';

export default function DoubtFeed({ doubts, activeDoubt, onSelectDoubt, alias }) {
  return (
    <div className="doubt-feed">
      <div className="feed-header">
        <h2 className="feed-title">Active Threads</h2>
        <span className="feed-count">{doubts.length} doubt{doubts.length !== 1 ? 's' : ''}</span>
      </div>

      {doubts.length === 0 ? (
        <div className="feed-empty">
          <p>No doubts yet.</p>
          <p className="feed-empty-sub">Be the first to raise one.</p>
        </div>
      ) : (
        <div className="card-list">
          {doubts.map((doubt) => (
            <DoubtCard
              key={doubt.doubtId}
              doubt={doubt}
              isActive={activeDoubt?.doubtId === doubt.doubtId}
              onClick={() =>
                onSelectDoubt(
                  activeDoubt?.doubtId === doubt.doubtId ? null : doubt
                )
              }
              currentAlias={alias}
            />
          ))}
        </div>
      )}
    </div>
  );
}
