import Link from "next/link";
import Layout from "~/components/Layout";

export default function Admin() {
  return (
    <>
      <Layout>
        <main className="flex min-h-screen flex-col items-center">
          <div className="z-10 mb-auto mt-auto flex flex-row items-center gap-16">
            <div className="flex flex-col gap-5 text-center">
              <Link
                className="w-full rounded-md bg-agila p-2 text-white transition-all hover:scale-105"
                href="/lawyer/all"
              >
                Manage Staff
              </Link>
              <Link
                href="/client/all"
                className="w-full rounded-md bg-agila p-2 text-white transition-all hover:scale-105"
              >
                Manage Clients and Cases
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
