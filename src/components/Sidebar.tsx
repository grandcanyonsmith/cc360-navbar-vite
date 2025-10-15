import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronRightIcon, 
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  CreditCardIcon,
  MegaphoneIcon,
  BoltIcon,
  GlobeAltIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'

import {
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid,
  CalendarDaysIcon as CalendarDaysIconSolid,
  UserGroupIcon as UserGroupIconSolid,
  CreditCardIcon as CreditCardIconSolid,
  MegaphoneIcon as MegaphoneIconSolid,
  BoltIcon as BoltIconSolid,
  GlobeAltIcon as GlobeAltIconSolid,
  AcademicCapIcon as AcademicCapIconSolid,
} from '@heroicons/react/24/solid'

import {
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconMini,
  CalendarDaysIcon as CalendarDaysIconMini,
  UserGroupIcon as UserGroupIconMini,
  CreditCardIcon as CreditCardIconMini,
  MegaphoneIcon as MegaphoneIconMini,
  BoltIcon as BoltIconMini,
  GlobeAltIcon as GlobeAltIconMini,
  AcademicCapIcon as AcademicCapIconMini,
} from '@heroicons/react/20/solid'

import SettingsMenu from './SettingsMenu'

interface NavItem {
  name: string;
  href?: string;
  current?: boolean;
  iconOutline?: React.ComponentType<{ className?: string }>;
  iconSolid?: React.ComponentType<{ className?: string }>;
  iconMini?: React.ComponentType<{ className?: string }>;
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
      name: 'Courses',
      iconOutline: AcademicCapIcon,
      iconSolid: AcademicCapIconSolid,
      iconMini: AcademicCapIconMini,
      href: `${base}/memberships/courses/dashboard-v2`,
    },
    {
      name: 'Conversations',
      iconOutline: ChatBubbleLeftRightIcon,
      iconSolid: ChatBubbleLeftRightIconSolid,
      iconMini: ChatBubbleLeftRightIconMini,
      href: `${base}/conversations/conversations`,
    },
    {
      name: 'Calendars',
      iconOutline: CalendarDaysIcon,
      iconSolid: CalendarDaysIconSolid,
      iconMini: CalendarDaysIconMini,
      href: `${base}/calendars/view`,
    },
    {
      name: 'Contacts',
      iconOutline: UserGroupIcon,
      iconSolid: UserGroupIconSolid,
      iconMini: UserGroupIconMini,
      href: `${base}/contacts/smart_list/All`,
    },
    {
      name: 'Payments',
      iconOutline: CreditCardIcon,
      iconSolid: CreditCardIconSolid,
      iconMini: CreditCardIconMini,
      href: `${base}/payments/invoices`,
    },
    {
      name: 'Marketing',
      iconOutline: MegaphoneIcon,
      iconSolid: MegaphoneIconSolid,
      iconMini: MegaphoneIconMini,
      href: `${base}/marketing/social-planner`,
    },
    {
      name: 'Automation',
      iconOutline: BoltIcon,
      iconSolid: BoltIconSolid,
      iconMini: BoltIconMini,
      href: `${base}/automation/workflows`,
    },
    {
      name: 'Sites',
      iconOutline: GlobeAltIcon,
      iconSolid: GlobeAltIconSolid,
      iconMini: GlobeAltIconMini,
      href: `${base}/funnels-websites/funnels`,
    },
  ]
}

const navigation: NavItem[] = getNavigation()

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

// Function to check if current page is a settings page OR moved pages
const isSettingsPage = (): boolean => {
  const path = window.location.pathname
  
  // Don't show settings menu for courses/memberships pages
  if (path.includes('/memberships')) return false
  
  // Settings pages
  if (path.includes('/settings/') || path.includes('/crm-settings')) return true
  
  // Moved pages that should show settings menu - use exact path matching
  const locationIdPattern = /\/v2\/location\/[^/]+/
  const basePath = path.replace(locationIdPattern, '')
  
  if (basePath === '/launchpad' || basePath.startsWith('/launchpad/')) return true
  if (basePath === '/dashboard' || basePath.startsWith('/dashboard/')) return true
  if (basePath.startsWith('/ai-agents/')) return true
  if (basePath === '/media-storage' || basePath.startsWith('/media-storage/')) return true
  if (basePath.startsWith('/opportunities/')) return true
  if (basePath.startsWith('/reputation/')) return true
  if (basePath.startsWith('/reporting/')) return true
  if (basePath === '/integration' || basePath.startsWith('/integration/')) return true
  
  return false
}

