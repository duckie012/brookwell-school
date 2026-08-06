import React from 'react';

export default function StatCard({ title, value }) {
  return (
    <div className="p-4 rounded-lg border bg-white shadow-sm">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
