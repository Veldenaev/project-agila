import { useRouter } from "next/router";
import { useState } from "react";

interface Props<T extends object> {
  obj: T;
  type: string;
  name: string;
  p_keys: string[];
  id_func: (t: T) => string | number;
}

export default function Form<T extends object>({
  obj,
  type,
  name,
  p_keys,
  id_func,
}: Props<T>) {
  const router = useRouter();
  const [newObj, setNewObj] = useState(obj);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch(`/api/${type}/${id_func(obj)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObj),
      });
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={submitData}
      className="z-10 mx-auto my-auto flex flex-col gap-4"
    >
      <h1 className="text-center font-bold tracking-tight text-white sm:text-[3rem]">
        <span className="text-agila">Update</span> {name} #{id_func(obj)}
      </h1>
      <div className="grid grid-cols-2 gap-3 rounded-lg bg-white p-4 pb-5">
        {Object.entries(obj).map(([k, v], index) => (
          <div key={index} className="flex flex-col">
            <span className="pl-1 text-black">{k}</span>
            <input
              className="rounded-md border-2 border-solid border-black px-1 disabled:bg-gray-200"
              autoFocus
              onChange={(e) =>
                setNewObj((oldObj) => ({
                  ...oldObj,
                  [k]: e.target.value,
                }))
              }
              disabled={p_keys.includes(k)}
              placeholder={k}
              defaultValue={v as string}
              type={typeof v === "string" ? "text" : "number"}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 text-lg">
        <input
          type="submit"
          value="Update"
          className="rounded-md bg-blue-400 px-2 py-1 text-white transition-all hover:scale-110 hover:cursor-pointer"
        />
        <a
          href="#"
          onClick={router.back}
          className="rounded-md bg-red-400 px-2 py-1 text-white transition-all hover:scale-110 hover:cursor-pointer hover:cursor-pointer"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
