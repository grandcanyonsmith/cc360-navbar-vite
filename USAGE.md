# CC360 Sidebar - Usage Guide

## Quick Setup

Add these two lines to your GHL Custom Code (Settings → Business → Custom Code → Header Tracking Code):

```html
<script>
  // Optional: Set your location ID (default will work automatically)
  window.GHL_LOCATION_ID = 'YOUR_LOCATION_ID_HERE';
</script>
<link rel="stylesheet" href="https://cc360-navbar-vite.vercel.app/cc360-sidebar.css">
<script src="https://cc360-navbar-vite.vercel.app/cc360-sidebar.js"></script>
```

## Features

### ✅ Smart Navigation (8 Main Items)
1. 🎓 **Courses** - Memberships dashboard
2. 💬 **Conversations** - Chat and messaging
3. 📅 **Calendars** - Appointments and scheduling
4. 👥 **Contacts** - Contact management
5. 💳 **Payments** - Invoices and billing
6. 📢 **Marketing** - Social planner and campaigns
7. ⚡ **Automation** - Workflows
8. 🌐 **Sites** - Funnels and websites

### ✅ Settings Menu (Access via ⚙️ icon)
**MY BUSINESS:**
- Business Profile, Billing, My Staff, Opportunities & Pipelines

**BUSINESS SERVICES:**
- Automation, Calendars, Conversation AI, Knowledge Base
- Voice AI Agents, Email Services, Phone Numbers, WhatsApp

**OTHER SETTINGS:**
- Launchpad, Dashboard, AI Agents (moved from main nav)
- Media Storage, Opportunities, Reputation, Reporting, App Marketplace
- Objects, Custom Fields, Custom Values, Manage Scoring
- Domains, External Tracking, Integrations, Tags, Labs, Audit Logs, Brand Boards

### ✅ User Profile Menu
Click the purple "CS" avatar at bottom to access:
- 🔄 **Switch to Agency View** - Go to agency dashboard
- 👤 **Login As** - Impersonate users
- 🚪 **Signout** - Logout

### ✅ Collapsible Sidebar
- **Expanded:** 320px wide with full text
- **Collapsed:** 64px wide with icons only
- **Toggle:** Click chevron button at bottom right
- **State persists:** Stays collapsed/expanded across page navigation

### ✅ Smart Features
- **No page reloads:** SPA navigation like native GHL
- **Active highlighting:** Blue icons + text for current page
- **Dark/Light mode:** Auto-detects system preference
- **Mobile responsive:** Auto-collapses on mobile
- **Agency detection:** Automatically disabled on agency pages

## Auto-Hiding GHL Elements

The sidebar automatically hides:
- ❌ Native GHL sidebar-v2
- ❌ GHL header controls (AI button, notifications, help, user dropdown)
- ✅ **Keeps visible:** Top bar tabs (Funnels, Websites, Courses, etc.)

## Keyboard & Interaction

- **Hover:** Icons and items show hover effects
- **Click:** Instant SPA navigation (no loading spinner)
- **Active state:** Blue icons + semibold text
- **Collapsed:** Gray icons, active = blue icon

## Troubleshooting

### Content Still Overlaps
The sidebar applies body margin automatically. If issues persist:
```css
body { margin-left: 320px !important; }
```

### Navigation Not Working
Check browser console for errors. The sidebar uses History API for SPA navigation.

### Agency Pages
The sidebar automatically skips loading on `/agency` URLs to preserve native GHL interface.

## Performance

- **Bundle size:** 388KB (121KB gzipped)
- **Styles:** 22KB (5KB gzipped)
- **Load time:** <200ms
- **Navigation:** Instant (SPA, no reload)

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## Updates

The sidebar auto-updates from Vercel CDN. Clear cache if changes don't appear:
- Hard reload: Cmd/Ctrl + Shift + R
- Or wait 5 minutes for CDN cache refresh

## Support

For issues or questions, check the GitHub repository or contact support.

