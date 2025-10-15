import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './components/Sidebar'

// Function to update body margin based on sidebar state
function updateBodyMargin(isCollapsed: boolean, immediate: boolean = false) {
  const applyMargin = () => {
    // Remove both classes first
    document.body.classList.remove('cc360-sidebar-active', 'cc360-sidebar-collapsed')
    
    // Add appropriate class
    if (isCollapsed) {
      document.body.classList.add('cc360-sidebar-collapsed')
      document.body.style.marginLeft = '64px'
    } else {
      document.body.classList.add('cc360-sidebar-active')
      document.body.style.marginLeft = '320px'
    }
    
    // Force multiple reflows to ensure immediate application
    void document.body.offsetHeight
    void document.body.scrollTop
    void document.body.clientHeight
    document.body.getBoundingClientRect()
    
    // Force reflow on document element as well
    void document.documentElement.offsetHeight
  }
  
  if (immediate) {
    // Apply immediately without animation frames
    applyMargin()
    // Apply again after a tiny delay to ensure it sticks
    setTimeout(applyMargin, 0)
  } else {
    // Use requestAnimationFrame for smooth transitions
    requestAnimationFrame(() => {
      requestAnimationFrame(applyMargin)
    })
  }
}

// Listen for sidebar state changes
function setupSidebarListener() {
  window.addEventListener('cc360-sidebar-state-change', ((event: CustomEvent) => {
    updateBodyMargin(event.detail.collapsed)
  }) as EventListener)
}

// Check if on agency page
function isAgencyPage(): boolean {
  const path = window.location.pathname
  return path.includes('/agency')
}

// Automatically mount the sidebar when the script loads
function initSidebar() {
  // Check if on agency page
  if (isAgencyPage()) {
    console.log('CC360 Sidebar: Skipping initialization on agency page')
    // Mark body as agency page so CSS doesn't hide native sidebar
    document.body.setAttribute('data-agency-page', 'true')
    return
  }
  
  // Mark body as location page (not agency)
  document.body.setAttribute('data-agency-page', 'false')

  // Find or create container for the sidebar
  let container = document.getElementById('cc360-sidebar-root')
  
  if (!container) {
    // Create container if it doesn't exist
    container = document.createElement('div')
    container.id = 'cc360-sidebar-root'
    document.body.prepend(container)
  }

  // Set initial body margin based on saved state - apply immediately
  const savedState = localStorage.getItem('cc360-sidebar-collapsed')
  const isCollapsed = savedState === 'true'
  updateBodyMargin(isCollapsed, true) // immediate = true for initial load

  // Setup listener for sidebar state changes
  setupSidebarListener()

  // Render the sidebar
  createRoot(container).render(
    <StrictMode>
      <div style={{ 
        position: 'fixed', 
        left: 0, 
        top: 0, 
        width: '320px', 
        height: '100vh', 
        zIndex: 1000,
        overflow: 'visible'
      }}>
        <Sidebar />
      </div>
    </StrictMode>,
  )
}

// Auto-initialize when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSidebar)
} else {
  initSidebar()
}

// Export for manual initialization if needed
export { initSidebar }
