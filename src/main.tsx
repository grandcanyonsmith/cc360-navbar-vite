import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './components/Sidebar'

// Function to update body margin based on sidebar state
function updateBodyMargin(isCollapsed: boolean) {
  if (isCollapsed) {
    document.body.classList.remove('cc360-sidebar-active')
    document.body.classList.add('cc360-sidebar-collapsed')
  } else {
    document.body.classList.remove('cc360-sidebar-collapsed')
    document.body.classList.add('cc360-sidebar-active')
  }
  
  // Force browser reflow/repaint to apply margin immediately
  void document.body.offsetHeight
}

// Listen for sidebar state changes
function setupSidebarListener() {
  window.addEventListener('cc360-sidebar-state-change', ((event: CustomEvent) => {
    updateBodyMargin(event.detail.collapsed)
  }) as EventListener)
}

// Automatically mount the sidebar when the script loads
function initSidebar() {
  // Find or create container for the sidebar
  let container = document.getElementById('cc360-sidebar-root')
  
  if (!container) {
    // Create container if it doesn't exist
    container = document.createElement('div')
    container.id = 'cc360-sidebar-root'
    document.body.prepend(container)
  }

  // Set initial body margin (sidebar starts expanded)
  updateBodyMargin(false)

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
        overflow: 'hidden'
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
