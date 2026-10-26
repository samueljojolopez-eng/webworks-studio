import React, { useState } from 'react';
import ServiceCard from './components/ServiceCard';

const servicesData = [
  {
    id: 'srv-1',
    title: 'Community Health Clinic',
    category: 'Health',
    description: 'Free checkups, immunizations, and wellness consultations for local residents.',
    contact: '555-0192'
  },
  {
    id: 'srv-2',
    title: 'Safe Harbor Housing Support',
    category: 'Housing',
    description: 'Emergency shelter placement, transitional housing resources, and rental counseling.',
    contact: '555-0144'
  },
  {
    id: 'srv-3',
    title: 'Neighborhood Youth Center',
    category: 'Community',
    description: 'After-school tutoring, mentorship programs, and recreational activities for teens.',
    contact: '555-0188'
  },
  {
    id: 'srv-4',
    title: 'Mobile Wellness Van',
    category: 'Health',
    description: 'On-the-go health screenings, blood pressure checks, and basic first aid services.',
    contact: '555-0199'
  },
  {
    id: 'srv-5',
    title: 'Tenant Rights Workshop',
    category: 'Housing',
    description: 'Legal guidance, lease education, and tenant advocacy meetings every Tuesday.',
    contact: '555-0122'
  },
  {
    id: 'srv-6',
    title: 'Eastside Community Garden',
    category: 'Community',
    description: 'Plot rentals, gardening workshops, and fresh produce distribution for the neighborhood.',
    contact: '555-0177'
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="bg-slate-900 text-white shadow">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <h1 className="text-3xl font-bold tracking-tight">Community Connect</h1>
          <p className="mt-2 text-slate-300">Find local health, housing, and community support services.</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <section aria-labelledby="filter-heading">
          <h2 id="filter-heading" className="text-lg font-semibold text-slate-900 mb-4">Filter Services by Category</h2>
          <div className="flex flex-wrap gap-3" role="group" aria-label="Service categories">
            {['All', 'Health', 'Housing', 'Community'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-emerald-700 text-white shadow'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500" aria-live="polite">
            Currently displaying <span className="font-bold text-slate-700">{selectedCategory}</span> services ({filteredServices.length} available).
          </p>
        </section>

        <section className="mt-10" aria-labelledby="directory-heading">
          <h2 id="directory-heading" className="sr-only">Service Directory Listings</h2>
          {filteredServices.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map(service => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  category={service.category}
                  description={service.description}
                  contact={service.contact}
                />
              ))}
            </div>
          ) : (
            <p className="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
              No services found in this category.
            </p>
          )}
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white mt-20">
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-slate-500">
          Community Connect · WebWorks Studio Week 10 React Project
        </div>
      </footer>
    </div>
  );
}