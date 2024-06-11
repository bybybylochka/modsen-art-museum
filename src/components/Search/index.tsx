import React from 'react';
import {
    Checkbox,
    ErrorMessage,
    SearchButton,
    SearchContainer,
    SearchImg,
    SearchInput,
    SortLabel,
} from './styled';
import SearchImage from '@assets/search.png';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SearchSchema = Yup.object().shape({
    searchText: Yup.string().max(50, 'Max length - 50 symbols'),
});

type SearchProps = {
    onSubmit: (query: string, doSort: boolean) => void;
};
const Search: React.FC<SearchProps> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ query: '', doSort: false }}
            validationSchema={SearchSchema}
            onSubmit={(values) => {
                onSubmit(values.query, values.doSort);
            }}
        >
            {({ errors, touched, setFieldValue }) => (
                <Form>
                    <SearchContainer>
                        <Field
                            name="query"
                            as={SearchInput}
                            placeholder={'Search art, artist, work...'}
                        />
                        {touched.query && errors.query && (
                            <ErrorMessage>{errors.query}</ErrorMessage>
                        )}
                        <SearchButton type={'submit'}>
                            <SearchImg src={SearchImage} alt={'search'} />
                        </SearchButton>
                        <SortLabel>
                            <Field
                                name="doSort"
                                type="checkbox"
                                as={Checkbox}
                                id="checkbox"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => setFieldValue('doSort', e.target.checked)}
                            />
                            Old first
                        </SortLabel>
                    </SearchContainer>
                </Form>
            )}
        </Formik>
    );
};

export default Search;
