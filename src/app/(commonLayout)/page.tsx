import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";


export default async function Home() {
  const session = authClient.getSession();
  console.log("Session:", session);
  return (
    <div>
      <Button variant="outline">Click Me</Button>
    </div>
  );
}