// Function to determine active menu item from URL
const getActiveMenuItemFromUrl = (): string => {
  const path = window.location.pathname
  
  // If on settings page, return empty string (settings menu handles it)
  if (isSettingsPage()) {
    return ''
  }
  
  // Special mappings for renamed items
  if (path.includes('/memberships')) return 'Courses'
  if (path.includes('/conversations')) return 'Conversations'
  if (path.includes('/calendars')) return 'Calendars'
  if (path.includes('/contacts')) return 'Contacts'
  if (path.includes('/payments')) return 'Payments'
  if (path.includes('/marketing')) return 'Marketing'
  if (path.includes('/automation')) return 'Automation'
  if (path.includes('/funnels-websites') || path.includes('/sites')) return 'Sites'
  
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
  
  // Default to empty string if no match
  return ''
}

export default function Sidebar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    // Check localStorage for saved state
    const saved = localStorage.getItem('cc360-sidebar-collapsed')
    return saved === 'true'
  })
  const [showSettings, setShowSettings] = useState(() => isSettingsPage())
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Auto-detect system theme preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [activeMenuItem, setActiveMenuItem] = useState(() => getActiveMenuItemFromUrl())
  const [activeSettingsItem, setActiveSettingsItem] = useState(() => {
    const path = window.location.pathname
    
    // Only set active settings item if actually on a settings-related page
    if (!isSettingsPage()) return ''
    
    // Check which settings page we're on
    if (path.includes('/whatsapp')) return 'WhatsApp'
    if (path.includes('/conversation-ai')) return 'Conversation AI'
    if (path.includes('/knowledge-base')) return 'Knowledge Base'
    if (path.includes('/ai-agents') && path.includes('/settings/')) return 'Voice AI Agents'
    if (path.includes('/smtp_service')) return 'Email Services'
    if (path.includes('/phone_number')) return 'Phone Numbers'
    if (path.includes('/automation') && path.includes('/settings/')) return 'Automation'
    if (path.includes('/calendars') && path.includes('/settings/')) return 'Calendars'
    if (path.includes('/company-billing')) return 'Billing'
    if (path.includes('/staff')) return 'My Staff'
    if (path.includes('/company')) return 'Business Profile'
    if (path.includes('/crm-settings')) return 'Opportunities & Pipelines'
    if (path.includes('/objects')) return 'Objects'
    if (path.includes('/fields')) return 'Custom Fields'
    if (path.includes('/custom_values')) return 'Custom Values'
    if (path.includes('/scoring')) return 'Manage Scoring'
    if (path.includes('/domain')) return 'Domains & URL Redirects'
    if (path.includes('/external-tracking')) return 'External Tracking'
    if (path.includes('/integrations')) return 'Integrations'
    if (path.includes('/private-integrations')) return 'Private Integrations'
    if (path.includes('/conversation_providers')) return 'Conversation Providers'
    if (path.includes('/tags')) return 'Tags'
    if (path.includes('/labs')) return 'Labs'
    if (path.includes('/audit')) return 'Audit Logs'
    if (path.includes('/brand-boards')) return 'Brand Boards'
    // Check moved pages
    if (path.includes('/launchpad')) return 'Launchpad'
    if (path.includes('/dashboard')) return 'Dashboard'
    if (path.includes('/ai-agents')) return 'AI Agents'
    if (path.includes('/media-storage')) return 'Media Storage'
    if (path.includes('/opportunities')) return 'Opportunities'
    if (path.includes('/reputation')) return 'Reputation'
    if (path.includes('/reporting')) return 'Reporting'
    if (path.includes('/integration')) return 'App Marketplace'
    
    return ''
  })
  const sidebarRef = useRef<HTMLDivElement>(null)

  const handleSidebarToggle = () => {
    const newCollapsedState = !sidebarCollapsed
    setSidebarCollapsed(newCollapsedState)
    
    // If collapsing while in settings, go back to main menu
    if (!sidebarCollapsed && showSettings) {
      setShowSettings(false)
    }
  }

  // Dispatch event and save to localStorage whenever sidebar state changes
  useEffect(() => {
    // Save state to localStorage
    localStorage.setItem('cc360-sidebar-collapsed', String(sidebarCollapsed))
    
    // Dispatch event for body margin update
    window.dispatchEvent(new CustomEvent('cc360-sidebar-state-change', {
      detail: { collapsed: sidebarCollapsed }
    }))
  }, [sidebarCollapsed])

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
      const isSettings = isSettingsPage()
      setShowSettings(isSettings)
      setActiveMenuItem(getActiveMenuItemFromUrl())
      
      // Update active settings item if on settings page
      if (isSettings) {
        const path = window.location.pathname
        if (path.includes('/whatsapp')) setActiveSettingsItem('WhatsApp')
        else if (path.includes('/conversation-ai')) setActiveSettingsItem('Conversation AI')
        else if (path.includes('/knowledge-base')) setActiveSettingsItem('Knowledge Base')
        else if (path.includes('/ai-agents') && path.includes('/settings/')) setActiveSettingsItem('Voice AI Agents')
        else if (path.includes('/smtp_service')) setActiveSettingsItem('Email Services')
        else if (path.includes('/phone_number')) setActiveSettingsItem('Phone Numbers')
        else if (path.includes('/automation') && path.includes('/settings/')) setActiveSettingsItem('Automation')
        else if (path.includes('/calendars') && path.includes('/settings/')) setActiveSettingsItem('Calendars')
        else if (path.includes('/company-billing')) setActiveSettingsItem('Billing')
        else if (path.includes('/staff')) setActiveSettingsItem('My Staff')
        else if (path.includes('/company')) setActiveSettingsItem('Business Profile')
        else if (path.includes('/crm-settings')) setActiveSettingsItem('Opportunities & Pipelines')
        else if (path.includes('/objects')) setActiveSettingsItem('Objects')
        else if (path.includes('/fields')) setActiveSettingsItem('Custom Fields')
        else if (path.includes('/custom_values')) setActiveSettingsItem('Custom Values')
        else if (path.includes('/scoring')) setActiveSettingsItem('Manage Scoring')
        else if (path.includes('/domain')) setActiveSettingsItem('Domains & URL Redirects')
        else if (path.includes('/external-tracking')) setActiveSettingsItem('External Tracking')
        else if (path.includes('/integrations')) setActiveSettingsItem('Integrations')
        else if (path.includes('/private-integrations')) setActiveSettingsItem('Private Integrations')
        else if (path.includes('/conversation_providers')) setActiveSettingsItem('Conversation Providers')
        else if (path.includes('/tags')) setActiveSettingsItem('Tags')
        else if (path.includes('/labs')) setActiveSettingsItem('Labs')
        else if (path.includes('/audit')) setActiveSettingsItem('Audit Logs')
        else if (path.includes('/brand-boards')) setActiveSettingsItem('Brand Boards')
      } else if (isSettingsPage()) {
        // Check if on moved pages (that should show settings menu)
        const path = window.location.pathname
        if (path.includes('/launchpad')) setActiveSettingsItem('Launchpad')
        else if (path.includes('/dashboard')) setActiveSettingsItem('Dashboard')
        else if (path.includes('/ai-agents')) setActiveSettingsItem('AI Agents')
        else if (path.includes('/media-storage')) setActiveSettingsItem('Media Storage')
        else if (path.includes('/opportunities')) setActiveSettingsItem('Opportunities')
        else if (path.includes('/reputation')) setActiveSettingsItem('Reputation')
        else if (path.includes('/reporting')) setActiveSettingsItem('Reporting')
        else if (path.includes('/integration')) setActiveSettingsItem('App Marketplace')
      }
    }
    
    // Listen for popstate (back/forward navigation)
    window.addEventListener('popstate', handleLocationChange)
    
    // Also check on mount and URL changes
    handleLocationChange()
    
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  const handleMenuItemClick = (itemName: string, href?: string) => {
    setActiveMenuItem(itemName)
    
    // Validate href before navigation
    if (href && typeof href === 'string' && href.length > 0 && href !== 'undefined') {
      // Use History API for SPA navigation (no page reload)
      try {
        window.history.pushState({}, '', href)
        
        // Dispatch popstate event to notify GHL's router
        window.dispatchEvent(new PopStateEvent('popstate', { state: {} }))
        
        // Also dispatch a custom navigation event that GHL might listen to
        window.dispatchEvent(new CustomEvent('navigation', { 
          detail: { url: href } 
        }))
      } catch (error) {
        console.error('Navigation error:', error)
        // Fallback to normal navigation if SPA fails
        window.location.href = href
      }
    } else if (sidebarCollapsed) {
      // Expand sidebar if no href
      setSidebarCollapsed(false)
    }
  }

  // Click outside to collapse (mobile only) and close user menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only collapse on mobile (screen width < 768px)
      const isMobile = window.innerWidth < 768
      
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        // Close user menu if clicking outside
        if (showUserMenu) {
          setShowUserMenu(false)
        }
        
        // Collapse sidebar on mobile
        if (isMobile && !sidebarCollapsed) {
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
  }, [sidebarCollapsed, showSettings, showUserMenu])

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
      className={`flex h-full flex-col ${themeStyles.background} ${themeStyles.text} relative overflow-y-auto`}
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
                          'group flex items-center rounded-md p-2 text-sm font-medium transition-colors',
                          sidebarCollapsed
                            ? 'justify-center hover:bg-gray-100 dark:hover:bg-gray-800'
                            : `gap-x-3 px-3 py-2 ${themeStyles.hoverBg}`
                        )}
                        title={sidebarCollapsed ? item.name : undefined}
                      >
                        {(() => {
                          const isActive = activeMenuItem === item.name
                          const IconComponent = sidebarCollapsed 
                            ? item.iconMini 
                            : (isActive ? item.iconSolid : item.iconOutline)
                          
                          // Color classes for icons - always use color, no background
                          const iconColorClass = isActive ? 'text-blue-500' : 'text-gray-500'
                          
                          return IconComponent ? (
                            <IconComponent className={`${sidebarCollapsed ? "h-5 w-5 shrink-0" : "h-6 w-6 shrink-0"} ${iconColorClass}`} />
                          ) : null
                        })()}
                        <AnimatePresence>
                          {!sidebarCollapsed && (
                            <motion.span
                              initial={{ opacity: 0, width: 0 }}
                              animate={{ opacity: 1, width: "auto" }}
                              exit={{ opacity: 0, width: 0 }}
                              transition={{ duration: 0.15 }}
                              className={activeMenuItem === item.name ? 'text-blue-500 font-semibold' : themeStyles.text}
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
                              {(() => {
                                const IconComponent = sidebarCollapsed 
                                  ? item.iconMini 
                                  : item.iconOutline
                                return IconComponent ? (
                                  <IconComponent className={sidebarCollapsed ? "h-5 w-5 shrink-0" : "h-6 w-6 shrink-0"} />
                                ) : null
                              })()}
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
        <div className={`border-t ${themeStyles.border} px-6 py-4 relative`}>
          <div 
            className={classNames(
              'flex items-center cursor-pointer',
              sidebarCollapsed ? 'justify-center' : 'gap-x-4',
              themeStyles.hoverBg,
              'rounded-md p-2 transition-colors'
            )}
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            {sidebarCollapsed ? (
              <div 
                className="h-8 w-8 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                style={{ backgroundColor: '#A475BD' }}
              >
                CS
              </div>
            ) : (
              <>
                <div 
                  className="h-8 w-8 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                  style={{ backgroundColor: '#A475BD' }}
                >
                  CS
                </div>
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className={`text-sm font-medium ${themeStyles.text}`}>Canyon Smith</div>
                  <div className={`text-xs ${themeStyles.tertiaryText} truncate`}>canyonfsmith@gmail.com</div>
                </motion.div>
              </>
            )}
          </div>

          {/* User Dropdown Menu */}
          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className={`absolute ${sidebarCollapsed ? 'bottom-full left-full ml-2' : 'bottom-full left-6 right-6'} mb-2 ${isDarkMode ? 'bg-[#1e3a8a]' : 'bg-white'} rounded-lg shadow-lg border ${themeStyles.border} overflow-hidden z-50`}
                style={{ minWidth: sidebarCollapsed ? '200px' : 'auto' }}
              >
                {/* User Info Card - Only show when expanded or in dropdown */}
                {!sidebarCollapsed && (
                  <>
                    <div className="px-4 py-3">
                      <div className="flex items-center gap-x-3">
                        <div 
                          className="h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold"
                          style={{ backgroundColor: '#A475BD' }}
                        >
                          CS
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm font-medium ${themeStyles.text}`}>Canyon Smith</div>
                          <div className={`text-xs ${themeStyles.tertiaryText} truncate`}>canyonfsmith@gmail.com</div>
                        </div>
                      </div>
                    </div>
                    <hr className={`border-t ${themeStyles.border}`} />
                  </>
                )}

                {/* Dropdown Items */}
                <div className="py-2">
                  <button
                    className={`w-full px-4 py-3 text-left text-xs font-medium ${themeStyles.text} ${themeStyles.hoverBg} transition-colors flex items-center cursor-pointer`}
                    onClick={() => {
                      setShowUserMenu(false)
                      window.location.href = '/agency_dashboard'
                    }}
                  >
                    <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <rect x="0.5" width="28" height="24" rx="12" fill="#667EEA"></rect>
                      <path d="M13.0005 13L10.5005 10.5L13.0005 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M18.5002 16V12.5C18.5002 11.9696 18.2895 11.4609 17.9145 11.0858C17.5394 10.7107 17.0307 10.5 16.5002 10.5H10.5002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>Switch to Agency View</span>
                  </button>
                  
                  <hr className={`border-t ${themeStyles.border}`} />
                  
                  <button
                    className={`w-full px-4 py-2 text-left text-sm ${themeStyles.text} ${themeStyles.hoverBg} transition-colors flex items-center justify-between`}
                    onClick={() => {
                      setShowUserMenu(false)
                      // Add your login as logic here
                    }}
                  >
                    <span>Login As</span>
                    <i className="fas fa-chevron-right text-xs"></i>
                  </button>
                  
                  <hr className={`border-t ${themeStyles.border}`} />
                  
                  <button
                    className={`w-full px-4 py-2 text-left text-sm ${themeStyles.text} ${themeStyles.hoverBg} transition-colors`}
                    onClick={() => {
                      setShowUserMenu(false)
                      // Add your signout logic here
                      window.location.href = '/logout'
                    }}
                  >
                    Signout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Collapse Button - Outside bottom section, moves with sidebar */}
      <div 
        className="absolute bottom-5 z-50"
        style={{ right: '-16px' }}
      >
        <motion.button
          onClick={handleSidebarToggle}
          className={`flex items-center justify-center w-8 h-8 rounded-full shadow-lg border ${
            isDarkMode 
              ? 'bg-[#1e3a8a] border-[#3b82f6] hover:bg-[#3b82f6]' 
              : 'bg-white border-gray-200 hover:bg-gray-50'
          } transition-all duration-200`}
          title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <ChevronRightIcon 
            className={`h-5 w-5 transition-transform duration-200 ${
              isDarkMode ? 'text-blue-400' : 'text-gray-600'
            }`}
            style={{
              transform: sidebarCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'
            }}
          />
        </motion.button>
      </div>
    </motion.div>
  )
} 