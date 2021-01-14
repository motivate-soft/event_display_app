import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

interface SearchTermsBoxInterface {
    terms: string[];
    onRemoveTerm: (term: string) => void;
    onRemoveAllTerms: () => void;
}

const renderTerm = (term: string, onRemoveTerm: any) => {
    return <span onClick={() => onRemoveTerm(term)}>{term}</span>;
};

const SearchTermsBox: React.FC<SearchTermsBoxInterface> = (props: SearchTermsBoxInterface) => {
    const { terms, onRemoveTerm, onRemoveAllTerms } = props;
    return (
        <div className="search-terms-box">
            <div>{terms.map((term) => renderTerm(term, onRemoveTerm))}</div>
            <FaTimesCircle onClick={onRemoveAllTerms} />
        </div>
    );
};

export default SearchTermsBox;
