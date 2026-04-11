import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DoubtFeed from './components/DoubtFeed';
import ActiveThread from './components/ActiveThread';
import RightPanel from './components/RightPanel';
import PromptMakerModal from './components/PromptMakerModal';
import NewDoubtModal from './components/NewDoubtModal';
import { generateAlias, getAllDoubts } from './api';

export default function App() {
  const [alias, setAlias] = useState('');
  const [doubts, setDoubts] = useState([]);
  const [activeDoubt, setActiveDoubt] = useState(null);
  const [view, setView] = useState('all'); // 'all' | 'mine'
  const [showPromptMaker, setShowPromptMaker] = useState(false);
  const [showNewDoubt, setShowNewDoubt] = useState(false);
  const [loading, setLoading] = useState(true);

  // On mount: fetch alias and doubts
  useEffect(() => {
    (async () => {
      try {
        const [a, d] = await Promise.all([generateAlias(), getAllDoubts()]);
        setAlias(a.trim());
        setDoubts(d);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Refresh the full doubts list (called after POST /doubts to get the new ID)
  const refreshDoubts = async () => {
    try {
      const d = await getAllDoubts();
      setDoubts(d);
    } catch (e) {
      console.error(e);
    }
  };

  // Filtered list for "my doubts" view
  const visibleDoubts =
    view === 'mine'
      ? doubts.filter((d) => d.authorId === alias)
      : doubts;

  // Keep activeDoubt in sync after a resolve
  const syncActiveDoubt = (updatedDoubt) => {
    setDoubts((prev) =>
      prev.map((d) => (d.doubtId === updatedDoubt.doubtId ? updatedDoubt : d))
    );
    setActiveDoubt(updatedDoubt);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-pulse">SereneSpace</div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Sidebar
        view={view}
        setView={setView}
        onRaiseDoubt={() => setShowNewDoubt(true)}
        onPromptMaker={() => setShowPromptMaker(true)}
      />

      <main className="feed-area">
        <DoubtFeed
          doubts={visibleDoubts}
          activeDoubt={activeDoubt}
          onSelectDoubt={setActiveDoubt}
          alias={alias}
          onDoubtResolved={syncActiveDoubt}
          refreshDoubts={refreshDoubts}
        />
      </main>

      <RightPanel alias={alias} activeDoubt={activeDoubt} />

      {/* Expanded thread panel overlays feed when a doubt is open */}
      {activeDoubt && (
        <ActiveThread
          doubt={activeDoubt}
          alias={alias}
          onClose={() => setActiveDoubt(null)}
          onResolved={syncActiveDoubt}
          refreshDoubts={refreshDoubts}
        />
      )}

      {showPromptMaker && (
        <PromptMakerModal onClose={() => setShowPromptMaker(false)} />
      )}

      {showNewDoubt && (
        <NewDoubtModal
          alias={alias}
          onClose={() => setShowNewDoubt(false)}
          onCreated={async () => {
            await refreshDoubts();
            setShowNewDoubt(false);
          }}
        />
      )}
    </div>
  );
}
