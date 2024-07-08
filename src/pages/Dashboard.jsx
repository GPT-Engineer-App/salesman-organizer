import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: async () => {
      // Replace with actual data fetching logic
      return {
        userName: "John Doe",
        totalSales: 100000,
        numberOfClients: 50,
        tasksCompleted: 120,
        recentActivities: [
          "Closed a deal with Client A",
          "Followed up with Client B",
          "Completed task X",
        ],
      };
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome, {data.userName}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
          <CardContent>${data.totalSales}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Number of Clients</CardTitle>
          </CardHeader>
          <CardContent>{data.numberOfClients}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tasks Completed</CardTitle>
          </CardHeader>
          <CardContent>{data.tasksCompleted}</CardContent>
        </Card>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Recent Activities</h2>
        <ul className="list-disc pl-5">
          {data.recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;