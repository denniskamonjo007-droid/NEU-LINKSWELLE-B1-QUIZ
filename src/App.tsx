import React, { useEffect, useRef, useState } from 'react';
import {
  state,
  subscribe,
  loadState,
  setTab,
  setScreen,
  t,
  applyThemeAndFont
} from './state.js';

import { renderHome } from './views/home.js';
import { renderTopic } from './views/topic.js';
import { renderQuiz } from './views/quiz.js';
import { renderStats } from './views/stats.js';
import { renderSaved } from './views/saved.js';
import { renderSearch } from './views/search.js';
import { renderProfile } from './views/profile.js';
import { renderSettings } from './views/settings.js';
import { renderGrammar } from './views/grammar.js';
import { renderGrammarQuiz } from './views/grammarQuiz.js';
import { renderSRSReview } from './views/srsReview.js';
import { precacheQuizContent } from './utils/serviceWorker';
import { getSRSMetrics } from './utils/srsManager.js';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTab, setCurrentTab] = useState(state.tab);
  const [currentScreen, setCurrentScreen] = useState(state.screen);
  const [bookmarksCount, setBookmarksCount] = useState(state.bookmarks?.length || 0);
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [renderTick, setRenderTick] = useState(0);

  // Initialize state from localStorage and listen to connectivity
  useEffect(() => {
    loadState();
    applyThemeAndFont();

    const unsubscribe = subscribe((updatedState: any) => {
      setCurrentTab(updatedState.tab);
      setCurrentScreen(updatedState.screen);
      setBookmarksCount(updatedState.bookmarks?.length || 0);
      setRenderTick((t) => t + 1);
    });

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Warm up service worker offline cache for quiz content after boot
    const timer = setTimeout(() => {
      precacheQuizContent().catch(() => {});
    }, 1200);

    return () => {
      unsubscribe();
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, []);

  // Re-render active view whenever tab or screen changes
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    el.innerHTML = '';

    window.scrollTo({ top: 0, behavior: 'instant' });

    if (state.screen === 'topic') {
      renderTopic(el);
    } else if (state.screen === 'quiz') {
      renderQuiz(el);
    } else if (state.screen === 'grammar-quiz') {
      renderGrammarQuiz(el);
    } else if (state.screen === 'srs-review') {
      renderSRSReview(el);
    } else {
      // Screen is 'home' -> dispatch by tab
      switch (state.tab) {
        case 'grammar':
          renderGrammar(el);
          break;
        case 'stats':
          renderStats(el);
          break;
        case 'saved':
          renderSaved(el);
          break;
        case 'search':
          renderSearch(el);
          break;
        case 'profile':
          renderProfile(el);
          break;
        case 'settings':
          renderSettings(el);
          break;
        case 'home':
        default:
          renderHome(el);
          break;
      }
    }
  }, [currentTab, currentScreen, renderTick]);

  const srsMetrics = getSRSMetrics();

  const navItems = [
    { id: 'home', icon: '🏠', label: t('Home', 'Start') },
    { id: 'grammar', icon: '📐', label: t('Grammar', 'Grammatik') },
    { id: 'stats', icon: '📊', label: t('Stats', 'Statistik') },
    { id: 'saved', icon: '⭐', label: t('Saved', 'Gemerkt'), count: bookmarksCount },
    { id: 'search', icon: '🔍', label: t('Search', 'Suche') },
    { id: 'profile', icon: '👤', label: t('Profile', 'Profil') }
  ];

  const isFullScreenSubscreen = currentScreen === 'quiz' || currentScreen === 'grammar-quiz' || currentScreen === 'srs-review';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Offline Status Banner */}
      {!isOnline && (
        <div className="bg-amber-500 text-amber-950 dark:bg-amber-600 dark:text-amber-100 text-xs px-3.5 py-2 font-bold flex items-center justify-between shadow-xs sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-900 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-900"></span>
            </span>
            <span>⚡ {t('Offline Mode Active — Basic quiz content is loaded from cache', 'Offline-Modus aktiv — Basis-Quizze & Vokabeln werden aus dem Cache geladen')}</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider bg-black/15 px-1.5 py-0.5 rounded font-black">
            Offline
          </span>
        </div>
      )}

      {/* Main View Container */}
      <main className="flex-1 w-full mx-auto max-w-2xl">
        <div ref={containerRef} id="view-container" />
      </main>

      {/* Bottom Sticky Tab Navigation */}
      {!isFullScreenSubscreen && (
        <nav
          aria-label="Bottom Navigation"
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-slate-800 py-1.5 px-2 select-none shadow-lg"
        >
          <div className="max-w-2xl mx-auto flex items-center justify-around">
            {navItems.map((item) => {
              const isActive = currentScreen === 'home' && currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (currentScreen !== 'home') {
                      setScreen('home');
                    }
                    setTab(item.id);
                  }}
                  className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition cursor-pointer relative min-w-[52px] ${
                    isActive
                      ? 'theme-nav-active text-emerald-600 dark:text-emerald-400 font-black'
                      : 'text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300 font-semibold'
                  }`}
                >
                  <span className="text-lg leading-none">{item.icon}</span>
                  <span className="text-[10px] tracking-tight mt-1">{item.label}</span>
                  {item.count && item.count > 0 ? (
                    <span className="absolute -top-0.5 right-1 px-1.5 py-0.2 rounded-full text-white text-[8px] font-black leading-tight bg-emerald-500">
                      {item.count}
                    </span>
                  ) : null}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
