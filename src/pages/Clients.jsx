import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const Clients = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["clientsData"],
    queryFn: async () => {
      // Replace with actual data fetching logic
      return [
        { name: "Client A", contact: "clienta@example.com", status: "Active" },
        { name: "Client B", contact: "clientb@example.com", status: "Inactive" },
      ];
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Clients</h1>
        <Button>Add Client</Button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Contact</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((client, index) => (
            <tr key={index}>
              <td className="py-2">{client.name}</td>
              <td className="py-2">{client.contact}</td>
              <td className="py-2">{client.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;