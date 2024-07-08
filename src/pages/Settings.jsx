import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Enter your username" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="notifications">Notifications</Label>
        <Input id="notifications" type="checkbox" />
      </div>
      <Button>Save Settings</Button>
    </div>
  );
};

export default SettingsPage;