import { useQuery } from "@tanstack/react-query";
import React from "react";
import Users from "./Users";

export default function UserGrid() {
  const {
    data: users,
    isLoading,
    isError,
    isFetching,
    refetch,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();
      return users;
    },
    staleTime: 0, //+ can set the time for fetching data(after the given time) again on request
    // refetchInterval: 1000, //+ automatically fetch the data after given time.
    // refetchIntervalInBackground: true, //  API will be called even after the tab is changed
    enabled: false, // data fetching stops
  });

  if (isLoading) {
    return (
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-[400px] animate-pulse">
            <div className="h-full bg-muted rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return <h5>{error.message}</h5>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* <button className="p-10 bg-amber-200" onClick={refetch}>
        Call Users
      </button> */}
      {users?.map((user) => (
        <Users key={user.id} user={user} />
      ))}
    </div>
  );
}
