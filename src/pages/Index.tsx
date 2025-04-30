
import React from 'react';
import NavHeader from '@/components/NavHeader';
import FeedbackForm from '@/components/FeedbackForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavHeader />
      <main className="container py-8">
        <FeedbackForm />
      </main>
    </div>
  );
};

export default Index;
