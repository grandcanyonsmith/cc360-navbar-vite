import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-900">Course Creator 360</h1>
        <p className="mt-4 text-gray-600">Welcome to your comprehensive course creation and business management platform.</p>
        <div className="mt-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Platform Features</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Collapsible sidebar navigation</li>
            <li>✅ Comprehensive settings management</li>
            <li>✅ Course creation and management tools</li>
            <li>✅ CRM and marketing automation</li>
            <li>✅ AI-powered conversation tools</li>
            <li>✅ Payment and billing integration</li>
          </ul>
        </div>
        <div className="mt-6 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">New course "Advanced Marketing Strategies" created</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Payment received for "Business Fundamentals" course</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-700">New student enrolled in "Digital Marketing Bootcamp"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App