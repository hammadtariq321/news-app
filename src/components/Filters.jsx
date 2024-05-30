import React, { useState } from 'react';
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

    return (
        <div>
            <select onChange={(e) => setSelectedSection(e.target.value)}>
                <option value="">All Categories</option>
                {sections.map(section => (
                    <option key={section.id} value={section.id}>{section.webTitle}</option>
                ))}
            </select>

            <select onChange={(e) => setSelectedAuthor(e.target.value)}>
                <option value="">All Authors</option>
                {authors.map(author => (
                    <option key={author.id} value={author.id}>{author.webTitle}</option>
                ))}
            </select>

            <button onClick={handleFilter}>Filter</button>
        </div>
    );
};

export default Filters;
