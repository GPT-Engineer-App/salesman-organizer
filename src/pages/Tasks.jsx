import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const Tasks = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["tasksData"],
    queryFn: async () => {
      // Replace with actual data fetching logic
      return [
        { task: "Task A", deadline: "2023-10-01", status: "Completed" },
        { task: "Task B", deadline: "2023-10-05", status: "Pending" },
      ];
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Button>Add Task</Button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Task</th>
            <th className="py-2">Deadline</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, index) => (
            <tr key={index}>
              <td className="py-2">{task.task}</td>
              <td className="py-2">{task.deadline}</td>
              <td className="py-2">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;