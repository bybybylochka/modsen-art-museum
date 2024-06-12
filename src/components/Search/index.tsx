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
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const SearchSchema = Yup.object().shape({
    searchText: Yup.string().max(50, 'Max length - 50 symbols'),
});

type SearchProps = {
    onSubmit: (query: string, doSort: boolean) => void;
};
const Search: React.FC<SearchProps> = ({ onSubmit }) => {
    const debounce = (
        fn: (query: string, doSort: boolean) => void,
        ms: number,
    ) => {
        let timeout: NodeJS.Timeout;
        return (...args: [string, boolean]) => {
            const fnCall = () => {
                fn.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(fnCall, ms);
        };
    };

    let DebouncedOnChange = debounce((query: string, doSort: boolean) => {
        console.log(query);
        onSubmit(query, doSort);
    }, 1000);

    return (
        <Formik
            initialValues={{ query: '', doSort: false }}
            validationSchema={SearchSchema}
            onSubmit={(values) => {
                onSubmit(values.query, values.doSort);
            }}
            onChange={DebouncedOnChange}
        >
            {({ errors, touched, setFieldValue, values }) => (
                <Form>
                    <SearchContainer>
                        <Field
                            name="query"
                            as={SearchInput}
                            placeholder={'Search art, artist, work...'}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setFieldValue('query', e.target.value).then(
                                    () =>
                                        DebouncedOnChange(
                                            e.target.value,
                                            values.doSort,
                                        ),
                                );
                            }}
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
                                ) => {
                                    setFieldValue(
                                        'doSort',
                                        e.target.checked,
                                    ).then(() =>
                                        DebouncedOnChange(
                                            values.query,
                                            e.target.checked,
                                        ),
                                    );
                                }}
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
