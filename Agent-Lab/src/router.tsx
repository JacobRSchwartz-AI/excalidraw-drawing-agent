import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DashboardPage from './pages/dashboard';
import AgentDashboard from './pages/dashboard/agent-lab/agents';
import AgentEdit from './pages/dashboard/agent-lab/agents/edit';
import CapabilityDashboard from './pages/dashboard/agent-lab/capabilities';
import CapabilityEdit from './pages/dashboard/agent-lab/capabilities/edit';
import PlaygroundDashboard from './pages/dashboard/agent-lab/playground';
import PromptDashboard from './pages/dashboard/agent-lab/prompts';
import PromptEdit from './pages/dashboard/agent-lab/prompts/edit';
import HomeHero from './pages/home';
import AgentLabTemplate from './templates/agent-lab';
import DashboardTemplate from './templates/dashboard';
import Main from './templates/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '',
        element: <HomeHero />,
      },
      {
        path: '*',
        element: <div>404</div>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardTemplate />,
    children: [
      {
        path: '',
        element: <DashboardPage />,
      },

      {
        path: 'agent-lab/:collection?',
        element: <AgentLabTemplate />,
        children: [
          {
            path: '',
            element: <></>,
          },
          {
            path: 'agents',
            element: <AgentDashboard />,
          },
          {
            path: 'agents/edit',
            element: <AgentEdit />,
          },
          {
            path: 'capabilities',
            element: <CapabilityDashboard />,
          },
          {
            path: 'capabilities/edit',
            element: <CapabilityEdit />,
          },
          {
            path: 'prompts',
            element: <PromptDashboard />,
          },
          {
            path: 'prompts/edit',
            element: <PromptEdit />,
          },
          {
            path: 'playground',
            element: <PlaygroundDashboard />,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
