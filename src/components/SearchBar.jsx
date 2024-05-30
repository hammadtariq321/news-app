import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = () => {
        onSearch(keyword);
    };

    return (
        <div className="flex items-center space-x-4 mb-4 p-4 bg-white rounded-md shadow-md">
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search for articles..."
                className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
