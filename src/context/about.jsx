export default function About() {
    return (
      <div className="pt-55 min-h-screen min-w-screen  px-6">
        <h1 className="text-2xl font-bold mb-4">ℹ️ About</h1>
  
        <p className="text-gray-100 mb-3">
          This application helps you manage products efficiently with
          navigation, reports, and settings in one place.
        </p>
  
        <ul className="list-disc ml-5 text-gray-100 space-y-2">
          <li>Add and manage products</li>
          <li>View reports and analytics</li>
          <li>Customize settings</li>
          <li>Responsive sidebar navigation</li>
        </ul>
      </div>
    );
  }
  