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

const settingsSections: SettingsSection[] = [
  {
    title: 'MY BUSINESS',
    items: [
      { name: 'Business Profile', href: '#business-profile', icon: BuildingOfficeIcon },
      { name: 'Billing', href: '#billing', icon: CreditCardIcon },
      { name: 'My Staff', href: '#staff', icon: UserGroupIcon },
      { name: 'Opportunities & Pipelines', href: '#pipelines', icon: ChartBarIcon },
    ],
  },
  {
    title: 'BUSINESS SERVICES',
    items: [
      { name: 'Automation', href: '#automation-settings', icon: CogIcon },
      { name: 'Calendars', href: '#calendars-settings', icon: CalendarIcon },
      { name: 'Conversation AI', href: '#conversation-ai', icon: ChatBubbleLeftRightIcon, isNew: true },
      { name: 'Knowledge Base', href: '#knowledge-base', icon: DocumentTextIcon, isNew: true },
      { name: 'Voice AI Agents', href: '#voice-ai', icon: SparklesIcon },
      { name: 'Email Services', href: '#email-services', icon: EnvelopeIcon },
      { name: 'Phone Numbers', href: '#phone-numbers', icon: PhoneIcon },
      { name: 'WhatsApp', href: '#whatsapp', icon: ChatBubbleBottomCenterTextIcon },
    ],
  },
  {
    title: 'OTHER SETTINGS',
    items: [
      { name: 'Objects', href: '#objects', icon: CubeIcon, isNew: true },
      { name: 'Custom Fields', href: '#custom-fields', icon: TagIcon },
      { name: 'Custom Values', href: '#custom-values', icon: TagIcon },
      { name: 'Manage Scoring', href: '#scoring', icon: ChartBarIcon },
      { name: 'Domains', href: '#domains', icon: GlobeAltIcon },
      { name: 'URL Redirects', href: '#redirects', icon: ArrowPathIcon },
      { name: 'Integrations', href: '#integrations', icon: PuzzlePieceIcon },
      { name: 'Private Integrations', href: '#private-integrations', icon: PuzzlePieceIcon },
      { name: 'Conversation Providers', href: '#conversation-providers', icon: ChatBubbleLeftRightIcon },
      { name: 'Tags', href: '#tags', icon: TagIcon },
      { name: 'Audit Logs', href: '#audit-logs', icon: ClipboardDocumentListIcon },
      { name: 'Brand Boards', href: '#brand-boards', icon: PaintBrushIcon, isNew: true },
      { name: 'Companies', href: '#companies', icon: BuildingStorefrontIcon },
    ],
  },
]

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
  PaintBrushIcon,
  BuildingStorefrontIcon
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