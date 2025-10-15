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

// Get location ID from window or use default
const getLocationId = () => {
  // You can set window.GHL_LOCATION_ID in your page to customize this
  return (window as any).GHL_LOCATION_ID || 'xxL6tWuwIRMdpVJvUAX5'
}

const getNavigation = (): NavItem[] => {
  const locationId = getLocationId()
  const base = `/v2/location/${locationId}`
  
  return [
    {
      name: 'Launchpad',
      icon: HomeIcon,
      href: `${base}/launchpad`,
    },
    {
      name: 'Dashboard',
      icon: ChartBarIcon,
      href: `${base}/dashboard`,
    },
    {
      name: 'Conversations',
      icon: MegaphoneIcon,
      href: `${base}/conversations/conversations`,
    },
    {
      name: 'Calendars',
      icon: AcademicCapIcon,
      href: `${base}/calendars/view`,
    },
    {
      name: 'Contacts',
      icon: HomeIcon,
      href: `${base}/contacts/smart_list/All`,
    },
    {
      name: 'Opportunities',
      icon: ChartBarIcon,
      href: `${base}/opportunities/list`,
    },
    {
      name: 'Payments',
      icon: HomeIcon,
      href: `${base}/payments/invoices`,
    },
    {
      name: 'AI Agents',
      icon: GlobeAltIcon,
      href: `${base}/ai-agents/getting-started`,
    },
    {
      name: 'Marketing',
      icon: MegaphoneIcon,
      href: `${base}/marketing/social-planner`,
    },
    {
      name: 'Automation',
      icon: Cog6ToothIcon,
      href: `${base}/automation/workflows`,
    },
    {
      name: 'Sites',
      icon: GlobeAltIcon,
      href: `${base}/funnels-websites/funnels`,
    },
    {
      name: 'Memberships',
      icon: AcademicCapIcon,
      href: `${base}/memberships/client-portal/dashboard`,
    },
    {
      name: 'Media Storage',
      icon: HomeIcon,
      href: `${base}/media-storage`,
    },
    {
      name: 'Reputation',
      icon: ChartBarIcon,
      href: `${base}/reputation/overview`,
    },
    {
      name: 'Reporting',
      icon: ChartBarIcon,
      href: `${base}/reporting/reports`,
    },
    {
      name: 'App Marketplace',
      icon: GlobeAltIcon,
      href: `${base}/integration`,
    },
  ]
}

const navigation: NavItem[] = getNavigation()

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

// Function to determine active menu item from URL
const getActiveMenuItemFromUrl = (): string => {
  const path = window.location.pathname
  const navigation = getNavigation()
  
  // Find matching menu item by checking if the current path includes the href
  for (const item of navigation) {
    if (item.href && path.includes(item.href.split('/').pop() || '')) {
      return item.name
    }
    // Check children items if they exist
    if (item.children) {
      for (const child of item.children) {
        if (child.href && path.includes(child.href.split('/').pop() || '')) {
          return child.name
        }
      }
    }
  }
  
  // Default to Dashboard if no match
  return 'Dashboard'
}

export default function Sidebar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Auto-detect system theme preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [activeMenuItem, setActiveMenuItem] = useState(() => getActiveMenuItemFromUrl())
  const [activeSettingsItem, setActiveSettingsItem] = useState('')
  const sidebarRef = useRef<HTMLDivElement>(null)

  const handleSidebarToggle = () => {
    const newCollapsedState = !sidebarCollapsed
    setSidebarCollapsed(newCollapsedState)
    
    // Dispatch event to notify main app of sidebar state change
    window.dispatchEvent(new CustomEvent('cc360-sidebar-state-change', {
      detail: { collapsed: newCollapsedState }
    }))
    
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

  // Update active menu item when URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      setActiveMenuItem(getActiveMenuItemFromUrl())
    }
    
    // Listen for popstate (back/forward navigation)
    window.addEventListener('popstate', handleLocationChange)
    
    // Also check on mount and URL changes
    handleLocationChange()
    
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  const handleMenuItemClick = (itemName: string, href?: string) => {
    setActiveMenuItem(itemName)
    if (href) {
      // Navigate to the URL
      window.location.href = href
    } else if (sidebarCollapsed) {
      // Expand sidebar if no href
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
                        onClick={() => {
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
                                        onClick={() => {
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

      {/* Settings Menu Content - Replaces navigation when in settings */}
      <AnimatePresence>
        {showSettings && (
          <motion.div 
            className="flex-1 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <SettingsMenu 
              onGoBack={handleGoBack} 
              isDarkMode={isDarkMode}
              activeSettingsItem={activeSettingsItem}
              setActiveSettingsItem={setActiveSettingsItem}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Bottom Section - Settings Icon, User Profile, and Collapse Button */}
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

        {/* Collapse Button - Bottom right */}
        <div className={`absolute ${sidebarCollapsed ? 'bottom-5 -right-3' : 'bottom-5 -right-2'} z-50`}>
          <motion.button
            onClick={handleSidebarToggle}
            className={`flex items-center justify-center rounded-full ${themeStyles.text} ${themeStyles.hoverBg} transition-colors`}
            style={{ 
              fontSize: '1.5rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.i
              className={`fas ${sidebarCollapsed ? 'fa-chevron-circle-right' : 'fa-chevron-circle-left'} rounded-full`}
              style={{
                color: isDarkMode ? '#9CA3AF' : '#6B7280',
                fontSize: '1.5rem'
              }}
              animate={{ rotate: sidebarCollapsed ? 0 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
} 