import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props<T extends object> {
  obj: T;
  type: string;
  name: string;
  p_keys: string[];
  hide: string[];
  id_func: (t: T) => string | number;
  adding: boolean;
  stay: boolean;
}

export default function Form<T extends object>({
  obj,
  type,
  name,
  p_keys,
  hide,
  id_func,
  adding,
  stay,
}: Props<T>) {
  const router = useRouter();
  const [newObj, setNewObj] = useState(obj);
  const [updating, setUpdating] = useState(adding || false);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch(adding ? `/api/${type}` : `/api/${type}/${id_func(obj)}`, {
        method: adding ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObj),
      });
      if (stay) {
        router.refresh();
      } else {
        router.back();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={submitData}
      className="z-10 mx-auto my-auto flex flex-col gap-4"
    >
      <h1 className="text-center font-bold tracking-tight text-white sm:text-[2rem]">
        <span className="text-agila">{name}</span> #{id_func(obj)}
      </h1>
      <div className="grid grid-cols-2 gap-3 rounded-lg bg-white p-4 pb-5">
        {Object.entries(newObj)
          .filter(([k, _]) => !hide.includes(k))
          .map(([k, v], index) => (
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
                disabled={p_keys.includes(k) || !updating}
                placeholder={k}
                defaultValue={v as string}
                value={v as string}
                type={
                  k.includes("Email")
                    ? "email"
                    : k === "Date"
                      ? "date"
                      : typeof v === "string"
                        ? "text"
                        : "number"
                }
              />
            </div>
          ))}
      </div>
      <div className="flex justify-center gap-3 text-lg">
        {adding ? (
          <>
            <input
              type="submit"
              value="Add"
              className="btn-blue hover:cursor-pointer"
            />
            <button className="btn-red" onClick={() => router.back()}>
              Cancel
            </button>
          </>
        ) : updating ? (
          <>
            <input
              type="submit"
              value="Confirm"
              className="btn-blue hover:cursor-pointer"
            />
            <button
              className="btn-red"
              onClick={() => {
                setNewObj(obj);
                setUpdating((c) => !c);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button className="btn-blue" onClick={() => setUpdating((c) => !c)}>
            Edit
          </button>
        )}
      </div>
    </form>
  );
}
