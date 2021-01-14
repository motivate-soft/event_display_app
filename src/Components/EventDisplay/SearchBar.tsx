import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchInput from './SearchInput';
import SearchTermsBox from './SearchTermsBox';

interface SearchBarProps {
    term: string;
    terms: string[];
    onInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
    onInputPress(event: React.KeyboardEvent<HTMLInputElement>): void;
    onRemoveTerm: (term: string) => void;
    onRemoveAllTerms: () => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
    const { term, terms, onInputChange, onInputPress, onRemoveTerm, onRemoveAllTerms } = props;
    return (
        <div className="search-bar">
            <Row>
                <Col sm={6} lg={4}>
                    <SearchInput value={term} onChange={onInputChange} onKeyPress={onInputPress} />
                </Col>
                <Col sm={6} lg={8}>
                    {terms && terms.length > 0 ? (
                        <SearchTermsBox
                            terms={terms}
                            onRemoveTerm={onRemoveTerm}
                            onRemoveAllTerms={onRemoveAllTerms}
                        />
                    ) : null}
                </Col>
            </Row>
        </div>
    );
};

export default SearchBar;
