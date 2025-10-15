# Configuration Guide

## Setting Your GHL Location ID

By default, the sidebar uses the location ID `xxL6tWuwIRMdpVJvUAX5`. To use your own GHL location ID, add this script **before** loading the sidebar:

```html
<script>
  window.GHL_LOCATION_ID = 'YOUR_LOCATION_ID_HERE';
</script>
<link rel="stylesheet" href="https://cc360-navbar-vite.vercel.app/cc360-sidebar.css">
<script src="https://cc360-navbar-vite.vercel.app/cc360-sidebar.js"></script>
```

### Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>My GHL Site</title>
  <!-- Set your location ID FIRST -->
  <script>
    window.GHL_LOCATION_ID = 'abc123xyz456';
  </script>
  <!-- Then load the sidebar -->
  <link rel="stylesheet" href="https://cc360-navbar-vite.vercel.app/cc360-sidebar.css">
  <script src="https://cc360-navbar-vite.vercel.app/cc360-sidebar.js"></script>
</head>
<body>
  <div style="margin-left: 320px; padding: 2rem;">
    <h1>Your Content Here</h1>
  </div>
</body>
</html>
```

## Finding Your Location ID

Your GoHighLevel location ID can be found in your GHL URL. For example, if your dashboard URL is:

```
https://app.gohighlevel.com/v2/location/abc123xyz456/dashboard
```

Then your location ID is: `abc123xyz456`

## Navigation URLs

The sidebar will automatically generate correct URLs for all navigation items and settings using your location ID:

### Main Navigation
- Launchpad: `/v2/location/{locationId}/launchpad`
- Dashboard: `/v2/location/{locationId}/dashboard`
- Conversations: `/v2/location/{locationId}/conversations/conversations`
- Calendars: `/v2/location/{locationId}/calendars/view`
- Contacts: `/v2/location/{locationId}/contacts/smart_list/All`
- Opportunities: `/v2/location/{locationId}/opportunities/list`
- Payments: `/v2/location/{locationId}/payments/invoices`
- AI Agents: `/v2/location/{locationId}/ai-agents/getting-started`
- Marketing: `/v2/location/{locationId}/marketing/social-planner`
- Automation: `/v2/location/{locationId}/automation/workflows`
- Sites: `/v2/location/{locationId}/funnels-websites/funnels`
- Memberships: `/v2/location/{locationId}/memberships/client-portal/dashboard`
- Media Storage: `/v2/location/{locationId}/media-storage`
- Reputation: `/v2/location/{locationId}/reputation/overview`
- Reporting: `/v2/location/{locationId}/reporting/reports`
- App Marketplace: `/v2/location/{locationId}/integration`

### Settings Menu
All settings pages follow the pattern: `/v2/location/{locationId}/settings/{page}`

**MY BUSINESS:**
- Business Profile: `/v2/location/{locationId}/settings/company`
- Billing: `/v2/location/{locationId}/settings/company-billing/billing`
- My Staff: `/v2/location/{locationId}/settings/staff/team`
- Opportunities & Pipelines: `/v2/location/{locationId}/crm-settings`

**BUSINESS SERVICES:**
- Automation: `/v2/location/{locationId}/settings/automation`
- Calendars: `/v2/location/{locationId}/settings/calendars`
- Conversation AI: `/v2/location/{locationId}/settings/conversation-ai-v2`
- Knowledge Base: `/v2/location/{locationId}/settings/knowledge-base-settings`
- Voice AI Agents: `/v2/location/{locationId}/settings/ai-agents`
- Email Services: `/v2/location/{locationId}/settings/smtp_service`
- Phone Numbers: `/v2/location/{locationId}/settings/phone_number`
- WhatsApp: `/v2/location/{locationId}/settings/whatsapp`

**OTHER SETTINGS:**
- Objects: `/v2/location/{locationId}/settings/objects`
- Custom Fields: `/v2/location/{locationId}/settings/fields`
- Custom Values: `/v2/location/{locationId}/settings/custom_values`
- Manage Scoring: `/v2/location/{locationId}/settings/scoring`
- Domains & URL Redirects: `/v2/location/{locationId}/settings/domain`
- External Tracking: `/v2/location/{locationId}/settings/external-tracking`
- Integrations: `/v2/location/{locationId}/settings/integrations/list`
- Private Integrations: `/v2/location/{locationId}/settings/private-integrations`
- Conversation Providers: `/v2/location/{locationId}/settings/conversation_providers`
- Tags: `/v2/location/{locationId}/settings/tags`
- Labs: `/v2/location/{locationId}/settings/labs`
- Audit Logs: `/v2/location/{locationId}/settings/audit/logs`
- Brand Boards: `/v2/location/{locationId}/marketing/brand-boards`

## Testing

To test with a different location ID:
1. Open your browser's developer console
2. Run: `window.GHL_LOCATION_ID = 'your-test-id'`
3. Reload the page
4. The sidebar will now use your test location ID

