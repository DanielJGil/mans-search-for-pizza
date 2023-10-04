import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:mt-16">
      <h1 className="mb-8 text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="text-orange-500">The search for pizza ends here.</span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
