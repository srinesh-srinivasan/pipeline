import React from 'react';
import { Cloud, GitBranch, Package, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">AWS CI/CD Pipeline Demo</h1>
          <p className="text-gray-400">A simple demonstration of AWS CodeBuild deployment</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <GitBranch className="w-6 h-6 mr-2 text-blue-400" />
              <h2 className="text-xl font-semibold">Source Control</h2>
            </div>
            <p className="text-gray-400">Code changes trigger the pipeline through repository updates</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Terminal className="w-6 h-6 mr-2 text-green-400" />
              <h2 className="text-xl font-semibold">Build Process</h2>
            </div>
            <p className="text-gray-400">Automated build and test execution in CodeBuild</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Package className="w-6 h-6 mr-2 text-yellow-400" />
              <h2 className="text-xl font-semibold">Artifacts</h2>
            </div>
            <p className="text-gray-400">Build artifacts stored and versioned for deployment</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Cloud className="w-6 h-6 mr-2 text-purple-400" />
              <h2 className="text-xl font-semibold">Deployment</h2>
            </div>
            <p className="text-gray-400">Automated deployment to production environment</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Pipeline Status</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-400 mr-3"></div>
              <span>Source Stage: Complete</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-400 mr-3"></div>
              <span>Build Stage: Success</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-400 mr-3"></div>
              <span>Deploy Stage: Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;