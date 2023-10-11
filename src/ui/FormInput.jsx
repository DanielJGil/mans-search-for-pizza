function FormInput({ id, name }) {
  return (
    <input
      type="text"
      id={id}
      name={name}
      className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-orange-500 sm:grow md:px-6 md:py-3"
      required
    />
  );
}

export default FormInput;
