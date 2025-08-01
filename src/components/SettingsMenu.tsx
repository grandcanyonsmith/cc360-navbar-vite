import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { ArrowLeftIcon as ArrowLeftIconMini } from '@heroicons/react/20/solid'
import { motion, AnimatePresence } from 'framer-motion'

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
  useMiniIcons?: boolean;
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

export default function SettingsMenu({ onGoBack, useMiniIcons = false }: SettingsMenuProps) {
  return (
    <>
      {/* Settings Header */}
      <div className="flex items-center gap-x-3 px-6 py-4 border-b border-[#1e3a8a]">
        <motion.button
          onClick={onGoBack}
          className="p-1 rounded-md text-[#6B7280] hover:bg-[#1e3a8a] hover:text-white transition-colors"
          title="Go Back"
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </motion.button>
        <span className="text-sm font-medium text-white">Settings</span>
      </div>

      {/* Settings Menu Content */}
      <nav className="flex flex-1 flex-col overflow-y-auto">
        <div className="px-6 py-4">
          <div className="space-y-6">
            {settingsSections.map((section, sectionIndex) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: sectionIndex * 0.03, duration: 0.2 }}
              >
                <h4 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current 
                            ? 'bg-[#3B82F6] text-white' 
                            : 'text-[#6B7280] hover:bg-[#1e3a8a] hover:text-white',
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
                          <span className="inline-flex items-center rounded-full bg-[#b98a15] px-2 py-1 text-xs font-medium text-white">
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