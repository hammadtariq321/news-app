import React, { useState, useEffect } from 'react';
import { useFetchAuthorsQuery, useFetchSectionsQuery } from '../store/services/guardianApi';

const Filters = ({ onFilter }) => {
    const { data: sectionsData } = useFetchSectionsQuery();
    const { data: authorsData } = useFetchAuthorsQuery();
    const sections = sectionsData?.response?.results || [];
    const authors = authorsData?.response?.results || [];

    const [selectedSection, setSelectedSection] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');

    const handleFilter = () => {
        onFilter({ section: selectedSection, author: selectedAuthor });
    };

    useEffect(() => {
        handleFilter();
    }, [selectedSection, selectedAuthor]);

    return (
        <div className="flex space-x-4 mb-4">
            <select
                className="border border-gray-300 rounded-md p-2"
                onChange={(e) => setSelectedSection(e.target.value)}
                value={selectedSection}
            >
                <option value="">All Categories</option>
                {sections.map(section => (
                    <option key={section.id} value={section.id}>{section.webTitle}</option>
                ))}
            </select>

            <select
                className="border border-gray-300 rounded-md p-2"
                onChange={(e) => setSelectedAuthor(e.target.value)}
                value={selectedAuthor}
            >
                <option value="">All Authors</option>
                {authors.map(author => (
                    <option key={author.id} value={author.id}>{author.webTitle}</option>
                ))}
            </select>

            <button
                className="bg-blue-500 text-white rounded-md p-2"
                onClick={handleFilter}
            >
                Filter
            </button>
        </div>
    );
};

export default Filters;
