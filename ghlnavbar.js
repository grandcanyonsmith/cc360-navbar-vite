const { getPackedSettings } = require("http2")

<div class="flex flex-col flex-grow h-screen pt-3 pb-2 overflow-hidden lead-connector">
   <div class="flex items-center justify-center flex-shrink-0 mb-3 md:px-1 agency-logo-container px-3">
      <svg class="agency-logo" xmlns="http://www.w3.org/2000/svg" width="40" height="40" style="max-width: 80%; height: 40px;">
         <image width="40" height="40" alt="agency logo" xlink:href=""></image>
      </svg>
   </div>
   <div id="location-switcher-sidbar-v2" class="flex flex-row items-center px-1 py-1 mb-3 text-sm text-white cursor-pointer md:justify-center lg:justify-between xl:justify-between md:mx-1 lg:mx-3 xl:mx-3">
      <div class="flex flex-row items-center w-36">
         <div class="flex items-center w-full text-xs leading-4">
            <div>
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="hl_location_icon scale-2">
                  <rect width="32" height="32" rx="16" fill="#fff" fill-opacity=".15"></rect>
                  <g clip-path="url(#a)">
                     <path d=""path>
                  </g>
                  <defs>
                     <clipPath id="a">
                        <path fill="#fff" d="M8 8h16v16H8z"></path>
                     </clipPath>
                  </defs>
               </svg>
            </div>
            <div class="hl_location-text"><span class="justify-center font-medium hl_text-overflow hl_switcher-loc-name">11227 Tall Pines Way</span><span class="justify-center hl_text-overflow hl_switcher-loc-city font-small">Sandy, Utah</span></div>
         </div>
      </div>
      <div class="flex flex-col items-center justify-center w-5 h-5 rounded-full switcher-caret-holder"><i class="fas fa-angle-up opacity-70 md:opacity-100 lg:opacity-70 xl:opacity-70"></i><i class="fas fa-angle-down opacity-70 md:opacity-100 lg:opacity-70 xl:opacity-70"></i></div>
      <!---->
   </div>
   <div class="flex mb-4 h-7 flex-row md:flex-col lg:flex-row xl:flex-row items-start justify-between px-2">
      <div id="globalSearchOpener" class="flex sm:w-full md:w-full h-full py-0.5 flex-col justify-center items-start text-sm cursor-pointer relative" style="width: 10.9rem;">
         <div class="flex flex-row items-start justify-between w-full">
            <div class="flex flex-row items-center justify-start">
               <svg role="img" aria-label="search icon" class="w-4 h-4 mx-1 search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
               </svg>
               <span class="search-placeholder">Search</span>
            </div>
            <div class="justify-start items-center py-0.5 flex flex-row" title="Press ⌘ + K to open"><span class="px-1 mx-1 text-xs rounded-sm search-shortcut">⌘ K</span></div>
         </div>
      </div>
      <div id="quickActions" class="flex flex-row items-center justify-center h-full text-sm cursor-pointer w-7 sm:w-10 md:w-10 lg:w-7 xl:w-7">
         <img class="w-3 h-3 opacity-100" src="https://static.leadconnectorhq.com/562/img/icon-lightning-bolt.146bdda26db41bca.png" alt="Quick actions icon"><span class="text-xs font-medium tracking-wide text-white hidden">Quick Actions</span><!---->
      </div>
   </div>
   <!----><!---->
   <div class="flex flex-col w-full overflow-x-hidden overflow-y-auto hl_nav-header">
      <nav class="flex-1 w-full" aria-label="header">
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/launchpad" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_launchpad" meta="launchpad">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_launchpad.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Launchpad icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Launchpad</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/dashboard" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2 active exact-active" id="sb_dashboard" meta="dashboard">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_dashboard.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Dashboard icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Dashboard</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/conversations/conversations" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_conversations" meta="conversations">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_conversations.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Conversations icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Conversations</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/calendars/view" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_calendars" meta="calendars">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_calendar.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Calendars icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Calendars</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/contacts/smart_list/All" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_contacts" meta="contacts">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_contacts.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Contacts icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Contacts</span><!----><!---->
         </a>
         <!----><!----><!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/opportunities/list" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_opportunities" meta="opportunities">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_opportunities.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Opportunities icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Opportunities</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/payments/invoices" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_payments" meta="payments">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_payments.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Payments icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Payments</span><!----><!---->
         </a>
         <!----><!---->
         <div class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md text-gray-300 font-normal cursor-text divider">
            <p class="w-full text-left border-b border-solid my-3" style="line-height: 0.1em; font-size: 10px;">
               <!---->
            </p>
         </div>
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/ai-agents/getting-started" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_AI Agents" meta="AI Agents">
            <img src="https://cdn.msgsndr.com/sidebar-v2/aiIcon.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="AI Agents icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">AI Agents</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/marketing/social-planner" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_email-marketing" meta="email-marketing">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_emailmarketing.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Marketing icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Marketing</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/automation/workflows" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_automation" meta="automation">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_automation.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Automation icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Automation</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/funnels-websites/funnels" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_sites" meta="sites">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_sites.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Sites icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Sites</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/memberships/client-portal/dashboard" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_memberships" meta="memberships">
            <img src="https://cdn.msgsndr.com/sidebar-v2/memberships.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Memberships icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Memberships</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/media-storage" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_app-media" meta="app-media">
            <img src="https://cdn.msgsndr.com/sidebar-v2/media-storage.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Media Storage icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Media Storage</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/reputation/overview" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_reputation" meta="reputation">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_reputation.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Reputation icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Reputation</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/reporting/reports" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_reporting" meta="reporting">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_reporting.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Reporting icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Reporting</span><!----><!---->
         </a>
         <!---->
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/integration" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_app-marketplace" meta="app-marketplace">
            <img src="https://cdn.msgsndr.com/sidebar-v2/grid-01.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="App Marketplace icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">App Marketplace</span><!----><!---->
         </a>
         <!----><!----><!----><a href="javascript:void(0)" id="6884026ffd0834e1de781ad2" meta="6884026ffd0834e1de781ad2" class="w-full group px-3 flex items-center justify-start md:justify-center lg:justify-start xl:justify-start text-sm rounded-md cursor-pointer custom-link font-medium opacity-70 hover:opacity-100 py-2 md:py-2"><span class="h-5 w-5 mr-2"><i class="sm-button nav-fa-icon" aria-label="CC360 Test icon" style="--fa: &quot;&quot;; --ff: &quot;Font Awesome 5 Brands&quot;; font-size: 1rem;"></i></span><span class="nav-title hl_text-overflow sm:hidden md:hidden lg:block xl:block">CC360 Test</span></a>
      </nav>
   </div>
   <div class="flex flex-col absolute bottom-3.5 w-full hl_nav-settings">
      <nav class="flex-1 w-full" aria-label="footer">
         <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/company" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_settings" meta="settings">
            <img src="https://cdn.msgsndr.com/sidebar-v2/icon_settings.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2" alt="Settings icon"><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block">Settings</span><!----><!---->
         </a>
         <!---->
      </nav>
   </div>
