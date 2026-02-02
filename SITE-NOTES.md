# Stone & Salt Site Notes

## Backup Branch: `full-site-backup`

Created: February 2, 2026

This branch contains the FULL site with all pages including:
- Hardscapes (with pricing $2,500 - $50,000+)
- Residential Maintenance (with pricing $175 - $500/mo)
- Estate Maintenance
- Service Areas pages

These pages were removed from `main` to simplify the live site until pricing is finalized with business partner.

### To restore these pages later:
```bash
git checkout full-site-backup -- src/app/services/hardscapes
git checkout full-site-backup -- src/app/services/maintenance
git checkout full-site-backup -- src/app/services/estate-maintenance
git checkout full-site-backup -- src/app/areas
```

Then update the Header navigation to add them back.

---

## Current Live Site (main branch)

Focused on:
- Commercial Snow Removal
- Commercial Grounds Maintenance
- Snow Emergency landing page (for Google Ads)

## Phone Number
Still placeholder: (513) 555-0123 - UPDATE BEFORE LAUNCH
