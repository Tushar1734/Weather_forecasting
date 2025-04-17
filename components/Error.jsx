function Error({error}) {
  return (
    <div className="text-red-500 text-lg text-center font-semibold  p-3 shadow-md animate-pulse">
      <h2>Error</h2>
      <p>{error}</p>
    </div>
  );
}
export default Error;