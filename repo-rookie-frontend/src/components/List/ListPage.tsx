
'use client';

import { useAppSelector } from '@/state/state';
import React from 'react';

const IssuesList = () => {
  const issues = useAppSelector((state) => state.issues.issues);

  return (
    <div className='p-20'>
      {issues.length > 0 ? (
        <div>
          {issues.map((issue) => (
            <div className='bg-green-300 h-auto mb-2 rounded-md p-2' key={issue.id}>
              <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                <div className='font-bold'>{issue.title}</div>
              </a>
              <div className='flex flex-wrap mt-2'>
                {issue.labels.length > 0 ? (
                  issue.labels.map((label) => (
                    <span
                      key={label.id}
                      className={`inline-block py-1 px-2 mr-2 mb-1 rounded-full text-black`}
                      style={{ backgroundColor: `#${label.color}` }}
                    >
                      {label.name}
                    </span>
                  ))
                ) : (
                  <span className='text-gray-500'>No labels</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No issues found.</p>
      )}
    </div>
  );
};

export default IssuesList;
