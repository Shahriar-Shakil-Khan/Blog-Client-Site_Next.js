import { Button } from "@/components/ui/button";
import { UserService } from "@/services/user.service";


export default async function Home() {
 const {data} = await UserService.getSession();
 console.log(data);
  return (
    <div>
      <Button variant="outline">Click Me</Button>
    </div>
  );
}
