const {SearchHeader, SearchForm, SearchBtn, SearchBtnLabel, SearchInput } = require("./Searchbar.styled");

export const Searchbar = ({onSubmit}) => {
  return (
    <SearchHeader>
      <SearchForm onSubmit={onSubmit}>
        <SearchBtn type="submit" className="button">
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchBtn>

        <SearchInput
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchHeader>
  );
};
