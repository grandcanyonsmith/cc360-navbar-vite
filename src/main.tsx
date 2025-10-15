import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './components/Sidebar'

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
