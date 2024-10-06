const SearchParams = () => {
  const location = "Los Angeles, CA";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            placeholder="Location"
          />
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
