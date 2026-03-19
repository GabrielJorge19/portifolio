import React, { createContext, useContext, useState } from "react";
import { translations, profile } from "@/translations"

const TranslationsContext = createContext<any>(null);


export function TranslationsProvider({ children }: { children: React.ReactNode }) {
    const languagues = Object.keys(translations);
    const [language, setLanguage] = useState<"pt">("pt");
    const translation = translations[language];

    const data = {
        translation,
        languagues,
        language,
        setLanguage,
        profile
    }

    return <TranslationsContext.Provider value={data}>
        {children}
    </TranslationsContext.Provider>
}


export function useLanguages() {
    const context = useContext(TranslationsContext);
    if (!context) {
        throw new Error("useApp deve ser usado dentro do AppProvider");
    }
    return context;
}