"use client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MenuCards from "@/components/cards/MenuCards";
import { Button, ButtonGroup } from "@nextui-org/button";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/dish?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>loading .......</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    const title = e.target[1].value;
    const price = e.target[2].value;
    const img = e.target[3].value;
    try {
      await fetch("/api/dish", {
        method: "POST",
        body: JSON.stringify({
          id,
          title,
          price,
          img,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/dish/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div>
        <div>
          <h1>add post</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="id" required />
            <input type="text" placeholder="title" required />
            <input type="text" placeholder="price" required />
            <input type="text" placeholder="img" required />
            <button>Register</button>
          </form>
        </div>

        {isLoading
          ? "isloading"
          : data?.map((item) => (
              <div key={item._id}>
                <MenuCards
                  id={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                />
                <Button color="danger" onClick={() => handleDelete(item._id)}>
                  X
                </Button>
              </div>
            ))}
      </div>
    );
  }
};

export default Dashboard;
