function Error({error}) {
  return (
    <div className="text-red-500 text-lg text-center font-semibold bg-white p-3 rounded-md shadow-md">
      <h2>Error</h2>
      <p>{error}</p>
    </div>
  );
}
export default Error;