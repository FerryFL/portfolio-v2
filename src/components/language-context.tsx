"use client"

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react"

export type Language = "en" | "id"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const languageListeners = new Set<() => void>()

function subscribeToLanguage(listener: () => void) {
  languageListeners.add(listener)
  window.addEventListener("storage", listener)

  return () => {
    languageListeners.delete(listener)
    window.removeEventListener("storage", listener)
  }
}

function getStoredLanguage(): Language {
  const savedLanguage = window.localStorage.getItem("portfolio-language")
  return savedLanguage === "id" ? "id" : "en"
}

function getServerLanguage(): Language {
  return "en"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getStoredLanguage,
    getServerLanguage,
  )

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  function setLanguage(nextLanguage: Language) {
    window.localStorage.setItem("portfolio-language", nextLanguage)
    document.documentElement.lang = nextLanguage
    languageListeners.forEach((listener) => listener())
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "en" ? "id" : "en"),
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}

