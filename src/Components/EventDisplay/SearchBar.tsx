import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchInput from './SearchInput';
import SearchTermsBox from './SearchTermsBox';

interface SearchBarProps {
    count: number;
    term: string;
    terms: string[];
    onInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
    onInputPress(event: React.KeyboardEvent<HTMLInputElement>): void;
    onRemoveTerm: (term: string) => void;
    onRemoveAllTerms: () => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
    const {
        count,
        term,
        terms,
        onInputChange,
        onInputPress,
        onRemoveTerm,
        onRemoveAllTerms
    } = props;
    return (
        <div className="search-bar">
            <Row>
                <Col sm={6} md={4} lg={3}>
                    <h5>{count} Sessions</h5>
                    <SearchInput value={term} onChange={onInputChange} onKeyPress={onInputPress} />
                </Col>
                <Col sm={6} md={8} lg={9}>
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
