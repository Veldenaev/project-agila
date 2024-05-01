import { useRouter } from "next/navigation";
import { useState } from "react";
import { type Case } from "@prisma/client";

interface Props {
  obj: Case;
  type: string;
  name: string;
  p_keys: string[];
  hide: string[];
  id_func: (t: Case) => string | number;
}

export default function CaseForm({
  obj,
  type,
  name,
  p_keys,
  hide,
  id_func,
}: Props) {
  const router = useRouter();
  const [newObj, setNewObj] = useState(obj);
  const [updating, setUpdating] = useState(false);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch(`/api/${type}/${id_func(obj)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObj),
      });
      router.refresh();
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
        {Object.entries(obj)
          .filter(([k, _]) => !(k === "Status" || hide.includes(k)))
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
                type={typeof v === "string" ? "text" : "number"}
              />
            </div>
          ))}
        <div className="flex flex-col">
          <span className="pl-1 text-black">Status</span>
          <textarea
            className="rounded-md border-2 border-solid border-black px-1 disabled:bg-gray-200"
            disabled={!updating}
            defaultValue={obj.Status ?? ""}
            onChange={(e) =>
              setNewObj((oldObj) => ({
                ...oldObj,
                Status: e.target.value,
              }))
            }
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center gap-3 text-lg">
        {updating ? (
          <>
            <input
              type="submit"
              value="Confirm"
              className="btn-blue hover:cursor-pointer"
            />
            <button className="btn-red" onClick={() => setUpdating((c) => !c)}>
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
