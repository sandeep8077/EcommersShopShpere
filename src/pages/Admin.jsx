function Admin() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Manage users, orders, and system settings
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Users
          </h2>
          <p className="text-gray-500 text-sm">
            View and manage all registered users.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Orders
          </h2>
          <p className="text-gray-500 text-sm">
            Track and manage customer orders.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Settings
          </h2>
          <p className="text-gray-500 text-sm">
            Configure application preferences.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Admin;
