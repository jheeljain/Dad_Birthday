import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LogOut, Plus, Trash2, MapPin, Calendar, PenLine } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface JournalEntry {
  id: string;
  country: string;
  date: string;
  title: string;
  content: string;
  createdAt: number;
}

const STORAGE_KEY = "tj51-journal-entries";
const AUTH_KEY = "tj51-journal-auth";

const LoginForm = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "tarunjain" && password === "jheelisbest") {
      sessionStorage.setItem(AUTH_KEY, "true");
      onLogin();
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Travel Journal</h1>
          <p className="text-muted-foreground font-sans text-sm">Private access only</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-2 uppercase tracking-widest">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-2 uppercase tracking-widest">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-destructive text-sm font-sans">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground rounded-lg py-3 font-sans text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Enter Journal
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const JournalDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ country: "", date: "", title: "", content: "" });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  const save = (updated: JournalEntry[]) => {
    setEntries(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const addEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.country.trim() || !form.title.trim()) return;
    const entry: JournalEntry = {
      id: crypto.randomUUID(),
      ...form,
      createdAt: Date.now(),
    };
    save([entry, ...entries]);
    setForm({ country: "", date: "", title: "", content: "" });
    setShowForm(false);
  };

  const deleteEntry = (id: string) => {
    save(entries.filter((e) => e.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground">Travel Journal</h1>
            <p className="text-muted-foreground font-sans text-sm mt-1">Your private travel diary</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-4 py-2 font-sans text-sm hover:opacity-90 transition-opacity"
            >
              <Plus className="w-4 h-4" />
              New Entry
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 bg-secondary text-secondary-foreground rounded-lg px-4 py-2 font-sans text-sm hover:bg-muted transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* New Entry Form */}
        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            onSubmit={addEntry}
            className="bg-card border border-border rounded-2xl p-6 mb-8 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans text-muted-foreground mb-1 uppercase tracking-widest">Country</label>
                <input
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g. Japan"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-sans text-muted-foreground mb-1 uppercase tracking-widest">Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-sans text-muted-foreground mb-1 uppercase tracking-widest">Title</label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="A memorable day in..."
                required
              />
            </div>
            <div>
              <label className="block text-xs font-sans text-muted-foreground mb-1 uppercase tracking-widest">Journal Entry</label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                rows={5}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Write your travel memories..."
              />
            </div>
            <div className="flex gap-3 justify-end">
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-sm text-muted-foreground font-sans hover:text-foreground transition-colors">
                Cancel
              </button>
              <button type="submit" className="bg-primary text-primary-foreground rounded-lg px-6 py-2 font-sans text-sm hover:opacity-90 transition-opacity">
                Save Entry
              </button>
            </div>
          </motion.form>
        )}

        {/* Entries */}
        {entries.length === 0 ? (
          <div className="text-center py-20">
            <PenLine className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground font-sans">No journal entries yet. Start writing!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {entries.map((entry) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-2xl p-6 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">{entry.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1 text-xs text-primary font-sans">
                        <MapPin className="w-3 h-3" /> {entry.country}
                      </span>
                      {entry.date && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground font-sans">
                          <Calendar className="w-3 h-3" /> {entry.date}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => deleteEntry(entry.id)}
                    className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                {entry.content && (
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed whitespace-pre-wrap">{entry.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

const Journal = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthenticated(false);
  };

  if (!authenticated) {
    return <LoginForm onLogin={() => setAuthenticated(true)} />;
  }

  return <JournalDashboard onLogout={handleLogout} />;
};

export default Journal;
