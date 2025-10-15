import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface SettingsSection {
  title: string;
  items: {
    name: string;
    href: string;
    current?: boolean;
    isNew?: boolean;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

interface SettingsMenuProps {
  onGoBack: () => void;
  isDarkMode?: boolean;
  activeSettingsItem: string;
  setActiveSettingsItem: (item: string) => void;
}

// Get location ID from window or use default
const getLocationId = () => {
  // You can set window.GHL_LOCATION_ID in your page to customize this
  return (window as any).GHL_LOCATION_ID || 'xxL6tWuwIRMdpVJvUAX5'
}

const getSettingsSections = (): SettingsSection[] => {
  const locationId = getLocationId()
  const base = `/v2/location/${locationId}/settings`
  
  return [
    {
      title: 'MY BUSINESS',
      items: [
        { name: 'Business Profile', href: `${base}/company`, icon: BuildingOfficeIcon },
        { name: 'Billing', href: `${base}/company-billing/billing`, icon: CreditCardIcon },
        { name: 'My Staff', href: `${base}/staff/team`, icon: UserGroupIcon },
        { name: 'Opportunities & Pipelines', href: `/v2/location/${locationId}/crm-settings`, icon: ChartBarIcon },
      ],
    },
    {
      title: 'BUSINESS SERVICES',
      items: [
        { name: 'Automation', href: `${base}/automation`, icon: CogIcon },
        { name: 'Calendars', href: `${base}/calendars`, icon: CalendarIcon },
        { name: 'Conversation AI', href: `${base}/conversation-ai-v2`, icon: ChatBubbleLeftRightIcon, isNew: true },
        { name: 'Knowledge Base', href: `${base}/knowledge-base-settings`, icon: DocumentTextIcon, isNew: true },
        { name: 'Voice AI Agents', href: `${base}/ai-agents`, icon: SparklesIcon },
        { name: 'Email Services', href: `${base}/smtp_service`, icon: EnvelopeIcon },
        { name: 'Phone Numbers', href: `${base}/phone_number`, icon: PhoneIcon },
        { name: 'WhatsApp', href: `${base}/whatsapp`, icon: ChatBubbleBottomCenterTextIcon },
      ],
    },
    {
      title: 'OTHER SETTINGS',
      items: [
        { name: 'Launchpad', href: `/v2/location/${locationId}/launchpad`, icon: BuildingOfficeIcon },
        { name: 'Dashboard', href: `/v2/location/${locationId}/dashboard`, icon: ChartBarIcon },
        { name: 'AI Agents', href: `/v2/location/${locationId}/ai-agents/getting-started`, icon: SparklesIcon },
        { name: 'Media Storage', href: `/v2/location/${locationId}/media-storage`, icon: CubeIcon },
        { name: 'Opportunities', href: `/v2/location/${locationId}/opportunities/list`, icon: ChartBarIcon },
        { name: 'Reputation', href: `/v2/location/${locationId}/reputation/overview`, icon: ChartBarIcon },
        { name: 'Reporting', href: `/v2/location/${locationId}/reporting/reports`, icon: ChartBarIcon },
        { name: 'App Marketplace', href: `/v2/location/${locationId}/integration`, icon: PuzzlePieceIcon },
        { name: 'Objects', href: `${base}/objects`, icon: CubeIcon, isNew: true },
        { name: 'Custom Fields', href: `${base}/fields`, icon: TagIcon },
        { name: 'Custom Values', href: `${base}/custom_values`, icon: TagIcon },
        { name: 'Manage Scoring', href: `${base}/scoring`, icon: ChartBarIcon },
        { name: 'Domains & URL Redirects', href: `${base}/domain`, icon: GlobeAltIcon },
        { name: 'External Tracking', href: `${base}/external-tracking`, icon: ArrowPathIcon },
        { name: 'Integrations', href: `${base}/integrations/list`, icon: PuzzlePieceIcon },
        { name: 'Private Integrations', href: `${base}/private-integrations`, icon: PuzzlePieceIcon },
        { name: 'Conversation Providers', href: `${base}/conversation_providers`, icon: ChatBubbleLeftRightIcon },
        { name: 'Tags', href: `${base}/tags`, icon: TagIcon },
        { name: 'Labs', href: `${base}/labs`, icon: SparklesIcon, isNew: true },
        { name: 'Audit Logs', href: `${base}/audit/logs`, icon: ClipboardDocumentListIcon },
        { name: 'Brand Boards', href: `/v2/location/${locationId}/marketing/brand-boards`, icon: PaintBrushIcon, isNew: true },
      ],
    },
  ]
}

const settingsSections: SettingsSection[] = getSettingsSections()

// Import icons
import {
  BuildingOfficeIcon,
  CreditCardIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  SparklesIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
  CubeIcon,
  TagIcon,
  GlobeAltIcon,
  ArrowPathIcon,
  PuzzlePieceIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline'



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SettingsMenu({ onGoBack, isDarkMode = true, activeSettingsItem, setActiveSettingsItem }: SettingsMenuProps) {
  // Theme-based styles
  const themeStyles = {
    background: isDarkMode ? 'bg-[#052149]' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    border: isDarkMode ? 'border-[#1e3a8a]' : 'border-gray-200',
    hoverBg: isDarkMode ? 'hover:bg-[#1e3a8a]' : 'hover:bg-gray-100',
    activeBg: isDarkMode ? 'bg-[#3B82F6]' : 'bg-blue-500',
    secondaryText: isDarkMode ? 'text-[#9CA3AF]' : 'text-gray-600',
    tertiaryText: isDarkMode ? 'text-[#6B7280]' : 'text-gray-500',
    buttonText: isDarkMode ? 'text-[#6B7280]' : 'text-gray-400',
    buttonHover: isDarkMode ? 'hover:text-white' : 'hover:text-gray-900',
  }
  return (
    <nav className={`h-full overflow-y-auto scroll-smooth ${!isDarkMode ? 'light-scrollbar' : ''}`}
         style={{ 
           scrollbarWidth: 'thin',
           scrollbarColor: isDarkMode ? '#374151 #1f2937' : '#d1d5db #f9fafb'
         }}>
      <div className="px-6 py-4">
        {/* Back Button - At top of scrollable content */}
        <div className="mb-6">
          <motion.button
            onClick={onGoBack}
            className={`flex items-center gap-x-3 ${themeStyles.buttonText} ${themeStyles.hoverBg} ${themeStyles.buttonHover} px-3 py-2 rounded-md transition-colors`}
            title="Go Back"
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span className={`text-sm font-medium ${themeStyles.text}`}>Back to Menu</span>
          </motion.button>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: sectionIndex * 0.03, duration: 0.2 }}
            >
              <h4 className={`text-xs font-semibold ${themeStyles.secondaryText} uppercase tracking-wider mb-3`}>
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveSettingsItem(item.name)
                        
                        // Validate href before navigation
                        if (item.href && typeof item.href === 'string' && item.href.length > 0 && item.href !== 'undefined') {
                          try {
                            // Use History API for SPA navigation (no page reload)
                            window.history.pushState({}, '', item.href)
                            
                            // Dispatch popstate event to notify GHL's router
                            window.dispatchEvent(new PopStateEvent('popstate', { state: {} }))
                            
                            // Also dispatch a custom navigation event
                            window.dispatchEvent(new CustomEvent('navigation', { 
                              detail: { url: item.href } 
                            }))
                          } catch (error) {
                            console.error('Navigation error:', error)
                            // Fallback to normal navigation if SPA fails
                            window.location.href = item.href
                          }
                        }
                      }}
                      className={classNames(
                        activeSettingsItem === item.name
                          ? `${themeStyles.activeBg} text-white` 
                          : `${themeStyles.tertiaryText} ${themeStyles.hoverBg} ${themeStyles.buttonHover}`,
                        'group flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors cursor-pointer'
                      )}
                    >
                      <div className="flex items-center gap-x-3">
                        {item.icon && (
                          <item.icon className="h-4 w-4 shrink-0" />
                        )}
                        <span>{item.name}</span>
                      </div>
                      {item.isNew && (
                        <span className="inline-flex items-center rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
                          NEW
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  )
} 