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
    iconMini?: React.ComponentType<{ className?: string }>;
  }[];
}

interface SettingsMenuProps {
  onGoBack: () => void;
  isDarkMode?: boolean;
}

const settingsSections: SettingsSection[] = [
  {
    title: 'MY BUSINESS',
    items: [
      { name: 'Business Profile', href: '#business-profile', icon: BuildingOfficeIcon, iconMini: BuildingOfficeIconMini },
      { name: 'Billing', href: '#billing', icon: CreditCardIcon, iconMini: CreditCardIconMini },
      { name: 'My Staff', href: '#staff', icon: UserGroupIcon, iconMini: UserGroupIconMini },
      { name: 'Opportunities & Pipelines', href: '#pipelines', icon: ChartBarIcon, iconMini: ChartBarIconMini },
    ],
  },
  {
    title: 'BUSINESS SERVICES',
    items: [
      { name: 'Automation', href: '#automation-settings', icon: CogIcon, iconMini: CogIconMini },
      { name: 'Calendars', href: '#calendars-settings', icon: CalendarIcon, iconMini: CalendarIconMini },
      { name: 'Conversation AI', href: '#conversation-ai', icon: ChatBubbleLeftRightIcon, iconMini: ChatBubbleLeftRightIconMini, isNew: true },
      { name: 'Knowledge Base', href: '#knowledge-base', icon: DocumentTextIcon, iconMini: DocumentTextIconMini, isNew: true },
      { name: 'Voice AI Agents', href: '#voice-ai', icon: SparklesIcon, iconMini: SparklesIconMini },
      { name: 'Email Services', href: '#email-services', icon: EnvelopeIcon, iconMini: EnvelopeIconMini },
      { name: 'Phone Numbers', href: '#phone-numbers', icon: PhoneIcon, iconMini: PhoneIconMini },
      { name: 'WhatsApp', href: '#whatsapp', icon: ChatBubbleBottomCenterTextIcon, iconMini: ChatBubbleBottomCenterTextIconMini },
    ],
  },
  {
    title: 'OTHER SETTINGS',
    items: [
      { name: 'Objects', href: '#objects', icon: CubeIcon, iconMini: CubeIconMini, isNew: true },
      { name: 'Custom Fields', href: '#custom-fields', icon: TagIcon, iconMini: TagIconMini },
      { name: 'Custom Values', href: '#custom-values', icon: TagIcon, iconMini: TagIconMini },
      { name: 'Manage Scoring', href: '#scoring', icon: ChartBarIcon, iconMini: ChartBarIconMini },
      { name: 'Domains', href: '#domains', icon: GlobeAltIcon, iconMini: GlobeAltIconMini },
      { name: 'URL Redirects', href: '#redirects', icon: ArrowPathIcon, iconMini: ArrowPathIconMini },
      { name: 'Integrations', href: '#integrations', icon: PuzzlePieceIcon, iconMini: PuzzlePieceIconMini },
      { name: 'Private Integrations', href: '#private-integrations', icon: PuzzlePieceIcon, iconMini: PuzzlePieceIconMini },
      { name: 'Conversation Providers', href: '#conversation-providers', icon: ChatBubbleLeftRightIcon, iconMini: ChatBubbleLeftRightIconMini },
      { name: 'Tags', href: '#tags', icon: TagIcon, iconMini: TagIconMini },
      { name: 'Audit Logs', href: '#audit-logs', icon: ClipboardDocumentListIcon, iconMini: ClipboardDocumentListIconMini },
      { name: 'Brand Boards', href: '#brand-boards', icon: PaintBrushIcon, iconMini: PaintBrushIconMini, isNew: true },
      { name: 'Companies', href: '#companies', icon: BuildingStorefrontIcon, iconMini: BuildingStorefrontIconMini },
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

// Import mini icons
import {
  BuildingOfficeIcon as BuildingOfficeIconMini,
  CreditCardIcon as CreditCardIconMini,
  UserGroupIcon as UserGroupIconMini,
  ChartBarIcon as ChartBarIconMini,
  CogIcon as CogIconMini,
  CalendarIcon as CalendarIconMini,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconMini,
  DocumentTextIcon as DocumentTextIconMini,
  SparklesIcon as SparklesIconMini,
  EnvelopeIcon as EnvelopeIconMini,
  PhoneIcon as PhoneIconMini,
  ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconMini,
  CubeIcon as CubeIconMini,
  TagIcon as TagIconMini,
  GlobeAltIcon as GlobeAltIconMini,
  ArrowPathIcon as ArrowPathIconMini,
  PuzzlePieceIcon as PuzzlePieceIconMini,
  ClipboardDocumentListIcon as ClipboardDocumentListIconMini,
  PaintBrushIcon as PaintBrushIconMini,
  BuildingStorefrontIcon as BuildingStorefrontIconMini
} from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SettingsMenu({ onGoBack, isDarkMode = true }: SettingsMenuProps) {
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
    <>
      {/* Settings Header */}
      <div className={`flex items-center gap-x-3 px-6 py-4 border-b ${themeStyles.border}`}>
        <motion.button
          onClick={onGoBack}
          className={`p-1 rounded-md ${themeStyles.buttonText} ${themeStyles.hoverBg} ${themeStyles.buttonHover} transition-colors`}
          title="Go Back"
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </motion.button>
        <span className={`text-sm font-medium ${themeStyles.text}`}>Settings</span>
      </div>

      {/* Settings Menu Content */}
      <nav className={`flex flex-1 flex-col overflow-y-auto scroll-smooth ${!isDarkMode ? 'light-scrollbar' : ''}`}
           style={{ 
             scrollbarWidth: 'thin',
             scrollbarColor: isDarkMode ? '#374151 #1f2937' : '#d1d5db #f9fafb'
           }}>
        <div className="px-6 py-4">
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
                        className={classNames(
                          item.current 
                            ? `${themeStyles.activeBg} text-white` 
                            : `${themeStyles.tertiaryText} ${themeStyles.hoverBg} ${themeStyles.buttonHover}`,
                          'group flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors'
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
    </>
  )
} 