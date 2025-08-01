# Course Creator 360 - Sidebar Navigation

A modern, interactive sidebar navigation component for the Course Creator 360 platform, built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Course Creator 360 Sidebar](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-blue) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0-purple)

## 🚀 Features

### Core Navigation
- **Collapsible Sidebar**: Full sidebar can be collapsed to icon-only view
- **Organized Sections**: Navigation items grouped into logical categories
- **Dropdown Menus**: Expandable sections for sub-navigation items
- **Search Functionality**: Quick search bar for finding features
- **Settings Panel**: Comprehensive settings menu with categorized options
- **User Profile**: Always-visible user avatar and name at the bottom

### Smart Interactions
- **Auto-Expand on Settings**: Clicking settings icon when collapsed automatically expands the sidebar
- **Auto-Expand on Navigation**: Clicking any navigation item when collapsed expands the sidebar
- **Settings Revert**: Collapsing the sidebar while in settings automatically returns to main navigation
- **Smooth Animations**: Subtle Framer Motion animations for professional feel
- **Responsive Design**: Mobile-friendly with appropriate icon sizing

## 📋 Interaction Rules

### Sidebar Collapse/Expand Behavior
1. **Toggle Button**: Hamburger/X icon in header toggles sidebar state
2. **Width Changes**: 
   - Expanded: 320px (w-80)
   - Collapsed: 64px (w-16)
3. **Content Visibility**:
   - Logo: Hidden when collapsed
   - Search bar: Hidden when collapsed
   - Text labels: Hidden when collapsed
   - Icons: Always visible and centered when collapsed

### Settings Menu Behavior
1. **Entry**:
   - Click settings icon to enter settings mode
   - If sidebar is collapsed, it auto-expands before showing settings
   - 200ms delay ensures smooth transition
2. **Exit**:
   - Click "Go Back" button to return to main navigation
   - Collapsing sidebar while in settings auto-exits settings mode
3. **Visual Feedback**:
   - Settings icon rotates 180° when active
   - Background color changes to blue when active

### Navigation Click Behavior
1. **When Expanded**:
   - Normal navigation to href
   - Dropdown toggles open/close
2. **When Collapsed**:
   - First click expands sidebar
   - Navigation is prevented until expanded
   - Applies to both regular items and dropdowns

### Animation Specifications
- **Sidebar Width**: 200ms ease-in-out transition
- **Logo Fade**: 150ms opacity transition
- **Text Labels**: 150ms width-based fade
- **Dropdown Chevron**: 150ms rotation (90° when open)
- **Dropdown Content**: 150ms height animation
- **Settings Transition**: 200ms opacity fade
- **Button Feedback**: Scale 0.95 on tap

## 🛠️ Technical Stack

### Dependencies
- **React** 18.3.1 - UI framework
- **TypeScript** 5.6.2 - Type safety
- **Tailwind CSS** 3.4.17 - Utility-first styling
- **Framer Motion** 11.15.0 - Animation library
- **Headless UI** 2.2.0 - Unstyled accessible components
- **Heroicons** 2.2.0 - Icon library
- **Vite** 6.0.5 - Build tool

### Project Structure
```
src/
├── components/
│   ├── Sidebar.tsx      # Main sidebar component
│   └── SettingsMenu.tsx # Settings panel component
├── App.tsx              # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#052149` (Dark Navy)
- **Secondary Background**: `#1e3a8a` (Medium Blue)
- **Active State**: `#3B82F6` (Bright Blue)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#9CA3AF` (Light Gray)
- **Text Tertiary**: `#6B7280` (Medium Gray)
- **Accent**: `#b98a15` (Gold - for "NEW" badges)

### Interactive States
- **Default**: Base styling
- **Hover**: Background color change + slight opacity
- **Active**: Blue background with white text
- **Disabled**: Reduced opacity
- **Focus**: Blue ring outline

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/cc360-navbar-vite.git

# Navigate to project directory
cd cc360-navbar-vite

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## 📝 Usage

### Basic Implementation
```tsx
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">
        {/* Your main content */}
      </main>
    </div>
  )
}
```

### Customization
The sidebar can be customized by modifying:
- `navigation` array in `Sidebar.tsx` for menu items
- `settingsSections` array in `SettingsMenu.tsx` for settings options
- Tailwind classes for styling adjustments
- Animation parameters in Framer Motion components

## 🔧 Component Props

### Sidebar Component
No props required - fully self-contained with internal state management.

### SettingsMenu Component
| Prop | Type | Description |
|------|------|-------------|
| `onGoBack` | `() => void` | Callback to return to main navigation |
| `useMiniIcons` | `boolean` | Whether to use smaller icons (optional) |

## 📱 Responsive Behavior

### Desktop (>768px)
- Full sidebar with all features
- Smooth hover states
- Complete animations

### Mobile (<768px)
- Sidebar starts collapsed by default
- Touch-friendly tap targets
- Optimized animations for performance

## 🎯 Best Practices

1. **Performance**:
   - Use `AnimatePresence` for exit animations
   - Minimize re-renders with proper state management
   - Lazy load heavy components

2. **Accessibility**:
   - Proper ARIA labels
   - Keyboard navigation support
   - Focus management

3. **Code Organization**:
   - Separate components for maintainability
   - Type-safe with TypeScript
   - Consistent naming conventions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspired by modern SaaS platforms
- Icons from [Heroicons](https://heroicons.com/)
- Animation patterns from [Framer Motion examples](https://www.framer.com/motion/)