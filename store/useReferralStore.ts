import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ReferralState {
  referral: string | null
  setRefCode: (ref: string) => void
  clearRefCode: () => void
}

export const useReferralStore = create<ReferralState>()(
  persist(
    (set) => ({
      referral: null,
      setRefCode: (ref) => set({ referral: ref }),
      clearRefCode: () => set({ referral: null }),
    }),
    {
      name: "referral-storage", // key in localStorage
    }
  )
)