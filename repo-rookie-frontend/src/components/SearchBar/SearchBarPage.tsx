// components/SearchBarPage.tsx
'use client';

import { setIssues, useAppDispatch } from '@/state/state';
import React, { useState, ChangeEvent } from 'react';


type Props = {};

const SearchBarPage = (props: Props) => {
  const [repoUrl, setRepoUrl] = useState('');
  const dispatch = useAppDispatch();

  const handleSearchClicked = async () => {
    const match = repoUrl.match(/https:\/\/github\.com\/([^/]+)\/([^/]+)/);
    if (match) {
      const owner = match[1];
      const repo = match[2];
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues`;

      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          dispatch(setIssues(data));
        } else {
          console.error('Error fetching issues:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    } else {
      console.error('Invalid GitHub URL');
    }
  };

  return (
    <div className='mt-10 justify-center items-center flex'>
      <textarea
        className='w-[600px]  rounded-md border-2 border-cyan-900 h-14'
        placeholder="Search & Add Repo to list"
        value={repoUrl}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setRepoUrl(e.target.value)}
      ></textarea>
      <div onClick={handleSearchClicked} className='cursor-pointer bg-cyan-800 p-4 rounded-md ml-2 h-14'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6  ">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBarPage;
