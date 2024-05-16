import { useRouter } from "next/navigation";
import { useState } from "react";
import pingDelete from "~/utils/pingDelete";

interface Props<T extends object> {
  obj: T;
  type: string;
  name: string;
  keys: string[];
  hide: string[];
  textarea: string[];
  identifier: (t: T) => string | number;
  adding: boolean;
  stay: boolean;
  authorized: boolean;
  firstTailClass?: string;
  secondTailClass?: string;
  outerTailClass?: string;
}

export default function Form<T extends object>({
  obj,
  type,
  name,
  keys,
  hide,
  textarea,
  identifier,
  adding,
  stay,
  authorized,
  firstTailClass="flex flex-row items-center justify-center gap-6",
  secondTailClass="grid grid-cols-2 gap-3 rounded-lg bg-white p-4 pb-5",
  outerTailClass="z-10 mx-auto my-auto flex flex-col"
}: Props<T>) {
  const router = useRouter();
  const [newObj, setNewObj] = useState(obj);
  const [updating, setUpdating] = useState(!stay);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch(adding ? `/api/${type}` : `/api/${type}/${identifier(obj)}`, {
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
      className={outerTailClass}
    >
      <div className={firstTailClass}>
        <h1 className="text-center font-bold tracking-tight text-white sm:text-[2rem]">
          <span className="text-agila">{name}</span> #{identifier(obj)}
        </h1>

        <div className="flex justify-center gap-3 text-lg">
          {(updating && authorized) ? (
            <>
              <input
                type="submit"
                value="Confirm"
                className="btn-blue hover:cursor-pointer"
              />
              <button
                className="btn-red"
                type="button"
                onClick={() => {
                  if (stay) {
                    setNewObj(obj);
                    setUpdating((c) => !c);
                  } else {
                    router.back();
                  }
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            authorized && (
              <div>
              <button
                className="btn-blue"
                onClick={() => setUpdating((c) => !c)}
              >
                Edit
              </button>
              <button
              className="btn-red ml-1"
              onClick={async () => {
                await pingDelete(type, identifier(obj));
                router.push('/rerouter');
              }}
            >
              Delete
            </button>
              </div>
            )
          )}
        </div>
      </div>

      <div className={secondTailClass}>
        {Object.entries(newObj)
          .filter(([k, _]) => !hide.includes(k))
          .map(([k, v], index) => (
            <div key={index} className="flex flex-col">
              <span className="pl-1 text-black">{k}</span>

              {textarea.includes(k) ? (
                <textarea
                  className="min-h-7 rounded-md border-2 border-solid border-black px-1 disabled:bg-gray-200"
                  disabled={!updating}
                  defaultValue={v as string}
                  onChange={(e) =>
                    setNewObj((oldObj) => ({
                      ...oldObj,
                      Status: e.target.value,
                    }))
                  }
                ></textarea>
              ) : (
                <input
                  className={`rounded-md ${k.match(/file/i) ? "" : "border-2 border-solid border-black disabled:bg-gray-200"} px-1`}
                  autoFocus
                  onChange={(e) =>
                    setNewObj((oldObj) => ({
                      ...oldObj,
                      [k]: k.match(/file/i)
                        ? e.target.files?.item(0)?.name
                        : typeof v === "number"
                          ? parseInt(e.target.value)
                          : e.target.value,
                    }))
                  }
                  min={0}
                  disabled={keys.includes(k) || !updating}
                  placeholder={k}
                  defaultValue={k.match(/file/i) ? "" : (v as string)}
                  // value={k.match(/file/i) ? "" : (v as string)}
                  type={
                    k.match(/file/i)
                      ? "file"
                      : k.match(/email/i)
                        ? "email"
                        : k.match(/date/i)
                          ? "date"
                          : typeof v === "string"
                            ? "text"
                            : "number"
                  }
                />
              )}
            </div>
          ))}
      </div>
    </form>
  );
}
