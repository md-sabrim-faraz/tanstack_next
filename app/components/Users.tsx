import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface UserCardProps {
  user: User;
}

export default function Users({ user }: UserCardProps) {
  return (
    <>
      <Link href={`/user/${user?.id}`}>
        <Card className="h-full hover:shadow-lg transition-shadow group">
          <CardHeader className="space-y-4">
            <div className="flex items-center gap-3">
              <div>
                <p className="font-medium text-sm">{user.name}</p>
              </div>
            </div>
            <CardTitle className="group-hover:text-primary transition-colors">
              {user.username}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{user.email}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">{user.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>{user.website}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
