"use client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MenuCards from "@/components/cards/MenuCards";
import { Button, ButtonGroup } from "@nextui-org/button";

const getData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/desert`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const dishes = await res.json();
    return dishes;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: dishData,
    mutate: mutateDish,
    error: errorDish,
  } = useSWR(`/api/dish?username=${session?.data?.user.name}`, fetcher);
  const {
    data: desertData,
    mutate: mutateDesert,
    error: errorDesert,
  } = useSWR(`/api/desert?username=${session?.data?.user.name}`, fetcher);

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
      mutateDish();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmitDesert = async (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    const title = e.target[1].value;
    const price = e.target[2].value;
    const img = e.target[3].value;
    try {
      await fetch("/api/desert", {
        method: "POST",
        body: JSON.stringify({
          id,
          title,
          price,
          img,
          username: session.data.user.name,
        }),
      });
      mutateDesert();
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
      mutateDish();
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteDesert = async (id) => {
    try {
      await fetch(`/api/desert/${id}`, {
        method: "DELETE",
      });
      mutateDesert();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <>
        <div className="mt-20 flex items-center justify-center">
          <h1 className=" mr-8">Add Dish</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="id" required />
            <input type="text" placeholder="title" required />
            <input type="text" placeholder="price" required />
            <input type="text" placeholder="img" required />
            <button className="ml-10">Register</button>
          </form>
        </div>

        <div className="mt-20 flex items-center justify-center">
          <section className=" gap-4 grid grid-cols-2 sm:grid-cols-3">
            {dishData?.map((item) => (
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
          </section>
        </div>
        <div className="mt-20 flex items-center justify-center">
          <h1 className=" mr-8">Add Desert</h1>

          <form onSubmit={handleSubmitDesert}>
            <input type="text" placeholder="id" required />
            <input type="text" placeholder="title" required />
            <input type="text" placeholder="price" required />
            <input type="text" placeholder="img" required />
            <button className="ml-10">Register</button>
          </form>
        </div>
        <div className="mt-20 flex items-center justify-center">
          <section className=" gap-4 grid grid-cols-2 sm:grid-cols-3">
            {desertData?.map((item) => (
              <div key={item._id}>
                <MenuCards
                  id={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                />
                <Button
                  color="danger"
                  onClick={() => handleDeleteDesert(item._id)}
                >
                  X
                </Button>
              </div>
            ))}
          </section>
        </div>
      </>
    );
  }
};

export default Dashboard;
