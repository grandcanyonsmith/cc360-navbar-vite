import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronRightIcon, 
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  MegaphoneIcon,
  AcademicCapIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import SettingsMenu from './SettingsMenu'

interface NavItem {
  name: string;
  href?: string;
  current?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  children?: { 
    name: string; 
    href: string; 
    current?: boolean;
    isNew?: boolean;
  }[];
}

const navigation: NavItem[] = [
  {
    name: 'Onboarding',
    icon: AcademicCapIcon,

    children: [
      { name: 'Get Started', href: '#get-started' },
      { name: '90-Min Bootcamp', href: '#bootcamp' },
      { name: 'Change Subscription', href: '#subscription' },
    ],
  },
  {
    name: 'Dashboard & CRM',
    icon: HomeIcon,

    children: [
      { name: 'Dashboard', href: '#dashboard', current: true },
      { name: 'Conversations', href: '#conversations' },
      { name: 'Calendars', href: '#calendars' },
      { name: 'Contacts', href: '#contacts' },
      { name: 'Opportunities', href: '#opportunities' },
      { name: 'Payments', href: '#payments' },
    ],
  },
  {
    name: 'Marketing Tools',
    icon: MegaphoneIcon,

    children: [
      { name: 'Marketing', href: '#marketing' },
      { name: 'Automation', href: '#automation' },
      { name: 'Email Stats', href: '#email-stats' },
      { name: 'Reputation', href: '#reputation' },
    ],
  },
  {
    name: 'Sites & Learning',
    icon: GlobeAltIcon,

    children: [
      { name: 'Sites', href: '#sites' },
      { name: 'Memberships', href: '#memberships' },
      { name: 'Media Storage', href: '#media-storage' },
      { name: 'CC360 Template Hub', href: '#template-hub' },
    ],
  },
  {
    name: 'Insights & Integrations',
    icon: ChartBarIcon,

    children: [
      { name: 'Reporting', href: '#reporting' },
      { name: 'App Marketplace', href: '#marketplace' },
      { name: 'AI Agents', href: '#ai-agents' },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Auto-detect system theme preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard')
  const sidebarRef = useRef<HTMLDivElement>(null)

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed)
    // If collapsing while in settings, go back to main menu
    if (!sidebarCollapsed && showSettings) {
      setShowSettings(false)
    }
  }

  const handleSettingsClick = () => {
    // If sidebar is collapsed, expand it first
    if (sidebarCollapsed) {
      setSidebarCollapsed(false)
      // Small delay to let the sidebar expand before showing settings
      setTimeout(() => {
        setShowSettings(true)
      }, 200)
    } else {
      setShowSettings(true)
    }
  }

  const handleGoBack = () => {
    setShowSettings(false)
  }

  const handleDisclosureClick = () => {
    // If sidebar is collapsed, expand it when clicking a disclosure button
    if (sidebarCollapsed) {
      setSidebarCollapsed(false)
    }
  }

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleThemeChange)
    return () => mediaQuery.removeEventListener('change', handleThemeChange)
  }, [])

  const handleMenuItemClick = (itemName: string, href?: string) => {
    setActiveMenuItem(itemName)
    if (href && !sidebarCollapsed) {
      // Normal navigation
      window.location.href = href
    } else if (sidebarCollapsed) {
      // Expand sidebar first
      setSidebarCollapsed(false)
    }
  }

  // Click outside to collapse (mobile only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only collapse on mobile (screen width < 768px)
      const isMobile = window.innerWidth < 768
      
      if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        if (!sidebarCollapsed) {
          setSidebarCollapsed(true)
          if (showSettings) {
            setShowSettings(false)
          }
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [sidebarCollapsed, showSettings])

  // Theme-based styles
  const themeStyles = {
    background: isDarkMode ? 'bg-[#052149]' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    border: isDarkMode ? 'border-[#1e3a8a]' : 'border-gray-200',
    searchBg: isDarkMode ? 'bg-[#1e3a8a]' : 'bg-gray-100',
    hoverBg: isDarkMode ? 'hover:bg-[#1e3a8a]' : 'hover:bg-gray-100',
    activeBg: isDarkMode ? 'bg-[#3B82F6]' : 'bg-blue-500',
    secondaryText: isDarkMode ? 'text-[#9CA3AF]' : 'text-gray-600',
    tertiaryText: isDarkMode ? 'text-[#6B7280]' : 'text-gray-500',
    buttonText: isDarkMode ? 'text-[#6B7280]' : 'text-gray-400',
    buttonHover: isDarkMode ? 'hover:text-white' : 'hover:text-gray-900',
  }

  return (
    <motion.div 
      ref={sidebarRef}
      className={`flex h-full flex-col ${themeStyles.background} ${themeStyles.text}`}
      initial={false}
      animate={{ 
        width: sidebarCollapsed ? 64 : 320 
      }}
      transition={{ 
        duration: 0.2,
        ease: "easeInOut"
      }}
    >
      {/* Header */}
      <div className={`flex h-16 shrink-0 items-center px-6 border-b ${themeStyles.border}`}>
        <AnimatePresence mode="wait">
          {!sidebarCollapsed && !showSettings && (
            <motion.img
              key="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              alt="Course Creator 360"
              src="https://msgsndr-private.storage.googleapis.com/companyPhotos/b3e013a3-48f4-48ca-9310-518744a9ec9d.png"
              className="h-8 w-auto"
            />
          )}
        </AnimatePresence>
        
        <motion.button
          onClick={handleSidebarToggle}
          className={`p-2 rounded-md ${themeStyles.buttonText} ${themeStyles.hoverBg} ${themeStyles.buttonHover} transition-colors ${sidebarCollapsed ? 'mx-auto' : 'ml-auto'}`}
          title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          whileTap={{ scale: 0.95 }}
        >
          {sidebarCollapsed ? (
            <Bars3Icon className="h-5 w-5" />
          ) : (
            <XMarkIcon className="h-5 w-5" />
          )}
        </motion.button>
      </div>

      {/* Search Bar - Only show when not in settings */}
      <AnimatePresence>
        {!sidebarCollapsed && !showSettings && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`px-6 py-4 border-b ${themeStyles.border}`}
          >
            <div className="relative">
              <MagnifyingGlassIcon className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${themeStyles.tertiaryText}`} />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full rounded-md border-0 ${themeStyles.searchBg} py-2 pl-10 pr-3 text-sm ${themeStyles.text} placeholder-${isDarkMode ? '[#6B7280]' : 'gray-500'} focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-200`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation - Scrollable area between search and bottom sections */}
      <AnimatePresence>
        {!showSettings && (
          <motion.div 
            className="flex-1 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav 
              className={`h-full overflow-y-auto scroll-smooth ${!isDarkMode ? 'light-scrollbar' : ''}`}
              style={{ 
                scrollbarWidth: 'thin',
                scrollbarColor: isDarkMode ? '#374151 #1f2937' : '#d1d5db #f9fafb'
              }}
            >
              <ul role="list" className="px-6 py-4 space-y-1">
                {navigation.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.02, duration: 0.2 }}
                  >
                    {!item.children ? (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleMenuItemClick(item.name, item.href)
                        }}
                        className={classNames(
                          activeMenuItem === item.name
                            ? `${themeStyles.activeBg} text-white` 
                            : `${themeStyles.secondaryText} ${themeStyles.hoverBg} ${themeStyles.buttonHover}`,
                          sidebarCollapsed 
                            ? 'group flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors'
                            : 'group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors'
                        )}
                        title={sidebarCollapsed ? item.name : undefined}
                      >
                        {item.icon && (
                          <item.icon className="h-5 w-5 shrink-0" />
                        )}
                        <AnimatePresence>
                          {!sidebarCollapsed && (
                            <motion.span
                              initial={{ opacity: 0, width: 0 }}
                              animate={{ opacity: 1, width: "auto" }}
                              exit={{ opacity: 0, width: 0 }}
                              transition={{ duration: 0.15 }}
                            >
                              {item.name}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </a>
                  ) : (
                    <Disclosure as="div" defaultOpen={item.name === 'Dashboard & CRM'}>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            onClick={handleDisclosureClick}
                            className={classNames(
                              `group flex w-full items-center rounded-md text-left text-sm font-medium ${themeStyles.secondaryText} ${themeStyles.hoverBg} ${themeStyles.buttonHover} transition-colors`,
                              sidebarCollapsed 
                                ? 'justify-center p-2'
                                : 'justify-between px-3 py-2'
                            )}
                            title={sidebarCollapsed ? item.name : undefined}
                          >
                            <div className={classNames(
                              'flex items-center',
                              sidebarCollapsed ? '' : 'gap-x-3'
                            )}>
                              {item.icon && (
                                <item.icon className="h-5 w-5 shrink-0" />
                              )}
                              <AnimatePresence>
                                {!sidebarCollapsed && (
                                  <motion.span
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.15 }}
                                  >
                                    {item.name}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </div>
                            <AnimatePresence>
                              {!sidebarCollapsed && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ 
                                    opacity: 1,
                                    rotate: open ? 90 : 0 
                                  }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                >
                                  <ChevronRightIcon className="h-4 w-4 shrink-0" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </DisclosureButton>
                          <AnimatePresence>
                            {!sidebarCollapsed && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.15 }}
                              >
                                <DisclosurePanel as="ul" className="mt-1 space-y-1 pl-8">
                                  {item.children?.map((subItem) => (
                                    <li key={subItem.name}>
                                      <a
                                        href={subItem.href}
                                        onClick={(e) => {
                                          e.preventDefault()
                                          handleMenuItemClick(subItem.name, subItem.href)
                                        }}
                                        className={classNames(
                                          activeMenuItem === subItem.name
                                            ? `${themeStyles.activeBg} text-white` 
                                            : `${themeStyles.tertiaryText} ${themeStyles.hoverBg} ${themeStyles.buttonHover}`,
                                          'group flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors'
                                        )}
                                      >
                                        <span>{subItem.name}</span>
                                        {subItem.isNew && (
                                          <span className="inline-flex items-center rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
                                            NEW
                                          </span>
                                        )}
                                      </a>
                                    </li>
                                  ))}
                                </DisclosurePanel>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </Disclosure>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Menu - Show only when in settings */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <SettingsMenu onGoBack={handleGoBack} isDarkMode={isDarkMode} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Bottom Section - Settings Icon and User Profile */}
      <div className={`border-t ${themeStyles.border}`}>
        {/* Settings Icon - Always in bottom left */}
        <div className="px-6 py-3">
          <motion.button
            onClick={handleSettingsClick}
            className={classNames(
              showSettings 
                ? `${themeStyles.activeBg} text-white` 
                : `${themeStyles.buttonText} ${themeStyles.hoverBg} ${themeStyles.buttonHover}`,
              sidebarCollapsed 
                ? 'w-full flex justify-center p-2 rounded-md transition-colors'
                : 'flex items-center gap-x-3 w-full px-3 py-2 rounded-md transition-colors'
            )}
            title="Settings"
            whileTap={{ scale: 0.95 }}
            animate={{ 
              rotate: showSettings ? 180 : 0 
            }}
            transition={{ duration: 0.2 }}
          >
            <Cog6ToothIcon className="h-5 w-5 shrink-0" />
            <AnimatePresence>
              {!sidebarCollapsed && (
                <motion.span 
                  className="text-sm font-medium"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  Settings
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        {/* User Profile - Below settings */}
        <div className={`border-t ${themeStyles.border} px-6 py-4`}>
          <div className={classNames(
            'flex items-center',
            sidebarCollapsed ? 'justify-center' : 'gap-x-4'
          )}>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className={`h-8 w-8 rounded-full ${isDarkMode ? 'bg-[#1e3a8a]' : 'bg-gray-200'}`}
            />
            <AnimatePresence>
              {!sidebarCollapsed && (
                <motion.span 
                  className={`text-sm font-medium ${themeStyles.secondaryText}`}
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  LaJun M. Cole
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 