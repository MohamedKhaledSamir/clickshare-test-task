function Filter({ category }) {
  return (
    <div className="category flex">
      <label className="mr-3  min-lg:text-nowrap" htmlFor={category}>
        {category}
      </label>
      <input type="checkbox" name={category} id={category} />
    </div>
  );
}

export default Filter;
