# Changelog - SkillHub Indonesia

## [2025-01-28] - Simplified Lead Form

### Changed
- **Lead Form simplified to 2 fields only:**
  - Nama Lengkap (Full Name)
  - Nomor WhatsApp (WhatsApp Number)
  - Consent checkbox (unchanged)
  
- **Removed fields:**
  - ❌ Email (removed)
  - ❌ Skill selection dropdown (removed)

### Benefits
- **Higher conversion rate:** Fewer fields = less friction
- **Faster lead capture:** Users can complete in 10-15 seconds
- **Mobile-friendly:** Easier to fill on mobile devices
- **WhatsApp-first approach:** Direct communication channel

### Technical Changes
1. Updated `LeadFormData` interface
2. Modified `LeadForm.tsx` component
3. Updated `submit-lead` API endpoint validation
4. Changed Thank You page to use name instead of email
5. Updated success message to mention WhatsApp contact

### Note
This simplified form follows best practices for mobile lead generation and maximizes conversion from Facebook Ads traffic.
