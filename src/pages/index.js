import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import PhaseFlow from '../components/phases/PhaseFlow';
import PhaseDetails from '../components/phases/PhaseDetails';
import TabNavigation from '../components/tabs/TabNavigation';
import TabContent from '../components/tabs/TabContent';
import { AppProvider } from '../context/AppContext';
import ProjectUtilities from '../components/utils/ProjectUtilities';
import SearchResults from '../components/search/SearchResults';

export default function Home() {
  // Add any page-specific logic here
  
  return (
    <AppProvider>
      <Layout>
        <Head>
          <title>Limi Lighting: Interactive EPDP V2.0</title>
          <meta name="description" content="Interactive Engineering & Product Development Procedure for Limi Lighting" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Project Utilities Section */}
          <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
            <ProjectUtilities />
          </section>

          {/* Search Results - Conditionally rendered when search is active */}
          <SearchResults />

          {/* Phase Flow Section */}
          <PhaseFlow />
          
          {/* Phase Details Section */}
          <div className="mt-8">
            <PhaseDetails />
          </div>
          
          {/* Reference Information Section */}
          <section id="reference-info" className="mt-12">
            <div className="mb-6">
              <div className="border-b border-gray-200">
                <TabNavigation />
              </div>
            </div>
            
            <TabContent />
          </section>
        </main>
      </Layout>
    </AppProvider>
  );
}
