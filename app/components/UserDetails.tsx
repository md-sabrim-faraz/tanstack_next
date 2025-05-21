"use client";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

export default function UserDetails({ id }: { id: string }) {
  const {
    data: user,
    isLoading,
    isError,
    isFetching,
    refetch,
    error,
  } = useQuery({
    queryKey: ["users", id],
    queryFn: async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const user = await data.json();
      return user;
    },
    staleTime: 0,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-medium text-sm">{user?.name}</p>
          </div>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">
          {user.username}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{user?.email}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">{user?.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{user?.website}</span>
          </div>
        </div>
      </CardContent>
    </>
  );
}