</div>



# getPackedSettings<nav class="flex-1 w-full" aria-label="header">
   <!---->
   <div class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md text-gray-300 font-normal cursor-text divider">
      <p class="w-full text-left border-b border-solid my-3" style="line-height: 0.1em; font-size: 10px;"><span class="uppercase pr-3 default-bg-color">MY BUSINESS</span></p>
   </div>
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/company" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2 active exact-active" id="sb_business_info" meta="business_info">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Business Profile</span><!----><!---->
   </a>
   <!----><!----><!----><!----><!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/company-billing/billing" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_saas-billing" meta="saas-billing">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Billing</span><!----><!---->
   </a>
   <!----><!----><!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/staff/team" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_my-staff" meta="my-staff">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">My Staff</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/crm-settings" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_Opportunities-Pipelines" meta="Opportunities-Pipelines">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Opportunities &amp; Pipelines</span><!----><!---->
   </a>
   <!----><!---->
   <div class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md text-gray-300 font-normal cursor-text divider">
      <p class="w-full text-left border-b border-solid my-3" style="line-height: 0.1em; font-size: 10px;"><span class="uppercase pr-3 default-bg-color">BUSINESS SERVICES</span></p>
   </div>
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/automation" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_" meta="">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Automation</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/calendars" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_calendars" meta="calendars">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Calendars</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/conversation-ai-v2" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_conversation_ai_settings_v2" meta="conversation_ai_settings_v2">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Conversation AI</span><span class="lg:block xl:block hl_force-block hl_new_badge sm:hidden md:hidden">New</span><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/knowledge-base-settings" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_knowledge-base-settings" meta="knowledge-base-settings">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Knowledge Base</span><span class="lg:block xl:block hl_force-block hl_new_badge sm:hidden md:hidden">New</span><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/ai-agents" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_ai_agent_settings" meta="ai_agent_settings">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Voice AI Agents</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/smtp_service" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_location-email-services" meta="location-email-services">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Email Services</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/phone_number" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_phone-number" meta="phone-number">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Phone Numbers</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/whatsapp" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_whatsapp" meta="whatsapp">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">WhatsApp</span><!----><!---->
   </a>
   <!----><!---->
   <div class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md text-gray-300 font-normal cursor-text divider">
      <p class="w-full text-left border-b border-solid my-3" style="line-height: 0.1em; font-size: 10px;"><span class="uppercase pr-3 default-bg-color">OTHER SETTINGS</span></p>
   </div>
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/objects" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_objects" meta="objects">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Objects</span><!----><span class="lg:block xl:block hl_force-block hl_new_badge sm:hidden md:hidden"> New </span>
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/fields" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_custom-fields-settings" meta="custom-fields-settings">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Custom Fields</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/custom_values" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_custom-values" meta="custom-values">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Custom Values</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/scoring" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_manage-scoring" meta="manage-scoring">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Manage Scoring</span><!----><!---->
   </a>
   <!----><!----><!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/domain" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_domains-urlRedirects" meta="domains-urlRedirects">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Domains &amp; URL Redirects</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/external-tracking" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_external-tracking" meta="external-tracking">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">External Tracking</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/integrations/list" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_integrations" meta="integrations">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Integrations</span><!----><!---->
   </a>
   <!----><!----><!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/private-integrations" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_undefined">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Private Integrations</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/conversation_providers" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_conversations_providers" meta="conversations_providers">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Conversation Providers</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/tags" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_tags" meta="tags">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Tags</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/labs" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_labs" meta="labs">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Labs</span><span class="lg:block xl:block hl_force-block hl_new_badge sm:hidden md:hidden">New</span><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/settings/audit/logs" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_audit-logs-location" meta="audit-logs-location">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Audit Logs</span><!----><!---->
   </a>
   <!---->
   <a href="/v2/location/xxL6tWuwIRMdpVJvUAX5/marketing/brand-boards" class="w-full group px-3 flex items-center justify-start lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_brand-boards" meta="brand-boards">
      <!----><span class="hl_text-overflow sm:hidden md:hidden nav-title lg:block xl:block hl_force-block">Brand Boards</span><span class="lg:block xl:block hl_force-block hl_new_badge sm:hidden md:hidden">New</span><!---->
   </a>
   <!----><!----><!----><!---->
</nav>