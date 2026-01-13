import Card from "../components/Card";
import Table from "../components/Table";
import Charts from "../components/Charts";

const Page = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      <div className="lg:col-span-3">
        <Card />
        <Table />
        <Charts />
      </div>

      <div className="bg-purple-600 text-white p-4 rounded-md">
        <h4 className="text-xl font-bold mb-2">🔥 Available Now</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className="mt-4 w-full bg-black py-2 rounded-md">
          Upgrade
        </button>
      </div>
    </div>
  );
};

export default Page;
