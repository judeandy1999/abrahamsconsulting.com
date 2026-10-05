"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type ExecutiveRecruitingFormPath = "employer" | "candidate" | null;

type ExecutiveRecruitingFormContextValue = {
  activePath: ExecutiveRecruitingFormPath;
  setActivePath: (path: ExecutiveRecruitingFormPath) => void;
  openCandidateForm: () => void;
  openEmployerForm: () => void;
};

const ExecutiveRecruitingFormContext = createContext<ExecutiveRecruitingFormContextValue | null>(null);

const FORM_SECTION_ID = "exec-recruiting-embed-form";

function scrollToFormSection() {
  requestAnimationFrame(() => {
    document.getElementById(FORM_SECTION_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export function ExecutiveRecruitingFormProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const [activePath, setActivePath] = useState<ExecutiveRecruitingFormPath>(null);

  useEffect(() => {
    const formParam = searchParams.get("form");
    if (formParam === "candidate") {
      setActivePath("candidate");
      scrollToFormSection();
    } else if (formParam === "employer") {
      setActivePath("employer");
      scrollToFormSection();
    }
  }, [searchParams]);

  const openCandidateForm = useCallback(() => {
    setActivePath("candidate");
    scrollToFormSection();
  }, []);

  const openEmployerForm = useCallback(() => {
    setActivePath("employer");
    scrollToFormSection();
  }, []);

  const value = useMemo(
    () => ({
      activePath,
      setActivePath,
      openCandidateForm,
      openEmployerForm
    }),
    [activePath, openCandidateForm, openEmployerForm]
  );

  return <ExecutiveRecruitingFormContext.Provider value={value}>{children}</ExecutiveRecruitingFormContext.Provider>;
}

export function useExecutiveRecruitingForm() {
  const context = useContext(ExecutiveRecruitingFormContext);
  if (!context) {
    throw new Error("useExecutiveRecruitingForm must be used within ExecutiveRecruitingFormProvider");
  }
  return context;
}
